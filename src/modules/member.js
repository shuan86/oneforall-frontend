import * as sendRequest from "./sendRequest";
import * as localStorage from "./localstorage";
import * as contract from "./smartcontract";
import Copper10 from "../public/images/medals/copper10.png";
import Copper30 from "../public/images/medals/copper30.png";
import Silver70 from "../public/images/medals/silver70.png";
import Silver120 from "../public/images/medals/silver120.png";
import Gold200 from "../public/images/medals/gold200.png";
import Gold500 from "../public/images/medals/gold500.png";

export const Gender = {
  female: 0,
  male: 1,
};
export const Education = {
  kindergarten: 0,
  elementarySchool: 1,
  juniorHighSchool: 2,
  seniorHighSchool: 3,
  university: 4,
  graduateSchool: 5,
  doctoralProgram: 6,
  other: 7,
};
export const LotteryNumber = {
  snowNormal: 0,
  snowBad: 1,
  redBad: 2,
  redNormal: 3,
};

export const login = async (account, password) => {
  try {
    const data = { account: account, password: password };
    const result = await sendRequest.rsaPostRequest("/login", data);
    if (result.status == 200) {
      localStorage.saveMemberId(result.data.memberId);
      localStorage.saveToken(result.data.token);
      return result.data;
    }
    return null;
  } catch (e) {
    console.error("login error:", e);
  }
  return null;
};
export const loadMemberInfo = async () => {
  const privateMemberInfo = await getPrivateMemberInfo();
  if (privateMemberInfo) {
    localStorage.savePrivateInfo(
      privateMemberInfo.account,
      privateMemberInfo.userName,
      privateMemberInfo.email,
      privateMemberInfo.publicKey,
      privateMemberInfo.fllowerAmount,
      privateMemberInfo.exp,
      privateMemberInfo.createTime,
      privateMemberInfo.reportedVoteArticleIdArray,
      privateMemberInfo.revieweArticleIdArray,
      privateMemberInfo.publishArticleIdArray,
      privateMemberInfo.isMember,
      privateMemberInfo.isReviewer,
      privateMemberInfo.isPublisher
    );
    return privateMemberInfo;
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
export const enroll = async (
  account,
  password,
  userName,
  profession,
  age,
  gender,
  education,
  department,
  email,
  publicKey
) => {
  try {
    const data = {
      account,
      password,
      userName,
      profession: encodeURIComponent(profession),
      age,
      gender,
      education,
      department: encodeURIComponent(department),
      email,
      publicKey,
    };
    const result = await sendRequest.rsaPostRequest("/enroll", data);
    return result;
  } catch (error) {
    console.log("enroll error:", error);
  }
  return null;
};
export const getMemberInfo = async (getMemberId) => {
  try {
    const { memberId, token } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/member",
      { getMemberId }
    );
    console.log("getMemberInfo:", memberId, "memberId:", memberId);
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getNews error:", error);
  }

  return null;
};
export const getPrivateMemberInfo = async () => {
  try {
    const { memberId, token } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/privateMember",
      { memberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getPrivateMemberInfo error:", error);
  }

  return null;
};
export const getTopMember = async () => {
  try {
    const { memberId, token } = localStorage.getAllData();
    const result = await sendRequest.getRequest("/topMembers", {});
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getTopMember error:", error);
  }

  return null;
};
export const expMappingBadge = (exp) => {
  // const levelArray = [10, 20, 30, 40, 50, 60]
  const levelArray = [1, 2, 3, 4, 5, 6];

  if (exp <= levelArray[0]) {
    return Copper10;
  } else if (levelArray[0] > exp && exp <= levelArray[1]) {
    return Copper30;
  } else if (levelArray[1] > exp && exp <= levelArray[2]) {
    return Silver70;
  } else if (levelArray[2] > exp && exp <= levelArray[3]) {
    return Silver120;
  } else if (levelArray[3] > exp && exp <= levelArray[4]) {
    return Gold200;
  } else {
    return Gold500;
  }
};
export const getLotteryStatus = async () => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenGetRequest(
      token,
      memberId,
      "/lottery",
      { memberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("getLotteryStatus error:", error);
  }

  return null;
};
export const sendLottery = async () => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const result = await sendRequest.rsaTokenPostRequest(
      token,
      memberId,
      "/lottery",
      { memberId }
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("sendLottery error:", error);
  }

  return null;
};
