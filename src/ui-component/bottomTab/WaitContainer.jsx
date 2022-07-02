import {
    Pagination,
    Button,
    CardContent,
    Grid,
    Typography,
    Divider,
} from '@mui/material';
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import usePods from 'hooks/usePods';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';

import MainCard from 'ui-component/cards/MainCard';
import ContainerCard from 'ui-component/cards/ContaienrCard';

const ROWPERPAGE = 8;

function WaitContainer() {
    const { wait } = usePods();
    const [page, setPage] = useState(1);

    const handlePage = (e) => {
        setPage(parseInt(e.target.outerText, 10));
    };

    return (
        <MainCard content={false}>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignContent="center"
                            jusitfyContent="space-between"
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
                                xs={11}
                                container
                                spacing={gridSpacing}
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}
                                {...provided.droppableProps}
                            >
                                {wait
                                    .slice(
                                        (page - 1) * ROWPERPAGE,
                                        page * ROWPERPAGE,
                                    )
                                    .map((item, index) => (
                                        <ContainerCard
                                            key={item.id}
                                            index={index}
                                            id={item.id}
                                            content={item.content}
                                        />
                                    ))}
                                {provided.placeholder}
                            </Grid>
                        )}
                    </Droppable>
                    <Grid
                        item
                        xs={1}
                        alignContent="center"
                        jusitfyContent="center"
                        textAlign="center"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <AnimateButton>
                            <Button variant="contained" fullWidth>
                                submit
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        alignContent="center"
                        jusitfyContent="center"
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
                            count={Math.ceil(wait.length / ROWPERPAGE)}
                            onChange={handlePage}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </MainCard>
    );
}

export default WaitContainer;
