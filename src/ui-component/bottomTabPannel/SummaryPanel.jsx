import {
    Box,
    CardContent,
    Grid,
    Typography,
    CardHeader,
    ListItem,
    Link,
    IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import PropTypes, { string } from 'prop-types';
import React from 'react';
import {
    StatusListItemBase,
    StatusCopyTypography,
    StatusLinkTypography,
} from 'ui-component/bottomTabComponents';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const val = (input) => {
    return input.value;
};

function SummaryPanel({ value, index, clusterData }) {
    const theme = useTheme();

    const borderRight = {
        xs: 'none',
        sm: `1px solid ${theme.palette.grey[100]}`,
        md: `1px solid ${theme.palette.grey[100]}`,
        lg: `1px solid ${theme.palette.grey[100]}`,
        xl: `1px solid ${theme.palette.grey[100]}`,
    };

    // console.log(clusterData);
    const TitleArr = Object.keys(clusterData);
    const endpoint = clusterData.cluster_endpoint;
    const AuthorityData = clusterData.cluster_certificate_authority_data;

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
                    <Typography
                        sx={{ fontWeight: theme.typography.fontWeightBold }}
                        variant="h3"
                    >
                        Details
                    </Typography>
                }
                sx={{
                    bgcolor: theme.palette.grey[100],
                }}
            />
            <Divider />
            <CardContent>
                <Grid container sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                // title="API server endpoint"
                                title={TitleArr[2]}
                                content={
                                    <StatusCopyTypography>
                                        {endpoint.value}
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                // cluster name
                                title={TitleArr[3]}
                                content={
                                    <StatusCopyTypography>
                                        {clusterData.cluster_name.value}
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title={TitleArr[1]}
                                content={
                                    <StatusCopyTypography
                                        sx={{ height: 30 }}
                                        noWrap
                                    >
                                        {AuthorityData.value[0].data}
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                title={TitleArr[4]}
                                content={
                                    <StatusCopyTypography>
                                        {
                                            val(
                                                clusterData.cluster_oidc_issuer_url,
                                            )[0].oidc[0].issuer
                                        }
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>

                        <ListItem>
                            <StatusListItemBase
                                title="Created"
                                content={
                                    <StatusCopyTypography>
                                        2022-07-11T04:51:38Z
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="Cluster IAM role ARN"
                                content={
                                    <StatusCopyTypography>
                                        <StatusLinkTypography>
                                            arn:aws:iam::170777615631:role/kubeform-eks-V78qavNc20220703123922484400000003
                                        </StatusLinkTypography>
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ borderRight }}>
                        <ListItem>
                            <StatusListItemBase
                                title={TitleArr[7]}
                                content={
                                    <StatusCopyTypography>
                                        {val(clusterData.cluster_version)}
                                    </StatusCopyTypography>
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
                                            {TitleArr[5]}
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
                                            <Link href="platform version">
                                                info
                                            </Link>
                                        </Typography>
                                    </Box>
                                }
                                content={
                                    clusterData.cluster_platform_version.value
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title={TitleArr[0]}
                                content={
                                    <StatusCopyTypography>
                                        {val(clusterData.cluster_arn)}
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}

SummaryPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,

    clusterData: PropTypes.object.isRequired,
};

export default SummaryPanel;
