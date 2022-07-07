import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Typography,
    Box,
    Grid,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { getMomentFromNow } from 'utils/util';

function IAMListItem({ accessKeyId, updated, detail }) {
    const theme = useTheme();
    return (
        <ListItem>
            <Grid
                container
                sx={{ justifyContent: { xs: 'none', sm: 'space-between' } }}
                spacing={1}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                            <LockIcon color="success" />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                        primary={
                            <Typography
                                variant="h4"
                                sx={{
                                    wordWrap: 'break-word',
                                    color: theme.palette.success.dark,
                                }}
                            >
                                {accessKeyId}
                            </Typography>
                        }
                        secondary={
                            <Typography
                                variant="subtitle2"
                                sx={{ color: theme.palette.grey[500], mt: 0.5 }}
                            >
                                {detail}
                            </Typography>
                        }
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <ListItemText
                        primary={
                            <Typography
                                variant="subtitle2"
                                sx={{ color: theme.palette.grey[900], mt: 0.5 }}
                            >
                                {getMomentFromNow(updated)}
                            </Typography>
                        }
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={1}
                    md={1}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'none', sm: 'end' },
                    }}
                >
                    <Box>
                        <Button
                            variant="contained"
                            size="small"
                            component={Link}
                            to={{
                                pathname: '/kube-form-FE/iam/update',
                                // query: { accessKeyId: { accessKeyId } },
                                search: `?accessKeyId=${accessKeyId}`,
                            }}
                        >
                            Update
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={1}
                    md={1}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'none', sm: 'space-between' },
                    }}
                >
                    <Box>
                        <Button variant="contained" color="error" size="small">
                            Delete
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    );
}

IAMListItem.propTypes = {
    accessKeyId: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
};

export default IAMListItem;
