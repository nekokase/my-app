import React, { Component } from 'react';
import './Square.css';

// 機能コンポーネントの場合、functionにする
// () => props.onClicktest()   props.onClick  thisの関係で？functionの場合のみこう書けるらしい
function Square(props) {
  return (
    <button className="square" onClick={props.onClicktest}>
      {props.value}
    </button>
  );
}

export default Square;
