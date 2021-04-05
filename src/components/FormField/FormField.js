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
      case "department":
        validateLenMsg = validateLen(value, 1, 20);
        setErrorMessage({
          ...errorMessage,
          department: validateLenMsg,
        });
      case "profession":
        validateLenMsg = validateLen(value, 1, 20);
        setErrorMessage({
          ...errorMessage,
          profession: validateLenMsg,
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
export const EnrollRadio = ({
  selectedValue, labelContent, groupName, labelArray, idArray, valueArray, onRadioChange }) => {
  return (
    <div className="enrollData">
      <label>{labelContent} </label>
      {
        idArray.map((v, i) => {
          if (i == 0)
            return (
              <div key={i}>
                <input type="radio" id={v} name={groupName} value={valueArray[i]} checked={selectedValue == valueArray[i]} onChange={onRadioChange} />
                <label htmlFor={v} >{labelArray[i]}</label>
              </div>
            )
          else {
            return (
              <div key={i}>
                <input type="radio" id={v} name={groupName} value={valueArray[i]} checked={selectedValue == valueArray[i]} onChange={onRadioChange} />
                <label htmlFor={v} >{labelArray[i]}</label>
              </div>
            )
          }
        })

      }
    </div>
  );
}
export const EnrollSelect = ({ selectedValue, labelContent, onSelectChange, labelArray, valueArray }) => {
  return (
    <div className="enrollData">
      <label>
        {labelContent}
        <select value={selectedValue} onChange={onSelectChange}>
          {
            valueArray.map((v, i) => {
              return <option key={i} value={v}>{labelArray[i]}</option>
            })
          }

        </select>
      </label>
    </div>
  )
}