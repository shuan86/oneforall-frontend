import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
export const apply = async (companyName, co, phone, email) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/publisher",
      {
        memberId,
        companyName,
        co,
        phone,
        email,
      }
    );
    return result;
  } catch (error) {
    console.log('publisher apply error:', error);

  }

};

export const RootPublisherDecision = async (

  publisherId,
  decision,
  reason
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/publisher",
      { publisherId: publisherId, decision: decision, reason: reason }
    );
    return {
      status: result.status,
    };
  } catch (error) {
    console.log('publisher RootPublisherDecision error:', error);
  }

};
