import {
    Card,
    CardActionArea,
    Typography,
    CardContent,
    Box,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { gridSpacing } from 'store/constant';
import EKSimg from 'ui-component/EKSimg';

function MainWorkerNode({ className }) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                zIndex: 99,
                minWidth: 150,
                transition: 'border 0.3s',
                '&:hover': {
                    borderColor: theme.palette.secondary[200],
                    boxShadow: 2,
                },
            }}
            className={className}
            spacing={gridSpacing}
            id={className}
        >
            <CardActionArea>
                <CardContent>
                    <Box
                        alignItems="center"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <EKSimg />
                        <Typography
                            variant="h1"
                            color={theme.palette.primary.main}
                        >
                            EKS
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MainWorkerNode.propTypes = {
    className: PropTypes.string.isRequired,
};

export default MainWorkerNode;
