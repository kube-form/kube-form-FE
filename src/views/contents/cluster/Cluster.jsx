import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

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
import { useTheme } from 'styled-components';
import RightUserNode from 'ui-component/node/RightUserNode';
import SubmitBtn from 'ui-component/node/SubmitBtn';
import IngressControllerNode from 'ui-component/node/IngressControllerNode';
import useAuth from 'hooks/useAuth';
import { Button } from '@mui/material';

export default function Cluster() {
    const pods = usePods();
    const { data, error } = getDockerImages();
    const { user } = useAuth();

    const updateXarrow = useXarrow();
    const theme = useTheme();

    const getWaitImages = async () => {
        // if (DUMMYDATA) {
        //     pods.setWait(DUMMYDATA.map((item) => ({ ...item, id: uuid() })));
        // }
        if (data && !error) {
            pods.setWait(
                data.map((item) => ({
                    ...item,
                    draggableId: uuid(),
                    id: item.id,
                })),
            );
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
            if (finish === 'sub0') {
                pods.addSubFromWait(0, source.index);
            } else if (finish === 'sub1') {
                pods.addSubFromWait(1, source.index);
            } else if (finish === 'sub2') {
                pods.addSubFromWait(2, source.index);
            } else if (start === finish) {
                pods.reorder(source.index, destination.index);
            }
            // copy(Items, items, source, destination);
        }
        if (finish === 'remove' || finish === 'wait') {
            if (start === 'main') {
                pods.removeMain(source.index);
            } else if (start === 'sub0') {
                pods.removeSub(0, source.index);
            } else if (start === 'sub1') {
                pods.removeSub(1, source.index);
            } else if (start === 'sub2') {
                pods.removeSub(2, source.index);
            }
        }
    };

    useEffect(() => {
        getWaitImages();
    }, [data]);

    const onResize = () => {
        setTimeout(() => {
            updateXarrow();
        }, 400);
    };

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // TODO;
    // if (isLoading) {
    //     return <>loading</>;
    // }

    return (
        <>
            <Xwrapper>
                <DragDropContext
                    onDragEnd={onDragEnd}
                    // onDragUpdate={() => updateXarrow}
                    // onDragStart={() => updateXarrow}
                >
                    <Box py={2}>
                        <Grid container>
                            <Grid
                                item
                                xs={2}
                                direction="column"
                                container
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
                                xs={3}
                                alignItems="center"
                                container
                                style={{ display: 'flex' }}
                            >
                                <MainWorkerNode className="main" />
                            </Grid>
                            <Grid item xs={4} id="sub">
                                {[...Array(pods.workerNodeCnt + 1)].map(
                                    (item, index) => (
                                        <NodeContainer
                                            id={index}
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={index}
                                            nodeIndex={index}
                                        />
                                    ),
                                )}
                            </Grid>
                            <Grid
                                item
                                xs={1}
                                container
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Box padding={3}>
                                    {Object.keys(pods.ingressStatus)
                                        .sort(
                                            (a, b) =>
                                                parseInt(a, 10) -
                                                parseInt(b, 10),
                                        )
                                        .map((item) => (
                                            <IngressControllerNode
                                                key={item}
                                                id={item}
                                            />
                                        ))}
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                direction="column"
                                container
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <RightUserNode />
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid
                        xs={12}
                        container
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Grid item xs={10} />
                        <Grid item xs={2}>
                            <Box my={2}>
                                <Button variant="contained" size="large">
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                    <LineSet />

                    <Grid item xs={12}>
                        <WaitContainer />
                    </Grid>
                </DragDropContext>
            </Xwrapper>
        </>
    );
}
