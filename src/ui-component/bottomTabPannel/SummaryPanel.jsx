import { Box, CardContent, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { StatusListItemTitleSubTitle } from 'ui-component/bottomTabComponents';

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
                <Typography variant="h3">세부 정보</Typography>
                <Divider />
                <Grid container xs={12} sx={{ flexGrow: 1 }}>
                    <Grid
                        item
                        md={4}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="API 서버 엔드포인트"
                            content="https://33E9A2E4C9132EAD55695D10CEE49677.gr7.ap-northeast-2.eks.amazonaws.com"
                        />
                        <StatusListItemTitleSubTitle
                            title="인증 기관"
                            content="LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM1ekNDQWMrZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeU1EY3dNekV5TkRRek5Gb1hEVE15TURZek1ERXlORFF6TkZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTE8yClpDUk8xOGR6NG1ZZU82aTVKYVVYQjNCcW9XRWJ6V2dwUm9rQmQ1ekh5Ym10UkI1eEdvSjBzZzU3dGRiUFRuT0UKcGV4N2QzcGNoMHpFT29nMk1Hekc4aDJwSEhJVWRhUFJjYUs3TXFZdUNmaDlNME5vZnVQT1h3T0xUQ1NPdVJQcQpIdVJHUkU4dlpTT05ITmNLYzVrM0JLZ2pYdmtoRzR5d050OXR0SzgxS0lRcTlGWWxTSXc3Y3F5QUhqWTgyb2RICmozZDZyVGMzZXo5RGNaRTdvQVExaGRvZS91V0M0OGxhWXdJRlZDOEJ2dlkxdlZIZHZyVEpLRDNKWlhocWhFeGEKVUFkZHhqUE1ROW1hbStjS1JTWUJ5b0MrdllUUWk5VFhhalFMNnR2ODZDN3FMZFhuMkNVNzRxai9lYXNzMG8zeQpiYTFtVmd4SmhBUlI1eEdUTG1zQ0F3RUFBYU5DTUVBd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZCT0RNYmhHT0xWb3pWeWQ3QWZuaCszVUtDVE9NQTBHQ1NxR1NJYjMKRFFFQkN3VUFBNElCQVFDRWttd0s0V2lLdUZrVEY4TjJielpOTTJRQkJ0bGVTYUs0VnN6VWlyczZiYWlxVHFrTgpVekEvN2xSWXdseTdacVNjVUhFZEpLM0dEb21yRVRUM0psemhQOWFzRXBKN2dkNkJQUkRoSDNnWVpCZTBLZjBMCjFPVmhaaDRpSUxOM2wwVnIvZDBMTDdsQnpHMTM0eUhJeFB6aXNDajBlQTZzdTNib2NNaENyUkNiUW9lTktwMUwKZjFBc212bnBxc2dvL21xYkF0Umo1cDBKVU85Z3pKMCtGaHZhOVd2VHYzRG5LUHZEZVI1N2VmL1Z0aVF0MStBUgpwNDAyd2pvS1k5MEFVNDhJVHZwemFaYmdWU0dremswbHVDbTJqSnE0cDlCR2VYTkVrR3BOLzBvY3FqdWFmbUhMCkhJTnlYZElBNEdPSkpidkdnc3VzSWtVSDVQb2FvZHNiWFVRZAotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
                        />
                    </Grid>

                    <Grid
                        item
                        md={4}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="OpenID Connect 공급자 URL"
                            content="https://oidc.eks.ap-northeast-2.amazonaws.com/id/33E9A2E4C9132EAD55695D10CEE49677"
                        />
                        <StatusListItemTitleSubTitle
                            title="클러스터 IAM 역할 ARN"
                            content="arn:aws:iam::170777615631:role/kubeform-eks-V78qavNc20220703123922484400000003 "
                        />
                    </Grid>
                    <Grid
                        item
                        md={4}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <StatusListItemTitleSubTitle
                            title="생성됨"
                            content="July 3, 2022, 21:39 (UTC+09:00) (test)"
                        />
                        <StatusListItemTitleSubTitle
                            title="클러스터 ARN"
                            content="arn:aws:eks:ap-northeast-2:170777615631:cluster/kubeform-eks-V78qavNc"
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}

SummaryPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default SummaryPanel;
