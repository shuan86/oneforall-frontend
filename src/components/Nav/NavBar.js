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
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuIcon from '@material-ui/icons/Menu';

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
  const [offsetWid, setOffsetWid] = useState(0);
  const [navFlag, setNavFlag] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [phoneNavFlag, setPhoneNavFlag] = useState(false);
  
  // var offsetWid = document.documentElement.clientWidth; //視窗寬度
  const onChangeRouter = (router) => {
    setPhoneNavFlag(false);
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
    }
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher);
     console.log('memberStatusData:',memberStatusData);
    dispatch(updateLoginStatusData);
    dispatch(memberData);
    dispatch(memberStatusData);
    setOffsetWid(document.documentElement.clientWidth)
    window.addEventListener('resize', e => {setOffsetWid(document.documentElement.clientWidth)});//註冊偵測寬度改變
    return(
      window.removeEventListener('resize', e => {setOffsetWid(document.documentElement.clientWidth)})//移除偵測寬度改變
    )
  }, [offsetWid]);
  useEffect(() => {
    let f
    window.addEventListener('scroll',scrollHiddenNav)
    return () => {
      window.removeEventListener('scroll',scrollHiddenNav)
    }
  }, [window.scrollY]);

  const loginStatus = useSelector((s) => s.loginStatus);
  const account = useSelector((s) => s.member.account);
  const memberListFlag = useSelector((s) => s.flag);
  const scrollHiddenNav = () => {
    let f
    window.scrollY > lastScrollY ? f = false : f = true
    setLastScrollY(window.scrollY)
    setNavFlag(f);
  }
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
    if(offsetWid < 810) return
    dispatch(setMemberListFlag());
  };

  const onClickPhoneNavFlag = () => {
    setPhoneNavFlag(!phoneNavFlag)
  }
  const onClickPixelGamePage = () => {
    history.push("/pixelGame");
  };
  return (
    <div className={"navBar"} style={navFlag ? {top:'0px'} : {top:'-65px'}}>
      <div className="container">
        <div className="navContent">
          <div>
            <img
              className={"logo"}
              src={Logo}
              alt="logoImg"
              width={"158px"}
              onClick={() => onChangeRouter("/")}
            />
          </div>
          <div className={offsetWid < 810 ? "hambergurButton" : "none"} onClick={onClickPhoneNavFlag}><MenuIcon /></div>
          {/* <div className={phoneNavFlag ? "responsiveNav" : "none"}> */}
          <div className={"closeNavButton"} style={offsetWid < 810 && phoneNavFlag ? {opacity: 1,visibility:'visible'} : {opacity: 0,visibility:'hidden'}}onClick={onClickPhoneNavFlag}><CloseOutlinedIcon fontSize='large'/></div>
          <div className={ "responsiveNav"} style={offsetWid < 810 && !phoneNavFlag ? {right:'-800px'} : {right:"0"}}>
            <div className="linkList">
              <div>新聞</div>
              <div>討論</div>
            </div>
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
              <div className={memberListFlag ? "memberList phoneDisplay" : "none phoneDisplay"}>
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
                    onClickPixelGamePage();
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
                <div className={offsetWid < 810 ? "none" : "fakeDiv"} onClick={onClickMemberListFlag}></div>
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
