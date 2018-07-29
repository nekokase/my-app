import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import PermanentDrawer from './components/PermanentDrawer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* familiar normalize.css */}
        <CssBaseline />
        <PermanentDrawer />
      </div>
    );
  }
}

export default App;
