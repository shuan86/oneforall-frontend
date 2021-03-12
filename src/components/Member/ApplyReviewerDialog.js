import React, { useEffect } from "react";
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
import { NewsTagKind } from "../../interfaces/INews";
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
    for (const t of Object.keys(NewsTagKind)) {
      tmpTagArray.push(t);
      console.log("data:", t);
    }
    setTagKind(tmpTagArray);
    console.log("tmpTagArray:", tmpTagArray);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSelectNewsTagChange = (event) => {
    const value = event.target.value;
    console.log("onSelectNewsTagChange:", value);
    console.log("tag:", value);
    setTag(value);
  };
  const onClickApplyReviewer = async () => {
    const result = await apply(email, tag, applyContent);
    if (result.status == 200) {
      console.log("apply reviewer scuessful");
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
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">申請表格</DialogTitle>

          <DialogContent>
            <FormControl className={classes.formControl}>
              <InputLabel id="NewsKindLabel">新聞種類</InputLabel>
              <Select
                labelId="NewsKindLabel"
                id="select"
                value={tag}
                onChange={onSelectNewsTagChange}
                open={selectUI}
                onOpen={() => setSelectUI(true)}
                onClose={() => setSelectUI(false)}
              >
                {tagKind.map((value, index) => {
                  return (
                    <MenuItem lry={index} value={value}>
                      <em>{value}</em>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
            />
            <TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              placeholder="請輸入原因(限100字)"
              defaultValue=""
              style={{ height: 150, width: "100% " }}
              onChange={(e) => {
                const value = e.target.value;
                setApplyContent(value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onClickApplyReviewer} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default FormDialog;
