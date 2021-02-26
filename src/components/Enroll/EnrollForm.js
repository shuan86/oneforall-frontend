import React, { useState } from "react";
import axios from "axios";
import configData from "../../config.json";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import { encrypt } from "../../modules/encrypt";
import { useHistory } from "react-router-dom";
const EnrollForm = () => {
  const [userId, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [userName, setUserName] = useState("a");
  const [email, setEmail] = useState("da@gmail.com");
  const [publicKey, setPublicKey] = useState("123");
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState({
    userId: "",
    password: "",
    userName: "",
    email: "",
    publicKey: "",
  });

  const onClickSubmit = async () => {

    const data = {
      id: 0,
      userId: userId,
      password: password,
      userName: userName,
      email: email,
      publicKey: publicKey,
      token: "",
    };
    try {
      const dataStr = JSON.stringify(data);
      const rsaData = await encrypt(dataStr);
      const result = await axios.post(configData.SERVER_URL + "/enroll", {
        rsaData,
      });
      console.log("enroll result:", result.status);
      if (result.status == 200) {
        console.log("enroll result: successful");
        history.push('/login')
      }
    } catch (e) {
      console.log(e);
      alert('enroll fail')
    }
  };
  return (
    <div className="enrollInfo">
      <div className="enrollContent">
        <h3>註冊會員</h3>
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
      <button onClick={onClickSubmit}>送出</button>
    </div>
  );
};
export default EnrollForm;
