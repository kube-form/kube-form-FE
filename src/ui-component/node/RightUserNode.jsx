import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardActionArea } from '@mui/material';

import HailIcon from '@mui/icons-material/Hail';

function RightUserNode() {
    const theme = useTheme();

    return (
        <Card
            variant="outlined"
            id="user"
            sx={{
                ml: 3,
                zIndex: 99,
                minWidth: 85,
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
                    <Typography variant="subtitle1">User</Typography>
                    <HailIcon
                        fontSize="large"
                        sx={{
                            color: theme.palette.secondary[800],
                        }}
                    />
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default RightUserNode;
