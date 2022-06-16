import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { v4 as uuid } from 'uuid';
import { Button } from '@material-ui/core';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { Column } from './column';
// import "@atlaskit/css-reset";
import { ButtonBox, Container, List, ImgArea, AllArea } from './styles';
import Remove from './remove';
import Modal from './modal';
import clusterImg from './img/Cluster.jpeg';
import './css/global.css';

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
console.log(Items);
export default function Cluster() {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    // splice(start, deleteCnt, insertVal) start부터 deleteCnt개 제거, insertVal몇개 넣어라

    const reorder = (current, startIndex, endIndex) => {
        const result = Array.from(current);
        const [removed] = result.splice(startIndex, 1); // startIndex 한개 removed로
        result.splice(endIndex, 0, removed); // 마지막에 removed추가

        return result;
    };

    const copy = (source, current, droppableSource, droppableDestination) => {
        // console.log(droppableDestination, "==> dest", destination);
        const item = source[droppableSource.index];
        const idx = droppableDestination.index;
        const arr = Array.from(current);

        arr.splice(idx, 0, { ...item, id: uuid() });
        setItems(arr);
    };

    const removeItem = (current, dropSource) => {
        const arr = Array.from(current);

        arr.splice(dropSource.index, 1);
        setItems(arr);
    };

    const onDragEnd = (result) => {
        const { destination, source } = result;
        // droppableId는 어느 column에 위치하는지, index는 해당 column에서 몇번째 task인지
        console.log(
            '도착지 index 도착지 droppableId',
            destination?.index,
            destination?.droppableId,
        );
        console.log(
            '출발지 index 출발지 droppableId',
            source.index,
            source.droppableId,
        );

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
        console.log(source);
        if (start === 'area' && start === finish) {
            console.log('==');
            setItems(reorder(items, source.index, destination.index));
        }
        if (start === 'Items' && finish === 'area') {
            copy(Items, items, source, destination);
        }
        if (start === 'area' && finish === 'remove') {
            removeItem(items, source);
        }
    };

    const OpenModal = () => {
        setModalOpen(true);
    };
    const CloseModal = () => {
        setModalOpen(false);
    };
    return (
        <MainCard
            title="Cluster DnD"
            secondary={<SecondaryAction link="https://kubernetes.io/ko/" />}
        >
            <AllArea>
                <DragDropContext
                    // onDragStart={onDragStart}
                    // onDragUpdate={onDragUpdate}
                    onDragEnd={onDragEnd}
                >
                    <List>
                        <Column items={Items} droppableId="Items" />
                    </List>

                    <ImgArea>
                        <img className="img" src={clusterImg} alt="cluster" />
                    </ImgArea>
                    <Container>
                        <Column items={items} droppableId="area" />
                    </Container>
                    <Remove items={items} droppableId="remove" />
                </DragDropContext>
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
                <Modal
                    open={modalOpen}
                    close={CloseModal}
                    header="제출 확인 창"
                >
                    제출이 완료되었습니다!
                </Modal>
            </AllArea>
        </MainCard>
    );
}
