// require('dotenv').config();
// //const { MNEMONIC, PROJECT_ID } = process.env;
// const mnemonic = process.env.MNEMONIC
// const infuraProjectId = process.env.PROJECT_ID
// const HDWalletProvider = require('@truffle/hdwallet-provider');



// module.exports = {
//   networks: {
//     //development: {
//       //host: "127.0.0.1",     // Localhost (default: none)
//       //port: 7545,            // Standard Ethereum port (default: none)
//       //network_id: "5777",       // Any network (default: none)
//     //},
    

//       // sepolia: {
//       // provider: () => new HDWalletProvider({
//       // mnemonic: {
//       // phrase: mnemonicPhrase
//       // },
//       // providerOrUrl: `https://eth-sepolia.g.alchemy.com/${projectID}`
//       // }),
//       // network_id: 11155111, // Sepolia's network ID
//       // gas: 4000000, // Adjust the gas limit as per your requirements
//       // gasPrice: 10000000000, // Set the gas price to an appropriate value
//       // confirmations: 2, // Set the number of confirmations needed for a transaction
//       // timeoutBlocks: 200, // Set the timeout for transactions
//       // skipDryRun: true // Skip the dry run option
//       // }

//       sepolia:{
//         provider: () =>
//         new HDWalletProvider(
//           mnemonic, 
//           `https://sepolia.infura.io/v3/${infuraProjectId}`
//         ),
//         network_id: 11155111,
//         chain_id: 11155111,
//       },
//   },
//   compilers: {
//     solc: {
//       version: "0.8.0",      // Use the same Solidity version as your contract
//     },
//   },
// };
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const mnemonic = process.env.MNEMONIC;
const infuraProjectId = process.env.PROJECT_ID;

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: mnemonic,
        providerOrUrl: `https://sepolia.infura.io/v3/${infuraProjectId}`git 
      }),
      network_id: 11155111,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
