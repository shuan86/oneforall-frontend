import React, { useEffect } from "react";
import "../../public/css/Dialog.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../public/css/MemberCard.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import { ArticleTagKind } from "../../modules/article";
import { makeStyles } from "@material-ui/core/styles";
import { apply } from "../../modules/reviewer";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const FormDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [applyContent, setApplyContent] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [selectUI, setSelectUI] = React.useState(false);

  const [tagKind, setTagKind] = React.useState([]);
  let tmpTagArray = [];
  useEffect(() => {
    for (const t of Object.keys(ArticleTagKind)) {
      tmpTagArray.push(t);
    }
    setTagKind(tmpTagArray);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSelectNewsTagChange = (event) => {
    const value = event.target.value;
    setTag(value);
  };
  const onClickApplyReviewer = async () => {
    const result = await apply(email, tag, applyContent);
    if (result.status == 200) {
      alert('申請成功')
    }
    handleClose();
  };
  return (
    <div className={"missionBtn"}>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        我想成為審查者
      </button>
      <div>
        <div className={open ? "dialog" : "none"}>
          <div className="background" onClick={handleClose}></div>
          <div className="front">
            <h3 id="form-dialog-title">審查者申請表單</h3>
            <div className="dialogSelect">
              <label htmlFor="" id="NewsKindLabel"></label>
              <select value={tag} id="select" onChange={onSelectNewsTagChange}>
                {tagKind.map((value, index) => {
                  return (
                    <option lry={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="formInput">
              <label htmlFor="">信箱</label>
              <input
                type="email"
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                }}
              />
            </div>
            <div className="formInput">
              <label htmlFor="">輸入原因</label>
              <textarea
                cols="10"
                rows="10"
                onChange={(e) => {
                  const value = e.target.value;
                  setApplyContent(value);
                }}
              ></textarea>
            </div>
            <div className="formInput">
              <input
                type="submit"
                value="確認送出"
                onClick={onClickApplyReviewer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormDialog;
