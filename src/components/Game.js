import React, { Component } from 'react';
import './Game.css';
import Board from './Board'

class Game extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        history : [{
          suqares: Array(9).fill(null),
          squareNumber: -1
        }],
        stepNumber: 0,
        xIsNext: true,
      }
    }

  handleClick(i) {
    // [{suqares: Array(9).fill(null)}]
    // 巻き戻す
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // {suqares: Array(9).fill(null)}
    const current = history[history.length - 1];
    // Array(9).fill(null)
    const squares = current.suqares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // pushのcopy版concat
    this.setState({
      history: history.concat(
        [{
          suqares: squares,
          squareNumber: i
        }]
      ),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  getColRowStr(squareNumber) {
    if (squareNumber < 0) {
      return;
    }
    const colRow = {
      0: '(1,1)',
      1: '(2,1)',
      2: '(3,1)',
      3: '(1,2)',
      4: '(2,2)',
      5: '(3,2)',
      6: '(1,3)',
      7: '(2,3)',
      8: '(3,3)'
    }
    return colRow[squareNumber];
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.suqares;

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    // moveはindex
    // map(() => {})のなかにはJSXを記載することができる、だからjsとreturnも記載できる
    // このGameアプリにおいてはindexをkeyにして問題ないが、順序が変わる場合よくない
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move + this.getColRowStr(step.squareNumber): 'Go to game start';
      if (this.state.stepNumber == move) {
        return (
          <li key={move}>
            <button className="current-selected" onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      } else {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      }
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board suqares={squares} onClicktest={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// これは勝者判定ロジックだからそのままコピペ
// this.state.squaresを渡す
// returnは X O null
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


export default Game;
