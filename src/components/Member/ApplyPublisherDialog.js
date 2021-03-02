import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../public/css/MemberCard.css';
const FormDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={'missionBtn'}>
            <button onClick={handleClickOpen}>我想成為發文者</button>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">申請表格</DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="companyName"
                            label="請輸入公司名稱"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="co"
                            label="請輸入公司行號"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="請輸入公司電話"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="請輸入公司信箱"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Send
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
export default FormDialog;