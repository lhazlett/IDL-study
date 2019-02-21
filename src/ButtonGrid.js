import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { WORDS } from './constants'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 20,
  },
  input: {
    display: 'none',
  },
});

class ButtonGrid extends Component {
  render() {
    return (
      <div className='Grid' styles={{}}>
        <Grid className='Grid' container spacing={24}>
          {WORDS.map((word) => {
            return (
              <Grid item xs={3}>
                <Button 
                  className={this.props.classes.button}
                  // variant="contained" 
                  variant="outlined" 
                  color="primary" 
                  size="large">
                  {word}
                </Button>
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonGrid)
