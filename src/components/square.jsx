import React from 'react';

const Square = (props) => {
    const squareStyle = {
        width: '6em',
        height: '6em',
        border : '1px solid #e4e4e4',
        listStyle: 'none',
        fontSize: '24px',
    };

    return (
        <div style={squareStyle} onClick={()=> {
            if(props.val === null){
                props.setSquare(props.row, props.square)}
            }}>
        {props.val}
        </div>
    );
}

export default Square;
