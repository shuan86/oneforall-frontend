let contractAddr = "0x7E549324A220D82dF779109a8eFFF4e232BCbeff";

let contractABI = [
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
];

const Web3 = require("Web3");
// import { contractABI, contractAddr } from "./mockdata";
import config from "../config.json";
const Tx = require("ethereumjs-tx").Transaction;

const INewEvent = {
  newsId: 0,
  index: 0,
  newsType: 0,
  title: "",
  author: "",
  content: "",
  deposit: "",
};
const INewImageEvent = {
  newsId: 0,
  index: 0,
  imgContent1: "",
  imgContent2: "",
};
const ICompleteNewsData = {
  newsId: 0,
  index: 0,
  newsType: 0,
  title: "",
  author: "",
  content: "",

  deposit: "",
  imgContent1: "",
  imgContent2: "",
};
//import Tx from "ethereumjs-tx";
// const web3 = new Web3("ws://localhost:7545"); //web3.currentProvider

const initContract = () => {
  if (config.NODE_ENV == "development") {
    console.log("development mode");
  } else {
    contractAddr = "0x7E549324A220D82dF779109a8eFFF4e232BCbeff";
    contractABI = [
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
    ];
    console.log("production mode");
  }
  if (window.ethereum) {
    const web3 = new Web3(Web3.givenProvider);
    window.ethereum.enable();
    return web3;
  } else {
    alert("Please install MetaMask to use this dApp!");
  }
  return null;
};

const web3 = initContract();

const contract = new web3.eth.Contract(contractABI, contractAddr);

const test = async () => {
  console.log("web3.version:", web3.version);
  const vistors = await contract.methods.getVistors().call();
  console.log("vistors:", vistors);
  const ownerR = await contract.methods.getOwnerAddr().call();
  console.log("owner:", ownerR);
  const lastSender = await contract.methods.getLastSender().call();
  console.log("lastSender:", lastSender);
};

const transactionPeopole = async (sender, receiver, prikey) => {
  await web3.eth.getTransactionCount(sender, (err, txCount) => {
    // Build the transaction
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      to: receiver,
      value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    };
    // Sign the transaction
    const tx = new Tx(txObject);
    tx.sign(prikey);
    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log("txHash:", txHash);
      // Now go check etherscan to see the transaction!
    });
  });
};

const transactionContract = async (
  sender,
  contractAddress,
  value,
  contractData,
  prikey
) => {
  await web3.eth.getTransactionCount(sender, (err, txCount) => {
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei("1", "wei")),
      to: contractAddress,
      value: web3.utils.toHex(web3.utils.toWei(value, "wei")),
      data: contractData,
    };

    const tx = new Tx(txObject);
    tx.sign(prikey);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      if (err) {
        console.log("transactionContract err:", err);
      } else {
        console.log("transactionContract txHash:", txHash);
      }
    });
  });
};

const subscribeTestEvent = () => {
  contract.events
    .TestEvent({ from: 0 })
    .on("data", (event) => console.log("subscribeTestEvent:", event));
};

export const execute = async () => {
  subscribeTestEvent();
  await test();
  await transactionContract(
    memberAddr1,
    contractAddr,
    "0",
    contract.methods.setTestEvent(10).encodeABI(),
    memberPriKey1
  );
  await transactionContract(
    memberAddr2,
    contractAddr,
    "0",
    contract.methods.setTestEvent(15).encodeABI(),
    memberPriKey2
  );
  await getPastEventFilterByNumber("TestEvent", { id: 102 });
};

export const postNewsToContract = async (data) => {
  const {
    m_publicKey,
    a_id,
    a_newsId,
    a_index,
    a_newsType,
    a_authorName,
    a_content,
    a_time,
    a_deposit,
  } = data;
  try {
    await transactionContract(
      ownerAddr,
      contractAddr,
      "1",
      contract.methods
        .postNewsForOwner(
          a_id,
          a_newsId,
          m_publicKey,
          a_authorName,
          a_content,
          a_time
        )
        .encodeABI(),
      ownerPriKey
    );
  } catch (error) {
    console.log("postNews error:", error);
  }
};
// const getPastEventFilterByNumber = async (eventName, filterData) => {
//   try {
//     const result = await contract.getPastEvents(
//       eventName,
//       { filter: { ...filterData } },
//       { fromBlock: 0, toBlock: "latest" }
//     );
//     const tmp = { filter: { ...filterData } };
//     console.log("getPastEvent filter:", tmp);
//     return result;
//   } catch (e) {
//     console.log(`getPastEvent error ${eventName}:`, e);
//   }
// };
const getPastEventFilter = async (eventName, filterData) => {
  try {
    const result = await contract.getPastEvents(
      eventName,
      {
        filter: {
          ...filterData,
        }, // Using an array means OR: e.g. 20 or 23
        fromBlock: 0,
        toBlock: "latest",
      },
      function (error, events) {
        // console.log(`getPastEventFilter ${eventName} :`, events);
      }
    );
    return result;
  } catch (e) {
    console.log(`getPastEventFilter error ${eventName}:`, e);
  }
};

