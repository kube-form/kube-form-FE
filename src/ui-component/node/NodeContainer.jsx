import React from 'react';
import usePods from 'hooks/usePods';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { Grid, Box, CardActionArea } from '@mui/material';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/NodeCard';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HailIcon from '@mui/icons-material/Hail';
import SubCard from 'ui-component/cards/SubCard';

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={6}>
                <ColContainer
                    style={{ minHeight: 400, backgroundColor: '#fff' }}
                >
                    <Droppable droppableId="sub">
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}
                                {...provided.droppableProps}
                                theme={theme}
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
                </ColContainer>
            </Grid>

            <Grid item xs={3} alignContent="center" jusitfyContent="center">
                <AccountTreeIcon
                    // ref={controllerRef}
                    id="controller"
                    sx={{
                        ml: 8,
                        fontSize: 50,
                        color: theme.palette.secondary[200],
                    }}
                />
            </Grid>
            <Grid item xs={3} alignContent="center" jusitfyContent="center">
                <HailIcon
                    // ref={userRef}
                    id="user"
                    sx={{
                        ml: 5,
                        fontSize: 50,
                        color: theme.palette.secondary[200],
                    }}
                />
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
            : props.theme.palette.primary};
    flex-grow: 1;
    min-height: 400px;

    /* z-index: 99; */
`;

const ColContainer = styled(Grid)(({ theme }) => ({}));
