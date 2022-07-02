import {
    Avatar,
    Box,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

function NetworkPanel({ value, index }) {
    const theme = useTheme();
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="h4" noWrap>
                                    Instance ID
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
                                    i-jid92124y812947981j (test)
                                </Typography>
                            }
                        />
                        <ListItemText
                            primary={
                                <Typography variant="h4" noWrap>
                                    public IPv4 address
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
                                    i-jid92124y812947981j (test)
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="h4" noWrap>
                                    public IPv4 address
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
                                    i-jid92124y812947981j (test)
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
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
                                        }}
                                    >
                                        <CheckIcon />
                                    </Avatar>
                                    <Typography
                                        sx={{
                                            color: theme.palette.success.dark,
                                        }}
                                    >
                                        running
                                    </Typography>
                                </ListItemAvatar>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Box>
    );
}

NetworkPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default NetworkPanel;
