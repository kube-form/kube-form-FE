import React from 'react';
import { Card, CardActionArea, Typography, Box, Button } from '@mui/material';
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
                <Button
                    alignItems="center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.3,
                        padding: 1,
                    }}
                >
                    Submit
                </Button>
            </CardActionArea>
        </Card>
    );
}

export default SubmitBtn;
