import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { v4 as uuid } from 'uuid';
import { Grid, Box } from '@material-ui/core';
import usePods from 'hooks/usePods';
import WaitContainer from 'ui-component/bottomTab/WaitContainer';
import ContainerCard from 'ui-component/cards/ContainerCard';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';

import { Xwrapper } from 'react-xarrows';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';

const Items = [
    {
        id: uuid(),
        content: 'Tomcat',
    },
    {
        id: uuid(),
        content: 'Java',
    },
    {
        id: uuid(),
        content: 'Debian',
    },
    {
        id: uuid(),
        content: 'PHP',
    },
    {
        id: uuid(),
        content: 'MySQL',
    },
    {
        id: uuid(),
        content: 'Ubuntu',
    },
    {
        id: uuid(),
        content: 'React',
    },
    {
        id: uuid(),
        content: 'Node.js',
    },
    {
        id: uuid(),
        content: 'Flask',
    },
];

export default function Cluster() {
    const pods = usePods();

    const getDummyData = async () => {
        setTimeout(() => {
            pods.setWait(Items);
        }, 1000);
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
        getDummyData();
    }, []);

    useEffect(() => {}, [window.innerWidth]);

    return (
        <Xwrapper>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container>
                    <Grid
                        item
                        xs={2}
                        direction="column"
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                        <Box sx={{ minHeight: 100 }} />
                        <LeftUserNode className="eks_user" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <MainWorkerNode className="eks_main" />
                    </Grid>
                    <Grid item xs={3}>
                        <Droppable droppableId="sub">
                            {(provided, snapshot) => (
                                <Grid
                                    style={{
                                        backgroundColor: '#ffffff',
                                        zIndex: 99,
                                        minHeight: 400,
                                    }}
                                    item
                                    xs={11}
                                    container
                                    className="eks_sub"
                                    id="eks_sub"
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}
                                    {...provided.droppableProps}
                                >
                                    {pods.sub.map((item, index) => (
                                        <ContainerCard
                                            index={index}
                                            {...item}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </Grid>
                            )}
                        </Droppable>
                    </Grid>
                    <Grid item xs={3}>
                        4
                    </Grid>
                </Grid>
                <LineSet />
                <Grid item xs={12}>
                    <WaitContainer />
                </Grid>
            </DragDropContext>
        </Xwrapper>
    );
}
