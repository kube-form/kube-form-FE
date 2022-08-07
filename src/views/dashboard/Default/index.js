import React, { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
import usePods from 'hooks/usePods';
// material-ui
import { Grid } from '@mui/material';

import TotalNewsContainer from 'ui-component/dashboard/TotalNewsContainer';
import TotalArnCard from 'ui-component/dashboard/TotalArnCard';
import DUMMY_NEWS from 'data/news';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import NotLoginedStatusCard from './NotLoginedStatus';
import BajajAreaChartCard from './BajajAreaChartCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    const { user } = useAuth();
    const pods = usePods();
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
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalArnCard
                                    index={0}
                                    isLoading={isLoading}
                                    url="https://www.notion.so/Front-2e7850ada3b14943bc24d38522262569"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalArnCard
                                    index={1}
                                    isLoading={isLoading}
                                    url="https://www.notion.so/Front-2e7850ada3b14943bc24d38522262569"
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalArnCard
                                    index={2}
                                    isLoading={isLoading}
                                    url="https://www.notion.so/Front-2e7850ada3b14943bc24d38522262569"
                                />
                            </Grid>
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
                            <PopularCard isLoading={isLoading} data={pods} />
                        )}
                        {!user && <NotLoginedStatusCard />}
                    </Grid>
                </Grid>
            </Grid>
            <BajajAreaChartCard />
        </Grid>
    );
}

export default Dashboard;
