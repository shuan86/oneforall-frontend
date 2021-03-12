import * as sendRequest from "./sendRequest";
import * as localStorage from "./localstorage";
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
    console.log("publisher apply error:", error);
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
    return {
      status: result.status,
    };
  } catch (error) {
    console.log("reviewer RootReviewerDecision error:", error);
  }
};
