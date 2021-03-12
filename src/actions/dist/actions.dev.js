"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMemberListFlag = exports.updateMemberStatus = exports.initialMemberStatus = exports.updateLoginStatus = exports.wontUpdateMember = exports.updateMember = exports.initialMember = void 0;

var wontUpdateMember = function wontUpdateMember() {
  return {
    payload: null,
    type: "wontUpdateMember"
  };
};

exports.wontUpdateMember = wontUpdateMember;

var initialMember = function initialMember() {
  return {
    payload: null,
    type: "initialMember"
  };
};

exports.initialMember = initialMember;

var updateMember = function updateMember(value) {
  return {
    payload: value,
    type: "updateMember"
  };
};

exports.updateMember = updateMember;

var updateLoginStatus = function updateLoginStatus(value) {
  return {
    payload: value,
    type: "updateLoginStatus"
  };
};

exports.updateLoginStatus = updateLoginStatus;

var initialMemberStatus = function initialMemberStatus() {
  return {
    payload: {},
    type: "initialMemberStatus"
  };
};

exports.initialMemberStatus = initialMemberStatus;

var updateMemberStatus = function updateMemberStatus(isVistor, isReviewer, isPublisher) {
  return {
    payload: {
      isVistor: isVistor,
      isReviewer: isReviewer,
      isPublisher: isPublisher
    },
    type: "updateMemberStatus"
  };
};

exports.updateMemberStatus = updateMemberStatus;

var setMemberListFlag = function setMemberListFlag(value) {
  return {
    payload: value,
    type: "setMemberListFlag"
  };
};

exports.setMemberListFlag = setMemberListFlag;