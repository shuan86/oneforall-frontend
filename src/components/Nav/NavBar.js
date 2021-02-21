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
} from "../../actions/actions";
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onChangeRouter = (router) => {
    history.push(router);
  };
  useEffect(() => {
    let data = initialMember();
    if (
      localStorage.getItem("id") != null &&
      localStorage.getItem("userId") != null
    )
      data = updateMember({
        id: localStorage.getItem("id"),
        userId: localStorage.getItem("userId"),
      });
    dispatch(data);
  }, []);
  const id = useSelector((s) => s.member.id);
  const userId = useSelector((s) => s.member.userId);

  const onClickLogout = async () => {
    let data = wontUpdateMember();
    const result = await logout();
    data = initialMember();
    dispatch(data);
    //  console.log("onClickLogout");
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
                className={`signupButton ${userId && "navDisplayNone"}`}
                onClick={() => onChangeRouter("/enroll")}
              >
                註冊
              </button>
              <button
                className={`${!userId && "signinButton"} ${
                  userId && "navDisplayNone"
                }`}
                onClick={() => onChangeRouter("/login")}
              >
                登入
              </button>
              <button
                className={`${!userId && "signinButton"} ${
                  userId && "navDisplayBlock" && "signinButton"
                } ${!userId && "navDisplayNone"}`}
                onClick={() => {}}
              >
                {userId}
              </button>
              <button
                className={`${userId && "navDisplayBlock" && "signinButton"} ${
                  !userId && "navDisplayNone"
                }`}
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
