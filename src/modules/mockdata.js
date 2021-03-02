export const contractAddr = "0x88B2018913a0B28ab091300B462Ae1Cc2e5Afb7a";

export const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "authorAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "CommentEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newsId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newsType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
    ],
    name: "NewsEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newsId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content1",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content2",
        type: "string",
      },
    ],
    name: "NewsEventImage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "TestEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "TestFunctionEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "publisherId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "personalInformation",
        type: "string",
      },
    ],
    name: "applyPublisherEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.NewsKind",
        name: "applyNewsKind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "applyContents",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exmanier1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exmanier2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "applyReviewerEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "publisherId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "memberDbId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "personalInformation",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "replyContent",
        type: "string",
      },
    ],
    name: "enrollFailPublisher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.NewsKind",
        name: "applyNewsKind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "examiner1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exmanier1Reply",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "examiner2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exmanier2Reply",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aplyContents",
        type: "string",
      },
    ],
    name: "enrollFailReviewer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "publisherId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "memberDbId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "personalInformation",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "replyContent",
        type: "string",
      },
    ],
    name: "enrollSucessfulPublisher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.NewsKind",
        name: "applyNewsKind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "examiner1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "examiner2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "applyContents",
        type: "string",
      },
    ],
    name: "enrollSucessfulReviewer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "enrollSucessfulVistor",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "data",
        type: "address",
      },
    ],
    name: "findAddrArrayIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "findUintArrayIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeAddrArray",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeUintArray",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "source",
        type: "string",
      },
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isReviewer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isPublisher",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getNeedCheckReviewersKey",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAgree",
        type: "bool",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "enrollVistor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "enum AbPlatform.NewsKind",
        name: "applyNewsKind",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "examiner1",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exmanier1Reply",
        type: "bool",
      },
      {
        internalType: "address",
        name: "examiner2",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exmanier2Reply",
        type: "bool",
      },
      {
        internalType: "string",
        name: "applyContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "disagreenReason",
        type: "string",
      },
    ],
    name: "enrollReviewer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "publisherId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "personalInformation",
        type: "string",
      },
      {
        internalType: "string",
        name: "replyContent",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isAgree",
        type: "bool",
      },
    ],
    name: "enrollPublisher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVistors",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getReviewers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getApplyPublishers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getPublishers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "publisherId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "personalInformation",
        type: "string",
      },
    ],
    name: "applyPublisher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newsId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "string",
        name: "img1",
        type: "string",
      },
      {
        internalType: "string",
        name: "img2",
        type: "string",
      },
    ],
    name: "postNews",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newsId",
        type: "uint256",
      },
    ],
    name: "setNewsWantToKnownAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "authorAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "comment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNewsAmout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "getLatestNewsData",
    outputs: [
      {
        internalType: "uint256[5]",
        name: "",
        type: "uint256[5]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getOwnerAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getLastSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getAllNewsId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "removeAllMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVistorLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "setTestEvent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "setTestFunction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
];
