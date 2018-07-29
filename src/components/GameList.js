import React, { Component } from 'react';
import './GameList.css';
import GameListItem from './GameListItem';

function GameList(props) {
  if (props.listtype != 'other') {
    return (
      <div>
        <GameListItem primary="First Game" iconname="VideogameAsset" onClick={() => props.onClick(0)} />
        <GameListItem primary="Secound Game" iconname="VideogameAsset" onClick={() => props.onClick(1)} />
      </div>
    );
  } else {
    return (
      <div>
        <GameListItem primary="Other Game" iconname="Games" onClick={() => props.onClick(2)} />
      </div>
    );
  }
}

export default GameList;
