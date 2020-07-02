import React from 'react'
import { useDrag } from 'react-dnd'

function Collection({ left, top }) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: 'KNIGHT', left, top },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                position: "absolute",
                cursor: 'move',
                top: `${top}px`,
                left: `${left}px`
            }}
        >
            <div style={{ width: 50, height: 50, background: '#000' }}></div>
        </div>
    )
}

export default Collection