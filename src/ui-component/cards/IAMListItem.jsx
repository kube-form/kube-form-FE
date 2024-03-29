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
import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { getMomentFromNow } from 'utils/util';
import { deleteIAMUser } from 'api/cluster';

function IAMListItem({ accessKeyId, updated, detail, fuid }) {
    const theme = useTheme();
    const [isHidden, setHidden] = useState(false);
    const handleDelete = async () => {
        const res = await deleteIAMUser({ fuid });
        setHidden(true);
    };

    return (
        <ListItem sx={{ display: isHidden ? 'none' : 'flex' }}>
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
                        justifyContent: { xs: 'none', sm: 'space-between' },
                    }}
                >
                    <Box>
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={handleDelete}
                        >
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
    fuid: PropTypes.string.isRequired,
};

export default IAMListItem;
