import React, { useState } from "react";
import axios from "axios";
import configData from "../../config.json";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import * as memberModuel from "../../modules/member";
import { useHistory } from "react-router-dom";
const EnrollForm = () => {
  const [account, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [userName, setUserName] = useState("a");
  const [email, setEmail] = useState("da@gmail.com");
  const [publicKey, setPublicKey] = useState(
    "0x59982711466fD1d4C2F1C1F710f721651BCCFDb3"
  );
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState({
    account: "",
    password: "",
    userName: "",
    email: "",
    publicKey: "",
  });

  const onClickEnroll = async () => {
    const result = await memberModuel.enroll(
      account,
      password,
      userName,
      email,
      publicKey
    );
    if (result.status == 200) {
      history.push("/login");
    } else {
      alert("enroll fail");
    }
    // const data = {
    //   id: 0,
    //   account: account,
    //   password: password,
    //   userName: userName,
    //   email: email,
    //   publicKey: publicKey,
    //   token: "",
    // };
    // try {
    //   const dataStr = JSON.stringify(data);
    //   console.log("enroll:", dataStr);
    //   const rsaData = await encrypt(dataStr);
    //   console.log("rsaData:", rsaData);
    //   // const rsaData = dataStr;
    //   const result = await axios.post(configData.SERVER_URL + "/enroll", {
    //     rsaData,
    //   });
    //   console.log("enroll result:", result.status);
    //   if (result.status == 200) {
    //     console.log("enroll result: successful");
    //     history.push("/login");
    //   }
    // } catch (e) {
    //   console.log(e);
    //   alert("enroll fail");
    // }
  };
  return (
    <div className="enrollInfo">
      <div className="enrollContent">
        <h3>註冊會員</h3>
        <Field
          htmlFor="account"
          labelContent="account:"
          type="text"
          name="account"
          id="account"
          value={account}
          setValue={setUserId}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.account}
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
        <Field
          htmlFor="userName"
          labelContent="userName:"
          type="text"
          name="userName"
          id="userName"
          value={userName}
          setValue={setUserName}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.userName}
        />
        <Field
          htmlFor="email"
          labelContent="email:"
          type="email"
          name="email"
          id="email"
          value={email}
          setValue={setEmail}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.email}
        />
        <Field
          htmlFor="publicKey"
          labelContent="publicKey:"
          type="text"
          name="publicKey"
          id="publicKey"
          value={publicKey}
          setValue={setPublicKey}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          thisFieldErrorMsg={errorMessage.publicKey}
        />
      </div>
      <button onClick={onClickEnroll}>送出</button>
    </div>
  );
};
export default EnrollForm;
