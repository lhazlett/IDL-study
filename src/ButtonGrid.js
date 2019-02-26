import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { chunk } from './utils'

import { BUTTON_LABELS } from './constants'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // margin: theme.spacing.unit,
    // textAlign: 'center',
  },
});

class ButtonGrid extends Component {

  render() {
    const { classes } = this.props
    const wordGroups = chunk(BUTTON_LABELS, 4)
    
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          {wordGroups.map((wordGroup, groupIdx) => (
            <Grid container item xs={12} spacing={8} key={groupIdx}>
              {wordGroup.map((word) => (
                <Grid item xs={3} key={word}>
                  <Button 
                    className={classes.button}
                    variant="contained" 
                    fullWidth
                    size="large">
                    {word}
                  </Button>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonGrid)
