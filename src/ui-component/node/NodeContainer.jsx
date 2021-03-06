import React from 'react';
import usePods from 'hooks/usePods';

import { useTheme } from '@mui/material/styles';
import { Grid, Box, Typography, Divider } from '@mui/material';
import { gridSpacing } from 'store/constant';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/node/NodeCard';
import IngressControllerNode from './IngressControllerNode';

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid
                item
                xs={8}
                style={{
                    minHeight: 400,
                    minWidth: 200,
                    backgroundColor: theme.palette.grey[50],
                }}
                id="workernode1"
            >
                <Grid item xs={12}>
                    <Typography sx={{ m: 2 }} variant="h3">
                        worker node 1
                    </Typography>
                </Grid>
                <Grid item xs={12} minHeight={15}>
                    <Divider />
                </Grid>
                <Droppable droppableId="sub">
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                            {...provided.droppableProps}
                            theme={theme}
                            alignContent="center"
                            rowSpacing={1}
                            container
                        >
                            {sub.map((item, index) => (
                                <NodeCard
                                    key={item.id}
                                    index={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    url={item.url}
                                />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Grid>
            <Grid item xs={4}>
                <Box padding={3}>
                    <IngressControllerNode />
                </Box>
            </Grid>
        </Grid>
    );
}

export default NodeContainer;

const TaskList = styled(Grid)`
    border-radius: 10px;
    padding: 15px;
    transition: background-color 0.5s ease;
    background-color: ${(props) =>
        props.isDraggingOver
            ? props.theme.palette.success.light
            : 'transparent'};
    flex-grow: 1;
    min-height: 400px;

    /* z-index: 99; */
`;
