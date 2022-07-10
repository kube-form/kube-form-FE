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
                            title="클러스터 IP 주소 패밀리"
                            content="IPv4"
                        />
                        <StatusListItemTitleSubTitle
                            title="서비스c IPv4 범위"
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
                            title="서브넷"
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
                            title="클러스터 보안 그룹"
                            content="sg-08ad717c0205a4716"
                        />
                        <StatusListItemTitleSubTitle
                            title="추가 보안 그룹"
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
                            title="API 서버 엔드포인트 액세스"
                            content="Public"
                        />
                        <StatusListItemTitleSubTitle
                            title="퍼블릭 액세스 소스 허용 목록"
                            content="0.0.0.0/0(모든 트래픽에 개방됨)"
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
