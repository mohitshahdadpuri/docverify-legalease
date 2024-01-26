const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();


module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        providerOrUrl: process.env.URL 
      }),
      network_id: 11155111, // Sepolia's network ID
      gas: 4000000, // Adjust the gas limit as per your requirements
      gasPrice: 10000000000, // Set the gas price to an appropriate value
      confirmations: 2, // Set the number of confirmations needed for a transaction
      timeoutBlocks: 200, // Set the timeout for transactions
      skipDryRun: true // Skip the dry run option
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
