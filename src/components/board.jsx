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
    console.log("props moves: ", props.moves)
    return (
        <div>
            {props.gameEnded && props.moves !== 9
            ? <h2>{props.winner}, Won! </h2>
            : <h2>Your Move Player: {props.currentPlayer}</h2>}
            
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
