import React, { useState } from 'react';
import {
    Box,
    CardHeader,
    ListItem,
    Grid,
    Divider,
    Typography,
    Link,
    Autocomplete,
    TextField,
    Chip,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { IconExternalLink } from '@tabler/icons';
import PropTypes from 'prop-types';
import { StatusListItemTitleSubTitle } from 'ui-component/bottomTabComponents';

const propertyFilm = [{ name: 'null', type: 'null' }];

function ResourceTypesComponent({ type }) {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ bgcolor: theme.palette.grey[100] }}>
                <CardHeader title="Workloads: PodTemplates (0)" />
                <Typography sx={{ m: 1 }}>
                    index : {type} <br />
                    Pod templates are specifications to create Pods. They are
                    included in workload resources such as Deployments, Jobs,
                    and DaemonSets.
                </Typography>
                <Link
                    href="https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates"
                    sx={{ margin: 2 }}
                >
                    Learn more
                    <IconExternalLink
                        style={{ verticalAlign: 'top', marginLeft: 1 }}
                        width={20}
                        height={20}
                    />
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
                            {...getTagProps({ i })}
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
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={6}>
                    <StatusListItemTitleSubTitle
                        title="PodTemplates 없음"
                        content="이 클러스터에 PodTemplates이(가) 없거나 해당 클러스터를 볼 수 있는 권한이 없습니다."
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ResourceTypesComponent;
