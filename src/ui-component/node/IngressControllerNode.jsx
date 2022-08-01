import React from 'react';

import { useTheme } from '@mui/material/styles';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
} from '@mui/material';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HubIcon from '@mui/icons-material/Hub';

function IngressControllerNode(name) {
    const theme = useTheme();
    console.log(name);
    return (
        <Card
            variant="outlined"
            id={name === 'null' ? name : 'controller'}
            sx={{
                zIndex: 99,
                minWidth: 80,
                transition: 'border 0.3s',
                '&:hover': {
                    borderColor: theme.palette.secondary[200],
                    boxShadow: 2,
                },
            }}
        >
            <CardActionArea>
                <Box
                    alignItems="center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.3,
                        padding: 1,
                    }}
                >
                    <HubIcon
                        fontSize="large"
                        sx={{
                            color: theme.palette.secondary[200],
                        }}
                    />
                    <Typography variant="subtitle2" textAlign="center">
                        Ingress Controller
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default IngressControllerNode;
