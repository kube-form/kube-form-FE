import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from '@emotion/styled';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
export default function Remove({ key, items, droppableId, target }) {
    return (
        <RemoveDiv>
            <Title>
                {droppableId} <br /> {` item`}
            </Title>
            <RemoveBox>
                <Droppable
                    droppableId={droppableId}
                    // isDropDisabled={isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <RemoveArea
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                            {...provided.droppableProps}
                        >
                            <IconBox>
                                <DeleteIcon
                                    fontSize="large"
                                    color="secondary"
                                />
                            </IconBox>
                            {provided.placeholder}
                        </RemoveArea>
                    )}
                </Droppable>
            </RemoveBox>
        </RemoveDiv>
    );
}

const Title = styled.h3``;

const RemoveBox = styled.div``;

const RemoveArea = styled.div``;

const IconBox = styled.div``;

const RemoveDiv = styled.div``;
