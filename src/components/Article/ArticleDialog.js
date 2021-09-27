import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "../../public/css/MemberCard.css";
import { getArticle, getBase64Str } from "../../modules/article";

const FormDialog = ({ isOpen, setOpen, articleId }) => {
  const [articleData, setArticleData] = useState({});
  const [imageState, setImageState] = useState("");
  const [imageUrtlState, setImageUrlState] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let articleData;
    let base64String = "";
    let tmpImgUrlData = "";
    const asyncFunc = async () => {
      if (isOpen) {
        const result = await getArticle(articleId);
        if (result) {
          articleData = result;
          if (result.imagesUrl) {

          } else {
            result.images[0] = await getBase64Str(result.images[0]);
            base64String = result.images[0];
          }
        }

        if (result.imagesUrl.length > 0) {
          const { data: imgUrlData } = result.imagesUrl[0];

          tmpImgUrlData = imgUrlData;
        }
      }
      setArticleData((pre) => (articleData ? articleData : pre));
      setImageState(base64String);
      setImageUrlState(isOpen && tmpImgUrlData ? tmpImgUrlData : "");
    };
    asyncFunc();
    return () => { };
  }, [selectedData]);

  return (
    <div>
      <div>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"1000px"}
          style={{ height: "100%", weidth: "600px", marginTop: "50px" }}
        >
          <DialogTitle id="form-dialog-title">假新聞簽核表格</DialogTitle>

          <DialogContent>
            <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
              標題:{articleData.title}
            </DialogContentText>
            <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
              內容:{articleData.content}
            </DialogContentText>

            <img src={imageUrtlState ? imageUrtlState : ""} alt="" />
            <img src={imageState ? imageState : ""} alt="" />
            <DialogContentText>
              <TextareaAutosize
                rows={4}
                rowsMax={4}
                aria-label="maximum height"
                placeholder="請輸入原因(限100字)"
                defaultValue=""
                style={{ width: "100%" }}
                onChange={onReasonChange}
              />
            </DialogContentText>
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
