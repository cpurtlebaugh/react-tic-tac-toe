import React from 'react';
import { Row, Col } from 'reactstrap';
import Square from './square';
const Board = (props) => {
    console.log("PROPS IN BOARD", props)
    return (
        <div>
            <h1>Hello, {props.currentPlayer}</h1>
            <div> {
                props.board.map((el, index) => {
                    return <div key={index}>
                        <Row>
                            <Col><Square row={index} square={0} val={el[0]} setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} /></Col>
                            <Col><Square row={index} square={1} val={el[1]} setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} /></Col>
                            <Col><Square row={index} square={2} val={el[2]} setSquare={(row, square)=> props.updateBoard(row, square, props.currentPlayer)} /></Col>
                        </Row>
                        <br/>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default Board;
