import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import LineTo, { SteppedLineTo } from 'react-lineto';

import { v4 as uuid } from 'uuid';
import { Button, Box, Grid } from '@material-ui/core';

import usePods from 'hooks/usePods';
import WaitContainer from 'ui-component/bottomTab/WaitContainer';
import StatusBottomContainer from 'ui-component/bottomTab/StatusBottomContainer';

import { Column } from './Column';
// import '@atlaskit/css-reset';
import { ButtonBox, AllArea } from './Styles';
import Remove from './Remove';
import Modal from './Modal';
// import './css/global.css';

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

    console.log(pods);
    const [items, setItems] = useState([]);
    const { main, sub } = pods;
    const [modalOpen, setModalOpen] = useState(false);
    // splice(start, deleteCnt, insertVal) start부터 deleteCnt개 제거, insertVal몇개 넣어라

    const subArr = pods.sub;
    const cnt = subArr.length;

    const getDummyData = async () => {
        setTimeout(() => {
            pods.setWait(Items);
        }, 1000);
    };

    const reorder = (current, startIndex, endIndex) => {
        const result = Array.from(current);
        const [removed] = result.splice(startIndex, 1); // startIndex 한개 removed로
        result.splice(endIndex, 0, removed); // 마지막에 removed추가

        return result;
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

    const OpenModal = () => {
        setModalOpen(true);
    };
    const CloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        getDummyData();
    }, []);

    // useEffect(() => {
    //     console.log(main, sub);
    // }, [main, sub]);

    return (
        <AllArea>
            <DragDropContext
                // onDragStart={onDragStart}
                // onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
                <Grid container sx={{ display: 'flex', alginItems: 'center' }}>
                    <Grid item xs={3}>
                        123
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{ display: 'flex', alginItems: 'center' }}
                    >
                        <Box className="main">
                            <Column items={pods.main} droppableId="main" />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className="sub">
                            <Column items={pods.sub} droppableId="sub" />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        456
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Remove items={items} droppableId="remove" />
                </Grid>
                <Grid item xs={12}>
                    <WaitContainer />
                </Grid>
                <Grid item xs={12}>
                    <StatusBottomContainer />
                </Grid>
            </DragDropContext>
            <LineTo
                delay={0}
                borderColor="#000"
                borderWidth="2px"
                borderStyle="solid"
                // 점선 : dashed
                from="main"
                to="sub"
            />
            {/* {subArr.map((item) => (
                    <SteppedLineTo
                        delay={0}
                        borderColor="#000"
                        borderWidth="2px"
                        borderStyle="solid"
                        // 점선 : dashed
                        key={item.id}
                        from={pods.main[0].id}
                        to={item.id}
                        orientation="h"
                    />
                ))} */}
            <ButtonBox>
                <Button
                    onClick={() => {
                        setTimeout(OpenModal, 2000);
                    }}
                    color="primary"
                >
                    Submit
                </Button>
            </ButtonBox>
            <Modal open={modalOpen} close={CloseModal} header="제출 확인 창">
                제출이 완료되었습니다!
            </Modal>
        </AllArea>
    );
}
