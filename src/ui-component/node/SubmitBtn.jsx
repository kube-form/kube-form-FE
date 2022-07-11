import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Card, CardActionArea, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function SubmitBtn() {
    const theme = useTheme();

    return (
        <Card
            variant="outlined"
            id="user"
            sx={{
                zIndex: 99,
                width: 85,
                borderRadius: '1px solid',
                transition: 'border 0.3s',
                '&:hover': {
                    boxShadow: 1,
                },
                marginBottom: 3,
                backgroundColor: theme.palette.primary.main,
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
                    <Typography variant="subtitle1">Submit</Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default SubmitBtn;
