import React from 'react'
import { useDrag } from 'react-dnd'

function DraggableItem({name}) {
    const [, drag] = useDrag({
        item: { type: 'ITEM', name },
    });

  return (
    <div ref={drag} style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px', cursor: 'move' }}>
    {name}
  </div>
  )
}

export default DraggableItem;
