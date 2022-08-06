import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    InputLabel,
    OutlinedInput,
    FormControl,
    useTheme,
} from '@mui/material';

const ClusterSubmitDialog = ({ onSubmit, buttonText, title }) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" size="large" onClick={handleOpen}>
                {buttonText}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle variant="h3">{title}</DialogTitle>
                <DialogContent>
                    <>
                        <FormControl
                            fullWidth
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-time-login">
                                Estimated Time Required
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-time-login"
                                type="text"
                                value="10 to 12 minutes"
                                name="time"
                                label="Time"
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-cost-login">
                                Estimated Cost of Occurrence
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-cost-login"
                                type="text"
                                value="0.1$/hour"
                                name="cost"
                                label="Cost"
                            />
                        </FormControl>
                    </>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                    <Button
                        disableElevation
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ClusterSubmitDialog;
