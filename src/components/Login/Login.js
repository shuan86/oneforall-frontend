import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import configData from "../../config.json";
import axios from "axios";
import { encrypt } from "../../modules/encrypt";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initialMember, updateMember } from "../../actions/actions";
const LoginForm = () => {
  const [userId, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [errorMessage, setErrorMessage] = useState({
    userId: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const formData = {
    userId: userId,
    password: password,
  };
  const onClickSubmit = async () => {
    let data = initialMember();
    try {
      const rsaData = await encrypt(JSON.stringify(formData));
      const result = await axios.post(configData.SERVER_URL + "/login", {
        rsaData,
      });

      if (result.status == 200) {
        data = updateMember({ id: result.data.id, name: result.data.userName })
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("name", result.data.userName);
        history.push('/index')
      }
    } catch (error) {
      console.error("error:", error);
    }
    dispatch(data)

  };
  return (
    < div >
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
    </div >
  );
};
export default LoginForm;
