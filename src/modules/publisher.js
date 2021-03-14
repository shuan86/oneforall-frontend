import * as sendRequest from "./sendRequest";
import * as localStorage from "../modules/localstorage";
import { PublisherStatus } from "../interfaces/IMember";
import { encrypt } from "./encrypt";

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
  time,
  deposit,
  imgArray,
  tagArray
) => {
  try {
    console.log("postNews:", imgArray);

    const { token, memberId } = localStorage.getAllData();
    const formData = new FormData();
    const data = {
      memberId,
      title,
      authorName,
      content,
      time,
      deposit,
      tagArray,
    };
    const rsaData = encrypt(JSON.stringify(data));
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
