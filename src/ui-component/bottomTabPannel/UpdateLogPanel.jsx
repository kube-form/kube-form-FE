import {
    Box,
    CardContent,
    TableRow,
    Table,
    TableCell,
    TableHead,
    Typography,
    TableBody,
    CardHeader,
    Divider,
    TablePagination,
    TableContainer,
    Avatar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import { v4 as uuid } from 'uuid';
import ErrorIcon from '@mui/icons-material/Error';
import DoneIcon from '@mui/icons-material/Done';

const DUMMYDATA = [
    { id: uuid(), date: '2022-07-10', type: 'update', status: 1 },
    { id: uuid(), date: '2022-07-09', type: 'update', status: 0 },
    { id: uuid(), date: '2022-07-09', type: 'generate', status: 1 },
    { id: uuid(), date: '2022-07-08', type: 'delete', status: 1 },
    { id: uuid(), date: '2022-06-30', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-30', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-30', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-30', type: 'generate', status: 0 },
    { id: uuid(), date: '2022-06-29', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-29', type: 'update', status: 0 },
    { id: uuid(), date: '2022-06-27', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-27', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-27', type: 'generate', status: 1 },
    { id: uuid(), date: '2022-06-27', type: 'delete', status: 1 },
    { id: uuid(), date: '2022-06-27', type: 'update', status: 1 },
    { id: uuid(), date: '2022-06-25', type: 'generate', status: 1 },
    { id: uuid(), date: '2022-06-24', type: 'generate', status: 1 },
];

function UpdateLogPanel({ value, index }) {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getTypeColor = (item) => {
        if (item === 'update') return theme.palette.info.dark;
        if (item === 'delete') return theme.palette.error.dark;
        return theme.palette.success.dark;
    };

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <CardHeader title="Update Log" />
            <Divider />
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">ID</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Date</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Type</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Status</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DUMMYDATA.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            ).map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                color: getTypeColor(item.type),
                                                fontWeight:
                                                    theme.typography
                                                        .fontWeightBold,
                                            }}
                                        >
                                            {item.type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {item.status ? (
                                            <Box sx={{ display: 'flex' }}>
                                                <Avatar
                                                    sx={{
                                                        width: 22,
                                                        height: 22,
                                                        mr: 1,
                                                        bgcolor: 'transparent',
                                                        color: theme.palette
                                                            .success.dark,
                                                    }}
                                                >
                                                    <DoneIcon />
                                                </Avatar>
                                                <Typography
                                                    sx={{
                                                        color: theme.palette
                                                            .success.dark,
                                                        fontWeight:
                                                            theme.typography
                                                                .fontWeightBold,
                                                    }}
                                                >
                                                    success
                                                </Typography>
                                            </Box>
                                        ) : (
                                            <Box sx={{ display: 'flex' }}>
                                                <Avatar
                                                    sx={{
                                                        width: 22,
                                                        height: 22,
                                                        mr: 1,
                                                        bgcolor: 'transparent',
                                                        color: theme.palette
                                                            .error.dark,
                                                    }}
                                                >
                                                    <ErrorIcon />
                                                </Avatar>
                                                <Typography
                                                    sx={{
                                                        color: theme.palette
                                                            .error.dark,
                                                        fontWeight:
                                                            theme.typography
                                                                .fontWeightBold,
                                                    }}
                                                >
                                                    error
                                                </Typography>
                                            </Box>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={DUMMYDATA.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </CardContent>
        </Box>
    );
}

UpdateLogPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default UpdateLogPanel;
