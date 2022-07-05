import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import NodeCard from 'ui-component/cards/NodeCard';

// eslint-disable-next-line import/prefer-default-export
export function Column({ items, droppableId }) {
    return (
        <ColContainer>
            <Title>{`k8s ${droppableId}`}</Title>
            <Droppable
                droppableId={droppableId}
                // isDropDisabled={isDropDisabled}
            >
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => (
                            <NodeCard
                                key={item.id}
                                content={item.content}
                                index={index}
                                id={item.id}
                            />
                        ))}

                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </ColContainer>
    );
}

const Title = styled.h3`
    padding: 8px;
    font-size: 32px;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.5s ease;
    background-color: ${(props) => (props.isDraggingOver ? 'orange' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    /* z-index: 99; */
`;

const ColContainer = styled.div`
    margin: 8px;
    border: 3px solid lightgrey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;
