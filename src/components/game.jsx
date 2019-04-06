import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            players: ["X", "O"],
            board: [[null,null,null], [null,null,null], [null,null,null]],
            currentPlayer: null
        };
        this.updateBoard = this.updateBoard.bind(this); 
        this.checkBoard = this.checkBoard.bind(this);
    }

    componentDidMount() {
        this.setState({currentPlayer: this.state.players[0]});
    };


    updateBoard(row, square, val){
        let newBoard = this.state.board;
        newBoard[row][square] = val;
        this.setState({
            board: newBoard
        });

        // run check for winner && change player
        console.log("board after set state: ", this.state.board)
        this.checkBoard();
    }

    checkBoard(){
        // look for possible wins
        // call game

        console.log("this players: ", this.players)
        let currentPlayer;
        this.state.currentPlayer === this.state.players[0] ? 
            currentPlayer = this.state.players[1] 
            : currentPlayer = this.state.players[0];

        this.setState({
            currentPlayer
        })
    }
  
    render() {
        return (
            <Board board={this.state.board} 
                currentPlayer={this.state.currentPlayer} 
                updateBoard={this.updateBoard}/>
            // status
            // moves
        );
    }
}

export default Game;
