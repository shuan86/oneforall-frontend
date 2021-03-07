import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../public/css/MemberCard.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { NewsTagKind } from "../../interfaces/INews";

const FormDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [applyContent, setApplyContent] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [tagKind, setTagKind] = React.useState([]);
    let tmpTagArray = [];
    useEffect(() => {

        for (const t of Object.keys(NewsTagKind)) {
            tmpTagArray.push(t)
        }

    }, [])
    setTagKind(tmpTagArray)
    console.log('tmpTagArray:', tmpTagArray);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickApplyReviewer = async () => {
        const result = await apply(email, tag, applyContent);
        console.log("onClickApplyPublisher:", result);
        handleClose();
    };
    return (
        <div className={'missionBtn'}>
            <button onClick={handleClickOpen}>我想成為審查者</button>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">申請表格</DialogTitle>

                    <DialogContent>
                        <InputLabel id="NewsKindLabel">新聞種類</InputLabel>
                        <Select
                            labelId="NewsKindLabel"
                            id="demo-simple-select"

                        >
                            {
                                tagKind.map((v, index) => {

                                    return <MenuItem key={index} value={10}>index</MenuItem>
                                })
                            }


                            {/* <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={(e) => {
                                const value = e.target.value
                                setEmail(value)
                            }}
                        />
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            placeholder="請輸入原因(限100字)"
                            defaultValue=""
                            style={{ height: 150, width: "100% " }}
                            onChange={(e) => {
                                const value = e.target.value
                                setApplyContent(value)
                            }}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
export default FormDialog;