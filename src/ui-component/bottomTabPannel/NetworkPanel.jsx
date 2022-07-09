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

function NetworkPanel({ value, index }) {
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
                            title="VPC"
                            content="vpc-01a48279b85f653da (test)"
                        />
                        <StatusListItemTitleSubTitle
                            title="클러스터 IP 주소 패밀리"
                            content="IPv4"
                        />
                    </ListItem>
                    <ListItem>
                        <StatusListItemTitleSubTitle
                            title="서비스c IPv4 범위"
                            content="172.20.0.0/16"
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

NetworkPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default NetworkPanel;
