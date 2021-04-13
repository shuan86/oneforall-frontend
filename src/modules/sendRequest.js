import axios from "axios";
import { encrypt } from "./encrypt";
import configData from "../config.json";
export const rsaTokenPostRequest = async (
  JWTtoken,
  memberId,
  rout,
  dataObject
) => {
  console.log("rsaTokenPostRequest");
  dataObject = { ...dataObject, memberId };
  const encryptStr = encrypt(JSON.stringify(dataObject));
  const config = {
    headers: { Authorization: ` ${JWTtoken}` },
  };
  const bodyParameters = {
    rsaData: encryptStr,
  };

  const result = await axios.post(
    configData.SERVER_URL + "/api" + rout,
    bodyParameters,
    config
  );
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }

  return result;
};
export const tokenFilePostRequest = async (JWTtoken, rout, formData) => {
  const config = {
    headers: {
      Authorization: ` ${JWTtoken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const result = await axios.post(
    configData.SERVER_URL + "/api" + rout,
    formData,
    config
  );
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }
  return result;
};

export const rsaTokenPutRequest = async (
  JWTtoken,
  memberId,
  rout,
  dataObject
) => {
  dataObject = { ...dataObject, memberId };
  const encryptStr = encrypt(JSON.stringify(dataObject));
  const config = {
    headers: { Authorization: ` ${JWTtoken}` },
  };
  const bodyParameters = {
    rsaData: encryptStr,
  };
  const result = await axios.put(
    configData.SERVER_URL + "/api" + rout,
    bodyParameters,
    config
  );
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }
  return result;
};
export const getRequest = async (rout, dataObject) => {
  try {
    const result = await axios.get(configData.SERVER_URL + "/api" + rout, {
      params: { ...dataObject },
    });
    return result;
  } catch (error) {
    console.error("getRequest:", error);
  }
};

export const rsaTokenGetRequest = async (
  JWTtoken,
  memberId,
  rout,
  dataObject
) => {
  try {
    dataObject = { ...dataObject, memberId };
    const encryptStr = encrypt(JSON.stringify(dataObject));
    // const config = {
    //   headers: { Authorization: ` ${JWTtoken}` },
    // };
    const bodyParameters = {
      rsaData: encryptStr,
    };
    const result = await axios.get(configData.SERVER_URL + "/api" + rout, {
      headers: { Authorization: ` ${JWTtoken}` },
      params: { ...bodyParameters },
    });
    if (result.status == 200) {
      console.log("rsaTokenGetRequest sucessful");
    }
    return result;
  } catch (error) {
    console.log("rsaTokenGetRequest error:", error);
  }
};
export const rsaPostRequest = async (rout, dataObject) => {
  const rsaData = encrypt(JSON.stringify(dataObject));
  const bodyParameters = {
    rsaData,
  };
  const result = await axios.post(
    configData.SERVER_URL + "/api" + rout,
    bodyParameters
  );
  if (result.status == 200) {
    console.log("sendPostRequest sucessful");
  }
  return result;
};
export const rsaTokenDeleteRequest = async (
  JWTtoken,
  memberId,
  rout,
  dataObject
) => {
  dataObject = { ...dataObject, memberId };
  const encryptStr = encrypt(JSON.stringify(dataObject));
  const config = {
    headers: { Authorization: ` ${JWTtoken}` },
  };
  const bodyParameters = {
    rsaData: encryptStr,
  };
  const result = await axios.delete(
    configData.SERVER_URL + "/api" + rout,
    {
      ...config,
      data: { ...bodyParameters },
    },
    config
  );
  if (result.status == 200) {
    console.log("send delete sucessful");
  }

  return result;
};
