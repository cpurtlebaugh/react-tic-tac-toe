import React from 'react';

const Square = (props) => {
    return (
        <div onClick={()=> {
            console.log(`Firing ${props.row}, ${props.index}, ${props.currentPlayer}`)
            props.setSquare(props.row, props.square)}
        }>
            <li>current player: {props.currentPlayer}</li>
            <li>row: {props.row}</li>
            <li>square: {props.square}</li>
            <li>val: {props.val}</li>
        </div>
    );
}

export default Square;
