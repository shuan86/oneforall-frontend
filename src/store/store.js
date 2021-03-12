import { createStore, combineReducers } from "redux";
import { member, loginStatus, memberStatus, flag } from "../reducers/member";
const store = createStore(combineReducers({ member, loginStatus, memberStatus, flag }));

export default store;
