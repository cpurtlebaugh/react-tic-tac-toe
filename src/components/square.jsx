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
                console.log(`Firing ${props.row}, ${props.index}, ${props.currentPlayer}, ${props.val}`)
                props.setSquare(props.row, props.square)}
            }
        }>
         <a>{props.val}</a>
        </div>
    );
}

export default Square;
