import React, { useState, useEffect } from "react";
import { useFirstUpdate } from "./useFirstUpdate";
import { useDispatch, useSelector } from "react-redux";
import { loadMemberInfo } from "../modules/member";
import {
  initialMember,
  updateMember,
  updateLoginStatus,
  updateMemberStatus,
  initialMemberStatus,
} from "../actions/actions";
const loadData = async () => {
  let memberStatusData = initialMemberStatus();
  let loginData = initialMember();
  let loginStatusData = updateLoginStatus(false);
  let privateMemberInfo;
  privateMemberInfo = await loadMemberInfo();
  if (privateMemberInfo) {
    loginData = updateMember(privateMemberInfo);
    loginStatusData = updateLoginStatus(true);
    memberStatusData = updateMemberStatus(
      privateMemberInfo.isMember,
      privateMemberInfo.isReviewer,
      privateMemberInfo.isPublisher
    );
  }
  const isSucessfulFlg = privateMemberInfo ? true : false;
  return { isSucessfulFlg, memberStatusData, loginData, loginStatusData };
};
export const useAfterLoginLoadData = (needLoadData) => {
  const [isSucessfulGetData, setIsSucessfulGetData] = useState(false);
  const isNotFirst = useFirstUpdate();
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      let tmpIsSucessfulFlag;
      setIsSucessfulGetData(false);

      if (isNotFirst && needLoadData) {
        const {
          isSucessfulFlg,
          memberStatusData,
          loginData,
          loginStatusData,
        } = await loadData();
        tmpIsSucessfulFlag = isSucessfulFlg;
        dispatch(loginStatusData);
        dispatch(loginData);
        dispatch(memberStatusData);
      }
      setIsSucessfulGetData(
        isNotFirst && needLoadData ? tmpIsSucessfulFlag : false
      );
    };
    asyncFunc();
    return () => {};
  }, [needLoadData]);
  return isSucessfulGetData;
};
export const useFirstTimeLoadData = () => {
  const [isSucessfulGetData, setIsSucessfulGetData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      setIsSucessfulGetData(false);
      const {
        isSucessfulFlg,
        memberStatusData,
        loginData,
        loginStatusData,
      } = await loadData();
      console.log("loginData:", loginData);
      dispatch(loginStatusData);
      dispatch(loginData);
      dispatch(memberStatusData);
      setIsSucessfulGetData(isSucessfulFlg);
    };
    asyncFunc();
    return () => {};
  }, []);
  return isSucessfulGetData;
};
