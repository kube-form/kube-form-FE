import {
    Pagination,
    CardContent,
    Grid,
    Typography,
    Divider,
    Modal,
} from '@mui/material';
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import usePods from 'hooks/usePods';
import { gridSpacing } from 'store/constant';

import MainCard from 'ui-component/cards/MainCard';
import ContainerCard from 'ui-component/cards/node/WaitNodeCard';
import EmptyNodeCard from 'ui-component/cards/node/EmptyNodeCard';
import CustomDialog from 'ui-component/dialog/CustomDialog';

const ROWPERPAGE = 7;

function WaitContainer({ waitData }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [page, setPage] = useState(1);

    const handlePage = (e, value) => {
        setPage(value);
    };

    return (
        <>
            <CustomDialog open={open} handleClose={handleClose} />
            <MainCard content={false}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid
                                container
                                alignContent="center"
                                justifyContent="space-between"
                            >
                                <Grid item>
                                    <Typography variant="h4">
                                        Waited Image Container
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Droppable droppableId="wait">
                            {(provided, snapshot) => (
                                <Grid
                                    item
                                    xs={12}
                                    container
                                    spacing={gridSpacing}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {waitData
                                        .slice(
                                            (page - 1) * ROWPERPAGE,
                                            page * ROWPERPAGE,
                                        )
                                        .map((item, index) => (
                                            <ContainerCard
                                                key={item.draggableId}
                                                id={item.id}
                                                index={index}
                                                image={item.image}
                                                name={item.name}
                                                url={item.url}
                                                port={item.port}
                                                draggableId={item.draggableId}
                                            />
                                        ))}
                                    <EmptyNodeCard handleOpen={handleOpen} />
                                    {provided.placeholder}
                                </Grid>
                            )}
                        </Droppable>
                        <Grid
                            item
                            xs={12}
                            alignContent="center"
                            justifyContent="center"
                            textAlign="center"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Pagination
                                size="small"
                                page={page}
                                defaultPage={1}
                                count={Math.ceil(waitData.length / ROWPERPAGE)}
                                onChange={handlePage}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
}

export default WaitContainer;
