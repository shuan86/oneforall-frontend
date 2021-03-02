import axios from "axios";
import configData from "../config.json";
import { encrypt } from "./encrypt";

export const IMemberStatus = {
  vistor: "vistor",
  reviewer: "reviewer",
  publisher: "publisher"
}
export const ILocalStorage = {
  id: "id",
  userId: "userId",
  userName: "userName",
  token: "token",
  email: 'email',
  publicKey: 'publicKey',
  isVistor: 'isVistor',
  isReviewer: 'isReviewer',
  isPublisher: 'isPublisher',

};

export const login = async (formData) => {
  try {

    const rsaData = await encrypt(JSON.stringify(formData));
    const result = await axios.post(configData.SERVER_URL + "/login", {
      rsaData,
    });
    return result;
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};
export const loginBodyData = {
  userId: "",
  password: "",
};
export const logout = async () => {
  const JWTtoken = localStorage.getItem(ILocalStorage.token);
  const config = {
    headers: { Authorization: `Bearer ${JWTtoken}` },
  };
  const bodyParameters = {
    id: localStorage.getItem(ILocalStorage.id),
  };
  try {
    const result = await axios.post(
      configData.SERVER_URL + "/logout",
      bodyParameters,
      config
    );
    if (result.status == 200) {
      console.log("logout sucessful");
    }
    console.log("onClickLogout:", result);

    localStorage.clear(ILocalStorage.id);
    localStorage.clear(ILocalStorage.userId);
    localStorage.clear(ILocalStorage.token);
    return {
      status: result.status,
    };
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};


