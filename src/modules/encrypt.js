import JSEncrypt from "jsencrypt/bin/jsencrypt.min.js";
import configData from "../config.json";
export const encrypt = (data) => {
  try {
    const encrypt = new JSEncrypt();
    const pubKey = configData.PUBLIC_KEY;
    encrypt.setPublicKey(pubKey);
    const rsaData = encrypt.encrypt(data);
    return rsaData;
  } catch (e) {
    console.log(e);
  }
};
