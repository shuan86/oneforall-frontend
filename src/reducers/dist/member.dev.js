"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flag = exports.memberStatus = exports.initialMemberStatus = exports.loginStatus = exports.member = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var intitialMember = {
  id: "",
  account: "",
  userName: "",
  email: "",
  publicKey: ""
};

var member = function member() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intitialMember;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "updateMember":
      return _objectSpread({}, action.payload);

    case "initialMember":
      return _objectSpread({}, intitialMember);

    default:
      return state;
  }
};

exports.member = member;
var initalLoginData = false;

var loginStatus = function loginStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalLoginData;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "updateLoginStatus":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
};

exports.loginStatus = loginStatus;
var initialMemberStatus = {
  isVistor: false,
  isrReviewer: false,
  isPublisher: false
};
exports.initialMemberStatus = initialMemberStatus;

var memberStatus = function memberStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialMemberStatus;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "updateMemberStatus":
      return _objectSpread({}, action.payload);

    default:
      return state;
  }
};

exports.memberStatus = memberStatus;

var flag = function flag() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "setMemberListFlag":
      return !state;

    default:
      return state;
  }
};

exports.flag = flag;