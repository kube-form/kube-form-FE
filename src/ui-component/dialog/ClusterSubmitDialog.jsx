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
    Select,
    MenuItem,
} from '@mui/material';
import INSTANCE_DATA from 'data/instance';
import { submitKubeSource } from 'utils/s3Util';
import usePods from 'hooks/usePods';
import { useNavigate } from 'react-router-dom';

const ClusterSubmitDialog = ({ buttonText, title, uid, workerNodeCnt }) => {
    const theme = useTheme();
    const [value, setValue] = useState(INSTANCE_DATA[0]);
    const { getSubmitFormat, sub, main, wait, ingressStatus } = usePods();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async () => {
        const kubeSource = {
            user_id: uid.toLowerCase(),
            node_group_num: workerNodeCnt,
            instance_type: value,
            container: getSubmitFormat(),
            client: {
                main,
                sub,
                ingressStatus,
                workerNodeCnt: workerNodeCnt - 1,
            },
        };
        // mutate()
        const res = await submitKubeSource({
            kubeSource,
            id: 'main',
            uid,
        });
        handleClose();
        navigate('/utils/cluster/status');
    };

    return (
        <>
            <Button variant="contained" size="large" onClick={handleOpen}>
                {buttonText}
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
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
                        <FormControl
                            fullWidth
                            sx={{ ...theme.typography.customSelectInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-instance-login">
                                Instance Size
                            </InputLabel>
                            <Select
                                labelId="outlined-adornment-instance-login"
                                name="cost"
                                label="Cost"
                                value={value}
                                onChange={handleChange}
                            >
                                {INSTANCE_DATA.map((item) => (
                                    <MenuItem value={item} key={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
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