const getManyPastEvent = async (eventName, filterData) => {
  const filter = { ...filterData };
  try {
    const result = await contract.getPastEvents(eventName, {
      fromBlock: 0,
      toBlock: "latest",
    });
    return result;
    /*console.log(`getPastEvent ${eventName}:`, result);
    console.log(`getPastEvent ${eventName}:`, result.returnValues);*/
  } catch (e) {
    console.log(`getManyPastEvent error ${eventName}:`, e);
  }
};
const testPastEvent = async (eventName, filterData) => {
  const filter = { ...filterData };
  console.log("getPastEvent:", { filter });
  try {
    const result = await contract.getPastEvents(eventName, {
      filter,
      fromBlock: 0,
      toBlock: "latest",
    });
    if (result.length > 0) {
      console.log(`getPastEvent ${eventName}:`, result);
      console.log(
        `getPastEvent returnValues ${eventName}:`,
        result.returnValues
      );
    }
    return result;
  } catch (e) {
    console.log(`getPastEvent error ${eventName}:`, e);
  }
};
export const getAllNewsId = async () => {
  const result = await contract.methods.getAllNewsId().call();
  console.log("getAllNewsId:", result);
};
export const getRangeNewsId = async (startIndex, endIndex) => {
  const result = await contract.methods
    .getRangeNewsId(startIndex, endIndex)
    .call();
  console.log("getLastestNews:", result);
  const array = result[Object.keys(result)[0]];
  const amount = result[Object.keys(result)[1]];
  let idArray = [];
  for (let i = 0; i < amount; i++) {
    idArray.push(array[i]);
  }
  return idArray;
};
export const getNewsAmount = async () => {
  const result = await contract.methods.getNewsAmout().call();
  console.log("getNewsAmount:", result);

  // test();
};
export const getNewsByNewsIdEvent = async (newsId) => {
  const eventName = "NewsEvent";
  try {
    const result = await getPastEventFilter(eventName, {
      newsId: newsId,
    });
    const lastestDataIndex = result.length - 1;

    /* console.log(
      `getNewsContractByNewsId ${eventName}:`,
      result[0].returnValues[0]
    );*/
    let data = { ...INewEvent };
    data.newsId = result[lastestDataIndex].returnValues[0];
    data.title = result[lastestDataIndex].returnValues[1];
    data.author = result[lastestDataIndex].returnValues[2];
    data.index = result[lastestDataIndex].returnValues[3];
    data.newsType = result[lastestDataIndex].returnValues[4];
    data.content = result[lastestDataIndex].returnValues[5];
    data.deposit = result[lastestDataIndex].returnValues[6];
    return data;
  } catch (e) {
    console.log(`getNewsContractByNewsId error ${eventName}:`, e);
  }
};
export const getNewsImageByNewsIdEvent = async (newsId, index) => {
  const eventName = "NewsEventImage";
  try {
    const result = await getPastEventFilter(eventName, {
      newsId,
      index,
    });
    let data = { ...INewImageEvent };
    const lastestDataIndex = result.length - 1;

    data.newsId = data.newsId = result[lastestDataIndex].returnValues[0];
    data.index = data.index = result[lastestDataIndex].returnValues[1];
    data.imgContent1 = data.index = result[lastestDataIndex].returnValues[2];
    data.imgContent2 = data.index = result[lastestDataIndex].returnValues[3];
    //console.log("getNewsImageByNewsId:", data);
    return data;
  } catch (e) {
    console.log(`getNewsContractByNewsId error ${eventName}:`, e);
  }
};
export const getNewsCompleteData = async (startIndex, endIndex) => {
  let allData = [];
  const idArray = await getRangeNewsId(startIndex, endIndex);
  for (let i = idArray.length - 1; i >= 0; i--) {
    const tmpNewsData = await getNewsByNewsIdEvent(idArray[i]);
    const tmpNewsImg = await getNewsImageByNewsIdEvent(
      idArray[i],
      tmpNewsData.index
    );

    let tmp = { ...ICompleteNewsData };
    if (tmpNewsData != undefined) {
      tmp.newsId = tmpNewsData.newsId;
      tmp.index = tmpNewsData.index;
      tmp.newsType = tmpNewsData.newsType;
      tmp.title = tmpNewsData.title;
      tmp.author = tmpNewsData.author;
      tmp.content = tmpNewsData.content;
      tmp.deposit = tmpNewsData.deposit;
    }
    if (tmpNewsImg != undefined) {
      tmp.imgContent1 = tmpNewsImg.imgContent1;
      tmp.imgContent2 = tmpNewsImg.imgContent2;
    }
    allData.push(tmp);
    console.log("getNewsCompleteData tmp:", tmp);
  }
  console.log("getNewsCompleteData:", allData);
  return allData;
};

