import React from 'react';
import PropTypes from 'prop-types';

import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemButton,
    Typography,
} from '@mui/material';

const TotalNewsItem = ({ title, author, content, url, imageAddress }) => {
    return (
        <ListItemButton LinkComponent="a" href={url} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={title} src={imageAddress} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography variant="h4" noWrap>
                        {title}
                    </Typography>
                }
                secondary={
                    <>
                        <Typography variant="subtitle2">{author}</Typography>
                        <Typography variant="body2">{content}</Typography>
                    </>
                }
            />
        </ListItemButton>
    );
};

TotalNewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageAddress: PropTypes.string.isRequired,
};

export default TotalNewsItem;
