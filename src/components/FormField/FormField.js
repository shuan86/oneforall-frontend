import React from "react";
export const EnrollLoginFiled = ({
  htmlFor,
  labelContent,
  type,
  name,
  id,
  value,
  setValue,
  errorMessage,
  setErrorMessage,
  thisFieldErrorMsg,
}) => {
  const validateLen = (value, min, max) => {
    const minLenValid = value.length >= min;
    const maxLenValid = value.length <= max;
    let errorMsg = "";
    if (minLenValid == false) errorMsg = "is too short";
    else if (maxLenValid == false) errorMsg = "is too long";
    else errorMsg = "";
    return errorMsg;
  };
  const validateField = (fieldName, value) => {
    let validateLenMsg = "";
    switch (fieldName) {
      case "account":
        validateLenMsg = validateLen(value, 1, 10);
        setErrorMessage({
          ...errorMessage,
          account: validateLenMsg,
        });
      case "password":
        validateLenMsg = validateLen(value, 1, 10);
        setErrorMessage({
          ...errorMessage,
          password: validateLenMsg,
        });
        break;
      case "userName":
        validateLenMsg = validateLen(value, 1, 10);
        setErrorMessage({
          ...errorMessage,
          userName: validateLenMsg,
        });
      case "email":
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errorMessage.email = emailValid ? "" : " is invalid";
        setErrorMessage({ ...errorMessage, email: errorMessage.email });
        break;
      case "publicKey":
        validateLenMsg = validateLen(value, 1, 50);
        setErrorMessage({
          ...errorMessage,
          publicKey: validateLenMsg,
        });
      default:
        break;
    }
  };
  return (
    <div className="enrollData">
      <label htmlFor={htmlFor}>{labelContent} </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(v) => {
          validateField(name, v.target.value);
          setValue(v.target.value);
        }}
      />
      {thisFieldErrorMsg.length > 0 ? <h2>{thisFieldErrorMsg}</h2> : null}
    </div>
  );
};
