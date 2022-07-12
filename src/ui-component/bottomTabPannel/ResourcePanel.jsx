import React, { useState } from 'react';
import {
    Box,
    CardContent,
    CardHeader,
    ListItem,
    Grid,
    Divider,
    Typography,
    Menu,
    MenuItem,
    IconButton,
    Link,
    Autocomplete,
    TextField,
    Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { StatusListItemTitleSubTitle } from 'ui-component/bottomTabComponents';

const RESOURCEDATA = [
    {
        id: 'WorkLoad',
        contents: [
            'PodTemplate',
            '포드',
            'ReplicaSet',
            '배포',
            'StatefulSet',
            'DaemonSets',
            '작업',
            'CronJob',
            'PriorityClasses',
            'HorizontalPodAutoscalers',
        ],
    },
    {
        id: 'Cluster',
        contents: [
            'node',
            'namespace',
            'APIServices',
            '리스',
            'RuntimeClasses',
            'FlowSchemas',
            'PriorityLevelConfigurations',
        ],
    },
    {
        id: 'ServiceAndNetworking',
        contents: [
            'Service',
            'EndPoint',
            'EndpointSlices',
            'Receive',
            'IngressClasses',
        ],
    },
    { id: 'Auth', contents: ['ServiceAccounts'] },

    { id: '구성 및 스토리지', contents: ['ConfigMap'] },
    {
        id: 'Policy',
        contents: [
            'ResourceQuotas',
            'NetworkPolicies',
            'PodDisruptionBudgets',
            'PodSecurityPolicies',
        ],
    },
];
const propertyFilm = [{ name: 'null', type: 'null' }];

function ResourcePanel({ value, index }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(!open);
    };

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardContent>
                <Grid container sx={{ flexGrow: 1 }}>
                    {open ? (
                        <Grid item>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    ) : (
                        <Grid item xs={12} sm={4} md={3}>
                            <Box
                                display="flex"
                                alignItems="center"
                                sx={{ pb: 2 }}
                            >
                                <Typography
                                    variant="h4"
                                    color={theme.palette.primary[800]}
                                    component="div"
                                >
                                    리소스 유형
                                </Typography>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ ml: 2 }}
                                    onClick={handleClick}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            {RESOURCEDATA.map((item) => (
                                <Box>
                                    <StatusListItemTitleSubTitle
                                        title={item.id}
                                        content=""
                                    />
                                    {console.log(item.contents)}
                                    {item.contents.map((content) => (
                                        <Typography>{content}</Typography>
                                    ))}
                                </Box>
                            ))}
                        </Grid>
                    )}

                    <Grid item xs={12} sm={8} md={9}>
                        <CardHeader title="워크로드: PodTemplates (0)" />
                        <Typography sx={{ m: 1 }}>
                            포드 템플릿은 포드 생성을 위한 사양으로, 배포, 작업
                            및 DaemonSets와 같은 워크로드 리소스에 포함되어
                            있습니다.
                        </Typography>
                        <Link
                            href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates"
                            sx={{ margin: 2 }}
                        >
                            자세히 알아보기
                        </Link>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={propertyFilm.map((option) => option.name)}
                            defaultValue={[propertyFilm[0].name]}
                            freeSolo
                            renderTags={(val, getTagProps) =>
                                val.map((option, i) => (
                                    <Chip
                                        variant="outlined"
                                        label={option}
                                        {...getTagProps({ index })}
                                    />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    label="All Namespaces"
                                    placeholder="Favorites"
                                />
                            )}
                        />
                        <Divider />
                        <Grid container sx={{ flexGrow: 1 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <ListItem>이름</ListItem>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <ListItem>수명</ListItem>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={6} md={6}>
                                <StatusListItemTitleSubTitle
                                    title="PodTemplates 없음"
                                    content="이 클러스터에 PodTemplates이(가) 없거나 해당 클러스터를 볼 수 있는 권한이 없습니다."
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={5}>
                        <ListItem>
                            <StatusListItemTitleSubTitle
                                title="Scheduler"
                                content="Disabled"
                            />
                        </ListItem>
                    </Grid> */}
                </Grid>
            </CardContent>
        </Box>
    );
}

ResourcePanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default ResourcePanel;
