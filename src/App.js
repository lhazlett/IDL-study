import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonGrid from './ButtonGrid'
import CssBaseline from '@material-ui/core/CssBaseline'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[100],
      main: blue[700],
      dark: blue[900],
    },
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ padding: '10px', height: '100vh', width: '100vw'  }}>
      <ButtonGrid />
    </div>
  </MuiThemeProvider>
)

export default App;
