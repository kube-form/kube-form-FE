import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Loading = ({ open }) => {
    return (
        <Backdrop
            open={open}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loading;
