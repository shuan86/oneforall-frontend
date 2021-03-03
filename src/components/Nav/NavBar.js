import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/common.css";
import "../../public/css/NavBar.css";
import Logo from "../../Logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/member";
import {
  initialMember,
  wontUpdateMember,
  updateMember,
  updateLoginStatus,
  initialMemberStatus,
  updateMemberStatus,
} from "../../actions/actions";
import { ILocalStorage } from "../../modules/member";
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

    if (localStorage.getItem(ILocalStorage.id) != null) {
      memberData = updateMember({
        id: localStorage.getItem(ILocalStorage.id),
        userId: localStorage.getItem(ILocalStorage.userId),
        userName: localStorage.getItem(ILocalStorage.userName),
        email: localStorage.getItem(ILocalStorage.email),
        publicKey: localStorage.getItem(ILocalStorage.publicKey),

      });
      updateLoginStatusData = updateLoginStatus(true);
      const isMember = localStorage.getItem(ILocalStorage.isMember);
      const isReviewer = localStorage.getItem(ILocalStorage.isReviewer);
      const isPublisher = localStorage.getItem(ILocalStorage.isPublisher);
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher)
    }
    dispatch(updateLoginStatusData);
    dispatch(memberData);
    dispatch(memberStatusData)
  }, []);

  const loginStatus = useSelector((s) => s.loginStatus);
  const userId = useSelector((s) => s.member.userId);
  const onClickLogout = async () => {
    let memberData = wontUpdateMember();
    memberData = initialMember();
    const result = await logout();

    dispatch(updateLoginStatus(false));
    dispatch(initialMember());
  };
  const onClickMemberCenter = () => {
    onChangeRouter('/member')
  }
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
                className={`${!loginStatus && "signinButton"} ${loginStatus && "navDisplayNone"
                  }`}
                onClick={() => onChangeRouter("/login")}
              >
                登入
              </button>
              <button
                className={`${!loginStatus && "signinButton"} ${loginStatus && "navDisplayBlock" && "signinButton"
                  } ${!loginStatus && "navDisplayNone"}`}
                onClick={onClickMemberCenter}
              >
                {userId}
              </button>
              <button
                className={`${loginStatus && "navDisplayBlock" && "signinButton"
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
