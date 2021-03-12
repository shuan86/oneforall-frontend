import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as memberMoudel from "../../modules/member";
import { getAllData as getLocalStorageData } from "../../modules/localstorage";

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
    const result = await memberMoudel.login(account, password);
    if (result != null && result.status == 200) {
      const memberData = {
        id: result.data.id,
        account: result.data.account,
        userNmae: result.data.userName,
        email: result.data.email,
        publicKey: result.data.publicKey,
      };
      const { isMember, isReviewer, isPublisher } = getLocalStorageData();
      loginData = updateMember(memberData);
      loginStatusData = updateLoginStatus(true);
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher);
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
        <button onClick={onClickSubmit}>送出</button>
      </div>
    </div>
  );
};
export default LoginForm;
