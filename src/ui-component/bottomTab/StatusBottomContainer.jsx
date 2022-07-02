import React, { useState } from 'react';
import {
    Box,
    Button,
    CardContent,
    Tabs,
    Tab,
    TabPanel,
    Typography,
    Divider,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NetworkPanel from 'ui-component/bottomTabPannel/NetworkPanel';
import PropTypes from 'prop-types';

const TABSDATA = ['summary', 'network', 'test', 'dongha', 'youngjae'];

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
                        <Tab label={item} {...allyProps(index)} />
                    ))}
                </Tabs>
            </Box>
            <NetworkPanel value={value} index={0} />
        </MainCard>
    );
}

allyProps.propTypes = {
    index: PropTypes.number.isRequired,
};

export default StatusBottomContainer;
