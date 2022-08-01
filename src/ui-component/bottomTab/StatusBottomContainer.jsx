import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NetworkPanel from 'ui-component/bottomTabPannel/NetworkPanel';
import SummaryPanel from 'ui-component/bottomTabPannel/SummaryPanel';
import LoggingPannel from 'ui-component/bottomTabPannel/LoggingPanel';
import { tabAllyProps } from 'utils/util';
import UpdateLogPanel from 'ui-component/bottomTabPannel/UpdateLogPanel';
import ResourcePanel from 'ui-component/bottomTabPannel/ResourcePanel';

const TABSDATA = [
    'Overview',
    'Network',
    'Loging',
    'Update history',
    'Resources',
];

function StatusBottomContainer() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

                <SummaryPanel value={value} index={0} />
                <NetworkPanel value={value} index={1} />
                <LoggingPannel value={value} index={2} />
                <UpdateLogPanel value={value} index={3} />
                <ResourcePanel value={value} index={4} />
            </MainCard>
        </>
    );
}

export default StatusBottomContainer;
