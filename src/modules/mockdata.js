export const contractAddr = "0xc1836861E15f51dec7A875e74828109D2B8a9f61";

export const ownerAddr = "0xF657eC39ECf4e91af656EaEC910F558D0A76c768";
export const ownerPriKey = Buffer.from(
  "6bdc88382e72d81424b4c08265dce453928730b71d7a3c4a76bf7d2a47da75be",
  "hex"
);
export const memberAddr1 = "0x0Ee1ffe7910c5fb935C06cb93f9DAFf7C791D176";
export const memberPriKey1 = Buffer.from(
  "72a310db4aee4c94fb18186c5e760aa8a63b52e8deb82660b6b391747b04457c",
  "hex"
);
export const memberAddr2 = "0x3abc2643A565b74E3583Fb3Ca7BA84DE8d4Aa04E";
export const memberPriKey2 = Buffer.from(
  "7c2978862ac3d6a6ce9ee1075e59c2ae4665f23eca18f60c3c4330189b6e2c36",
  "hex"
);

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
        indexed: false,
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
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
        indexed: true,
        internalType: "enum AbPlatform.NewsType",
        name: "newsType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "publisherAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "author",
        type: "string",
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
        internalType: "uint256",
        name: "dbId",
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
        internalType: "string",
        name: "applyContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "applyReviewer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "dbId",
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
        name: "dbId",
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
        name: "newsAgency",
        type: "string",
      },
      {
        internalType: "string",
        name: "purposeOfEstablishment",
        type: "string",
      },
      {
        internalType: "string",
        name: "failReason",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
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
        name: "dbId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newsId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "publisherAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
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
    name: "postNews",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
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
        name: "newsId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "publisherAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
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
    name: "postNewsForOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
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

export const mockMemberData = {
  member: [
    {
      id: 0,
      userId: "a",
      password: "123",
      userName: "w1",
      email: "da@gmail.com",
      publicKey: memberAddr1,
      token: "",
      articles: [],
    },
    {
      id: 1,
      userId: "b",
      password: "123",
      userName: "w1",
      email: "da@gmail.com",
      publicKey: memberAddr2,
      token: "",
      articles: [],
    },
  ],
};
/*export const mockArticleData = {
  article: [
    {
      id: 0,
      newsId: 0,
      index: 0,
      newsType: NewsType.unreview,
      authorDbId: mockMemberData.member[0].id,
      authorName: mockMemberData.member[0].userName,
      content: "xxxx1",
      time: "2021",
      deposit: 0,
    },
    {
      id: 1,
      newsId: 1,
      index: 0,
      newsType: NewsType.unreview,
      authorDbId: mockMemberData.member[0].id,
      authorName: mockMemberData.member[0].userName,
      content: "xxxx11",
      time: "2021",
      deposit: 0,
    },
    {
      id: 3,
      newsId: 3,
      index: 0,
      newsType: NewsType.unreview,
      authorDbId: mockMemberData.member[1].id,
      authorName: mockMemberData.member[1].userName,
      content: "xxxx2",
      time: "2021",
      deposit: 0,
    },
    {
      id: 4,
      newsId: 4,
      index: 0,
      newsType: NewsType.unreview,
      authorDbId: mockMemberData.member[1].id,
      authorName: mockMemberData.member[1].userName,
      content: "xxxxxx22",
      time: "2021",
      deposit: 0,
    },
  ],
};
*/
