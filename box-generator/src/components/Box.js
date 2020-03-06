import React from 'react';

const Box = ({color, idx, removeBox}) => {
    const style = {
        height: '200px',
        width: '200px',
        backgroundColor: color,
        border: '1px solid black',
        boxsizing: 'border-box',
        display: 'inline-block',
        margin: '10px'
    }

    return (
        <div style={style} onClick={(e) => removeBox(e,idx)}></div>
    )
}

export default Box;