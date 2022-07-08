import React from 'react';
import usePods from 'hooks/usePods';

import { useTheme } from '@mui/material/styles';
import { Grid, Box, Button, Typography } from '@mui/material';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/NodeCard';

import IngressControllerNode from './IngressControllerNode';

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();

    return (
        <Grid container alignItems="center">
            <Grid
                item
                xs={8}
                style={{
                    minHeight: 400,
                    minWidth: 200,
                    backgroundColor: theme.palette.grey[50],
                }}
            >
                <Typography sx={{ m: 2 }} variant="h3">
                    worker node1
                </Typography>

                <Droppable droppableId="sub">
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                            {...provided.droppableProps}
                            theme={theme}
                            alignContent="center"
                        >
                            {sub.map((item, index) => (
                                <NodeCard
                                    key={item.id}
                                    index={index}
                                    id={item.id}
                                    content={item.content}
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

const TaskList = styled(Box)`
    border-radius: 10px;
    padding: 15px;
    transition: background-color 0.5s ease;
    background-color: ${(props) =>
        props.isDraggingOver
            ? props.theme.palette.success.light
            : props.theme.palette.primary[200]};
    flex-grow: 1;
    min-height: 400px;

    /* z-index: 99; */
`;
