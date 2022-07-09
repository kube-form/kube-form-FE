import { Box, Card, CardActionArea, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';

function LeftUserNode({ className }) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                zIndex: 1,
                transition: 'border 0.3s',
                '&:hover': {
                    borderColor: theme.palette.secondary[200],
                    boxShadow: 2,
                },
            }}
            className={className}
            id={className}
        >
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
