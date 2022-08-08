import React from 'react';
import {
    Avatar,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

function DashboardStatus({ data }) {
    const theme = useTheme();

    // console.log(data);

    return (
        <>
            {data.sub.map((node, idx) => (
                <Box
                    sx={{
                        border: `solid 2px ${theme.palette.grey[200]}`,
                        borderRadius: 4,
                        my: 3,
                        p: 2,
                        transition: 'border 0.3s',
                        '&:hover': {
                            borderColor: theme.palette.primary.dark,
                            boxShadow: 2,
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                        Worker Node Num: {idx}
                    </Typography>
                    {data.sub[idx].length ? (
                        node.map((docker) => {
                            return (
                                <Grid item>
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
                                                            className="ContainerStatusImage"
                                                            alt={`${idx}_container_image`}
                                                            src={docker.image}
                                                        />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="h4"
                                                            noWrap
                                                            sx={{
                                                                color: '#FFF',
                                                            }}
                                                        >
                                                            {docker.name}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                color: theme
                                                                    .palette
                                                                    .grey[500],
                                                                mt: 0.5,
                                                            }}
                                                            noWrap
                                                        >
                                                            {docker.port}
                                                        </Typography>
                                                    }
                                                />
                                                <Typography
                                                    variant="subtitle1"
                                                    color="#fff"
                                                    noWrap
                                                >
                                                    {docker.url}
                                                </Typography>
                                            </ListItem>
                                        </List>
                                    </ImageContainerCard>
                                    <Box sx={{ py: 1.5 }} />
                                </Grid>
                            );
                        })
                    ) : (
                        <Grid item>
                            <Typography variant="subtitle2" textAlign="center">
                                non docker image
                            </Typography>
                        </Grid>
                    )}
                </Box>
            ))}
        </>
    );
}

const ImageContainerCard = styled(Box)(({ theme }) => ({
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.dark.main,

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

export default DashboardStatus;
