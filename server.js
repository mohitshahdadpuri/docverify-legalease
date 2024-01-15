const express = require('express');
const bodyParser = require('body-parser');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const mnemonicPhrase = process.env.MNEMONIC_PHRASE
const { Web3 } = require('web3');

const app = express();
const port = process.env.PORT;


app.use(bodyParser.json());

const ganacheUrl = process.env.GANACHE_URL; // Update if your Ganache is running on a different URL


let provider = new HDWalletProvider({
    mnemonic: {
      phrase: mnemonicPhrase
    },
    providerOrUrl: ganacheUrl
  });

const web3 = new Web3(provider)

const contractAbi = require('./TruffleProject/abi.json'); // Replace with your actual ABI
const contractAddress =   process.env.CONTRACT_ADDRESS; // Replace with your actual contract address
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Endpoint to add a document hash
app.post('/add', async (req, res) => {
  const { document_hash } = req.body;

  if (!document_hash) {
    return res.status(400).json({ error: 'Missing document_hash in the request body' });
  }

  try {
    // Add the document hash to the Ganache blockchain
    const accounts = await web3.eth.getAccounts();
    const gas = await contract.methods.addDocument(document_hash).estimateGas();
    const result = await contract.methods.addDocument(document_hash).send({ from: accounts[0], gas });

    return res.json({ success: true, message: 'Document hash added successfully', transactionHash: result.transactionHash });
  } catch (error) {
    console.error('Error adding document hash:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to verify a document hash
app.post('/verify', async (req, res) => {
  const { document_hash } = req.body;

  if (!document_hash) {
    return res.status(400).json({ error: 'Missing document_hash in the request body' });
  }

  try {
    // Check if the document hash exists in the Ganache blockchain
    const isVerified = await contract.methods.verifyDocument(document_hash).call();

    return res.json({ verified: isVerified });
  } catch (error) {
    console.error('Error verifying document hash:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
