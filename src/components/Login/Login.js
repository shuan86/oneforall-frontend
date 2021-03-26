import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as memberMoudel from "../../modules/member";
import * as localStorage from "../../modules/localstorage";

import {
  initialMember,
  updateMember,
  updateLoginStatus,
  updateMemberStatus,
  initialMemberStatus,
} from "../../actions/actions";

const LoginForm = () => {
  const [account, setAccountId] = useState("c");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage] = useState({
    account: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const onClickSubmit = async () => {
    let loginData = initialMember();
    let loginStatusData = updateLoginStatus(false);
    let memberStatusData = initialMemberStatus();
    const memberData = await memberMoudel.login(account, password);
    if (memberData) {
      localStorage.saveAllData(
        memberData.memberId,
        memberData.token,
        memberData.account,
        memberData.userName,
        memberData.email,
        memberData.publicKey,
        memberData.isMember,
        memberData.isReviewer,
        memberData.isPublisher
      );
      loginData = updateMember(memberData);
      loginStatusData = updateLoginStatus(true);
      memberStatusData = updateMemberStatus(
        memberData.isMember,
        memberData.isReviewer,
        memberData.isPublisher
      );
      history.push("/index");
    } else {
      alert("login fail");
    }
    dispatch(loginStatusData);
    dispatch(loginData);
    dispatch(memberStatusData);
  };
  return (
    <div className="enrollInfo">
      <div className="enrollContent">
        <h3>登入</h3>
        <Field
          htmlFor="account"
          labelContent="帳號"
          type="text"
          name="account"
          id="account"
          value={account}
          setValue={setAccountId}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.account}
        />
        <Field
          htmlFor="password"
          labelContent="密碼"
          type="password"
          name="password"
          id="password"
          value={password}
          setValue={setPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.password}
        />
        <button onClick={onClickSubmit}>登入</button>
      </div>
    </div>
  );
};
export default LoginForm;
