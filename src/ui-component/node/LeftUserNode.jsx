import { Box, Card, CardActionArea, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

function LeftUserNode({ className }) {
    return (
        <Card sx={{ zIndex: 1 }} className={className} id={className}>
            <CardActionArea>
                <Box sx={{ padding: 2, display: 'flex' }}>
                    <PersonIcon />
                    <Typography variant="subtitle1">Admin</Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}

LeftUserNode.propTypes = {
    className: PropTypes.string.isRequired,
};

export default LeftUserNode;
