import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const Card = styled.div`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
