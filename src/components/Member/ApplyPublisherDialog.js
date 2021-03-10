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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">申請表格</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="companyName"
              label="請輸入公司名稱"
              type="text"
              fullWidth
              value={companyName}
              onChange={(v) => setCompanyName(v.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="co"
              label="請輸入公司行號"
              type="text"
              fullWidth
              value={co}
              onChange={(v) => setCO(v.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="請輸入公司電話"
              type="text"
              fullWidth
              value={phone}
              onChange={(v) => setPhone(v.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="請輸入公司信箱"
              type="email"
              fullWidth
              value={email}
              onChange={(v) => setEmail(v.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onClickApplyPublisher} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default FormDialog;
