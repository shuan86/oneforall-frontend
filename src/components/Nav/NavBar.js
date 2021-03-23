import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/common.css";
import "../../public/css/NavBar.css";
import Logo from "../../Logo.svg";
import { useSelector, useDispatch } from "react-redux";
import * as memberModuel from "../../modules/member";
import { getAllData as getLocalStorageData } from "../../modules/localstorage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import {
  initialMember,
  wontUpdateMember,
  updateMember,
  updateLoginStatus,
  initialMemberStatus,
  updateMemberStatus,
  setMemberListFlag,
} from "../../actions/actions";
import { ILocalStorage } from "../../interfaces/IMember";
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onChangeRouter = (router) => {
    history.push(router);
  };
  useEffect(() => {
    let memberData = initialMember();
    let updateLoginStatusData = updateLoginStatus(false);
    let memberStatusData = initialMemberStatus();
    const {
      id,
      account,
      userName,
      email,
      publicKey,
      isMember,
      isReviewer,
      isPublisher,
    } = getLocalStorageData(localStorage);
    if (localStorage.getItem(ILocalStorage.getMemberId) != null) {
      memberData = updateMember({
        id,
        account,
        userName,
        email,
        publicKey,
      });
      updateLoginStatusData = updateLoginStatus(true);
      // memberStatusData = updateMemberStatus(
      //   Boolean(isMember),
      //   Boolean(isReviewer),
      //   Boolean(isPublisher)
      // );
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher);
    }
    dispatch(updateLoginStatusData);
    dispatch(memberData);
    dispatch(memberStatusData);
  }, []);

  const loginStatus = useSelector((s) => s.loginStatus);
  const account = useSelector((s) => s.member.account);
  const memberListFlag = useSelector((s) => s.flag);
  const onClickLogout = async () => {
    let memberData = wontUpdateMember();
    memberData = initialMember();
    const result = await memberModuel.logout();

    dispatch(updateLoginStatus(false));
    dispatch(initialMember());
    history.push("/login");
  };
  const onClickMemberCenter = () => {
    onChangeRouter("/member");
  };

  const onClickMemberListFlag = () => {
    dispatch(setMemberListFlag());
  };
  const onClickPlaceGamePage = () => {
    history.push("/placeGame");
  };
  return (
    <div className={"navBar"}>
      <div className="container">
        <div className="navContent">
          <img
            className={"logo"}
            src={Logo}
            alt="logoImg"
            width={"158px"}
            onClick={() => onChangeRouter("/")}
          />
          <div className={"leftRight"}>
            <div className={"navFeature"}>
              <div className="searchBarContainer">
                <button className={"searchBarIcon"}></button>
                <input
                  className={"searchBar"}
                  type="text"
                  placeholder={"搜尋"}
                />
              </div>
              <button
                className={`signupButton ${loginStatus && "navDisplayNone"}`}
                onClick={() => onChangeRouter("/enroll")}
              >
                註冊
              </button>
              <button
                className={`${!loginStatus && "signinButton"} ${
                  loginStatus && "navDisplayNone"
                }`}
                onClick={() => onChangeRouter("/login")}
              >
                登入
              </button>
              <div className={memberListFlag ? "memberList" : "none"}>
                <div
                  className="memberListItem"
                  onClick={() => {
                    onClickMemberListFlag();
                    onClickMemberCenter();
                  }}
                >
                  <AccountBoxIcon fontSize="small" />
                  <div className="memberListItemTitle">會員帳號</div>
                </div>
                <div
                  className="memberListItem"
                  onClick={() => {
                    onClickMemberListFlag();
                    onClickPlaceGamePage();
                  }}
                >
                  <SportsEsportsIcon fontSize="small" />
                  <div className="memberListItemTitle">PlaceGame</div>
                </div>
                <div className="memberListBorder"></div>
                <div
                  className="memberListItem"
                  onClick={() => {
                    onClickMemberListFlag();
                    onClickLogout();
                  }}
                >
                  <ExitToAppIcon fontSize="small" />
                  <div className="memberListItemTitle">登出</div>
                </div>
                <div className="fakeDiv" onClick={onClickMemberListFlag}></div>
              </div>
              <div
                className={`${
                  loginStatus && "navDisplayBlock" && "navUserInfo"
                } ${!loginStatus && "navDisplayNone"}`}
                onClick={onClickMemberListFlag}
              >
                <div className="navUserInfoID">{account}</div>
                <img
                  src="static/media/author.7613283f.jpg"
                  alt="Background"
                  className="navUserInfoPhoto"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
