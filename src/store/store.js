import { createStore, combineReducers } from "redux";
import { member } from "../reducers/member";
const store = createStore(combineReducers({ member }))


export default store;
