import React, { useState } from 'react';
import {
    Box,
    CardContent,
    CardHeader,
    ListItem,
    Grid,
    Divider,
    Typography,
    IconButton,
    Link,
    Autocomplete,
    TextField,
    Chip,
    List,
    ListItemButton,
    Collapse,
    Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { StatusListItemTitleSubTitle } from 'ui-component/bottomTabComponents';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

const RESOURCEDATA = [
    {
        id: 'WorkLoads',
        contents: [
            'PodTemplate',
            'Pods',
            'ReplicaSets',
            'Deployments',
            'StatefulSets',
            'DaemonSets',
            'Jobs',
            'CronJobs',
            'PriorityClasses',
            'HorizontalPodAutoscalers',
        ],
    },
    {
        id: 'Cluster',
        contents: [
            'Nodes',
            'Namespaces',
            'APIServices',
            'Leases',
            'RuntimeClasses',
            'FlowSchemas',
            'PriorityLevelConfigurations',
        ],
    },
    {
        id: 'ServiceAndNetworking',
        contents: [
            'Services',
            'EndPoints',
            'EndpointSlices',
            'Receive',
            'IngressClasses',
        ],
    },
    {
        id: 'Config and Storage',
        contents: [
            'ConfigMap',
            'Secrets',
            'PersistentVolumeClaims',
            'PersistentVolumes',
            'StorageClasses',
            'VolumeAttachment',
            'CSIDrivers',
            'CSINodes',
        ],
    },
    { id: 'Authentication', contents: ['ServiceAccounts'] },
    {
        id: 'Authorization',
        contents: [
            'ClusterRoles',
            'ClusterRoleBindings',
            'Roles',
            'RoleBindings',
        ],
    },
    {
        id: 'Policy',
        contents: [
            'ResourceQuotas',
            'NetworkPolicies',
            'PodDisruptionBudgets',
            'PodSecurityPolicies',
        ],
    },
    {
        id: 'Extensions',
        contents: [
            'CustomResourceDefinitions',
            'MutatingWebhookConfigurations',
            'ValidatingWebhookConfigurations',
        ],
    },
];
const propertyFilm = [{ name: 'null', type: 'null' }];

function ResourcePanel({ value, index }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [subval, setSubval] = useState({ [`WorkLoads`]: 'true' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (event) => {
        setOpen(!open);
    };
    const handleChange = (key) => () => {
        setSubval({ [key]: !subval[key] });
    };
    const handleListItemClick = (event, idx) => {
        setSelectedIndex(idx);
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
                        <Grid item xs={12} sm={4} md={4} lg={1}>
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
                        <Grid item xs={12} sm={4} md={4} lg={3}>
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
                                    Resource types
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
                                <List key={item.id}>
                                    <ListItemButton
                                        onClick={handleChange(item.id)}
                                        key={item.id}
                                    >
                                        <StatusListItemTitleSubTitle
                                            title={item.id}
                                            content=""
                                            key={item.id}
                                        />
                                        {subval[item.id] ? (
                                            <IconChevronUp
                                                stroke={1.5}
                                                size="1rem"
                                                style={{
                                                    marginTop: 'auto',
                                                    marginBottom: 'auto',
                                                }}
                                            />
                                        ) : (
                                            <IconChevronDown
                                                stroke={1.5}
                                                size="1rem"
                                                style={{
                                                    marginTop: 'auto',
                                                    marginBottom: 'auto',
                                                }}
                                            />
                                        )}
                                    </ListItemButton>

                                    <Collapse
                                        in={subval[item.id]}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <Stack disablePadding>
                                            {item.contents.map(
                                                (content, idx) => (
                                                    <ListItemButton
                                                        id={idx}
                                                        sx={{ pl: 4 }}
                                                        key={content}
                                                        selected={
                                                            selectedIndex ===
                                                            idx
                                                        }
                                                        onClick={(event) =>
                                                            handleListItemClick(
                                                                event,
                                                                idx,
                                                            )
                                                        }
                                                    >
                                                        <Typography>
                                                            {content}
                                                        </Typography>
                                                    </ListItemButton>
                                                ),
                                            )}
                                        </Stack>
                                    </Collapse>
                                </List>
                            ))}
                        </Grid>
                    )}

                    <Grid item xs={12} sm={8} md={8} lg={open ? 11 : 9}>
                        <Box sx={{ bgcolor: theme.palette.grey[100] }}>
                            <CardHeader title="Workloads: PodTemplates (0)" />
                            <Typography sx={{ m: 1 }}>
                                Pod templates are specifications to create Pods.
                                They are included in workload resources such as
                                Deployments, Jobs, and DaemonSets.
                            </Typography>
                            <Link
                                href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates"
                                sx={{ margin: 2 }}
                            >
                                Learn more
                            </Link>
                        </Box>
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
