import {
    Box,
    CardContent,
    Divider,
    Grid,
    Typography,
    Link,
    CardHeader,
    Button,
    ListItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import {
    StatusListItemTitleSubTitle,
    StatusListItemBase,
    StatusLinkTypography,
} from 'ui-component/bottomTabComponents';

function NetworkPanel({ value, index, clusterData }) {
    const theme = useTheme();

    const borderRight = {
        xs: 'none',
        sm: `1px solid ${theme.palette.grey[100]}`,
        md: `1px solid ${theme.palette.grey[100]}`,
        lg: `1px solid ${theme.palette.grey[100]}`,
        xl: `1px solid ${theme.palette.grey[100]}`,
    };

    const val = (input) => {
        return input.value;
    };

    const privateSubnets = clusterData.private_subnets;
    const publicSubnets = clusterData.public_subnets;

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
                                Networking
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
                            Manage networking
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
                    <Grid item xs={12} sm={6} md={3} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                title="VPC"
                                content={
                                    <StatusLinkTypography>
                                        {val(clusterData.vpc_id)}
                                    </StatusLinkTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.grey[700],
                                            }}
                                        >
                                            Cluster IP address family
                                        </Typography>
                                        <Typography
                                            ml={1}
                                            sx={{
                                                color: theme.palette.info.main,
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            info
                                        </Typography>
                                    </Box>
                                }
                                content="IPv4"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.grey[700],
                                            }}
                                        >
                                            Service IPv4 range
                                        </Typography>
                                        <Typography
                                            ml={1}
                                            sx={{
                                                color: theme.palette.info.main,
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            info
                                        </Typography>
                                    </Box>
                                }
                                content="172.20.0.0/16"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                title="Private Subnets"
                                content={
                                    <>
                                        {val(privateSubnets).map((item) => {
                                            return (
                                                <StatusLinkTypography
                                                    key={item}
                                                >
                                                    {item}
                                                </StatusLinkTypography>
                                            );
                                        })}
                                    </>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="public Subnets"
                                content={
                                    <>
                                        {val(publicSubnets).map((item) => {
                                            return (
                                                <StatusLinkTypography
                                                    key={item}
                                                >
                                                    {item}
                                                </StatusLinkTypography>
                                            );
                                        })}
                                    </>
                                }
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                title={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.grey[700],
                                            }}
                                        >
                                            Cluster security group
                                        </Typography>
                                        <Typography
                                            ml={1}
                                            sx={{
                                                color: theme.palette.info.main,
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            info
                                        </Typography>
                                    </Box>
                                }
                                content={
                                    <StatusLinkTypography>
                                        {
                                            clusterData
                                                .cluster_primary_security_group_id
                                                .value
                                        }
                                    </StatusLinkTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.grey[700],
                                            }}
                                        >
                                            Additional security groups
                                        </Typography>
                                        <Typography
                                            ml={1}
                                            sx={{
                                                color: theme.palette.info.main,
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            info
                                        </Typography>
                                    </Box>
                                }
                                content="none"
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ListItem>
                            <StatusListItemBase
                                title={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.grey[700],
                                            }}
                                        >
                                            API server endpoint access
                                        </Typography>
                                        <Typography
                                            ml={1}
                                            sx={{
                                                color: theme.palette.info.main,
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            info
                                        </Typography>
                                    </Box>
                                }
                                content="Public"
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="Public access source allowlist"
                                content="0.0.0.0/0(open to all traffic)"
                            />
                        </ListItem>
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
