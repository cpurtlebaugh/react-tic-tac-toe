import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            players: ["X", "O"],
            board: [[null,null,null], 
                    [null,null,null], 
                    [null,null,null]],
            currentPlayer: null,
            gameEnded: false,
            winner: undefined
        };
        this.updateBoard = this.updateBoard.bind(this); 
        this.checkBoard = this.checkBoard.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
    }

    componentDidMount() {
        this.setState({currentPlayer: this.state.players[0]});
    };

    updateBoard(row, square, val){
        if(!this.state.gameEnded){
            let newBoard = this.state.board;
            newBoard[row][square] = val;
            this.setState({
                board: newBoard
            });
            this.checkBoard();
        }
    }

    changePlayer(){
        console.log("change player this player: ", this.players)
        let currentPlayer;
        this.state.currentPlayer === this.state.players[0] ? 
            currentPlayer = this.state.players[1] 
            : currentPlayer = this.state.players[0];

        this.setState({
            currentPlayer
        });
    }

    checkBoard(){
        let board = this.state.board;
        let cp = this.state.currentPlayer;
        let moves = [
            [board[0][0], board[0][1], board[0][2]], // horizontal 1
            [board[1][0], board[1][1], board[1][2]], // horizontal 2
            [board[2][0], board[2][1], board[2][2]], // horizontal 3
            [board[0][0], board[1][0], board[2][0]], // vertical 1
            [board[0][1], board[1][1], board[2][1]], // vertical 2
            [board[0][2], board[1][2], board[2][2]], // vertical 3
            [board[0][0], board[1][1], board[2][2]], // crossbar 1
            [board[0][2], board[1][1], board[2][0]] // crossbar 2
        ]

        // for loop to break
        moves.forEach((el) => {
            if(el[0] === cp && el[1] === cp && el[2] === cp){
                this.setState({
                    gameEnded: true,
                    winner: cp
                })
                // reset game or create a reset game button
            } else {
                this.changePlayer()
            }
        })
    }
  
    render() {
        console.log("game ended? ", this.state.gameEnded)
        return (
            <Board board={this.state.board} 
                currentPlayer={this.state.currentPlayer} 
                updateBoard={this.updateBoard}/>
        );
    }
}

export default Game;
