import React, { Component } from 'react';
import './Board.css';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    // onClickとすべき
    // return (<Square value={this.state.suqares[i]} onClicktest={() => this.handleClick(i)} />);
    return (<Square key={i} value={this.props.suqares[i]} onClicktest={() => this.props.onClicktest(i)} />);
  }

  renderBoardRow(rowNum) {
    const renderSquareNum = rowNum * 3;

    var rowSquares = new Array(3).fill(null);
    for (let i = 0; i < rowSquares.length; i++) {
      rowSquares[i] = this.renderSquare(i + renderSquareNum);
    }
    return rowSquares;
  }

  renderBoard() {
    var boardRows = new Array(3).fill(null);

    for (let i = 0; i < boardRows.length; i++) {
      const boardRow = this.renderBoardRow(i);
      boardRows[i] = (<div key={i} className="board-row">{boardRow}</div>);
    }
    return boardRows;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}


export default Board;
