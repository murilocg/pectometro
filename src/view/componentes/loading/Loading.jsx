import React from 'react';
import { Grid, withStyles, CircularProgress } from '@material-ui/core';

const Loading = props => {
  const { open, classes } = props;
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className={open ? classes.container : [classes.container, classes.displayNone].join(' ')}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'fixed',
    top: 0,
    zIndex: 9999
  },
  displayNone: {
    display: 'none'
  }
});

export default withStyles(styles)(Loading);
