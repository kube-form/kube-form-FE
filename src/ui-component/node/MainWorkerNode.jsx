import { Card, CardActionArea, Typography, CardContent } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

function MainWorkerNode({ className }) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                // bgcolor: theme.palette.text.secondary,
                // borderRadius: 0,
                borderColor: theme.palette.primary.main,
                zIndex: 99,
            }}
            className={className}
            id={className}
        >
            <CardActionArea>
                <CardContent>
                    <Typography variant="h1" color={theme.palette.primary.main}>
                        EKS
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MainWorkerNode.propTypes = {
    className: PropTypes.string.isRequired,
};

export default MainWorkerNode;
