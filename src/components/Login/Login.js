import React, { useState } from "react";
import { EnrollLoginFiled as Field } from "../FormField/FormField";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, loginBodyData } from "../../modules/member";
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

  const onClickSubmit = async () => {
    let data = initialMember();
    const formData = { ...loginBodyData };
    formData.userId = userId;
    formData.password = password;
    const result = await login(formData)
    if (result != null && result.status == 200) {
      data = updateMember({ id: result.id, name: result.userName })
      history.push('/index')
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
