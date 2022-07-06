import { Box, CardContent, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import {
    StatusListItemAvatar,
    StatusListItemTitleSubTitle,
} from 'ui-component/bottomTabComponents';

function SummaryPanel({ value, index }) {
    const theme = useTheme();
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardContent>
                <List>
                    <ListItem>
                        <StatusListItemTitleSubTitle
                            title="Instance ID"
                            content="i-jid92124y812947981j (test)"
                        />
                        <StatusListItemTitleSubTitle
                            title="public IPv4 address"
                            content="i-jid92124y812947981j (test)"
                        />
                    </ListItem>
                    <ListItem>
                        <StatusListItemTitleSubTitle
                            title="public IPv4 address"
                            content="i-jid92124y812947981j (test)"
                        />
                    </ListItem>
                    <ListItem>
                        <StatusListItemAvatar
                            icon={<CheckIcon color="success" />}
                            content="running"
                        />
                        <StatusListItemAvatar
                            icon={<WarningIcon color="warning" />}
                            content="warning"
                            sx={{ color: theme.palette.warning.dark }}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Box>
    );
}

SummaryPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default SummaryPanel;
