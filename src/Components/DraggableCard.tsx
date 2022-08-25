import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? "#fbc531" : "#7ed6df")};
`;

function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
