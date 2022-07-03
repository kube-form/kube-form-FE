import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Task from './Task';
import { Title, TaskList, ColContainer, Item } from './styles';

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
                                <Task key={item.id} item={item} index={index} />
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
