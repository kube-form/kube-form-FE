import React, { useEffect, useState } from 'react';
import usePods from 'hooks/usePods';
import { useTheme } from '@mui/material/styles';
import {
    Grid,
    Typography,
    Divider,
    Switch,
    Collapse,
    FormControlLabel,
} from '@mui/material';
import { gridSpacing } from 'store/constant';
import styled from '@emotion/styled';
import { Droppable } from 'react-beautiful-dnd';
import NodeCard from 'ui-component/cards/node/NodeCard';

function NodeContainer({ nodeIndex, visible }) {
    const sub = usePods().sub[nodeIndex];
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Grid container spacingy={gridSpacing} alignItems="center">
            <Grid
                item
                xs={8}
                style={{
                    minHeight: 100,
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
                        {/* <FormControlLabel
                            control={
                                <Switch checked={open} onChange={handleOpen} />
                            }
                            label="Show"
                        /> */}
                    </Typography>
                </Grid>
                <Grid item xs={12} minHeight={15}>
                    <Divider />
                </Grid>
                <Collapse in={visible}>
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
                </Collapse>
            </Grid>
        </Grid>
    );
}

export default NodeContainer;

const TaskList = styled(Grid)`
    border-radius: 10px;
    padding: 15px;
    padding-bottom: 77px;
    transition: background-color 0.5s ease;
    background-color: ${(props) =>
        props.isdraggingover
            ? props.theme.palette.success.light
            : 'transparent'};
    flex-grow: 1;
    min-height: 100px;

    /* z-index: 99; */
`;
