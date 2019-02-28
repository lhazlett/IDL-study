import React, { Component } from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { chunk } from './utils'
import { BUTTON_LABELS } from './constants'

const styles = (theme, props) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit * 2.5,
    width: '70%',
    fontSize: '1.05rem',
    "&:hover": {
      // This should be set to one of the theme.palette.primary values
      // backgroundColor: theme.palette.grey[300],
      backgroundColor: 'transparent',
      borderColor: fade(theme.palette.primary.main, .5), 
    },
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
                    // variant="contained" 
                    variant="outlined" 
                    color='primary'
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
