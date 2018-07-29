import React, { Component } from 'react';
import './GameListItem.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import Games from '@material-ui/icons/Games';

function GameListItem(props) {
  const iconElement = props.iconname == 'VideogameAsset' ? (<VideogameAsset />):  (<Games />);

  return (
    <ListItem button onClick={props.onClick}>
      <ListItemIcon>
        {iconElement}
      </ListItemIcon>
      <ListItemText primary={props.primary} />
    </ListItem>
  );
}

export default GameListItem;
