import React, { useState } from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    useTheme,
    Typography,
    Popover,
} from '@mui/material';
import PropTypes from 'prop-types';
import IngressControllerNode from 'ui-component/node/IngressControllerNode';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from '@emotion/styled';

const IngressControllerWithDialog = ({ url, id }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleAnchorClose = () => {
        setAnchorEl(null);
    };

    const anchorOpen = Boolean(anchorEl) && open;
    const anchorId = anchorOpen ? 'simple-popover' : undefined;

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const previousCopy = () => {
        const textArea = document.createElement('textarea');
        textArea.value = url;

        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    };

    const onClick = (event) => {
        navigator.clipboard
            .writeText(url)
            .then(
                () => {},
                (err) => {
                    previousCopy();
                },
            )
            .finally(() => {
                setAnchorEl(event.target);
                setTimeout(() => {
                    handleAnchorClose();
                }, 1000);
            });
    };
    return (
        <>
            <Popover
                id={anchorId}
                anchorEl={anchorEl}
                classes={{ paper: 'MuiPopover-paper' }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={anchorOpen}
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
                            aria-describedby={anchorId}
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle variant="h3">Ingress Controller Url</DialogTitle>
                <DialogContent>
                    <CopyContentWrapper borderRadius={1}>
                        <IconButton onClick={onClick}>
                            <ContentCopyIcon />
                        </IconButton>
                        <CopyContent component="span">
                            <a href={url}>{url}</a>
                        </CopyContent>
                    </CopyContentWrapper>
                </DialogContent>
            </Dialog>
            <IngressControllerNode id={id} onClick={handleOpen} />
        </>
    );
};

const CopyContentWrapper = styled(Box)`
    white-space: nowrap;
    overflow: scroll;
    overflow: auto;
    background: rgb(247, 246, 243);
`;

const CopyContent = styled.span`
    color: rgb(55, 53, 47);

    & a {
        text-decoration: none;
    }
`;

IngressControllerWithDialog.propTypes = {
    url: PropTypes.string,
};

IngressControllerWithDialog.defaultProps = {
    url: '/',
};

export default IngressControllerWithDialog;
