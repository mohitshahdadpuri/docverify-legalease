const fs = require('fs');
const crypto = require('crypto-js');
const sha3 = require('crypto-js/sha3');

function calculateSHA3Hash(filePath) {
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = crypto.lib.WordArray.create(pdfBuffer);
    const hash = sha3(pdfData, { outputLength: 256 }); // 256 bits for SHA3-256

    return hash.toString(crypto.enc.Hex);
}

// Example usage
const pdfFilePath = 'UNDERTAKING.pdf';
const pdfHash = calculateSHA3Hash(pdfFilePath);

console.log(`SHA3 Hash of the PDF: ${pdfHash}`);
