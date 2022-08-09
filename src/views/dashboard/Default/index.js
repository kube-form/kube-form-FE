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
import { getClusterStatus } from 'api/cluster';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import NotLoginedStatusCard from '../../../ui-component/dashboard/NotLoginedStatus';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    const { user } = useAuth();
    const { setAll } = usePods();
    const pods = useSelector((state) => state.pod);
    const { status } = getClusterStatus(user.uid);

    console.log(status);

    // console.log(user);
    useEffect(async () => {
        try {
            const { client } = await getKubeSource({
                uid: user.uid,
                id: 'main.json',
            });
            setAll(client);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
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
                            {!user && data.data ? (
                                <>
                                    {data.data.entry_points.map(
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
                        {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
                        <TotalNewsContainer
                            isLoading={isLoading}
                            news={DUMMY_NEWS}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {user && (
                            <PopularCard
                                isLoading={isLoading}
                                data={pods}
                                userName={user.name}
                                status={status}
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
