import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import blue from '@material-ui/core/colors/blue';

import { BUTTON_LABELS } from './constants'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
});

class ButtonGrid extends Component {

  render() {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {BUTTON_LABELS.map((word) => {
            return (
              <Grid item xs={3} key={word}>
                <Button 
                  className={classes.button}
                  variant="contained" 
                  // color="primary" 
                  fullWidth
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
