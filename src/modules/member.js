import axios from "axios";
import configData from "../config.json";
import { encrypt } from "./encrypt";
import { ILocalStorage } from "../interfaces/IMember";
import * as contract from "../modules/smartcontract";

const sendRsaTokenPostRequest = async (JWTtoken, id, rout, dataObject) => {
  const rsaData = encrypt(JSON.stringify(dataObject));
  const config = {
    headers: { Authorization: ` ${JWTtoken}` },
  };
  const bodyParameters = {
    rsaData,
  };
  const result = await axios.post(
    configData.SERVER_URL + rout,
    bodyParameters,
    config
  );
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }
  return result;
};
const sendRsaPostRequest = async (rout, dataObject) => {
  const rsaData = encrypt(JSON.stringify(dataObject));
  const bodyParameters = {
    rsaData,
  };
  const result = await axios.post(configData.SERVER_URL + rout, bodyParameters);
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }
  return result;
};
export const login = async (account, password) => {
  try {
    const data = { account: account, password: password };
    const result = await sendRsaPostRequest("/login", data);
    if (result.status == 200) {
      const pubKey = result.data.publicKey;
      const isMember = await contract.isMember(pubKey);
      const isReviewer = await contract.isReviewer(pubKey);
      const isPublisher = await contract.isPublisher(pubKey);
      localStorage.setItem(ILocalStorage.getToken, result.data.token);
      localStorage.setItem(ILocalStorage.getId, result.data.id);
      localStorage.setItem(ILocalStorage.getAccount, result.data.account);
      localStorage.setItem(ILocalStorage.getUserName, result.data.userName);
      localStorage.setItem(ILocalStorage.getEmail, result.data.email);
      localStorage.setItem(ILocalStorage.getPublicKey, result.data.publicKey);
      localStorage.setItem(ILocalStorage.getIsVistor, isMember);
      localStorage.setItem(ILocalStorage.getIsReviewer, isReviewer);
      localStorage.setItem(ILocalStorage.getIsPublisher, isPublisher);
    }
    console.log("login:", data);
    return result;
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};
// export const loginBodyData = {
//   account: "",
//   password: "",
// };
export const logout = async () => {
  let result;
  try {
    result = await sendRsaTokenPostRequest(
      localStorage.getItem(ILocalStorage.getToken),
      localStorage.getItem(ILocalStorage.getId),
      "/logout",
      {
        id: localStorage.getItem(ILocalStorage.id),
        token: localStorage.getItem(ILocalStorage.getToken),
      }
    );
  } catch (error) {
    console.log("logout error:", error);
  }

  localStorage.clear(ILocalStorage.getId);
  localStorage.clear(ILocalStorage.getAccount);
  localStorage.clear(ILocalStorage.getToken);
  return result;
};
export const enroll = async (account, password, userName, email, publicKey) => {
  try {
    const data = {
      id: 0,
      account: account,
      password: password,
      userName: userName,
      email: email,
      publicKey: publicKey,
      token: "",
    };
    const result = await sendRsaPostRequest("/enroll", data);
    return result;
  } catch (error) {
    console.log("enroll error:", error);
  }
};

export const RootPublisherDecision = async (
  id,
  publisherId,
  decision,
  reason
) => {
  const result = await sendRsaTokenPostRequest(
    localStorage.getItem(ILocalStorage.getToken),
    localStorage.getItem(ILocalStorage.getId),
    "/rootPublisherDecision",
    { id: id, decision: decision, reason: reason }
  );

  return {
    status: result.status,
  };
};

export const getLocalStorageData = () => {
  return {
    id: localStorage.getItem(ILocalStorage.getId),
    account: localStorage.getItem(ILocalStorage.getAccount),
    userName: localStorage.getItem(ILocalStorage.getUserName),
    email: localStorage.getItem(ILocalStorage.getEmail),
    publicKey: localStorage.getItem(ILocalStorage.getPublicKey),
    isMember: localStorage.getItem(ILocalStorage.getIsVistor),
    isReviewer: localStorage.getItem(ILocalStorage.getIsReviewer),
    isPublisher: localStorage.getItem(ILocalStorage.getIsPublisher),
  };
};

export const applyPublisher = () => {};
