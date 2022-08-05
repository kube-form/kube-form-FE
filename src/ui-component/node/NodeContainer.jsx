import React from 'react';
import usePods from 'hooks/usePods';

import { useTheme } from '@mui/material/styles';
import { Grid, Box, Typography, Divider } from '@mui/material';
import { gridSpacing } from 'store/constant';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/node/NodeCard';

function NodeContainer({ nodeIndex }) {
    const sub = usePods().sub[nodeIndex];
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid
                item
                xs={8}
                style={{
                    minHeight: 200,
                    minWidth: 200,
                    backgroundColor: theme.palette.grey[50],
                    marginTop: 24,
                    marginBottom: 24,
                }}
                id={`workernode${nodeIndex}`}
            >
                <Grid item xs={12}>
                    <Typography sx={{ m: 2 }} variant="h3">
                        worker node {nodeIndex + 1}
                    </Typography>
                </Grid>
                <Grid item xs={12} minHeight={15}>
                    <Divider />
                </Grid>
                <Droppable droppableId={`sub${nodeIndex}`}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            // isDraggingOver={snapshot.isDraggingOver}
                            isdraggingover={snapshot.isDraggingOver}
                            {...provided.droppableProps}
                            theme={theme}
                            alignContent="center"
                            rowSpacing={1}
                            container
                        >
                            {sub.map((item, index) => (
                                <NodeCard
                                    key={item.draggableId}
                                    index={index}
                                    id={item.draggableId}
                                    image={item.image}
                                    name={item.name}
                                    url={item.url}
                                    port={item.port}
                                    draggableId={item.draggableId}
                                />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
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
        props.isdraggingover
            ? props.theme.palette.success.light
            : 'transparent'};
    flex-grow: 1;
    min-height: 200px;

    /* z-index: 99; */
`;
