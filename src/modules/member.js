import axios from "axios";
import configData from "../config.json";
import { encrypt } from "./encrypt";
export const login = async (formData) => {
  try {
    const rsaData = await encrypt(JSON.stringify(formData));
    const result = await axios.post(configData.SERVER_URL + "/login", {
      rsaData,
    });
    if (result.status == 200) {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("id", result.data.id);
      localStorage.setItem("userId", result.data.userId);
    }
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
  const JWTtoken = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${JWTtoken}` },
  };
  const bodyParameters = {
    id: localStorage.getItem("id"),
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
    localStorage.clear("id");
    localStorage.clear("name");
    localStorage.clear("toekn");
    return {
      status: result.status,
    };
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};
