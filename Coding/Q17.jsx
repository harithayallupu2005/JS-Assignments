// Q.17:Implement a React component that displays a list of items with drag-and-drop functionality.


import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './DragDropList.css';

const initialItems = [
  { id: '1', content: 'Lollipops' },
  { id: '2', content: 'Chocolates' },
  { id: '3', content: 'Junk-Food' },
];

export const DragDropList = () => {
  const [items, setItems] = React.useState(initialItems);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            className="drag-drop-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    className="drag-drop-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};


