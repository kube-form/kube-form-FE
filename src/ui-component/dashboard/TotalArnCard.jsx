import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import HubIcon from '@mui/icons-material/Hub';

// styles
const CardWrapper = styled(MainCard)(({ theme, index }) => ({
    backgroundColor:
        // eslint-disable-next-line no-nested-ternary
        index === 0
            ? theme.palette.common.white
            : index === 1
            ? theme.palette.primary.dark
            : theme.palette.secondary.dark,
    color:
        // eslint-disable-next-line no-nested-ternary
        index > 0 ? theme.palette.common.black : theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${
            // eslint-disable-next-line no-nested-ternary
            index === 0
                ? theme.palette.warning.dark
                : index === 1
                ? theme.palette.primary[200]
                : theme.palette.secondary[200]
        } -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${
            // eslint-disable-next-line no-nested-ternary
            index === 0
                ? theme.palette.warning.dark
                : index === 1
                ? theme.palette.primary[200]
                : theme.palette.secondary[200]
        } -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130,
    },
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

function TotalArnCard({ isLoading, url, index, name }) {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false} index={index}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem
                                alignItems="center"
                                disableGutters
                                sx={{ py: 0 }}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor:
                                                // eslint-disable-next-line no-nested-ternary
                                                index === 0
                                                    ? theme.palette.warning
                                                          .light
                                                    : index === 1
                                                    ? theme.palette.primary[800]
                                                    : theme.palette
                                                          .secondary[800],
                                            color:
                                                index === 0
                                                    ? theme.palette.warning.dark
                                                    : '#fff',
                                        }}
                                    >
                                        <HubIcon fontSize="inherit" />
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
                                            sx={{
                                                color:
                                                    index === 0
                                                        ? theme.palette
                                                              .grey[800]
                                                        : '#fff',
                                            }}
                                            noWrap
                                        >
                                            {/* Ingress Controller {index + 1} */}
                                            {/* $203k */}
                                            {name}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    index === 0
                                                        ? theme.palette
                                                              .grey[500]
                                                        : 'primary.light',
                                                mt: 0.25,
                                            }}
                                            noWrap
                                        >
                                            {url}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
}

TotalArnCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default TotalArnCard;
