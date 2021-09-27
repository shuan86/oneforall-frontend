import * as sendRequest from "./sendRequest";
import * as localStorage from "./localstorage";
import { ReviewerStatus } from "../interfaces/IMember";

export const apply = async (email, tag, applyContent) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/reviewer",
      {
        memberId,
        email,
        applyContent,
        tag,
      }
    );
    return result;
  } catch (error) {
    console.error("publisher apply error:", error);
  }
};

export const RootReviewerDecision = async (reviewerId, decision, reason) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/reviewer",
      { reviewerId: reviewerId, decision: decision, reason: reason }
    );

    if (result && result.status == 200) {
      return { ...result.data };
    }
  } catch (error) {
    console.error("reviewer RootReviewerDecision error:", error);
  }
  return null;
};
export const getApplyReviewers = async () => {
  let result;
  const { token, memberId } = localStorage.getAllData();
  try {
    result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/reviewers",
      {
        memberId,
        token,
        status: ReviewerStatus.apply,
      }
    );
    if (result && result.status == 200) {
      const array = result.data;
      return array;
    }
  } catch (error) {
    console.error("logout error:", error);
  }

  return null;
};
