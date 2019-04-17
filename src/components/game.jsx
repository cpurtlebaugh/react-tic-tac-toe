import React, { Component } from 'react';
import Board from './board';

const button = {
    border: 'none',
    color: 'white',
    backgroundColor: 'blue',
    padding: '.5rem 1rem',
    margin: '1rem'
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state ={
            players: ["X", "O"],
            board: [[null,null,null], 
                    [null,null,null], 
                    [null,null,null]],
            currentPlayer: null,
            moves: 0,
            gameEnded: false
        };
        this.updateBoard = this.updateBoard.bind(this); 
        this.checkBoard = this.checkBoard.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
        this.resetGame = this.resetGame.bind(this);
    };

    componentDidMount() {
        this.setState({currentPlayer: this.state.players[0]});
    };

    resetGame(){
        this.setState({
            board: [[null,null,null], 
            [null,null,null], 
            [null,null,null]],
            gameEnded: false,
            moves: 0
        });
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
    };

    changePlayer(){
        let currentPlayer, moves;
        moves = this.state.moves + 1
        this.state.currentPlayer === this.state.players[0] ? 
            currentPlayer = this.state.players[1] 
            : currentPlayer = this.state.players[0];
        this.setState({
            currentPlayer,
            moves
        });
    };

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
        ];

        moves.forEach((el) => {
            if(el[0] === cp && el[1] === cp && el[2] === cp){
                this.setState({
                    gameEnded: true,
                    winner: cp
                })
            } else {
                this.changePlayer()
            }
        });
    };
  
    render() {
        return (
            <div>
                <Board board={this.state.board}
                    moves={this.state.moves}
                    currentPlayer={this.state.currentPlayer}
                    winner={this.state.winner}
                    gameEnded={this.state.gameEnded} 
                    updateBoard={this.updateBoard}/>
                {this.state.gameEnded || this.state.moves === 9
                    ? <button style={button} onClick={this.resetGame}>Reset</button>
                    : null}
            </div>
        );
    };
}

export default Game;
