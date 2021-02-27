import { createStore, combineReducers } from "redux";
import { member, loginStatus } from "../reducers/member";
const store = createStore(combineReducers({ member, loginStatus }));

export default store;
