import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CachedIcon from '@mui/icons-material/Cached';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export default function LoadingComponent() {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [done, setDone] = useState();

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    };
    switch (done) {
        case 'success':
            return (
                <Box sx={{ minHeight: 100 }}>
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
                    sx={{ minHeight: 100 }}
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
                <Box sx={{ '& > button': { m: 1 }, minHeight: 100 }}>
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