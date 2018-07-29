import React, { Component } from 'react';
import './Square.css';
import Typography from '@material-ui/core/Typography';

// 機能コンポーネントの場合、functionにする
// () => props.onClicktest()   props.onClick  thisの関係で？functionの場合のみこう書けるらしい
function Square(props) {
  return (
    <button className="square" onClick={props.onClicktest}>
      <Typography variant="display2" color="inherit" noWrap>
        {props.value}
      </Typography>
    </button>
  );
}

export default Square;
