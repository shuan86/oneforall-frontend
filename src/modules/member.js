import axios from "axios";
import configData from "../config.json";
import { encrypt } from "./encrypt";
export const ILocalStorage = {
  id: "id",
  userId: "userId",
  token: "token",
};
export const login = async (formData) => {
  try {
    const rsaData = await encrypt(JSON.stringify(formData));
    const result = await axios.post(configData.SERVER_URL + "/login", {
      rsaData,
    });
    if (result.status == 200) {
      localStorage.setItem(ILocalStorage.token, result.data.token);
      localStorage.setItem(ILocalStorage.id, result.data.id);
      localStorage.setItem(ILocalStorage.userId, result.data.userId);
    }
    console.log("login:", result.status);
    return {
      status: result.status,
      id: result.data.id,
      userId: result.data.userId,
      token: result.data.token,
    };
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
