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

    if (localStorage.getItem(ILocalStorage.id) != null) {
      memberData = updateMember({
        id: localStorage.getItem(ILocalStorage.id),
        userId: localStorage.getItem(ILocalStorage.userId),
      });
      updateLoginStatusData = updateLoginStatus(true);
    }
    dispatch(updateLoginStatusData);
    dispatch(memberData);
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
                onClick={() => {}}
              >
                {userId}
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
