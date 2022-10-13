import React, { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
import usePods from 'hooks/usePods';
import { useSelector } from 'react-redux';
import DUMMY_NEWS from 'data/news';
import { getKubeSource } from 'utils/s3Util';
import { getClusterStatus } from 'api/cluster';
// material-ui
import { Grid } from '@mui/material';
import TotalNewsContainer from 'ui-component/dashboard/TotalNewsContainer';
import TotalArnCard from 'ui-component/dashboard/TotalArnCard';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from './EarningCard';
import StatusCard from './StatusCard';
import TotalChartCard from './TotalChartCard';
import NotLoginedStatusCard from '../../../ui-component/dashboard/NotLoginedStatus';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function Dashboard() {
    // const [isLoading, setLoading] = useState(true);
    const { isLoggedIn, user } = useAuth();

    if (!user) {
        return (
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <EarningCard isLoading />
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <TotalChartCard isLoading />
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid
                                container
                                spacing={gridSpacing}
                                sx={{
                                    overflow: { md: 'none', lg: 'scroll' },
                                    maxHeight: { md: 'none', lg: 210 },
                                    scrollbarWidth: 'none',
                                }}
                            >
                                <>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalArnCard
                                            index={0}
                                            isLoading
                                            name=""
                                            url=""
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalArnCard
                                            index={0}
                                            isLoading
                                            name=""
                                            url=""
                                        />
                                    </Grid>
                                </>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <TotalNewsContainer isLoading news={DUMMY_NEWS} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <NotLoginedStatusCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    const { setAll, setInit } = usePods();
    const pods = useSelector((state) => state.pod);
    const { data, error } = getClusterStatus(user?.uid);

    useEffect(async () => {
        try {
            // if (user) {
            const { client } = await getKubeSource({
                uid: user.uid,
                id: 'main.json',
            });
            setAll(client);
            // } else {
            // }
        } catch (err) {
            console.log(err);
            setInit();
        }
    }, [isLoggedIn]);

    // useEffect(() => {
    //     setLoading(!data?.status);
    // }, [data]);

    const isLoading = !data?.status;

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid
                            container
                            spacing={gridSpacing}
                            sx={{
                                overflow: { md: 'none', lg: 'scroll' },
                                maxHeight: { md: 'none', lg: 210 },
                                scrollbarWidth: 'none',
                            }}
                        >
                            {user && data?.data?.data ? (
                                <>
                                    {data.data.data.entry_points.map(
                                        (item, index) => (
                                            <Grid
                                                key={item.name}
                                                item
                                                sm={6}
                                                xs={12}
                                                md={6}
                                                lg={12}
                                            >
                                                <TotalArnCard
                                                    index={index % 3}
                                                    isLoading={isLoading}
                                                    name={item.name}
                                                    url={item.entry_point}
                                                />
                                            </Grid>
                                        ),
                                    )}
                                </>
                            ) : (
                                <>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalArnCard
                                            index={0}
                                            isLoading
                                            name=""
                                            url=""
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <TotalArnCard
                                            index={0}
                                            isLoading
                                            name=""
                                            url=""
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalNewsContainer
                            isLoading={isLoading}
                            news={DUMMY_NEWS}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {user && (
                            <StatusCard
                                isLoading={isLoading}
                                data={pods}
                                userName={user.name}
                                status={data}
                            />
                        )}
                        {!user && <NotLoginedStatusCard />}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard;
