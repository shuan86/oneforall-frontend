import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
import * as ws from "../modules/articleWebsocket";
import { encrypt } from "../modules/encrypt";
export const ReviewResult = {
  nothing: 0,
  sucessful: 1,
  fail: 2,
};
export const ArticleStatus = {
  unreview: 0,
  report: 1,
  underReview: 2,
  verified: 3,
};
export const VotedResultStatus = {
  noResultYet: 0,
  realNews: 1,
  fakeNews: 2,
  reportedAgain: 3,
};
export const ArticleReportStatus = {
  apply: 0,
  fail: 1,
  sucessful: 2,
};

export const ArticleTagKind = {
  sport: false,
  food: false,
};
const encodeUnicode = (str) => {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return "\\u" + res.join("\\u");
};
const decodeUnicode = (str) => {
  str = str.replace(/\\/g, "%");
  return unescape(str);
};
export const getNews = async (startIndex, endIndex) => {
  try {
    const { memberId } = localStorage.getAllData();
    const data = { startIndex, endIndex, memberId };
    const result = await sendRequest.getRequest("/newses", data);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getNews error:", error);
  }

  return null;
};
export const getArticleTitles = async (articleIdArray) => {
  try {
    const data = { articleIdArray };
    const result = await sendRequest.getRequest("/articleTitles", data);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getArticleTitles error:", error);
  }

  return null;
};
export const getUnderReviewedNews = async (startIndex, endIndex) => {
  try {
    const { memberId } = localStorage.getAllData();
    const articleStatus = ArticleStatus.underReview;
    const data = { startIndex, endIndex, memberId, articleStatus };
    const result = await sendRequest.getRequest("/underReviewedNewses", data);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getUnderReviewedNews error:", error);
  }

  return null;
};
export const getReviewedNews = async (startIndex, endIndex) => {
  try {
    const { memberId } = localStorage.getAllData();
    const articleStatus = ArticleStatus.verified;
    const data = { startIndex, endIndex, memberId, articleStatus };
    const result = await sendRequest.getRequest("/reviewedNewses", data);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getReviewedNews error:", error);
  }

  return null;
};
export const getArticle = async (articleId) => {
  try {
    const { memberId } = localStorage.getAllData();
    const data = { articleId };
    const result = await sendRequest.getRequest("/article", data);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getArticle error:", error);
  }

  return null;
};
export const createReportedNews = async (articleId, evidence) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/reportedNews",
      { articleId, evidence, memberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("createReportedNews error:", error);
  }

  return null;
};

export const getAllApplyReportedNews = async () => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/reportedNews",
      { memberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getAllApplyReportedNews error:", error);
  }

  return null;
};
export const updateReportedNewsStatus = async (
  reportMemberId,
  articleId,
  isAgree,
  decisionReason
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    decisionReason = encodeUnicode(decisionReason);
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/reportedNews",
      { articleId, isAgree, decisionReason, reportMemberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("updateReportedNewsStatus error:", error);
  }

  return null;
};
export const createLike = async (articleId) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/like",
      {
        articleId,
      }
    );
    if ((result.status = 200)) {
      return result.data;
    }
  } catch (error) {
    console.error("createLike error:", error);
  }
  return null;
};
export const createReportedVote = async (articleId, isAgree) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/reportedVote",
      {
        memberId,
        articleId,
        isAgree,
      }
    );
    if ((result.status = 200)) {
      return result.data;
    }
  } catch (error) {
    console.error("createReportedVote error:", error);
  }
  return null;
};

export const deleteReportedVote = async (articleId, isAgree) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenDeleteRequest(
      token,
      memberId,
      "/reportedVote",
      { articleId, isAgree }
    );
    if ((result.status = 200)) {
      return result.data;
    }
  } catch (error) {
    console.error("deleteReportedVote error:", error);
  }
  return null;
};
export const deleteLike = async (articleId) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenDeleteRequest(
      token,
      memberId,
      "/like",
      { articleId }
    );
    if ((result.status = 200)) {
      return result.data;
    }
  } catch (error) {
    console.error("deleteLike error:", error);
  }
  return null;
};
export const getCommentsRange = (articleId, startIndex, endIndex) => {
  const { token, memberId } = localStorage.getAllData();
  startIndex--;
  endIndex--;
  if (startIndex >= 0) {
    ws.sendData(ws.articleEvent.getCommentsRange, {
      token,
      memberId,
      articleId,
      startIndex,
      endIndex,
    });
  }
};
export const createComment = (articleId, comment) => {
  const { token, memberId } = localStorage.getAllData();
  ws.sendData(ws.articleEvent.newComment, {
    token,
    memberId,
    articleId,
    comment,
  });
};

export const disconnect = (articleId) => {
  const { token, memberId } = localStorage.getAllData();
  ws.sendData(ws.articleEvent.disconnectServer, { token, memberId, articleId });
};
export const postNews = async (
  title,
  authorName,
  content,
  time,
  deposit,
  imgArray,
  imgUrl,
  tagArray
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    content = content.replace(/\r\n/g, "\n");
    content = content.replace(/\n/g, "\n");
    const formData = new FormData();
    const data = {
      memberId,
      title,
      authorName,
      content,
      time,
      deposit,
      imgUrl,
      tagArray,
    };
    const rsaData = JSON.stringify(data);
    formData.append("rsaData", rsaData);
    formData.append("image", imgArray);

    const result = await sendRequest.tokenFilePostRequest(
      token,
      "/news",
      formData
    );
    if (result && result.status == 200) {
      return { ...result.data };
    }
    return null;
  } catch (error) {
    console.error("postNews error  :", error);
  }
};
export const getBase64Str = async (imageData) => {
  try {
    if (imageData) {
      const arrayBuffer = Uint8Array.from(imageData.data).buffer;
      const base64String =
        "data:image/png;base64," +
        btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
      return base64String;
    }
  } catch (error) {
    console.error("getBase64Str error:", error);
    return null;
  }
  return null;
};
