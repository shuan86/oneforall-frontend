const intitialMember = {
  id: "",
  account: "",
  userName: "",
  email: "",
  publicKey: "",
  exp: "",
  voteRecord: [],
  followerAmount: 0
};
export const member = (state = intitialMember, action) => {
  switch (action.type) {
    case "updateMember":
      return { ...action.payload };
    case "initialMember":
      return { ...intitialMember };

    default:
      return state;
  }
};
const initalLoginData = false;
export const loginStatus = (state = initalLoginData, action) => {
  switch (action.type) {
    case "updateLoginStatus":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};
export const initialMemberStatus = {
  isVistor: false,
  isReviewer: false,
  isPublisher: false,
};
export const memberStatus = (state = initialMemberStatus, action) => {
  switch (action.type) {
    case "updateMemberStatus":
      return { ...action.payload };
    default:
      return state;
  }
};

export const flag = (state = false, action) => {
  switch (action.type) {
    case "setMemberListFlag":
      return !state;
    default:
      return state;
  }
};
