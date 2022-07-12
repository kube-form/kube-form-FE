import {
    Box,
    CardContent,
    CardHeader,
    ListItem,
    Grid,
    Divider,
    useTheme,
    Typography,
    Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import {
    StatusListItemAvatar,
    StatusListItemBase,
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
            sx={{ bgcolor: theme.palette.background.default }}
        >
            <CardHeader
                title={
                    <Box
                        sx={{ display: 'flex', alignItems: 'center' }}
                        justifyContent="space-between"
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                sx={{
                                    fontWeight: theme.typography.fontWeightBold,
                                }}
                                variant="h3"
                            >
                                Control plane logging
                            </Typography>
                            <Typography
                                ml={1}
                                sx={{
                                    color: theme.palette.info.main,
                                    cursor: 'pointer',
                                }}
                            >
                                info
                            </Typography>
                        </Box>
                        <Button
                            sx={{
                                textTransform: 'none',
                                fontWeight: theme.typography.fontWeightBold,
                                color: theme.palette.grey[500],
                                borderColor: theme.palette.grey[500],
                                bgcolor: theme.palette.background.default,
                            }}
                            variant="outlined"
                        >
                            Manage logging
                        </Button>
                    </Box>
                }
                sx={{
                    bgcolor: theme.palette.grey[100],
                    paddingY: 2,
                }}
            />
            <Divider />
            <CardContent>
                <Grid container sx={{ flexGrow: 1 }} spacing={0}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{
                            borderRight: {
                                xs: 'none',
                                sm: `1px solid ${theme.palette.grey[100]}`,
                                md: `1px solid ${theme.palette.grey[100]}`,
                                lg: `1px solid ${theme.palette.grey[100]}`,
                                xl: `1px solid ${theme.palette.grey[100]}`,
                            },
                        }}
                    >
                        <ListItem>
                            <StatusListItemBase
                                title="API server"
                                content="Disabled"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="Audit"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{
                            borderRight: {
                                xs: 'none',
                                sm: 'none',
                                md: `1px solid ${theme.palette.grey[100]}`,
                                lg: `1px solid ${theme.palette.grey[100]}`,
                                xl: `1px solid ${theme.palette.grey[100]}`,
                            },
                        }}
                    >
                        <ListItem>
                            <StatusListItemBase
                                title="Authenticator"
                                content="Disabled"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="Controller manager"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <ListItem>
                            <StatusListItemBase
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
