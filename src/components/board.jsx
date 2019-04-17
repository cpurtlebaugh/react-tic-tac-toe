import React from 'react';
import Square from './square';
const Board = (props) => {
    const container = {
        justifyContent: 'center',
        display: 'flex'
    };
    const flexGridThirds = {
        justifyContent: 'space between'
    };
    const col = {
        width: '33%'
    };

    return (
        <div>
            <h2>Your Move {props.currentPlayer}</h2>
            <div style={container}>{props.board.map((el, index) => {
                return <div style={flexGridThirds} key={index}>
                        <Square style={col} row={index} square={0} val={el[0]} 
                            setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                        <Square style={col} row={index} square={1} val={el[1]} 
                            setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                        <Square style={col} row={index} square={2} val={el[2]} 
                            setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                    </div>
            })}
            </div>
        </div>
    );
}

export default Board;
