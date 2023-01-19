import React from 'react';
import './Box.css';

const Box = ({width, height, color, idx, handleXClick}) => {
return (
    <>
        <div className="Box" style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
        }}>
    </div>
    <span role="delete" className="redX" onClick={()=>handleXClick(idx)}>{`\u{274C}`}</span>
    </>

    )
}

export default Box;