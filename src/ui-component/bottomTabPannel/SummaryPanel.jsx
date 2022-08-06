import {
    Box,
    CardContent,
    Grid,
    Typography,
    CardHeader,
    ListItem,
    IconButton,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import {
    StatusListItemBase,
    StatusCopyTypography,
    StatusLinkTypography,
} from 'ui-component/bottomTabComponents';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function SummaryPanel({ value, index, clusterData }) {
    const theme = useTheme();

    console.log(clusterData);
    console.log(clusterData.cluster_arn);
    console.log(clusterData.cluster_endpoint);
    const Endpoint = clusterData.cluster_endpoint;

    const arr = Object.keys(clusterData);
    const valueArr = Object.values(clusterData);

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
                {arr.forEach((val, idx) => {
                    console.log(val, idx);
                })}
                {valueArr.forEach((v, i) => {
                    console.log(v, i);
                })}
                <Grid container sx={{ flexGrow: 1 }}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
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
                                title="API server endpoint"
                                content={
                                    <StatusCopyTypography>
                                        {Endpoint.value}
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <StatusListItemBase
                                title="Certificate authority"
                                content="LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM1ekNDQWMrZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeU1EY3dNekV5TkRRek5Gb1hEVE15TURZek1ERXlORFF6TkZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTE8yClpDUk8xOGR6NG1ZZU82aTVKYVVYQjNCcW9XRWJ6V2dwUm9rQmQ1ekh5Ym10UkI1eEdvSjBzZzU3dGRiUFRuT0UKcGV4N2QzcGNoMHpFT29nMk1Hekc4aDJwSEhJVWRhUFJjYUs3TXFZdUNmaDlNME5vZnVQT1h3T0xUQ1NPdVJQcQpIdVJHUkU4dlpTT05ITmNLYzVrM0JLZ2pYdmtoRzR5d050OXR0SzgxS0lRcTlGWWxTSXc3Y3F5QUhqWTgyb2RICmozZDZyVGMzZXo5RGNaRTdvQVExaGRvZS91V0M0OGxhWXdJRlZDOEJ2dlkxdlZIZHZyVEpLRDNKWlhocWhFeGEKVUFkZHhqUE1ROW1hbStjS1JTWUJ5b0MrdllUUWk5VFhhalFMNnR2ODZDN3FMZFhuMkNVNzRxai9lYXNzMG8zeQpiYTFtVmd4SmhBUlI1eEdUTG1zQ0F3RUFBYU5DTUVBd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZCT0RNYmhHT0xWb3pWeWQ3QWZuaCszVUtDVE9NQTBHQ1NxR1NJYjMKRFFFQkN3VUFBNElCQVFDRWttd0s0V2lLdUZrVEY4TjJielpOTTJRQkJ0bGVTYUs0VnN6VWlyczZiYWlxVHFrTgpVekEvN2xSWXdseTdacVNjVUhFZEpLM0dEb21yRVRUM0psemhQOWFzRXBKN2dkNkJQUkRoSDNnWVpCZTBLZjBMCjFPVmhaaDRpSUxOM2wwVnIvZDBMTDdsQnpHMTM0eUhJeFB6aXNDajBlQTZzdTNib2NNaENyUkNiUW9lTktwMUwKZjFBc212bnBxc2dvL21xYkF0Umo1cDBKVU85Z3pKMCtGaHZhOVd2VHYzRG5LUHZEZVI1N2VmL1Z0aVF0MStBUgpwNDAyd2pvS1k5MEFVNDhJVHZwemFaYmdWU0dremswbHVDbTJqSnE0cDlCR2VYTkVrR3BOLzBvY3FqdWFmbUhMCkhJTnlYZElBNEdPSkpidkdnc3VzSWtVSDVQb2FvZHNiWFVRZAotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
                            />
                        </ListItem>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
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
                                title="OpenID Connect provider URL"
                                content={
                                    <StatusCopyTypography>
                                        https://oidc.eks.ap-northeast-2.amazonaws.com/id/56358F15A728CB42EA8F8ED5A3F755B7
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>{' '}
                        <ListItem>
                            <StatusListItemBase
                                title="Cluster IAM role ARN"
                                content={
                                    <StatusCopyTypography>
                                        <StatusLinkTypography>
                                            {clusterData.cluster_arn.value}
                                        </StatusLinkTypography>
                                    </StatusCopyTypography>
                                }
                            />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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
                                title="Cluster ARN"
                                content={
                                    <StatusCopyTypography>
                                        {clusterData.cluster_arn.value}
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
                                            Platform version
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
                                    clusterData.cluster_platform_version.value
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
