import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardActionArea } from '@mui/material';

import HailIcon from '@mui/icons-material/Hail';

function RightUserNode() {
    const theme = useTheme();

    return (
        <Card id="user">
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
                        sx={{
                            fontSize: 40,
                            color: theme.palette.secondary[800],
                        }}
                    />
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default RightUserNode;
