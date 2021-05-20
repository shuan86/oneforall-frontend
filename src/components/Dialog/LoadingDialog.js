import React, { useEffect, useState, useRef } from "react";
import novice_teaching_index_image from "../../public/images/dialogs/novice_teaching_index.png";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../public/css/LoadingBar.css"

import sloganImg from "../../public/images/slogan.png";
import LogoHeadImg from "../../public/images/logo.png";


const LoadingDialog = ({ isOpen, setIsOpen }) => {
    const opacityTimerId = useRef()
    const loadingCountTimerId = useRef()

    const [openLoadingAnim, setOpenLoadingAnim] = useState(false)
    const [loadingCount, setLoadingCount] = useState(0)
    const [sloganOpacityCount, setSloganOpacityCount] = useState(0.1)


    useEffect(() => {

        if (isOpen) {

            setOpenLoadingAnim(false)
            setLoadingCount(0)
            setSloganOpacityCount(0.1)
            opacityTimerId.current = setInterval(() => {
                setSloganOpacityCount(pre => {
                    console.log("pre:", pre)
                    if (pre >= 1) {

                        setOpenLoadingAnim(true)
                    }
                    // else if (pre <= 0)
                    //     isAdd = true;
                    // if (isAdd) {
                    //     return pre + 0.1
                    // }
                    // else {
                    //     return pre - 0.1
                    // }
                    return pre + 0.1
                })
            }, 100);
        }
        return () => {
            clearInterval(opacityTimerId.current)
        }
    }, [isOpen])
    useEffect(() => {
        if (openLoadingAnim) {
            loadingCountTimerId.current = setInterval(() => {
                setLoadingCount(pre => {
                    if (pre == 99) {
                        clearInterval(loadingCountTimerId.current)
                        handleClose()
                    }
                    return pre + 1
                })
            }, 10);
        }
        return () => {
            clearInterval(loadingCountTimerId.current)
        }
    }, [openLoadingAnim])
    const handleClose = () => {
        setIsOpen(false);
    };
    const wrapperStyle = {
        // position: "relative",
        // transform: "translateY(-50%)",
        // top: "30%",
        // left: "30%",
        // background: "#095",
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "700px",
        // border: "5px solid #666"
    }
    const logoHeadStyle = {
        opacity: sloganOpacityCount

    }
    const sloganStyle = {
        width: "100%",
        height: "100%",
        opacity: sloganOpacityCount
    }


    return (
        <div>
            <Dialog
                fullScreen
                open={isOpen}
                onClose={handleClose}

                aria-labelledby="draggable-dialog-title"
            >

                <DialogContent>
                    <div style={wrapperStyle}>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img className="logoHead" style={logoHeadStyle} src={LogoHeadImg} />
                            <img style={sloganStyle} src={sloganImg} />
                        </div>
                        <div className="load-wrapp">
                            {openLoadingAnim ? <div className="load-3">

                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div> : null}

                        </div>
                        {openLoadingAnim ? <p style={{ color: "var(--navy-blue)", fontWeight: "bold", fontSize: "40px" }}>{loadingCount}%</p> : null}

                    </div>
                </DialogContent>


            </Dialog>
        </div >
    );
}
export default LoadingDialog;