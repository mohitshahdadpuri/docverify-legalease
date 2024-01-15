const DocumentVerification = artifacts.require("DocumentVerification");
const fs = require('fs');

module.exports = async function (deployer) {
  await deployer.deploy(DocumentVerification);

  // Get the ABI and write it to a file
  const abi = DocumentVerification.abi;
  fs.writeFileSync('./abi.json', JSON.stringify(abi, null, 2));

  // Log contract deployment information
  console.log("DocumentVerification contract deployed to:", DocumentVerification.address);
  console.log("ABI saved to abi.json");
};
