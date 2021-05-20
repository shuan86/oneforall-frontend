import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logoImage from '../../public/images/logo_opacity.png';




import '../../public/css/DailyTask.css';

const DailyTaskDialog = ({ isOpen, setIsOpen }) => {
    const opacityTimerId = useRef()
    const countDownTimerId = useRef()
    const [opacityCount, setOpacityCount] = useState(0)
    const [timeDisparity, setTimeDisparity] = useState(0)

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();
    useEffect(() => {
        setOpacityCount(pre => isOpen ? 0 : pre)

        if (isOpen) {
            countDownTimerId.current = setInterval(() => {
                // setTimeDisparity(pre => {
                //     const now = new Date();
                //     const nowTime = now.getTime();
                //     const year = now.getFullYear();
                //     const month = now.getMonth() + 1;//js從0開始取
                //     const date = now.getDate();
                //     const deadlineStr = year + "/" + month + "/" + date + " " + "16:30:00";
                //     const deadline = Date.parse(deadlineStr);
                //     const timeLeft = (deadline - nowTime) / 60000;
                //     return parseInt(Math.ceil(timeLeft))
                // })
            }, 1000 * 60);
            opacityTimerId.current = setInterval(() => {
                setOpacityCount(pre => {
                    if (pre >= 1) {
                        clearInterval(opacityTimerId.current)
                    }
                    return pre + 0.1
                })
            }, 150);
        }
        return () => {
            clearInterval(opacityTimerId.current)
        }
    }, [isOpen])

    const handleClose = () => {
        setIsOpen(false);
    };
    const imageStyle = {
        width: "1500px", opacity: opacityCount
    }
    return (
        <div >
            <Dialog
                open={isOpen}
                onClose={handleClose}

                aria-labelledby="draggable-dialog-title"
                maxWidth={"2400px"}
                style={{ textAlign: "center" }}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <div>
                        <h1 style={{ fontSize: "48px", paddingTop: "160px" }}>每日任務</h1>

                        <hr style={{ border: "1px solid", marginTop: "30px", width: "170px", marginLeft: "30%" }} />

                    </div>
                </DialogTitle>
                <DialogContent>
                    <div style={{
                        height: "400px",
                        width: "400px",
                        marginLeft: "5px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,0.2)",

                        padding: "10px",
                        backgroundImage: `url(${logoImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",

                    }}>
                        <p style={{ fontSize: "24px" }}>對一則新聞留言</p>
                        <p style={{ fontSize: "24px" }}>成功舉報一則假新聞</p>
                        <p style={{ fontSize: "24px" }}>截止時間：今晚12:00前</p>

                    </div>

                </DialogContent>

                <DialogActions style={{ justifyContent: "center" }}>

                    <Button autoFocus onClick={handleClose} variant="contained" color="primary" style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bold" }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
export default DailyTaskDialog;