import React, { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import useAuth from 'hooks/useAuth';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import TotalArnCard from './TotalArnCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function Dashboard() {
    const { user } = useAuth();

    const [isLoading, setLoading] = useState(true);
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
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard;
