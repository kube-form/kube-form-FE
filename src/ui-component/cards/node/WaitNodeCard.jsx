import React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';

import {
    Avatar,
    Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import CloseIcon from '@mui/icons-material/Close';
import { deleteDockerImage, getDockerImages } from 'api/cluster';
import useAuth from 'hooks/useAuth';

function ContainerWaitCard({
    id,
    index,
    image,
    name,
    url,
    draggableId,
    port,
    uid,
}) {
    const theme = useTheme();
    const { user } = useAuth();
    const { data, mutate } = getDockerImages(user.uid);
    const onDelete = async () => {
        const tmp = [...data];
        const idx = tmp.findIndex((item) => item.id === id);
        if (idx === -1) {
            return;
        }
        tmp.splice(idx, 1);
        mutate([...tmp]);
        const res = await deleteDockerImage({ id, uid: user.uid });
    };

    return (
        <Draggable key={draggableId} draggableId={draggableId} index={index}>
            {(provided, snapshot) => (
                <Grid
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isdragging={snapshot.isdragging}
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                >
                    <ImageContainerCard
                        nerCard
                        sx={{
                            p: 1,
                            transition: 'transform 0.3s, border 0.3s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 3,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                pb: 0.5,
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                fontSize="small"
                                variant="caption"
                                color={theme.palette.text.hint}
                            >
                                Container
                            </Typography>
                            {/* <IconButton onClick={onDelete}>
                                <CloseIcon
                                    sx={{
                                        width: 15,
                                        height: 15,
                                        color: theme.palette.common.white,
                                    }}
                                />
                            </IconButton> */}
                        </Box>
                        <List sx={{ py: 0, p: 1 }}>
                            <ListItem
                                alignItems="center"
                                disableGutters
                                sx={{ py: 0 }}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            border: '2px solid',
                                            borderColor: `${theme.palette.dark.light}`,
                                        }}
                                    >
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
                                            color="#FFF"
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
                                            {port}
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

ContainerWaitCard.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    image: PropTypes.string.isRequired,
    draggableId: PropTypes.string.isRequired,
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
        top: 50,
        right: -120,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 200,
        height: 200,
        background: `linear-gradient(210.9deg, ${theme.palette.primary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -110,
        left: -80,
    },
}));

export default ContainerWaitCard;
