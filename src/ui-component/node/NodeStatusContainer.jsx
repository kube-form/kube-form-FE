import React, { useEffect } from 'react';
import usePods from 'hooks/usePods';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Divider, Box } from '@mui/material';

import styled from '@emotion/styled';

import StatusNodeCard from 'ui-component/cards/node/StatusNodeCard';

import IngressControllerNode from './IngressControllerNode';
import RightUserNode from './RightUserNode';

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
                        worker node {nodeIndex}
                    </Typography>
                </Grid>
                <Grid item xs={12} minHeight={15}>
                    <Divider />
                </Grid>
                <TaskList
                    theme={theme}
                    rowSpacing={1}
                    container
                    alignContent="center"
                >
                    {sub.map((item, index) => {
                        return (
                            <StatusNodeCard
                                key={item.id}
                                index={index}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                url={item.url}
                            />
                        );
                    })}
                </TaskList>
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
            : props.theme.palette.primary};
    flex-grow: 1;
    min-height: 200px;

    /* z-index: 99; */
`;
