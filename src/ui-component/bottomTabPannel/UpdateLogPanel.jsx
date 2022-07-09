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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import { v4 as uuid } from 'uuid';
import MainCard from 'ui-component/cards/MainCard';

const DUMMYDATA = [
    { id: uuid(), date: '2022-02-04', type: 'funny', status: 'status' },
    { id: uuid(), date: '2022-02-05', type: 'sleep', status: 'status4' },
    { id: uuid(), date: '2022-02-06', type: 'happy', status: 'status3' },
    { id: uuid(), date: '2022-02-07', type: 'kkkkkk', status: 'status2' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
    { id: uuid(), date: '2022-02-08', type: 'kkk', status: 'status1' },
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
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.status}</TableCell>
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
