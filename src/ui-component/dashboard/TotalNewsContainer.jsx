import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainCard from 'ui-component/cards/MainCard';
import { List, TablePagination, Typography } from '@mui/material';
import TotalNewsItem from './TotalNewsItem';

const TotalNewsContainer = ({ isLoading, news }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <MainCard
            title={<Typography variant="h3">LATEST KUBERNETES NEWS</Typography>}
        >
            <List>
                {news
                    .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                    .map((item) => (
                        <TotalNewsItem key={item.url} {...item} />
                    ))}
            </List>
            <TablePagination
                component="div"
                count={news.length}
                page={page}
                rowsPerPageOptions={[4, 8, 12, 16]}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </MainCard>
    );
};

TotalNewsContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default TotalNewsContainer;
