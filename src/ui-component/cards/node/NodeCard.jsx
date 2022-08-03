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

function NodeCard({ id, index, image, name, url, draggableId }) {
    const theme = useTheme();

    return (
        <Draggable key={draggableId} draggableId={draggableId} index={index}>
            {(provided, snapshot) => (
                <Grid
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isdragging={snapshot.isdragging}
                    item
                    id={id}
                    xs={12}
                >
                    <ImageContainerCard sx={{ p: 2 }}>
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
                                            src={image}
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
                                        <Typography
                                            variant="h4"
                                            noWrap
                                            sx={{ color: '#FFF' }}
                                        >
                                            {name}
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
                                            {url}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </ImageContainerCard>
                </Grid>
            )}
        </Draggable>
    );
}

NodeCard.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

const ImageContainerCard = styled(Box)(({ theme }) => ({
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.dark.main,

    '& .ContainerCardImage': {
        width: 40,
        height: 40,
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 200,
        height: 200,
        background: `linear-gradient(210.04deg, ${theme.palette.primary.dark} -80.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: 30,
        right: -110,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 200,
        height: 200,
        background: `linear-gradient(210.9deg, ${theme.palette.primary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -110,
        left: -70,
    },
}));

export default NodeCard;
