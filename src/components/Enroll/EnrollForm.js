import React, { useState } from "react";
import axios from "axios";
import configData from "../../config.json";
import { EnrollLoginFiled as Field, EnrollRadio as Radio, EnrollSelect as Select } from "../FormField/FormField";

import * as memberModuel from "../../modules/member";
import { useHistory } from "react-router-dom";
const EnrollForm = () => {
  const [account, setUserId] = useState("a");
  const [password, setPassword] = useState("123");
  const [userName, setUserName] = useState("a");
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState(memberModuel.Gender.female);
  const [education, setEducation] = useState(memberModuel.Education.university);
  const [profession, setProfession] = useState("學生");
  const [department, setDepartment] = useState("互動設計所");

  const [email, setEmail] = useState("da@gmail.com");
  const [publicKey, setPublicKey] = useState(
    "0x59982711466fD1d4C2F1C1F710f721651BCCFDb3"
  );
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState({
    account: "",
    password: "",
    userName: "",
    userAge: 0,
    profession: '',
    department: '',
    email: "",
    publicKey: "",
  });
  const onGenderChange = (e) => {
    const value = e.target.value
    setGender(value)
  }
  const onEducationChange = (e) => {
    const value = e.target.value
    setEducation(value)
  }

  const onClickEnroll = async () => {
    const result = await memberModuel.enroll(
      account,
      password,
      userName,
      profession, age, gender, education, department,
      email,
      publicKey
    );
    if (result && result.status == 200) {
      history.push("/login");
    } else {
      alert("enroll fail");
    }

  };
  return (
    <div className="enrollInfo">
      <div className="enrollContent">
        <h3>註冊會員</h3>

        <div>
          <Field
            htmlFor="account"
            labelContent="帳號"
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
          <Field
            htmlFor="userName"
            labelContent="真實姓名"
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
            htmlFor="userProfession"
            labelContent="工作職稱"
            type="text"
            name="userProfession"
            id="userProfession"
            value={profession}
            setValue={setProfession}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            thisFieldErrorMsg={errorMessage.profession}
          />
          <Field
            htmlFor="userAge"
            labelContent="年齡"
            type="number"
            name="userAge"
            id="userAge"
            value={age}
            setValue={setAge}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            thisFieldErrorMsg={errorMessage.userAge}
          />
          <Radio
            selectedValue={gender}
            labelContent="性別"
            groupName="gender"
            labelArray={['女', '男']}
            idArray={[memberModuel.Gender.female, memberModuel.Gender.male]}
            valueArray={[memberModuel.Gender.female, memberModuel.Gender.male]}
            onRadioChange={onGenderChange}
          />
          <Select
            selectedValue={education}
            labelContent="教育程度"
            onSelectChange={onEducationChange}
            labelArray={["小學", "國中", "高中", "大學", "研究所", "博士班", "其他"]}
            valueArray={[memberModuel.Education.elementarySchool, memberModuel.Education.juniorHighSchool, memberModuel.Education.seniorHighSchool, memberModuel.Education.university, memberModuel.Education.graduateSchool, memberModuel.Education.doctoralProgram, memberModuel.Education.other]}
          />
          <Field
            htmlFor="userDepartment"
            labelContent="科系"
            type="text"
            name="userDepartment"
            id="userDepartment"
            value={department}
            setValue={setDepartment}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            thisFieldErrorMsg={errorMessage.department}
          />
          <Field
            htmlFor="email"
            labelContent="電子信箱"
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
            labelContent="publicKey"
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
    </div>
  );
};
export default EnrollForm;
