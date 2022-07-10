import {
    Box,
    CardContent,
    Divider,
    Grid,
    Typography,
    CardHeader,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import {
    StatusListItemAvatar,
    StatusListItemTitleSubTitle,
} from 'ui-component/bottomTabComponents';

function NetworkPanel({ value, index }) {
    const theme = useTheme();
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardHeader title="세부 정보" />
            <Divider />
            <CardContent>
                <Grid container sx={{ flexGrow: 1 }}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="VPC"
                            content="vpc-01a48279b85f653da"
                        />
                        <StatusListItemTitleSubTitle
                            title="Cluster IP address family"
                            content="IPv4"
                        />
                        <StatusListItemTitleSubTitle
                            title="Service IPv4 range"
                            content="172.20.0.0/16"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="Subnets"
                            content="subnet-06939c498092bfa2d"
                        />
                        <StatusListItemTitleSubTitle content="subnet-02e493624d0935356" />
                        <StatusListItemTitleSubTitle content="subnet-0ffdbbfb0361c2bcd " />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="Cluster security group"
                            content="sg-08ad717c0205a4716"
                        />
                        <StatusListItemTitleSubTitle
                            title="Additional security groups"
                            content="sg-093dbaad9dc2cf13d"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="API server endpoint access"
                            content="Public"
                        />
                        <StatusListItemTitleSubTitle
                            title="Public access source allowlist"
                            content="0.0.0.0/0(open to all traffic)"
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}

NetworkPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default NetworkPanel;
