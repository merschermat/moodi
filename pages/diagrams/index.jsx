import React, { useRef, useState } from 'react'
// import { useDrag, useDrop } from 'react-dnd'
// import { DndProvider, useDrag, useDrop, DragDropContext as dragDropContext } from 'react-dnd-cjs'
// // import { HTML5Backend } from 'react-dnd-html5-backend-cjs'
// import { default as TouchBackend } from "react-dnd-html5-backend-cjs";

import Collection from '../../components/Collection'
import { useDrop } from 'react-dnd'


export default ({ isDragging, text }) => {
    const [left, setleft] = useState(10)
    const [top, settop] = useState(10)
    const [{ isOver }, drop] = useDrop({
        accept: 'KNIGHT',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            setleft(Math.round(item.left + delta.x))
            settop(Math.round(item.top + delta.y))

            console.log(item,delta.x)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <div>
            <div id="drop-canvas" ref={drop} style={{position:'relative',width:'100vw', height:'100vh'}} >
                <Collection left={left} top={top}/>
                sdasdasdasdasd
            </div>
        </div>

    )
}
