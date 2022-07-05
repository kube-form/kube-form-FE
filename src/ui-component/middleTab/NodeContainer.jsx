import React, { useRef } from 'react';
import usePods from 'hooks/usePods';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

import styled from '@emotion/styled';

import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/NodeCard';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HailIcon from '@mui/icons-material/Hail';

import Xarrow, { Xwrapper } from 'react-xarrows';

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();
    const controllerRef = useRef();
    const userRef = useRef(null);

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={6}>
                {/* <Column items={items} droppableId="sub" /> */}
                <ColContainer>
                    <Typography variant="h2" align="center">
                        Worker Node
                    </Typography>
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
                    ref={controllerRef}
                    sx={{
                        ml: 8,
                        fontSize: 50,
                        color: theme.palette.secondary[200],
                    }}
                />
            </Grid>
            <Grid item xs={3} alignContent="center" jusitfyContent="center">
                <HailIcon
                    ref={userRef}
                    sx={{
                        ml: 5,
                        fontSize: 50,
                        color: theme.palette.secondary[200],
                    }}
                />
            </Grid>

            <Xwrapper>
                {sub.map((item) => (
                    <Xarrow
                        key={item.id}
                        start={controllerRef}
                        end={item.id}
                        path="grid"
                        startAnchor="left"
                        color={theme.palette.secondary[200]}
                        showHead={null}
                        strokeWidth={3}
                        headSize={4}
                    />
                ))}
                <Xarrow
                    end={controllerRef}
                    start={userRef}
                    strokeWidth={2}
                    showHead={null}
                    color={theme.palette.secondary[200]}
                />
            </Xwrapper>
        </Grid>
    );
}

export default NodeContainer;

const TaskList = styled.div`
    border-radius: 10px;
    padding: 15px;
    transition: background-color 0.5s ease;
    background-color: ${(props) =>
        props.isDraggingOver
            ? props.theme.palette.success.light
            : props.theme.palette.primary};
    flex-grow: 1;

    /* z-index: 99; */
`;

const ColContainer = styled(Grid)(({ theme }) => ({
    // backgroundColor: `${theme.palette.grey}`,
}));
