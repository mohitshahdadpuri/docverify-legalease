// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentVerification {
    mapping(bytes32 => bool) private documentHashes;

    event DocumentAdded(bytes32 indexed documentHash, address indexed sender);

    function addDocument(string memory _documentHash) public {
        bytes32 documentHashBytes = keccak256(abi.encodePacked(_documentHash));
        require(!documentHashes[documentHashBytes], "Document already exists");
        documentHashes[documentHashBytes] = true;
        emit DocumentAdded(documentHashBytes, msg.sender);
    }

    function verifyDocument(string memory _documentHash) public view returns (bool) {
        bytes32 documentHashBytes = keccak256(abi.encodePacked(_documentHash));
        return documentHashes[documentHashBytes];
    }
}
