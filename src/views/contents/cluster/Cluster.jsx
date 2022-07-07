import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';

import usePods from 'hooks/usePods';
import { v4 as uuid } from 'uuid';
import WaitContainer from 'ui-component/bottomTab/WaitContainer';
import NodeContainer from 'ui-component/node/NodeContainer';
import { Grid, Box } from '@material-ui/core';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import { useXarrow, Xwrapper } from 'react-xarrows';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import WorkerNodeNumStatus from 'ui-component/node/WorkerNodeNumStatus';
import { getDockerImages } from 'api/cluster';

export default function Cluster() {
    const pods = usePods();
    const { data, isLoading } = getDockerImages();
    const updateXarrow = useXarrow();

    const getWaitImages = async () => {
        if (data) {
            console.log(data);
            pods.setWait(data.map((item) => ({ ...item, id: uuid() })));
        }
    };

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // 올바른 droppable 위에 두지 않았으므로 그냥 리턴
        if (!destination) return;

        // 같은자리에 두면 그냥 리턴
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const start = source.droppableId;
        const finish = destination.droppableId;
        if (start === 'area' && start === finish) {
            // console.log('==');
            // setItems(reorder(items, source.index, destination.index));
        }
        if (start === 'wait') {
            if (finish === 'main') {
                pods.addMainFromWait(source.index);
            } else if (finish === 'sub') {
                pods.addSubFromWait(source.index);
            } else if (start === finish) {
                pods.reorder(source.index, destination.index);
            }
            // copy(Items, items, source, destination);
        }
        if (finish === 'remove' || finish === 'wait') {
            if (start === 'main') {
                pods.removeMain(source.index);
            } else if (start === 'sub') {
                pods.removeSub(source.index);
            }
        }
    };

    useEffect(() => {
        getWaitImages();
    }, [data]);

    // TODO;
    if (isLoading) {
        return <>loading</>;
    }
    return (
        <Xwrapper>
            <DragDropContext
                onDragEnd={onDragEnd}
                // onDragStart={updateXarrow}
                // onDragUpdate={updateXarrow}
            >
                <Box py={2}>
                    <Grid container>
                        <Grid
                            item
                            xs={2}
                            direction="column"
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <WorkerNodeNumStatus />
                            <LeftUserNode className="admin" />
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            alignItems="center"
                            style={{ display: 'flex' }}
                        >
                            <MainWorkerNode className="main" />
                        </Grid>
                        <Grid item xs={6} id="sub">
                            <NodeContainer />
                        </Grid>
                    </Grid>
                </Box>

                <LineSet />

                <Grid item xs={12}>
                    <WaitContainer />
                </Grid>
            </DragDropContext>
        </Xwrapper>
    );
}