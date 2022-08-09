import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CachedIcon from '@mui/icons-material/Cached';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import useAuth from 'hooks/useAuth';
import { getClusterStatus } from 'api/cluster';

export default function LoadingComponent({ status }) {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [done, setDone] = useState();
    const step = status.status;

    if (!user) {
        return (
            <Grid
                item
                sx={{ minHeight: 80, pt: 1, pb: 1 }}
                // onClick={onClick}
                display="flex"
                alignItems="center"
            >
                <LoadingButton
                    loading={loading}
                    loadingIndicator={
                        <CircularProgress color="inherit" size={16} />
                    }
                    variant="outlined"
                >
                    <CachedIcon />
                </LoadingButton>
            </Grid>
        );
    }

    const { mutate } = getClusterStatus(user.uid);

    const handleDone = () => {
        // if (step === '생성 완료') {
        //     setLoading(false);
        //     setDone('complete');
        // } else if (step === '생성 중') {
        //     setLoading(false);
        //     setDone('creating');
        //     console.log(step);
        // } else {
        //     setLoading(false);
        //     setDone('fail');
        // }
        mutate(`/cluster/${user.uid.toLowerCase()}`);
    };

    useEffect(() => {
        if (!status.status) {
            setDone('loading');
            setLoading(true);
            return;
        }
        setLoading(false);
        if (status.status === '생성 완료') {
            setDone('complete');
        } else if (status.status === '생성 중') {
            setDone('creating');
        } else {
            setDone('fail');
        }
    }, [status.status]);

    switch (done) {
        case 'complete':
            return (
                <Grid
                    item
                    sx={{ minHeight: 80, pt: 1, pb: 1 }}
                    // onClick={onClick}
                    display="flex"
                    alignItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.success.dark}
                    >
                        Success!
                    </Typography>
                    {/* <LoadingButton
                        onClick={handleDone}
                        loading={loading}
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                    >
                        <CachedIcon />
                    </LoadingButton> */}
                </Grid>
            );
        case 'fail':
            return (
                <Grid
                    item
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
                    {/* <LoadingButton
                        onClick={handleDone}
                        loading={loading}
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                        sx={{ ml: 1 }}
                    >
                        <CachedIcon />
                    </LoadingButton> */}
                </Grid>
            );
        case 'creating':
            return (
                <Grid
                    item
                    sx={{ minHeight: 80, pt: 1, pb: 1 }}
                    // onClick={onClick}
                    display="flex"
                    alignItems="center"
                    justifyItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.primary.dark}
                    >
                        Creating...
                    </Typography>
                    <LoadingButton
                        onClick={handleDone}
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
                <Grid
                    item
                    sx={{ '& > button': { m: 1 }, minHeight: 80, pt: 1, pb: 1 }}
                    display="flex"
                    alignItems="center"
                >
                    <LoadingButton
                        loading
                        loadingIndicator={
                            <CircularProgress color="inherit" size={16} />
                        }
                        variant="outlined"
                    >
                        <CachedIcon />
                    </LoadingButton>
                </Grid>
            );
    }
}
