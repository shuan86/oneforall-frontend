import { ILocalStorage } from "../interfaces/IMember";
import * as contract from "../modules/smartcontract";

export const savePrivateInfo = async (
  account,
  userName,
  email,
  publicKey,
  fllowerAmount,
  exp,
  createTime,
  reportedVoteArticleIdArray,
  revieweArticleIdArray,
  publishArticleIdArray,
  isMember,
  isReviewer,
  isPublisher
) => {
  localStorage.setItem(ILocalStorage.getAccount, account);
  localStorage.setItem(ILocalStorage.getUserName, userName);
  localStorage.setItem(ILocalStorage.getEmail, email);
  localStorage.setItem(ILocalStorage.getPublicKey, publicKey);
  localStorage.setItem(ILocalStorage.getFllowerAmount, fllowerAmount);
  localStorage.setItem(ILocalStorage.getExp, exp);
  localStorage.setItem(ILocalStorage.getCreateTime, createTime);
  localStorage.setItem(
    ILocalStorage.getReportedVoteArticleIdArray,
    reportedVoteArticleIdArray
  );
  localStorage.setItem(
    ILocalStorage.getRevieweArticleIdArray,
    revieweArticleIdArray
  );
  localStorage.setItem(
    ILocalStorage.getPublishArticleIdArray,
    publishArticleIdArray
  );
  localStorage.setItem(ILocalStorage.getIsMember, isMember);
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

  const fllowerAmount = localStorage.getItem(ILocalStorage.getFllowerAmount);
  const exp = localStorage.getItem(ILocalStorage.getExp);
  const createTime = localStorage.getItem(ILocalStorage.getCreateTime);
  const reportedVoteArticleIdArray = localStorage.getItem(
    ILocalStorage.getReportedVoteArticleIdArray
  );
  const revieweArticleIdArray = localStorage.getItem(
    ILocalStorage.getRevieweArticleIdArray
  );
  const publishArticleIdArray = localStorage.getItem(
    ILocalStorage.getPublishArticleIdArray
  );

  let isMember = localStorage.getItem(ILocalStorage.getIsMember);
  let isReviewer = localStorage.getItem(ILocalStorage.getIsReviewer);
  let isPublisher = localStorage.getItem(ILocalStorage.getIsPublisher);
  (isMember = isMember == "true" ? true : false),
    (isReviewer = isReviewer == "true" ? true : false),
    (isPublisher = isPublisher == "true" ? true : false);
  const data = {
    memberId,
    token,
    account,
    userName,
    email,
    publicKey,
    fllowerAmount,
    exp,
    createTime,
    reportedVoteArticleIdArray,
    revieweArticleIdArray,
    publishArticleIdArray,
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
  localStorage.clear(ILocalStorage.getIsMember);
  localStorage.clear(ILocalStorage.getIsReviewer);
  localStorage.clear(ILocalStorage.getIsPublisher);
};
export const saveLocalData = (name, data) => {
  localStorage.setItem(name, data);
};
export const saveMemberId = (data) => {
  localStorage.setItem(ILocalStorage.memberId, data);
};
export const saveToken = (data) => {
  localStorage.setItem(ILocalStorage.token, data);
};
