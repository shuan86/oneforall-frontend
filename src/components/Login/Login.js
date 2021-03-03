import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, loginBodyData } from "../../modules/member";
import {
  initialMember,
  updateMember,
  updateLoginStatus,
  updateMemberStatus,
  initialMemberStatus
} from "../../actions/actions";
import { ILocalStorage } from "../../modules/member";
import * as contract from "../../modules/smartcontract";
const LoginForm = () => {
  const [userId, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage] = useState({
    userId: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const onClickSubmit = async () => {
    let loginData = initialMember();
    let loginStatusData = updateLoginStatus(false);
    let memberStatusData = initialMemberStatus();
    const formData = { ...loginBodyData };
    formData.userId = userId;
    formData.password = password;
    const result = await login(formData);
    if (result != null && result.status == 200) {
      const memberData = { id: result.data.id, userId: result.data.userId, userNmae: result.data.userName, email: result.data.email, publicKey: result.data.publicKey }
      const pubKey = result.data.publicKey;
      const isMember = await contract.isMember(pubKey);
      const isReviewer = await contract.isReviewer(pubKey);
      const isPublisher = await contract.isPublisher(pubKey);
      loginData = updateMember(memberData);
      loginStatusData = updateLoginStatus(true);
      memberStatusData = updateMemberStatus(isMember, isReviewer, isPublisher)
      localStorage.setItem(ILocalStorage.token, result.data.token);
      localStorage.setItem(ILocalStorage.id, result.data.id);
      localStorage.setItem(ILocalStorage.userId, result.data.userId);
      localStorage.setItem(ILocalStorage.userName, result.data.userName);
      localStorage.setItem(ILocalStorage.email, result.data.email);
      localStorage.setItem(ILocalStorage.publicKey, result.data.publicKey);
      localStorage.setItem(ILocalStorage.isVistor, isMember);
      localStorage.setItem(ILocalStorage.isReviewer, isReviewer);
      localStorage.setItem(ILocalStorage.isPublisher, isPublisher);
      history.push("/index");
    } else {
      alert("login fail");
    }
    dispatch(loginStatusData);
    dispatch(loginData);
    dispatch(memberStatusData);
    console.log('login memberStatusData:', memberStatusData);
  };
  return (
    <div className="enrollInfo">
      <div className="enrollContent">
        <h3>登入</h3>
        <Field
          htmlFor="userId"
          labelContent="userId:"
          type="text"
          name="userId"
          id="userId"
          value={userId}
          setValue={setUserId}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.userId}
        />
        <Field
          htmlFor="password"
          labelContent="password:"
          type="password"
          name="password"
          id="password"
          value={password}
          setValue={setPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.password}
        />
      </div>
      <button onClick={onClickSubmit}>送出</button>
    </div>
  );
};
export default LoginForm;
