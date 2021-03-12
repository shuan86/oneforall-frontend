"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTestData = exports.subscribeEnrollReviewerEvent = exports.getApplyReviewerEvent = exports.getApplyReviewersAddr = exports.subscribeEnrollPublisherEvent = exports.applyPublisher = exports.getApplyPublisherEvent = exports.getApplyPublishersAddr = exports.isPublisher = exports.isReviewer = exports.isMember = exports.getAllNewsEvent = exports.getNewsCompleteData = exports.getNewsImageByNewsIdEvent = exports.getNewsByNewsIdEvent = exports.getNewsAmount = exports.getLastestNews = exports.getAllNewsId = exports.postNewsToContract = exports.execute = void 0;

var _mockdata = require("./mockdata");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Web3 = require("Web3");

var Tx = require("ethereumjs-tx").Transaction;

var INewEvent = {
  newsId: 0,
  index: 0,
  newsType: 0,
  title: "",
  author: "",
  content: "",
  deposit: ""
};
var INewImageEvent = {
  newsId: 0,
  index: 0,
  imgContent1: "",
  imgContent2: ""
};
var ICompleteNewsData = {
  newsId: 0,
  index: 0,
  newsType: 0,
  title: "",
  author: "",
  content: "",
  deposit: "",
  imgContent1: "",
  imgContent2: ""
}; //import Tx from "ethereumjs-tx";
// const web3 = new Web3("ws://localhost:7545"); //web3.currentProvider

var initContract = function initContract() {
  // const ethEnabled = () => {
  //   if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //     window.ethereum.enable();
  //     return true;
  //   }
  //   return false;
  // };
  // if (!ethEnabled()) {
  //   alert("Please install MetaMask to use this dApp!");
  // }
  // console.log("init web3.js:", Web3.givenProvider);
  // return window.web3;
  // return new Web3("ws://localhost:7545");

  /*--------------------------*/
  if (window.ethereum) {
    var _web = new Web3(Web3.givenProvider);

    window.ethereum.enable();
    return _web;
  } else {
    alert("Please install MetaMask to use this dApp!");
  }

  return null;
};

var web3 = initContract();
var contract = new web3.eth.Contract(_mockdata.contractABI, _mockdata.contractAddr);

