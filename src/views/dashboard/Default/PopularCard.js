import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Menu,
    MenuItem,
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
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

function PopularCard({ isLoading, data }) {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={12} xs={12} md={12} lg={12}>
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
                                    <Grid item>
                                        <LoadingComponent />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <Typography variant="h4">
                                    Cluster Status
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

PopularCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.objectOf.isRequired,
};

export default PopularCard;
