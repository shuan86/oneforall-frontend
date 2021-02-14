export const platformAddr = "0x377cE8B7ea6ed2683B59bfb51615DEa2d495F01E"


export const platformABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "enum AbPlatform.NewsKind",
                "name": "applyNewsKind",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "applyContents",
                "type": "bytes32"
            }
        ],
        "name": "applyReviewer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNeedCheckReviewersKey",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isAgree",
                "type": "bool"
            }
        ],
        "name": "enrollVistor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "enum AbPlatform.NewsKind",
                "name": "applyNewsKind",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "examiner1",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exmanier1Reply",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "examiner2",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exmanier2Reply",
                "type": "bool"
            },
            {
                "internalType": "bytes32",
                "name": "applyContents",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "disagreenReason",
                "type": "bytes32"
            }
        ],
        "name": "enrollReviewer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isAgree",
                "type": "bool"
            },
            {
                "internalType": "bytes32",
                "name": "newsAgency",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "purposeOfEstablishment",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "failReason",
                "type": "bytes32"
            }
        ],
        "name": "enrollPublisher",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVistors",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getReviewers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getPublishers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "newsId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "publisherAddr",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "author",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "content",
                "type": "bytes32"
            },
            {
                "internalType": "bytes20",
                "name": "time",
                "type": "bytes20"
            }
        ],
        "name": "postNews",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "dbId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "articleId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "authorAddr",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "content",
                "type": "bytes32"
            },
            {
                "internalType": "bytes20",
                "name": "time",
                "type": "bytes20"
            }
        ],
        "name": "comment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwnerAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getLastSender",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]


export const simpleAddr = "0xc8e570CF240DB484Bbe8cd99dfB70f0f5Be5029E"
export const simpleABI = [
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]