import React, { useState } from 'react';
import { deleteKubeSource } from 'utils/s3Util';

import {
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    Typography,
} from '@mui/material';
import usePods from 'hooks/usePods';

const ClusterDeleteButtonWithDialog = ({ onDelete }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = async () => {
        try {
            await onDelete();
            handleClose();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Button
                variant="contained"
                size="large"
                color="error"
                onClick={handleOpen}
            >
                Delete
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Typography variant="h6">
                        Are you sure you want to delete it?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        disableElevation
                        type="submit"
                        variant="contained"
                        color="error"
                        onClick={onSubmit}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ClusterDeleteButtonWithDialog;
