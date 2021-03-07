import { ILocalStorage } from "../interfaces/IMember";
import * as contract from "../modules/smartcontract";

export const saveAllData = async (
  memberId,
  token,
  account,
  userName,
  email,
  publicKey,
  isMember,
  isReviewer,
  isPublisher
) => {
  localStorage.setItem(ILocalStorage.getMemberId, memberId);
  localStorage.setItem(ILocalStorage.getToken, token);
  localStorage.setItem(ILocalStorage.getAccount, account);
  localStorage.setItem(ILocalStorage.getUserName, userName);
  localStorage.setItem(ILocalStorage.getEmail, email);
  localStorage.setItem(ILocalStorage.getPublicKey, publicKey);
  localStorage.setItem(ILocalStorage.getIsVistor, isMember);
  localStorage.setItem(ILocalStorage.getIsReviewer, isReviewer);
  localStorage.setItem(ILocalStorage.getIsPublisher, isPublisher);
};
export const getAllData = () => {
  const memberId = localStorage.getItem(ILocalStorage.getMemberId);
  const token = localStorage.getItem(ILocalStorage.getToken);
  const account = localStorage.getItem(ILocalStorage.getAccount);
  const userName = localStorage.getItem(ILocalStorage.getUserName);
  const email = localStorage.getItem(ILocalStorage.getEmail);
  const publicKey = localStorage.getItem(ILocalStorage.getPublicKey);
  let isMember = localStorage.getItem(ILocalStorage.getIsVistor);
  let isReviewer = localStorage.getItem(ILocalStorage.getIsReviewer);
  let isPublisher = localStorage.getItem(ILocalStorage.getIsPublisher);
  isMember = isMember == "true" ? true : false,
    isReviewer = isReviewer == "true" ? true : false,
    isPublisher = isPublisher == "true" ? true : false
  const data = {
    memberId,
    token,
    account,
    userName,
    email,
    publicKey,
    isMember,
    isReviewer,
    isPublisher,
  };
  return data;
};
export const clearAllData = () => {
  localStorage.clear(ILocalStorage.getMemberId);
  localStorage.clear(ILocalStorage.getToken);
  localStorage.clear(ILocalStorage.getAccount);
  localStorage.clear(ILocalStorage.getUserName);
  localStorage.clear(ILocalStorage.getEmail);
  localStorage.clear(ILocalStorage.getPublicKey);
  localStorage.clear(ILocalStorage.getIsVistor);
  localStorage.clear(ILocalStorage.getIsReviewer);
  localStorage.clear(ILocalStorage.getIsPublisher);
};
