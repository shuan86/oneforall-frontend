const wontUpdateMember = () => ({
  payload: null,
  type: "wontUpdateMember",
});
const initialMember = () => ({
  payload: null,
  type: "initialMember",
});
const updateMember = (value) => ({
  payload: value,
  type: "updateMember",
});
const updateLoginStatus = (value) => ({
  payload: value,
  type: "updateLoginStatus",
});
const initialMemberStatus = () => ({
  payload: {},
  type: "initialMemberStatus",
});
const updateMemberStatus = (isVistor, isReviewer, isPublisher) => ({
  payload: { isVistor: isVistor, isReviewer: isReviewer, isPublisher: isPublisher },
  type: "updateMemberStatus",
});
export { initialMember, updateMember, wontUpdateMember, updateLoginStatus, initialMemberStatus, updateMemberStatus };
