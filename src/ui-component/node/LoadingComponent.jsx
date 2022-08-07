import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CachedIcon from '@mui/icons-material/Cached';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export default function LoadingComponent() {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [done, setDone] = useState();

    const [test, useTest] = useState(0);
    const onClick = () => {
        useTest((item) => (item + 1) % 3);
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
        } else {
            setLoading(false);
            setDone('fail');
        }
    }, [test]);

    switch (done) {
        case 'success':
            return (
                <Box sx={{ minHeight: 80, pt: 3 }} onClick={onClick}>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.success.dark}
                    >
                        Success!
                    </Typography>
                </Box>
            );
        case 'fail':
            return (
                <Box
                    onClick={onClick}
                    sx={{ minHeight: 80, pt: 3 }}
                    display="flex"
                    color={theme.palette.error.dark}
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
                </Box>
            );
        default:
            return (
                <Box sx={{ '& > button': { m: 1 }, minHeight: 80, pt: 1.5 }}>
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
