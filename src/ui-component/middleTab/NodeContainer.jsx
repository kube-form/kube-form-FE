import React from 'react';
import usePods from 'hooks/usePods';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { CardContent, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/NodeCard';

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.5s ease;
    background-color: ${(props) => (props.isDraggingOver ? 'orange' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    /* z-index: 99; */
`;

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <MainCard content={false}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid
                                container
                                alignContent="center"
                                jusitfyContent="center"
                            >
                                <Grid item>
                                    <Typography variant="h2">
                                        worker node area
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* <Column items={items} droppableId="sub" /> */}
                            <Droppable droppableId="sub">
                                {(provided, snapshot) => (
                                    <TaskList
                                        ref={provided.innerRef}
                                        isDraggingOver={snapshot.isDraggingOver}
                                        {...provided.droppableProps}
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
                    </Grid>
                </CardContent>
            </MainCard>
        </Grid>
    );
}

export default NodeContainer;
