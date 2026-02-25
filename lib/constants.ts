export const CONTRACT_ADDRESS = "0x29bA60F5DFD3780981bd993B7f1948888301b3aE";

export const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "packageId", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "amoutPaid", "type": "uint256" }
        ],
        "name": "PackagePurchased",
        "type": "event"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "buyPackage",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
        "name": "getUserPackages",
        "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "packageCount",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "name": "packages",
        "outputs": [
            { "internalType": "uint256", "name": "id", "type": "uint256" },
            { "internalType": "string", "name": "nama", "type": "string" },
            { "internalType": "uint256", "name": "price", "type": "uint256" },
            { "internalType": "bool", "name": "isActive", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "", "type": "address" },
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "name": "userPurchases",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const;