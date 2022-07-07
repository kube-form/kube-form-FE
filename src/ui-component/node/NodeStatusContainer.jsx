import React from 'react';
import usePods from 'hooks/usePods';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

import styled from '@emotion/styled';

import NodeCard from 'ui-component/cards/NodeCard';

import IngressControllerNode from './IngressControllerNode';
import RightUserNode from './RightUserNode';

function NodeContainer() {
    const { sub } = usePods();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={6}>
                <ColContainer
                    style={{ minHeight: 400, backgroundColor: '#fff' }}
                >
                    <TaskList theme={theme}>
                        {sub.map((item, index) => (
                            <NodeCard
                                key={item.id}
                                index={index}
                                id={item.id}
                                content={item.content}
                            />
                        ))}
                    </TaskList>
                </ColContainer>
            </Grid>
            <Grid item xs={3}>
                <IngressControllerNode />
            </Grid>
            <Grid item xs={3}>
                <RightUserNode />
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
