import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square";

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squars: Array(9).fill(null),
      xIsNext:true,
    };
  }

  handleClick(i){
    const squars = this.state.squars.slice();//slice()方法为浅拷贝
    if(calculateWinner(squars) || squars[i]){
        return;
    }
    squars[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        squars : squars,
        xIsNext : !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
        <Square 
            value = {this.state.squars[i]} 
            onClick = {()=>this.handleClick(i)}
        />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squars);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    }
    else{
        status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className>
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}
