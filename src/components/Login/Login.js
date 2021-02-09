import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import configData from "../../config.json";
import axios from "axios";
import { encrypt } from "../../modules/encrypt";

const LoginForm = () => {
  const [userId, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage] = useState({
    userId: "",
    password: "",
  });
  const data = {
    userId: userId,
    password: password,
  };
  const onClickSubmit = async () => {
    try {
      const rsaData = await encrypt(JSON.stringify(data));
      const result = await axios.post(configData.SERVER_URL + "/login", {
        rsaData,
      });
      localStorage.setItem("token", result);
      const t = localStorage.getItem("token");
      console.log("token:", t);
      console.log("result:", result);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <div>
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
      <button onClick={onClickSubmit}>submit</button>
    </div>
  );
};
export default LoginForm;
