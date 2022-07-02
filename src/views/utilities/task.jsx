import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import usePods from 'hooks/usePods';

import { TaskContainer } from './styles';

export default function Task({ item, index }) {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <TaskContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={item.id}
                    isDragging={snapshot.isDragging}
                >
                    {item.content}
                </TaskContainer>
            )}
        </Draggable>
    );
}

Task.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
