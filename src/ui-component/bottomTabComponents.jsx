import {
    ListItemText,
    Typography,
    ListItemAvatar,
    Avatar,
    IconButton,
    Popover,
    Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconExternalLink } from '@tabler/icons';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
                        ...sx,
                        overflow: 'hidden',
                    }}
                    nowrap
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

export function StatusListItemBase({ title, content, sx }) {
    const theme = useTheme();
    return (
        <ListItemText
            primary={
                <Typography
                    variant="body1"
                    noWrap
                    sx={{
                        color: theme.palette.grey[700],
                    }}
                >
                    {title}
                </Typography>
            }
            secondary={
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.dark[900],
                        mt: 0.5,
                        ...sx,
                        overflow: 'hidden',
                    }}
                    nowrap
                >
                    {content}
                </Typography>
            }
        />
    );
}

export function StatusLinkTypography({ children, sx }) {
    const theme = useTheme();
    return (
        <Typography
            sx={{
                color: theme.palette.info.main,
                cursor: 'pointer',
                alignItems: 'top',
                wordWrap: 'break-word',
                lineHeight: 1.5,
                textDecoration: 'underline',
            }}
        >
            {children}
            <IconExternalLink
                style={{ verticalAlign: 'top', marginLeft: 1 }}
                width={20}
                height={20}
            />
        </Typography>
    );
}

export function StatusCopyTypography({ children, sx }) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        const el = document.createElement('textarea');
        el.value = children;
        el.setAttribute('readonly', '');
        el.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box display="block">
            <Popover
                id={id}
                anchorEl={anchorEl}
                classes={{ paper: 'MuiPopover-paper' }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
                sx={{ borderRadius: 0 }}
            >
                <Box sx={{ padding: 2, borderRadius: 0 }}>
                    <Typography
                        sx={{
                            color: theme.palette.success.dark,
                            verticalAlign: 'top',
                        }}
                    >
                        <CheckCircleOutlineIcon
                            color="success.dark"
                            sx={{
                                verticalAlign: 'top',
                                width: 16,
                                height: 16,
                                marginRight: 0.5,
                            }}
                        />
                        Copied!
                    </Typography>
                </Box>
            </Popover>
            <Typography
                sx={{
                    display: 'block',
                    wordWrap: 'break-word',
                    lineHeight: 1.4,
                }}
                paragraph
                noWrap
            >
                <IconButton
                    aria-describedby={id}
                    onClick={handleOpen}
                    sx={{
                        padding: 0,
                        marginLeft: 1,
                        marginRight: 0.5,
                        width: 16,
                        height: 16,
                        display: 'inline-block',
                        float: 'left',
                    }}
                >
                    <ContentCopyIcon
                        sx={{
                            verticalAlign: 'top',
                            width: 16,
                            height: 16,
                        }}
                    />
                </IconButton>

                {children}
            </Typography>
        </Box>
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

StatusListItemBase.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string || PropTypes.node,
    sx: PropTypes.object,
};

StatusListItemBase.defaultProps = {
    sx: {},
    content: '',
};

StatusLinkTypography.propTypes = {
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};
