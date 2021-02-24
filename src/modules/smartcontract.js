const Web3 = require("Web3");
import {
  contractABI,
  contractAddr,
  ownerAddr,
  ownerPriKey,
  memberAddr1,
  memberPriKey1,
  memberAddr2,
  memberPriKey2,
} from "./mockdata";

const Tx = require("ethereumjs-tx").Transaction;
const INewEvent = {
  newsId: 0,
  index: 0,
  newsType: 0,
  title: "",
  author: "",
  content: "",
  data: "",
  deposit: "",
};
//import Tx from "ethereumjs-tx";
const web3 = new Web3("ws://localhost:7545"); //web3.currentProvider
const contract = new web3.eth.Contract(contractABI, contractAddr);
console.log("init web3.js");

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
  await getPastEvent("TestEvent", { id: 102 });
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
      "10000",
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
const getPastEvent = async (eventName, filterData) => {
  try {
    const result = await contract.getPastEvents(eventName, {
      filter: { filterData },
    });
    console.log(`getPastEvent ${eventName}:`, result);
    console.log(`getPastEvent ${eventName}:`, result.returnValues);
    return result;
  } catch (e) {
    console.log(`getPastEvent error ${eventName}:`, e);
  }
};
const getManyPastEvent = async (eventName, filterData) => {
  try {
    const result = await contract.getPastEvents(eventName, {
      fromBlock: 0,
      toBlock: "latest",
      filter: { filterData },
    });
    return result;
    /*console.log(`getPastEvent ${eventName}:`, result);
    console.log(`getPastEvent ${eventName}:`, result.returnValues);*/
  } catch (e) {
    console.log(`getPastEvent error ${eventName}:`, e);
  }
};
export const getNewsFromContractByNewsId = async (newsId) => {
  const eventName = "NewsEvent";
  try {
    const result = await getPastEvent(eventName, newsId);
    console.log(`getNewsContractByNewsId ${eventName}:`, result);
    console.log(
      `getNewsContractByNewsId ${eventName}:`,
      result[0].returnValues[0]
    );
    let data = { ...INewEvent };

    data.newsId = result[0].returnValues[0];
    data.index = result[0].returnValues[1];
    data.newsType = result[0].returnValues[2];
    data.title = result[0].returnValues[3];
    data.author = result[0].returnValues[4];
    data.data = result[0].returnValues[5];
    data.deposit = result[0].returnValues[6];
    return data;
  } catch (e) {
    console.log(`getNewsContractByNewsId error ${eventName}:`, e);
  }
};
export const getAllNewsFromContract = async () => {
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
      data.data = result.returnValues[5];
      data.deposit = result.returnValues[6];
      allData.push(data);
    }
    return allData;
  } catch (e) {
    console.log(`getNewsContractByNewsId error ${eventName}:`, e);
  }
};
