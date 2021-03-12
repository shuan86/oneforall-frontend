"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _member = require("../reducers/member");

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  member: _member.member,
  loginStatus: _member.loginStatus,
  memberStatus: _member.memberStatus,
  flag: _member.flag
}));
var _default = store;
exports["default"] = _default;