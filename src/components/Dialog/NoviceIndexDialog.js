import React, { useEffect, useState, useRef } from "react";
import novice_teaching_index_image from "../../public/images/dialogs/novice_teaching_index.png";
import articleImg from "../../public/images/articleImg.jpg";

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NoviceIndexDialog = ({ isOpen, setIsOpen }) => {
    const opacityTimerId = useRef()
    const [opacityCount, setOpacityCount] = useState(0)
    useEffect(() => {
        setOpacityCount(pre => isOpen ? 0 : pre)

        if (isOpen) {

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
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}

                aria-labelledby="draggable-dialog-title"
                maxWidth={"2400px"}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <h1 style={{ fontSize: "48px", paddingTop: "10px", marginLeft: "30px" }}>新手教學</h1>
                </DialogTitle>
                <DialogContent>

                    <img src={novice_teaching_index_image} style={imageStyle} alt="" />

                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" style={{ marginRight: "30px", marginBottom: "30px" }}>
                        <p style={{ fontSize: "24px", fontWeight: "bold" }}> Cancel</p>
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
export default NoviceIndexDialog;