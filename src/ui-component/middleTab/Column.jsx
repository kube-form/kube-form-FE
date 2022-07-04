import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import ContainerCard from 'ui-component/cards/ContaienrCard';

import Task from 'ui-component/middleTab/Task';

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
                        <Item area={droppableId}>
                            {items.map((item, index) => (
                                <Task
                                    key={item.id}
                                    content={item.content}
                                    index={index}
                                    id={item.id}
                                />
                            ))}
                        </Item>
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </ColContainer>
    );
}

Column.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
        }),
    ).isRequired,
    droppableId: PropTypes.string.isRequired,
};

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

const Item = styled.div`
    display: flex;
    :hover {
        background-color: ${(props) =>
            props.area === 'area' ? 'blue' : 'green'};
    }
`;
