import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import "../../public/css/MemberCard.css";
const FormDialog = ({
  isOpen,
  setOpen,
  onClickFinalDecision,
  onReasonChange,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={"missionBtn"}>
      <div>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">同意與否表格</DialogTitle>
          <DialogContent>
            <TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              placeholder="請輸入原因(限100字)"
              defaultValue=""
              style={{ width: 400 }}
              onChange={onReasonChange}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                onClickFinalDecision(false);
              }}
              color="primary"
            >
              Disagree
            </Button>
            <Button
              onClick={() => {
                onClickFinalDecision(true);
              }}
              color="primary"
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default FormDialog;
