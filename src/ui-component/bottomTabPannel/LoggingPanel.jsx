import {
    Box,
    CardContent,
    CardHeader,
    ListItem,
    Grid,
    Divider,
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

function LoggingPanel({ value, index }) {
    const theme = useTheme();

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardHeader title="Control plane logging" />
            <Divider />
            <CardContent>
                <Grid container sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="API server"
                                content="Disabled"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Audit"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Authenticator"
                                content="Disabled"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Controller manager"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Scheduler"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}

LoggingPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default LoggingPanel;
