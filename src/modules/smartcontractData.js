export const developContractAddr = "0xb19003d6C2ad45a1697A205e77cab89Ade1Fe816";
export const productionContractAddr =
  "0x4db118D49E4E1c4B4f959af3CF7F17b3d3A26fAF";

export const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "evidence",
        type: "string",
      },
    ],
    name: "ApplyReportedNewsEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "dbId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "evidence",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.ArticleReportStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "decisionReason",
        type: "string",
      },
    ],
    name: "ApplyReportedNewsResultEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "memberId",
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
        name: "articleId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "memberId",
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
        name: "time",
        type: "string",
      },
    ],
    name: "LikeArticleEvent",
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
        name: "memberId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "authorAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.ArticleType",
        name: "articleType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.NewsType",
        name: "newsType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "img",
        type: "bytes",
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
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "authorAddr",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "pos",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "enum AbPlatform.PixelColor[]",
        name: "color",
        type: "uint8[]",
      },
    ],
    name: "PixelGameEvent",
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
        name: "memberDbId",
        type: "uint256",
      },
      {
        indexed: false,
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "reviewerId",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "applyContents",
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
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAgree",
        type: "bool",
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
    name: "enrollPublisherEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "reviewerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "memberDbId",
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
        internalType: "bool",
        name: "isAgree",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "replyContent",
        type: "string",
      },
    ],
    name: "enrollReviewerEvent",
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
    name: "enrollVistorEvent",
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
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "applyReviewerIsExist",
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
    name: "getApplyReviewers",
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
        name: "reviewerId",
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
        name: "applyContents",
        type: "string",
      },
    ],
    name: "applyReviewer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "reviewerId",
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
        name: "data",
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
        name: "articleId",
        type: "uint256",
      },
    ],
    name: "paidArticleDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "getPaidArticleDepositKeys",
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
    inputs: [
      {
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "authorAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "img",
        type: "bytes",
      },
    ],
    name: "postNews",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "articleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "memberId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "authorAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    name: "likeArticle",
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
    name: "getRangeNewsId",
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
    name: "getAllNewsDataKeys",
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
    name: "clearAllData",
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
        name: "dbId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "articleId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "evidence",
        type: "string",
      },
    ],
    name: "applyReportedNews",
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
        internalType: "string",
        name: "evidence",
        type: "string",
      },
      {
        internalType: "enum AbPlatform.ArticleReportStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "decisionReason",
        type: "string",
      },
    ],
    name: "applyReportedNewsResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "authorAddr",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "pos",
        type: "uint256[]",
      },
      {
        internalType: "enum AbPlatform.PixelColor[]",
        name: "color",
        type: "uint8[]",
      },
    ],
    name: "setPixelGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPixelGameKeys",
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
  {
    inputs: [],
    name: "getTestData",
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
    inputs: [],
    name: "nothing1",
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
];
