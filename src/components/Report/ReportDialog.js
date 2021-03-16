import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import "../../public/css/MemberCard.css";
import { createReportedNews } from "../../modules/article";
const FormDialog = ({
    isOpen,
    setOpen,
    onSelectArticleId

}) => {
    const [evidenceState, setEvidenceState] = useState('')
    const handleClose = () => {
        setOpen(false);
    };
    const onReasonChange = (event) => {
        setEvidenceState(event.target.value);
    }
    const onClickSendReport = async () => {
        const result = await createReportedNews(onSelectArticleId, evidenceState)
        if (result) {

        }
        setOpen(false)
    }
    //missionBtn
    return (
        <div >
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
                            onClick={() => onClickSendReport()}
                            color="primary"
                        >
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};
export default FormDialog;
