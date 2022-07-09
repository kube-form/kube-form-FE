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
            <CardHeader title="Logging" />
            <Divider />
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="API 서버"
                                content="비활성화됨"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="감사"
                                content="비활성화됨"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Authenticator"
                                content="비활성화됨"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="컨트롤러 관리자"
                                content="비활성화됨"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="스케줄러"
                                content="비활성화됨"
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
