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

export { initialMember, updateMember, wontUpdateMember, updateLoginStatus };
