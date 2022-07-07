import {
    ListItemText,
    Typography,
    ListItemAvatar,
    Avatar,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@mui/material/styles';

export function StatusListItemTitleSubTitle({ title, content, sx }) {
    const theme = useTheme();
    return (
        <ListItemText
            primary={
                <Typography variant="h4" noWrap>
                    {title}
                </Typography>
            }
            secondary={
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: theme.palette.grey[500],
                        mt: 0.5,
                        ...sx,
                    }}
                    noWrap
                >
                    {content}
                </Typography>
            }
        />
    );
}

export function StatusListItemAvatar({ icon, content, sx }) {
    const theme = useTheme();
    return (
        <ListItemText
            color="success"
            primary={
                <Typography variant="h4" noWrap>
                    Instance Status
                </Typography>
            }
            secondary={
                <ListItemAvatar sx={{ mt: 1, display: 'flex' }}>
                    <Avatar
                        sx={{
                            width: 22,
                            height: 22,
                            mr: 1,
                            bgcolor: 'transparent',
                        }}
                    >
                        {icon}
                    </Avatar>
                    <Typography
                        sx={{
                            color: theme.palette.success.dark,
                            ...sx,
                        }}
                    >
                        {content}
                    </Typography>
                </ListItemAvatar>
            }
        />
    );
}

StatusListItemTitleSubTitle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sx: PropTypes.object,
};

StatusListItemTitleSubTitle.defaultProps = {
    sx: {},
};

StatusListItemAvatar.propTypes = {
    icon: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
    sx: PropTypes.object,
};

StatusListItemAvatar.defaultProps = {
    sx: {},
};