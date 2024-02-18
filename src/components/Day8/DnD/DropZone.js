import React from 'react'
import { useDrop } from 'react-dnd'

function DropZone({onDrop}) {
    const [, drop] = useDrop({
        accept: 'ITEM',
        drop: (item) => onDrop(item),
    });

 return <div ref={drop} style={{ border: '2px dashed #333', padding: '16px', marginTop: '16px' }}>Drop Zone</div>;
}

export default DropZone
