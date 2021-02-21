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
