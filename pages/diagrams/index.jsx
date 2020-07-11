import React, { useRef, useState, } from 'react'
// import { useDrag, useDrop } from 'react-dnd'
// import { DndProvider, useDrag, useDrop, DragDropContext as dragDropContext } from 'react-dnd-cjs'
// // import { HTML5Backend } from 'react-dnd-html5-backend-cjs'
// import { default as TouchBackend } from "react-dnd-html5-backend-cjs";

import Collection from '../../components/Collection'
import { useDrop } from 'react-dnd'
import api from '../../services/api'
var fileDownload = require('js-file-download');


export default ({ isDragging, text }) => {

    const [collections, setCollections] = useState([])
    const [atrributes, setatrributes] = useState({})
    const [count, setCount] = useState(0)
    const ref = React.useRef(null);

    const [{ isOver }, drop] = useDrop({
        accept: 'KNIGHT',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            item.setleft(Math.round(item.left + delta.x))
            item.settop(Math.round(item.top + delta.y))

        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })
    let addCollection = (x, y) => {
        let aux = []
        collections.forEach(e => {
            aux.push(e)
        });
        aux.push({ top: y - 150, left: x - 10 })
        setCollections(aux)
    }
    let addAttribute = (name, attr) => {
        let aux = { ...atrributes }

        if (name || attr)
            aux[name] = attr
            
        setatrributes(aux)
    }
    let exportDiagram = () => {
        api.post('/files', {
            "colections": Object.keys(atrributes).map(e => ({ name: e, atributes: atrributes[e] }))

        }, { responseType: 'arraybuffer' }).then(response => {
            fileDownload(response.data, 'filename.zip');

        })
    }
    return (
        <div>
            <div id="drop-canvas" ref={drop} onDoubleClick={(e) => {
                addCollection(e.screenX, e.screenY)
                setCount(collections.length + 1)
            }} style={{ position: 'relative', width: '100vw', height: '100vh', background:'rgba(232, 255, 222,0.4)' }} >
                <button onClick={(e) => { e.stopPropagation(); exportDiagram() }}>Export</button>
                {collections.map(c => {
                    return <Collection left={c.left} top={c.top} getAtrribute={addAttribute} />
                })}
            </div>

        </div>

    )
}

