import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'

import { useDrag } from 'react-dnd'
import './Collection.scss'

const types = [
    'String',
    'Number',
    'Date',
    'Buffer',
    'Boolean',
    'Mixed',
    'ObjectId',
    'Array',
    'Decimal128',
    'Map',
    'Schema',
]
const Collection = ({ leftProp, topProp, getAtrribute }) => {
    const [left, setleft] = useState(10)
    const [top, settop] = useState(10)
    const [edit, setedit] = useState(false)
    const [selectedtype, setselectedtype] = useState('String')
    const [inputValue, setinputValue] = useState('')
    const [name, setname] = useState('')


    const [attributes, setattributes] = useState(null)

    const [{ isDragging }, drag] = useDrag({
        item: { type: 'KNIGHT', top, left, setleft, settop },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    let addAttribute = (name, value) => {
        let aux = { ...attributes }
        // if (attributes != null)
        //     attributes.forEach(e => {
        //         aux.push(e)
        //     });
        aux[name] = value
        setattributes(aux)
    }
    useEffect(() => {
        getAtrribute(name, attributes)
    }, [attributes])

    let handleChange = (event) => {
        setselectedtype(event.target.value);
    }

    return (
        <div
            className="collection"
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                position: "absolute",
                cursor: 'move',
                top: `${top}px`,
                left: `${left}px`,
                background:'white'

            }}
        >
            {/* addAttribute('test', 'string') } */}
            <div onDoubleClick={(e) => { e.stopPropagation(); setedit(true) }}>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                {edit && <div><input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />:
                <select name="types" id="types" value={selectedtype} onChange={handleChange}>
                        {types.map(e => (<option value={e}>{e}</option>))}
                    </select>
                    <a onClick={(e) => { addAttribute(inputValue, selectedtype); setedit(false) }}>v</a> <a onClick={() => setedit(false)}>x</a> </div>}
                {attributes == null ? <div>
                    double click
                    to add stuff
                </div> :
                    Object.keys(attributes).map(a => (<div>{a}:{attributes[a]}</div>
                    ))}


            </div>
        </div >
    )
}
export default Collection