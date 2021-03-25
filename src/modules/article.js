import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
import * as ws from "../modules/articleWebsocket";
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
export const createReportedNews = async (articleId, evidence) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/reportedNews",
      { articleId, evidence }
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
      {}
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
  articleId,
  isAgree,
  decisionReason
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/reportedNews",
      { articleId, isAgree, decisionReason }
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
export const deleteLike = async (articleId) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    console.log("deleteLike memberId:", memberId, "token:", token);

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
  ws.sendData(ws.articleEvent.createComment, {
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
