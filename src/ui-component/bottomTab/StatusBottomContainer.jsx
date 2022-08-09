import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Tabs, Tab } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NetworkPanel from 'ui-component/bottomTabPannel/NetworkPanel';
import SummaryPanel from 'ui-component/bottomTabPannel/SummaryPanel';
import LoggingPannel from 'ui-component/bottomTabPannel/LoggingPanel';
import { tabAllyProps } from 'utils/util';
import UpdateLogPanel from 'ui-component/bottomTabPannel/UpdateLogPanel';
import ResourcePanel from 'ui-component/bottomTabPannel/ResourcePanel';
// import { getClusterStatus } from 'api/cluster';

import DUMMY_DATA from 'data/status';

const TABSDATA = [
    'Overview',
    'Network',
    // 'Loging',
    // 'Update history',
    // 'Resources',
];

const DummyData = DUMMY_DATA.data;

const ClusterData = DummyData.cluster_data;

function StatusBottomContainer({ statusData }) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const clusterData = statusData.data.cluster_data;

    return (
        <>
            <MainCard content={false} sx={{ marginY: 4 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="status_tabs"
                    >
                        {TABSDATA.map((item, index) => (
                            <Tab
                                key={item}
                                label={item}
                                {...tabAllyProps(index)}
                                disabled={index > 5}
                            />
                        ))}
                    </Tabs>
                </Box>

                <SummaryPanel
                    value={value}
                    index={0}
                    clusterData={clusterData}
                />
                <NetworkPanel
                    value={value}
                    index={1}
                    clusterData={clusterData}
                />
                <LoggingPannel value={value} index={2} />
                <UpdateLogPanel value={value} index={3} />
                <ResourcePanel value={value} index={4} />
            </MainCard>
        </>
    );
}

export default StatusBottomContainer;
