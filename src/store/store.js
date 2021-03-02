import { createStore, combineReducers } from "redux";
import { member, loginStatus, memberStatus } from "../reducers/member";
const store = createStore(combineReducers({ member, loginStatus, memberStatus }));

export default store;
