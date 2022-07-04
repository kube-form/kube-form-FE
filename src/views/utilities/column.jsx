import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ContainerCard from 'ui-component/cards/ContaienrCard';

import Task from './Task';
import { Title, TaskList, ColContainer, Item } from './Styles';

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
                                <ContainerCard
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
