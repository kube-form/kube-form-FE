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
    const step = status['status '];

    console.log(step);

    const handleDone = () => {
        if (step === '생성 완료') {
            setLoading(false);
            setDone('complete');
        } else if (step === '생성 중') {
            setLoading(false);
            setDone('creating');
            console.log(step);
        } else {
            setLoading(false);
            setDone('fail');
        }
    };

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
                    <LoadingButton
                        onClick={handleDone}
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
                        color={theme.palette.success.light}
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
                        onClick={handleDone}
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
}
