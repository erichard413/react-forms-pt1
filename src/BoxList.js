import { BLOCK_TYPES } from '@babel/types';
import React, {useState} from 'react';
import Box from './Box';
import {v4 as uuidv4} from 'uuid';
import NewBoxForm from './NewBoxForm';

// BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

// You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

// When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.

const BoxList = () => {
    const INITIAL_STATE = [
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const removeBox = (idx) => {
        setBoxes(boxes => {
            const boxesCopy = [...boxes];
            return boxesCopy.filter(b => b.idx !== idx);
        }
        )
    }

    const addBox = (width, height, color) => {
        setBoxes(boxes => {
            const boxesCopy = [...boxes, {
                width: width,
                height: height,
                color: color,
                idx: uuidv4()
            }]
            return boxesCopy;
        })
    }

    return (
        <>
            <NewBoxForm addBox={addBox}/>
            <div className="BoxList">
            {boxes.map(({color, height, width, idx}) => (
            <Box color={color} idx={idx} key={idx} height={height} width={width} handleXClick={removeBox} /> 
         ))}
        </div>
        </>


    )
}

export default BoxList