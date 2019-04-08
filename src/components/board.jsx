import React from 'react';
import { Table } from 'reactstrap';
import Square from './square';
const Board = (props) => {
    console.log("PROPS IN BOARD", props)
    const tableStyle = {
        width: '50%',
        margin: '0 auto',
        borderCollapse: 'collapse'
    };

    const colStyle = {
        border: 0,
        padding: 0
    }

    return (
        <div>
            <h2>Your Move {props.currentPlayer}</h2>
            <Table style={tableStyle}> {
                    props.board.map((el, index) => {
                        return <thead key={index}>
                                <td style={colStyle} md={4} xs={4}>
                                    <Square row={index} square={0} val={el[0]} 
                                        setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                                </td>
                                <td style={colStyle} md={4} xs={4}>
                                    <Square row={index} square={1} val={el[1]} 
                                        setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                                </td>
                                <td style={colStyle} md={4} xs={4}>
                                    <Square row={index} square={2} val={el[2]} 
                                        setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} />
                                </td>
                            </thead>
                    })
                }
            </Table>
        </div>
    );
}

export default Board;
