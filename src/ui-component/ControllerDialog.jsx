import React from 'react';
import usePods from 'hooks/usePods';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    useTheme,
} from '@mui/material';

const ControllerDialog = ({ open, handleClose }) => {
    const theme = useTheme();
    const pods = usePods();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle variant="h4">Custom Image</DialogTitle>
            <DialogContent>123</DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="error">
                    close
                </Button>
                <Button
                    disableElevation
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    copy
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ControllerDialog;
