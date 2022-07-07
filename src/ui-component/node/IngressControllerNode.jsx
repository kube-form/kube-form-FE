import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardContent } from '@mui/material';

import AccountTreeIcon from '@mui/icons-material/AccountTree';

function IngressControllerNode() {
    const theme = useTheme();

    return (
        <Card id="controller">
            <CardContent>
                <Box
                    alignItems="center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.3,
                    }}
                >
                    <AccountTreeIcon
                        sx={{
                            fontSize: 50,
                            color: theme.palette.secondary[200],
                        }}
                    />
                    <Typography variant="subtitle2">
                        Ingress Controller?
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default IngressControllerNode;
