import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/common.css";
import "../../public/css/NavBar.css";
import Logo from "../../Logo.svg";
import { useSelector, useDispatch } from "react-redux";
import * as memberModuel from "../../modules/member";
import {
  initialMember,
  wontUpdateMember,
  updateMember,
  updateLoginStatus,
  initialMemberStatus,
  updateMemberStatus,
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
    } = memberModuel.getLocalStorageData(localStorage);
    if (localStorage.getItem(ILocalStorage.getId) != null) {
      memberData = updateMember({
        id,
        account,
        userName,
        email,
        publicKey,
      });
      updateLoginStatusData = updateLoginStatus(true);
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher);
    }
    dispatch(updateLoginStatusData);
    dispatch(memberData);
    dispatch(memberStatusData);
    console.log("s:", isMember, isReviewer, isPublisher, account);
  }, []);

  const loginStatus = useSelector((s) => s.loginStatus);
  const account = useSelector((s) => s.member.account);
  const onClickLogout = async () => {
    let memberData = wontUpdateMember();
    memberData = initialMember();
    const result = await memberModuel.logout();

    dispatch(updateLoginStatus(false));
    dispatch(initialMember());
  };
  const onClickMemberCenter = () => {
    onChangeRouter("/member");
  };
  return (
    <div className={"navBar"}>
      <div className="container">
        <div className="navContent">
          <div className={"navLeft"}>
            <div className={"logo"}>
              <img
                className={"logoImg"}
                src={Logo}
                alt="logoImg"
                width={"158px"}
                onClick={() => onChangeRouter("/")}
              />
            </div>
          </div>
          <div className={"leftRight"}>
            <div className={"navFeature"}>
              <input className={"searchBar"} type="text" value={"搜尋"} />
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
              <button
                className={`${!loginStatus && "signinButton"} ${
                  loginStatus && "navDisplayBlock" && "signinButton"
                } ${!loginStatus && "navDisplayNone"}`}
                onClick={onClickMemberCenter}
              >
                {account}
              </button>
              <button
                className={`${
                  loginStatus && "navDisplayBlock" && "signinButton"
                } ${!loginStatus && "navDisplayNone"}`}
                onClick={onClickLogout}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
