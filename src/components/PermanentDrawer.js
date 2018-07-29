import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { gameListItems, otherGameListItems } from './tileData';
import Game from './Game';
import GameList from './GameList';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  hidden: {
    display: 'none',
  },
});

class PermanentDrawer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      anchor: 'left',
      games: Array(3).fill(null),
      gameNumber: 0,
    }
  }

  // 削除はしているが
  handleChange = event => {
    this.setState({
      anchor: event.target.value,
      games: Array(3).fill(null),
      gameNumber: 1,
    });
  };

  handleClick(i) {
    // alert("test");
    const games = this.state.games;
    this.setState({
      games: games.slice(),
      gameNumber: i,
    });
  }

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List><GameList onClick={(i) => this.handleClick(i)} /></List>
        <Divider />
        <List><GameList onClick={(i) => this.handleClick(i)} listtype="other" /></List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    const games = this.state.games;
    const gameNumber = this.state.gameNumber;
    const gameElement = games.map((game, gameIndex) => {
        return (<div key={gameIndex} className={gameNumber != gameIndex ? this.props.classes.hidden: ""}><Game /></div>);
    });

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Tic Tac Toe
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {gameElement}
          </main>
          {after}
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