var test = function test() {
  var vistors, ownerR, lastSender;
  return regeneratorRuntime.async(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("web3.version:", web3.version);
          _context.next = 3;
          return regeneratorRuntime.awrap(contract.methods.getVistors().call());

        case 3:
          vistors = _context.sent;
          console.log("vistors:", vistors);
          _context.next = 7;
          return regeneratorRuntime.awrap(contract.methods.getOwnerAddr().call());

        case 7:
          ownerR = _context.sent;
          console.log("owner:", ownerR);
          _context.next = 11;
          return regeneratorRuntime.awrap(contract.methods.getLastSender().call());

        case 11:
          lastSender = _context.sent;
          console.log("lastSender:", lastSender);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

var transactionPeopole = function transactionPeopole(sender, receiver, prikey) {
  return regeneratorRuntime.async(function transactionPeopole$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(web3.eth.getTransactionCount(sender, function (err, txCount) {
            // Build the transaction
            var txObject = {
              nonce: web3.utils.toHex(txCount),
              to: receiver,
              value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
              gasLimit: web3.utils.toHex(21000),
              gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
            }; // Sign the transaction

            var tx = new Tx(txObject);
            tx.sign(prikey);
            var serializedTx = tx.serialize();
            var raw = "0x" + serializedTx.toString("hex"); // Broadcast the transaction

            web3.eth.sendSignedTransaction(raw, function (err, txHash) {
              console.log("txHash:", txHash); // Now go check etherscan to see the transaction!
            });
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var transactionContract = function transactionContract(sender, contractAddress, value, contractData, prikey) {
  return regeneratorRuntime.async(function transactionContract$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(web3.eth.getTransactionCount(sender, function (err, txCount) {
            var txObject = {
              nonce: web3.utils.toHex(txCount),
              gasLimit: web3.utils.toHex(800000),
              // Raise the gas limit to a much higher amount
              gasPrice: web3.utils.toHex(web3.utils.toWei("1", "wei")),
              to: contractAddress,
              value: web3.utils.toHex(web3.utils.toWei(value, "wei")),
              data: contractData
            };
            var tx = new Tx(txObject);
            tx.sign(prikey);
            var serializedTx = tx.serialize();
            var raw = "0x" + serializedTx.toString("hex");
            web3.eth.sendSignedTransaction(raw, function (err, txHash) {
              if (err) {
                console.log("transactionContract err:", err);
              } else {
                console.log("transactionContract txHash:", txHash);
              }
            });
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var subscribeTestEvent = function subscribeTestEvent() {
  contract.events.TestEvent({
    from: 0
  }).on("data", function (event) {
    return console.log("subscribeTestEvent:", event);
  });
};

var execute = function execute() {
  return regeneratorRuntime.async(function execute$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          subscribeTestEvent();
          _context4.next = 3;
          return regeneratorRuntime.awrap(test());

        case 3:
          _context4.next = 5;
          return regeneratorRuntime.awrap(transactionContract(memberAddr1, _mockdata.contractAddr, "0", contract.methods.setTestEvent(10).encodeABI(), memberPriKey1));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(transactionContract(memberAddr2, _mockdata.contractAddr, "0", contract.methods.setTestEvent(15).encodeABI(), memberPriKey2));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(getPastEventFilterByNumber("TestEvent", {
            id: 102
          }));

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.execute = execute;

var postNewsToContract = function postNewsToContract(data) {
  var m_publicKey, a_id, a_newsId, a_index, a_newsType, a_authorName, a_content, a_time, a_deposit;
  return regeneratorRuntime.async(function postNewsToContract$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          m_publicKey = data.m_publicKey, a_id = data.a_id, a_newsId = data.a_newsId, a_index = data.a_index, a_newsType = data.a_newsType, a_authorName = data.a_authorName, a_content = data.a_content, a_time = data.a_time, a_deposit = data.a_deposit;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(transactionContract(ownerAddr, _mockdata.contractAddr, "10000", contract.methods.postNewsForOwner(a_id, a_newsId, m_publicKey, a_authorName, a_content, a_time).encodeABI(), ownerPriKey));

        case 4:
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](1);
          console.log("postNews error:", _context5.t0);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 6]]);
}; // const getPastEventFilterByNumber = async (eventName, filterData) => {
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


exports.postNewsToContract = postNewsToContract;

var getPastEventFilter = function getPastEventFilter(eventName, filterData) {
  var _result;

  return regeneratorRuntime.async(function getPastEventFilter$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(contract.getPastEvents(eventName, {
            filter: _objectSpread({}, filterData),
            // Using an array means OR: e.g. 20 or 23
            fromBlock: 0,
            toBlock: "latest"
          }, function (error, events) {// console.log(`getPastEventFilter ${eventName} :`, events);
          }));

        case 3:
          _result = _context6.sent;
          return _context6.abrupt("return", _result);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log("getPastEventFilter error ".concat(eventName, ":"), _context6.t0);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getManyPastEvent = function getManyPastEvent(eventName, filterData) {
  var filter, _result2;

  return regeneratorRuntime.async(function getManyPastEvent$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          filter = _objectSpread({}, filterData);
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(contract.getPastEvents(eventName, {
            fromBlock: 0,
            toBlock: "latest"
          }));

        case 4:
          _result2 = _context7.sent;
          return _context7.abrupt("return", _result2);

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          console.log("getManyPastEvent error ".concat(eventName, ":"), _context7.t0);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var testPastEvent = function testPastEvent(eventName, filterData) {
  var filter, _result3;

  return regeneratorRuntime.async(function testPastEvent$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          filter = _objectSpread({}, filterData);
          console.log("getPastEvent:", {
            filter: filter
          });
          _context8.prev = 2;
          _context8.next = 5;
          return regeneratorRuntime.awrap(contract.getPastEvents(eventName, {
            filter: filter,
            fromBlock: 0,
            toBlock: "latest"
          }));

        case 5:
          _result3 = _context8.sent;

          if (_result3.length > 0) {
            console.log("getPastEvent ".concat(eventName, ":"), _result3);
            console.log("getPastEvent returnValues ".concat(eventName, ":"), _result3.returnValues);
          }

          return _context8.abrupt("return", _result3);

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](2);
          console.log("getPastEvent error ".concat(eventName, ":"), _context8.t0);

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

var getAllNewsId = function getAllNewsId() {
  var result;
  return regeneratorRuntime.async(function getAllNewsId$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(contract.methods.getAllNewsId().call());

        case 2:
          result = _context9.sent;
          console.log("getAllNewsId:", result);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.getAllNewsId = getAllNewsId;

var getLastestNews = function getLastestNews(startIndex, endIndex) {
  var result, array, amount, idArray, i;
  return regeneratorRuntime.async(function getLastestNews$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(contract.methods.getLatestNewsData(startIndex, endIndex).call());

        case 2:
          result = _context10.sent;
          console.log("getLastestNews:", result);
          array = result[Object.keys(result)[0]];
          amount = result[Object.keys(result)[1]];
          idArray = [];

          for (i = 0; i < amount; i++) {
            idArray.push(array[i]);
          }

          return _context10.abrupt("return", idArray);

        case 9:
        case "end":
          return _context10.stop();
      }
    }
  });
};

exports.getLastestNews = getLastestNews;

var getNewsAmount = function getNewsAmount() {
  var result;
  return regeneratorRuntime.async(function getNewsAmount$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(contract.methods.getNewsAmout().call());

        case 2:
          result = _context11.sent;
          console.log("getNewsAmount:", result); // test();

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
};

exports.getNewsAmount = getNewsAmount;

var getNewsByNewsIdEvent = function getNewsByNewsIdEvent(newsId) {
  var eventName, _result4, lastestDataIndex, data;

  return regeneratorRuntime.async(function getNewsByNewsIdEvent$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          eventName = "NewsEvent";
          _context12.prev = 1;
          _context12.next = 4;
          return regeneratorRuntime.awrap(getPastEventFilter(eventName, {
            newsId: newsId
          }));

        case 4:
          _result4 = _context12.sent;
          lastestDataIndex = _result4.length - 1;
          /* console.log(
            `getNewsContractByNewsId ${eventName}:`,
            result[0].returnValues[0]
          );*/

          data = _objectSpread({}, INewEvent);
          data.newsId = _result4[lastestDataIndex].returnValues[0];
          data.title = _result4[lastestDataIndex].returnValues[1];
          data.author = _result4[lastestDataIndex].returnValues[2];
          data.index = _result4[lastestDataIndex].returnValues[3];
          data.newsType = _result4[lastestDataIndex].returnValues[4];
          data.content = _result4[lastestDataIndex].returnValues[5];
          data.deposit = _result4[lastestDataIndex].returnValues[6];
          return _context12.abrupt("return", data);

        case 17:
          _context12.prev = 17;
          _context12.t0 = _context12["catch"](1);
          console.log("getNewsContractByNewsId error ".concat(eventName, ":"), _context12.t0);

        case 20:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.getNewsByNewsIdEvent = getNewsByNewsIdEvent;

var getNewsImageByNewsIdEvent = function getNewsImageByNewsIdEvent(newsId, index) {
  var eventName, _result5, data, lastestDataIndex;

  return regeneratorRuntime.async(function getNewsImageByNewsIdEvent$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          eventName = "NewsEventImage";
          _context13.prev = 1;
          _context13.next = 4;
          return regeneratorRuntime.awrap(getPastEventFilter(eventName, {
            newsId: newsId,
            index: index
          }));

        case 4:
          _result5 = _context13.sent;
          data = _objectSpread({}, INewImageEvent);
          lastestDataIndex = _result5.length - 1;
          data.newsId = data.newsId = _result5[lastestDataIndex].returnValues[0];
          data.index = data.index = _result5[lastestDataIndex].returnValues[1];
          data.imgContent1 = data.index = _result5[lastestDataIndex].returnValues[2];
          data.imgContent2 = data.index = _result5[lastestDataIndex].returnValues[3]; //console.log("getNewsImageByNewsId:", data);

          return _context13.abrupt("return", data);

        case 14:
          _context13.prev = 14;
          _context13.t0 = _context13["catch"](1);
          console.log("getNewsContractByNewsId error ".concat(eventName, ":"), _context13.t0);

        case 17:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.getNewsImageByNewsIdEvent = getNewsImageByNewsIdEvent;

var getNewsCompleteData = function getNewsCompleteData(startIndex, endIndex) {
  var allData, idArray, i, tmpNewsData, tmpNewsImg, tmp;
  return regeneratorRuntime.async(function getNewsCompleteData$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          allData = [];
          _context14.next = 3;
          return regeneratorRuntime.awrap(getLastestNews(startIndex, endIndex));

        case 3:
          idArray = _context14.sent;
          i = idArray.length - 1;

        case 5:
          if (!(i >= 0)) {
            _context14.next = 20;
            break;
          }

          _context14.next = 8;
          return regeneratorRuntime.awrap(getNewsByNewsIdEvent(idArray[i]));

        case 8:
          tmpNewsData = _context14.sent;
          _context14.next = 11;
          return regeneratorRuntime.awrap(getNewsImageByNewsIdEvent(idArray[i], tmpNewsData.index));

        case 11:
          tmpNewsImg = _context14.sent;
          tmp = _objectSpread({}, ICompleteNewsData);

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

        case 17:
          i--;
          _context14.next = 5;
          break;

        case 20:
          console.log("getNewsCompleteData:", allData);
          return _context14.abrupt("return", allData);

        case 22:
        case "end":
          return _context14.stop();
      }
    }
  });
};

exports.getNewsCompleteData = getNewsCompleteData;

var getAllNewsEvent = function getAllNewsEvent() {
  var eventName, results, allData, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, data;

  return regeneratorRuntime.async(function getAllNewsEvent$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          eventName = "NewsEvent";
          _context15.prev = 1;
          _context15.next = 4;
          return regeneratorRuntime.awrap(getManyPastEvent(eventName, null));

        case 4:
          results = _context15.sent;
          allData = []; //{ ...INewEvent }

          i = 0;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context15.prev = 10;

          for (_iterator = results[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            result = _step.value;
            data = _objectSpread({}, INewEvent); //

            data.newsId = result.returnValues[0];
            data.index = result.returnValues[1];
            data.newsType = result.returnValues[2];
            data.title = result.returnValues[3];
            data.author = result.returnValues[4];
            data.content = result.returnValues[5];
            data.deposit = result.returnValues[6];
            allData.push(data);
          }

          _context15.next = 18;
          break;

        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](10);
          _didIteratorError = true;
          _iteratorError = _context15.t0;

        case 18:
          _context15.prev = 18;
          _context15.prev = 19;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 21:
          _context15.prev = 21;

          if (!_didIteratorError) {
            _context15.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context15.finish(21);

        case 25:
          return _context15.finish(18);

        case 26:
          return _context15.abrupt("return", allData);

        case 29:
          _context15.prev = 29;
          _context15.t1 = _context15["catch"](1);
          console.log("getNewsContractByNewsId error ".concat(eventName, ":"), _context15.t1);

        case 32:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[1, 29], [10, 14, 18, 26], [19,, 21, 25]]);
};

exports.getAllNewsEvent = getAllNewsEvent;

var isMember = function isMember(addr) {
  var _result6;

  return regeneratorRuntime.async(function isMember$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return regeneratorRuntime.awrap(contract.methods.isMember(addr).call());

        case 3:
          _result6 = _context16.sent;
          return _context16.abrupt("return", _result6);

        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](0);
          console.log("isMember error:", _context16.t0);

        case 10:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.isMember = isMember;

var isReviewer = function isReviewer(addr) {
  var _result7;

  return regeneratorRuntime.async(function isReviewer$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return regeneratorRuntime.awrap(contract.methods.isReviewer(addr).call());

        case 3:
          _result7 = _context17.sent;
          return _context17.abrupt("return", _result7);

        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          console.log("isReviewer error:", _context17.t0);

        case 10:
        case "end":
          return _context17.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.isReviewer = isReviewer;

var isPublisher = function isPublisher(addr) {
  var _result8;

  return regeneratorRuntime.async(function isPublisher$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return regeneratorRuntime.awrap(contract.methods.isPublisher(addr).call());

        case 3:
          _result8 = _context18.sent;
          return _context18.abrupt("return", _result8);

        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](0);
          console.log("isPublisher error:", _context18.t0);

        case 10:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.isPublisher = isPublisher;

var getApplyPublishersAddr = function getApplyPublishersAddr() {
  var _result9;

  return regeneratorRuntime.async(function getApplyPublishersAddr$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return regeneratorRuntime.awrap(contract.methods.getApplyPublishers().call());

        case 3:
          _result9 = _context19.sent;
          return _context19.abrupt("return", _result9);

        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](0);
          console.log("getApplyPublisher error:", _context19.t0);

        case 10:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getApplyPublishersAddr = getApplyPublishersAddr;

var getApplyPublisherEvent = function getApplyPublisherEvent(filterAddr) {
  var eventName, results, lastestDataIndex, addr, publisherId, memberId, index, data, _JSON$parse, account, companyName, co, email, phone, tmpData;

  return regeneratorRuntime.async(function getApplyPublisherEvent$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          eventName = "applyPublisherEvent";
          _context20.prev = 1;
          _context20.next = 4;
          return regeneratorRuntime.awrap(getPastEventFilter(eventName, {
            addr: filterAddr
          }));

        case 4:
          results = _context20.sent;
          console.log("getApplyPublisherEvent:", results);
          lastestDataIndex = results.length - 1;
          addr = results[lastestDataIndex].returnValues[0];
          publisherId = results[lastestDataIndex].returnValues[1];
          memberId = results[lastestDataIndex].returnValues[2];
          index = results[lastestDataIndex].returnValues[3];
          data = results[lastestDataIndex].returnValues[4];
          _JSON$parse = JSON.parse(data), account = _JSON$parse.account, companyName = _JSON$parse.companyName, co = _JSON$parse.co, email = _JSON$parse.email, phone = _JSON$parse.phone;
          tmpData = {
            publisherId: publisherId,
            memberId: memberId,
            addr: addr,
            account: account,
            index: index,
            companyName: companyName,
            co: co,
            email: email,
            phone: phone
          };
          return _context20.abrupt("return", tmpData);

        case 17:
          _context20.prev = 17;
          _context20.t0 = _context20["catch"](1);
          console.log("getApplyPublisherEvent error ".concat(eventName, ":"), _context20.t0);

        case 20:
        case "end":
          return _context20.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.getApplyPublisherEvent = getApplyPublisherEvent;

var applyPublisher = function applyPublisher(publisherId, memberId, addr, personalInformation) {
  return regeneratorRuntime.async(function applyPublisher$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return regeneratorRuntime.awrap(transactionContract(ownerAddr, _mockdata.contractAddr, "0", contract.methods.applyPublisher(publisherId, memberId, addr, personalInformation).encodeABI(), ownerPriKey));

        case 3:
          _context21.next = 8;
          break;

        case 5:
          _context21.prev = 5;
          _context21.t0 = _context21["catch"](0);
          console.log("enrollVistor error:", _context21.t0);

        case 8:
        case "end":
          return _context21.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.applyPublisher = applyPublisher;

var subscribeEnrollPublisherEvent = function subscribeEnrollPublisherEvent(handleFunc) {
  contract.events.enrollPublisherEvent({
    from: 0
  }).on("data", function _callee(results) {
    var publisherId, memberId, isAgree, personalInformation, replyContent;
    return regeneratorRuntime.async(function _callee$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            publisherId = results.returnValues[0];
            memberId = results.returnValues[1];
            isAgree = results.returnValues[2];
            personalInformation = results.returnValues[3];
            replyContent = results.returnValues[4];
            _context22.next = 7;
            return regeneratorRuntime.awrap(handleFunc(memberId, isAgree));

          case 7:
          case "end":
            return _context22.stop();
        }
      }
    });
  });
};

exports.subscribeEnrollPublisherEvent = subscribeEnrollPublisherEvent;

var getApplyReviewersAddr = function getApplyReviewersAddr() {
  var _result10;

  return regeneratorRuntime.async(function getApplyReviewersAddr$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return regeneratorRuntime.awrap(contract.methods.getApplyReviewers().call());

        case 3:
          _result10 = _context23.sent;
          return _context23.abrupt("return", _result10);

        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          console.log("getApplyPublisher error:", _context23.t0);

        case 10:
        case "end":
          return _context23.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getApplyReviewersAddr = getApplyReviewersAddr;

var getApplyReviewerEvent = function getApplyReviewerEvent(filterAddr) {
  var eventName, results, lastestDataIndex, addr, reviewerId, memberId, index, data, _JSON$parse2, account, tag, email, applyContent, tmpData;

  return regeneratorRuntime.async(function getApplyReviewerEvent$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          eventName = "applyReviewerEvent";
          _context24.prev = 1;
          _context24.next = 4;
          return regeneratorRuntime.awrap(getPastEventFilter(eventName, {
            addr: filterAddr
          }));

        case 4:
          results = _context24.sent;
          console.log("getApplyReviewerEvent:", results);
          lastestDataIndex = results.length - 1;
          addr = results[lastestDataIndex].returnValues[0];
          reviewerId = results[lastestDataIndex].returnValues[1];
          memberId = results[lastestDataIndex].returnValues[2];
          index = results[lastestDataIndex].returnValues[3];
          data = results[lastestDataIndex].returnValues[4];
          _JSON$parse2 = JSON.parse(data), account = _JSON$parse2.account, tag = _JSON$parse2.tag, email = _JSON$parse2.email, applyContent = _JSON$parse2.applyContent;
          tmpData = {
            reviewerId: reviewerId,
            memberId: memberId,
            addr: addr,
            account: account,
            index: index,
            email: email,
            tag: tag,
            applyContent: applyContent
          };
          return _context24.abrupt("return", tmpData);

        case 17:
          _context24.prev = 17;
          _context24.t0 = _context24["catch"](1);
          console.log("getApplyPublisherEvent error ".concat(eventName, ":"), _context24.t0);

        case 20:
        case "end":
          return _context24.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.getApplyReviewerEvent = getApplyReviewerEvent;

var subscribeEnrollReviewerEvent = function subscribeEnrollReviewerEvent(handleFunc) {
  return regeneratorRuntime.async(function subscribeEnrollReviewerEvent$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          contract.events.enrollReviewerEvent({
            from: 0
          }).on("data", function _callee2(results) {
            var reviewerId, memberId, addr, isAgree, data, replyContent;
            return regeneratorRuntime.async(function _callee2$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    reviewerId = results.returnValues[0];
                    memberId = results.returnValues[1];
                    addr = results.returnValues[2];
                    isAgree = results.returnValues[3];
                    data = results.returnValues[3];
                    replyContent = results.returnValues[4];
                    console.log("subscribeEnrollReviewerEvent:", memberId);
                    _context25.next = 9;
                    return regeneratorRuntime.awrap(handleFunc(memberId, isAgree));

                  case 9:
                  case "end":
                    return _context25.stop();
                }
              }
            });
          });

        case 1:
        case "end":
          return _context26.stop();
      }
    }
  });
};

exports.subscribeEnrollReviewerEvent = subscribeEnrollReviewerEvent;

var getTestData = function getTestData() {
  var _result11;

  return regeneratorRuntime.async(function getTestData$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return regeneratorRuntime.awrap(contract.methods.getTestData().call());

        case 3:
          _result11 = _context27.sent;
          //transactionContract(ownerAddr, contractAddr,"0", contract.methods.getVistors().encodeABI(), ownerPriKey)
          console.log("getTestData:", _result11);
          return _context27.abrupt("return", _result11);

        case 8:
          _context27.prev = 8;
          _context27.t0 = _context27["catch"](0);
          console.log("getTestData error:", _context27.t0);

        case 11:
        case "end":
          return _context27.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; //execute();


exports.getTestData = getTestData;