import * as sendRequest from "./sendRequest";
import * as localStorage from "./localstorage";
import * as contract from "./smartcontract";
export const login = async (account, password) => {
  try {
    const data = { account: account, password: password };
    const result = await sendRequest.rsaPostRequest("/login", data);
    if (result.status == 200) {
      return result.data;
    }
    return null;
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};
// export const loginBodyData = {
//   account: "",
//   password: "",
// };
export const logout = async () => {
  let result;
  const { token, memberId } = localStorage.getAllData();
  localStorage.clearAllData();
  try {
    result = await sendRequest.rsaTokenPostRequest(token, memberId, "/logout", {
      memberId,
      token,
    });
  } catch (error) {
    console.log("logout error:", error);
  }

  return result;
};
export const enroll = async (account, password, userName, email, publicKey) => {
  try {
    const data = {
      id: 0,
      account,
      password,
      userName,
      email,
      publicKey,
      token: "",
    };
    const result = await sendRequest.rsaPostRequest("/enroll", data);
    return result;
  } catch (error) {
    console.log("enroll error:", error);
  }
  return null;
};
