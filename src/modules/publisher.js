import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
import { PublisherStatus } from "../interfaces/IMember";

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
    console.log("publisher apply error:", error);
  }
};

export const RootPublisherDecision = async (publisherId, decision, reason) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/publisher",
      { publisherId: publisherId, decision: decision, reason: reason }
    );
    return { ...result.data };
  } catch (error) {
    console.error("publisher RootPublisherDecision error:", error);
  }
};
export const getApplyPublishers = async () => {
  let result;
  const { token, memberId } = localStorage.getAllData();
  try {
    result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/publishers",
      {
        memberId,
        token,
        status: PublisherStatus.apply,
      }
    );
    if (result && result.status == 200) {
      const array = result.data;
      return array;
    }
  } catch (error) {
    console.log("logout error:", error);
  }

  return null;
};
export const postNews = async (
  title,
  authorName,
  content,
  tags,
  img1,
  img2
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/publisher",
      { title, authorName, content, tags, img1, img2 }
    );
    return { ...result.data };
  } catch (error) {
    console.error("postNews error:", error);
  }
};