export const getAllNewsEvent = async () => {
  const eventName = "NewsEvent";
  try {
    const results = await getManyPastEvent(eventName, null);

    let allData = []; //{ ...INewEvent }
    let i = 0;
    for (result of results) {
      let data = { ...INewEvent }; //
      data.newsId = result.returnValues[0];
      data.index = result.returnValues[1];
      data.newsType = result.returnValues[2];
      data.title = result.returnValues[3];
      data.author = result.returnValues[4];
      data.content = result.returnValues[5];
      data.deposit = result.returnValues[6];
      allData.push(data);
    }
    return allData;
  } catch (e) {
    console.log(`getNewsContractByNewsId error ${eventName}:`, e);
  }
};
export const isMember = async (addr) => {
  try {
    const result = await contract.methods.isMember(addr).call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    return result;
  } catch (error) {
    console.log("isMember error:", error);
  }
};
export const isReviewer = async (addr) => {
  try {
    const result = await contract.methods.isReviewer(addr).call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    return result;
  } catch (error) {
    console.log("isReviewer error:", error);
  }
};
export const isPublisher = async (addr) => {
  try {
    const result = await contract.methods.isPublisher(addr).call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    return result;
  } catch (error) {
    console.log("isPublisher error:", error);
  }
};
export const getApplyPublishersAddr = async () => {
  try {
    const result = await contract.methods.getApplyPublishers().call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    return result;
  } catch (error) {
    console.log("getApplyPublisher error:", error);
  }
};
export const getApplyPublisherEvent = async (filterAddr) => {
  const eventName = "applyPublisherEvent";
  try {
    const results = await getPastEventFilter(eventName, {
      addr: filterAddr,
    });
    console.log("getApplyPublisherEvent:", results);
    const lastestDataIndex = results.length - 1;
    const addr = results[lastestDataIndex].returnValues[0];
    const publisherId = results[lastestDataIndex].returnValues[1];
    const memberId = results[lastestDataIndex].returnValues[2];
    const index = results[lastestDataIndex].returnValues[3];
    const data = results[lastestDataIndex].returnValues[4];
    const { account, companyName, co, email, phone } = JSON.parse(data);
    const tmpData = {
      publisherId: publisherId,
      memberId: memberId,
      addr: addr,
      account: account,
      index: index,
      companyName: companyName,
      co: co,
      email: email,
      phone: phone,
    };
    return tmpData;
  } catch (e) {
    console.log(`getApplyPublisherEvent error ${eventName}:`, e);
  }
};
export const applyPublisher = async (
  publisherId,
  memberId,
  addr,
  personalInformation
) => {
  try {
    await transactionContract(
      ownerAddr,
      contractAddr,
      "0",
      contract.methods
        .applyPublisher(publisherId, memberId, addr, personalInformation)
        .encodeABI(),
      ownerPriKey
    );
  } catch (error) {
    console.log("enrollVistor error:", error);
  }
};
export const subscribeEnrollPublisherEvent = (handleFunc) => {
  contract.events
    .enrollPublisherEvent({ from: 0 })
    .on("data", async (results) => {
      const publisherId = results.returnValues[0];
      const memberId = results.returnValues[1];
      const isAgree = results.returnValues[2];
      const personalInformation = results.returnValues[3];
      const replyContent = results.returnValues[4];

      await handleFunc(memberId, isAgree);
    });
};
export const getApplyReviewersAddr = async () => {
  try {
    const result = await contract.methods.getApplyReviewers().call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    return result;
  } catch (error) {
    console.log("getApplyPublisher error:", error);
  }
};
export const getApplyReviewerEvent = async (filterAddr) => {
  const eventName = "applyReviewerEvent";
  try {
    const results = await getPastEventFilter(eventName, {
      addr: filterAddr,
    });
    console.log("getApplyReviewerEvent:", results);
    const lastestDataIndex = results.length - 1;
    const addr = results[lastestDataIndex].returnValues[0];
    const reviewerId = results[lastestDataIndex].returnValues[1];
    const memberId = results[lastestDataIndex].returnValues[2];
    const index = results[lastestDataIndex].returnValues[3];
    const data = results[lastestDataIndex].returnValues[4];
    const { account, tag, email, applyContent } = JSON.parse(data);
    const tmpData = {
      reviewerId: reviewerId,
      memberId: memberId,
      addr: addr,
      account: account,
      index: index,
      email: email,
      tag: tag,
      applyContent: applyContent,
    };
    return tmpData;
  } catch (e) {
    console.log(`getApplyPublisherEvent error ${eventName}:`, e);
  }
};
export const subscribeEnrollReviewerEvent = async (handleFunc) => {
  contract.events
    .enrollReviewerEvent({ from: 0 })
    .on("data", async (results) => {
      const reviewerId = results.returnValues[0];
      const memberId = results.returnValues[1];
      const addr = results.returnValues[2];
      const isAgree = results.returnValues[3];
      const data = results.returnValues[3];
      const replyContent = results.returnValues[4];
      console.log("subscribeEnrollReviewerEvent:", memberId);
      await handleFunc(memberId, isAgree);
    });
};
export const getTestData = async () => {
  try {
    const result = await contract.methods.getTestData().call(); //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
    console.log("getTestData:", result);
    return result;
  } catch (error) {
    console.log("getTestData error:", error);
  }
};
//execute();
