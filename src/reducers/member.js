const intitialMember = {
  id: "",
  userId: "",
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
