//import JSEncrypt from "jsencrypt/bin/jsencrypt.min.js";
import configData from "../config.json";
import { JSEncrypt } from "encryptlong";
/*export const encrypt = (data) => {
  try {
    const encrypt = new JSEncrypt();
    const pubKey = configData.PUBLIC_KEY;
    encrypt.setPublicKey(pubKey);
    const rsaData = encrypt.encrypt(data);
    return rsaData;
  } catch (e) {
  }
};*/
export const encrypt = (data) => {
  try {
    const pubKey = configData.PUBLIC_KEY;
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubKey);
    const rsaData = encrypt.encryptLong(data);
    return rsaData;
  } catch (e) {
    console.error(e);
  }
}