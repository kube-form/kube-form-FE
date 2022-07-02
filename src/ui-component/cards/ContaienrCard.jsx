import React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';

import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

function ContainerCard({ id, content, index }) {
    const theme = useTheme();
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <ImageContainerCard
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                >
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem
                                alignItems="center"
                                disableGutters
                                sx={{ py: 0 }}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <img
                                            className="ContainerCardImage"
                                            alt={`${index}_container_image`}
                                            src={`https://picsum.photos/id/${index}/100/50`}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45,
                                    }}
                                    primary={
                                        <Typography variant="h4" noWrap>
                                            {content}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: theme.palette.grey[500],
                                                mt: 0.5,
                                            }}
                                            noWrap
                                        >
                                            {id}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </ImageContainerCard>
            )}
        </Draggable>
    );
}

ContainerCard.propTypes = {
    index: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

const ImageContainerCard = styled(Grid)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.dark,
    borderRadius: 10,
    // color: '#fff',
    overflow: 'hidden',
    position: 'relative',

    '& .ContainerCardImage': {},
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130,
    },
}));

export default ContainerCard;
