import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    useTheme,
    styled,
    CardActionArea,
    Skeleton,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function EmptyNodeCard({ handleOpen }) {
    const theme = useTheme();
    return (
        <Grid item lg={3} md={3} sm={3} xs={3}>
            <CardActionArea sx={{ borderRadius: 2 }} onClick={handleOpen}>
                <ImageContainerCard sx={{ p: 2 }}>
                    <List sx={{ py: 0 }}>
                        <ListItem
                            alignItems="center"
                            disableGutters
                            sx={{ py: 0 }}
                        >
                            <ListItemAvatar>
                                {/* <Avatar> */}
                                <Skeleton
                                    variant="circular"
                                    animation="wave"
                                    width={40}
                                    height={40}
                                />
                                {/* </Avatar> */}
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    py: 0,
                                    mt: 0.45,
                                    mb: 0.45,
                                }}
                                primary={
                                    <Typography variant="h4" noWrap>
                                        Custom
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
                                        Add Image!
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </ImageContainerCard>
            </CardActionArea>
        </Grid>
    );
}

EmptyNodeCard.propTypes = {
    handleOpen: PropTypes.func.isRequired,
};

const ImageContainerCard = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.dark,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    border: '1px dashed grey',

    '& .ContainerCardImage': {
        width: 40,
        height: 40,
    },
}));

export default EmptyNodeCard;
