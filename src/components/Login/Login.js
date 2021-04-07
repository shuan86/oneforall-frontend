import React, { useState, useEffect } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import * as memberMoudel from "../../modules/member";
import * as localStorage from "../../modules/localstorage";
import { useAfterLoginLoadData } from "../../hooks/useLoadData";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [account, setAccountId] = useState("c");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage] = useState({
    account: "",
    password: "",
  });
  const [isSucessfulLogin, setIsSucessfulLogin] = useState(false);
  const history = useHistory();
  // const dispatch = useDispatch();
  // const isNotFirst = useFirstUpdate();
  const onClickSubmit = async () => {
    const memberData = await memberMoudel.login(account, password);
    console.log("memberData:", memberData);

    if (!memberData) {
      alert("login fail");
    } else {
    }

    setIsSucessfulLogin(memberData ? true : false);
  };
  const isSucessfulGetData = useAfterLoginLoadData(isSucessfulLogin);
  useEffect(() => {
    if (isSucessfulGetData) history.push("/index");
    return () => {};
  }, [isSucessfulGetData]);
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
