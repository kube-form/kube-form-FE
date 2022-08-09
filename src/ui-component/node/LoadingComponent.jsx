import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CachedIcon from '@mui/icons-material/Cached';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export default function LoadingComponent({ status }) {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [done, setDone] = useState();
    const step = status;

    const [test, useTest] = useState(0);
    const onClick = () => {
        useTest((item) => (item + 1) % 4);
    };
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClick();
        }, 3000);
    };

    useEffect(() => {
        if (test === 0) {
            setLoading(false);
            setDone(null);
        } else if (test === 1) {
            setLoading(false);
            setDone('success');
        } else if (test === 2) {
            setLoading(false);
            setDone('creating');
        } else {
            setLoading(false);
            setDone('fail');
        }
    }, [test]);

    const handleDone = () => {
        if (step === 'success') {
            setLoading(false);
            setDone('success');
        } else if (step === '생성 중') {
            setLoading(false);
            setDone('creating');
        } else {
            setLoading(false);
            setDone('fail');
        }
    };

    switch (done) {
        case 'success':
            return (
                <Grid
                    item
                    sx={{ minHeight: 80, pt: 1, pb: 1 }}
                    onClick={onClick}
                    display="flex"
                    alignItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.success.dark}
                    >
                        Success!
                    </Typography>
                </Grid>
            );
        case 'fail':
            return (
                <Grid
                    sx={{ minHeight: 80, pt: 1, pb: 1 }}
                    display="flex"
                    color={theme.palette.error.dark}
                    alignItems="center"
                >
                    <ErrorOutlineIcon
                        sx={{ marginRight: 1 }}
                        fontSize="small"
                    />
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.error.dark}
                    >
                        Failed..
                    </Typography>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                        sx={{ ml: 1 }}
                    >
                        <CachedIcon />
                    </LoadingButton>
                </Grid>
            );
        case 'creating':
            return (
                <Grid
                    sx={{ minHeight: 80, pt: 1, pb: 1 }}
                    onClick={onClick}
                    display="flex"
                    alignItems="center"
                    justifyItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.success.light}
                    >
                        Creating...
                    </Typography>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                        sx={{ ml: 1 }}
                    >
                        <CachedIcon />
                    </LoadingButton>
                </Grid>
            );
        default:
            return (
                <Box
                    sx={{ '& > button': { m: 1 }, minHeight: 80, pt: 1, pb: 1 }}
                    display="flex"
                    alignItems="center"
                >
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                    >
                        <CachedIcon />
                    </LoadingButton>
                </Box>
            );
    }
}
