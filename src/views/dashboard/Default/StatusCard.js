import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import LoadingComponent from 'ui-component/node/LoadingComponent';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DashboardStatus from './chart-data/DashboardStatus';

function StatusCard({ isLoading, data, userName, status }) {
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={12} xs={12} md={6} lg={6}>
                                <Grid
                                    container
                                    alignContent="center"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h3">
                                            Cluster Status
                                        </Typography>
                                        <LoadingComponent status={status} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <Typography variant="h4">
                                    {userName}님의 Cluster Status
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <DashboardStatus data={data} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions
                        sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}
                    >
                        <Button size="small" href="/utils/cluster/status">
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
}

StatusCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.objectOf.isRequired,
};

export default StatusCard;
