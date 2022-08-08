import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Typography,
    Skeleton,
} from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

function NotLoginedStatusCard() {
    const theme = useTheme();

    return (
        <MainCard content={false}>
            <CardContent>
                <Grid
                    container
                    spacing={gridSpacing}
                    sx={{ filter: 'blur(2px)' }}
                >
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Grid item>
                                <Typography variant="h3">
                                    Current Status
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: '16px !important' }}>
                        <Typography
                            variant="h4"
                            color={theme.palette.grey[500]}
                        >
                            Non Cluster Status
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={gridSpacing}
                        >
                            <Grid item xs>
                                <Skeleton
                                    variant="rectangular"
                                    height={35}
                                    animation={false}
                                />
                            </Grid>
                            <Grid item>
                                <Skeleton
                                    variant="rectangular"
                                    height={30}
                                    width={60}
                                    animation="wave"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Skeleton
                            variant="rectangular"
                            height={90}
                            animation={false}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems="center"
                            spacing={gridSpacing}
                            justifyContent="space-between"
                        >
                            <Grid item xs={12}>
                                <Skeleton variant="rectangular" height={90} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} textAlign="center" sx={{ mt: 3 }}>
                    <Typography>로그인 후 확인하실 수 있습니다.</Typography>
                </Grid>
            </CardContent>
            <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                <Button size="small" href="/pages/login/login3">
                    Login for Check your Cluster
                </Button>
            </CardActions>
        </MainCard>
    );
}

export default NotLoginedStatusCard;
