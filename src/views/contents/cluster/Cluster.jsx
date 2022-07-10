import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import usePods from 'hooks/usePods';
import { v4 as uuid } from 'uuid';
import WaitContainer from 'ui-component/bottomTab/WaitContainer';
import NodeContainer from 'ui-component/node/NodeContainer';
import { Grid, Box, Button } from '@material-ui/core';

import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import { useXarrow, Xwrapper } from 'react-xarrows';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import WorkerNodeNumStatus from 'ui-component/node/WorkerNodeNumStatus';
import { getDockerImages } from 'api/cluster';
import { useTheme } from 'styled-components';
import ClusterMainCard from 'ui-component/cards/ClusterMainCard';
import RightUserNode from 'ui-component/node/RightUserNode';
import SubmitBtn from 'ui-component/node/SubmitBtn';

const DUMMYDATA = [
    {
        url: 'mysql:latest',
        image: 'https://kube-form.s3.ap-northeast-2.amazonaws.com/dockerImages/mysql.png',
        name: 'mysql:latest',
    },
    {
        url: 'node:latest',
        image: 'https://kube-form.s3.ap-northeast-2.amazonaws.com/dockerImages/node.png',
        name: 'node:latest',
    },
    {
        url: 'nginx:latest',
        image: 'https://kube-form.s3.ap-northeast-2.amazonaws.com/dockerImages/nginx.png',
        name: 'nginx:latest',
    },
];

export default function Cluster() {
    const pods = usePods();
    // const { data, isLoading } = getDockerImages();

    const updateXarrow = useXarrow();
    const theme = useTheme();

    const getWaitImages = async () => {
        if (DUMMYDATA) {
            pods.setWait(DUMMYDATA.map((item) => ({ ...item, id: uuid() })));
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
    }, [DUMMYDATA]);

    // TODO;
    // if (isLoading) {
    //     return <>loading</>;
    // }
    return (
        <ClusterMainCard>
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
                                xs={3}
                                alignItems="center"
                                style={{ display: 'flex' }}
                            >
                                <MainWorkerNode className="main" />
                            </Grid>
                            <Grid item xs={5} id="sub">
                                <NodeContainer />
                            </Grid>

                            <Grid
                                item
                                xs={2}
                                direction="column"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <RightUserNode />
                            </Grid>
                            <LineSet />
                        </Grid>
                    </Box>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Grid item xs={10}>
                            <Box />
                        </Grid>
                        <Grid item xs={2}>
                            <SubmitBtn />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <WaitContainer />
                    </Grid>
                </DragDropContext>
            </Xwrapper>
        </ClusterMainCard>
    );
}
