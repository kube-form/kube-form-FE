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
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import PropTypes from 'prop-types';
import ResourceTypesComponent from 'ui-component/ResourceTypesComponent';
import { StatusListItemTitleSubTitle } from 'ui-component/bottomTabComponents';

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
    const [selectedIndex, setSelectedIndex] = useState();
    console.log(subval);
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
                        <ResourceTypesComponent type={selectedIndex} />
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
