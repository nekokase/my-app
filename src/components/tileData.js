import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import Games from '@material-ui/icons/Games';

export const gameListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <VideogameAsset />
      </ListItemIcon>
      <ListItemText primary="first game" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideogameAsset />
      </ListItemIcon>
      <ListItemText primary="secound game" />
    </ListItem>
  </div>
);

export const otherGameListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Games />
      </ListItemIcon>
      <ListItemText primary="other game" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Games />
      </ListItemIcon>
      <ListItemText primary="other game" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Games />
      </ListItemIcon>
      <ListItemText primary="other game" />
    </ListItem>
  </div>
);
