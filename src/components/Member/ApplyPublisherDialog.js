import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../public/css/MemberCard.css";
import { apply } from "../../modules/publisher";
const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [companyName, setCompanyName] = useState("companyName");
  const [co, setCO] = useState("co");
  const [phone, setPhone] = useState("phone");
  const [email, setEmail] = useState("email");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onClickApplyPublisher = async () => {
    const result = await apply(companyName, co, phone, email);
    if (result.status == 200) {
      console.log("apply publisher scuessful");
    }
    handleClose();
  };
  return (
    <div className={"missionBtn"}>
      <button onClick={handleClickOpen}>我想成為發文者</button>
      <div>
        <div className={open? "dialog" : "none"} >
          <div className="background" onClick={handleClose}></div>
          <div className="front">
            <h3 id="form-dialog-title">發文者申請表單</h3>
            <div className="formInput">
              <label htmlFor="">請輸入公司名稱</label>
              <input type="text" 
                id="companyName"
                onChange={(v) => setCompanyName(v.target.value)}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">請輸入公司行號</label>
              <input type="text" 
                id="co"
                onChange={(v) => setCO(v.target.value)}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">請輸入公司電話</label>
              <input type="text"
                id="phone"
                onChange={(v) => setPhone(v.target.value)}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">請輸入公司信箱</label>
              <input type="email" 
                id="email"
                onChange={(v) => setEmail(v.target.value)}
              />
            </div>
            <div className="formInput">
              <input type="submit" value="確認送出" onClick={onClickApplyPublisher}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormDialog;
