import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/common.css";
import "../../public/css/NavBar.css";
import Logo from "../../Logo.svg";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import configData from "../../config.json";
import { initialMember, wontUpdateMember, updateMember } from "../../actions/actions";
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onChangeRouter = (router) => {
    history.push(router);
  };
  const id = useSelector(s => s.member.id);
  const name = useSelector(s => s.member.name);
  useEffect(() => {
    let data = initialMember();
    if (localStorage.getItem("id") != null && localStorage.getItem("name") != null)
      data = updateMember({ id: localStorage.getItem('id'), name: localStorage.getItem('name') })
    dispatch(data)
  }, [])
  const onClickLogout = async () => {
    let data = wontUpdateMember();
    const JWTtoken = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${JWTtoken}` }
    };
    const bodyParameters = {
      id
    };
    const result = await axios.post(configData.SERVER_URL + '/logout', bodyParameters, config)
    if (result.status == 200) {
      data = initialMember()
      localStorage.clear('id');
      localStorage.clear('name');
      localStorage.clear('toekn');
    }
    dispatch(data)
    console.log('result:', result);
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
                className={`signupButton ${name && 'navDisplayNone'}`}
                onClick={() => onChangeRouter("/enroll")}
              >
                註冊
              </button>
              <button
                className={`${(!name) && 'signinButton'} ${name && 'navDisplayNone'}`}
                onClick={() => onChangeRouter("/login")}
              >
                登入
              </button>
              <button
                className={`${(!name) && 'signinButton'} ${name && 'navDisplayBlock' && 'signinButton'} ${(!name) && 'navDisplayNone'}`}
                onClick={() => { }}
              >
                {name}
              </button>
              <button
                className={`${name && 'navDisplayBlock' && 'signinButton'} ${(!name) && 'navDisplayNone'}`}
                onClick={onClickLogout}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default NavBar;
