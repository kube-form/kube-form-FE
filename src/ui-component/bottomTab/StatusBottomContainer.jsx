import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NetworkPanel from 'ui-component/bottomTabPannel/NetworkPanel';
import SummaryPanel from 'ui-component/bottomTabPannel/SummaryPanel';
import TestPannel from 'ui-component/bottomTabPannel/TestPannel';
import { tabAllyProps } from 'utils/util';

const TABSDATA = ['summary', 'network', 'loging', 'updatelog'];

function StatusBottomContainer() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard content={false}>
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
                            disabled={index > 4}
                        />
                    ))}
                </Tabs>
            </Box>
            <SummaryPanel value={value} index={0} />
            <TestPannel value={value} index={1} />
            <NetworkPanel value={value} index={2} />
        </MainCard>
    );
}

export default StatusBottomContainer;
