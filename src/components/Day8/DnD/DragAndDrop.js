import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';

function DragAndDrop() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item.name]);
  };

  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '24px' }}>
          <h2>Available Items</h2>
          <DraggableItem name="Item 1" />
          <DraggableItem name="Item 2" />
          <DraggableItem name="Item 3" />
        </div>
        <div>
          <h2>Dropped Items</h2>
          <DropZone onDrop={handleDrop} />
          <ul>
            {droppedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
