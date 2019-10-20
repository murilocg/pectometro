import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './style';
import { Grid } from '@material-ui/core';
import { AccountCircle, Search } from '@material-ui/icons';
import history from '../../../shared/history';

const TemplateMobile = () => {
  const classes = styles();
  return (
    <>
      <Toolbar className={classes.toolbarTop}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={2}>
            <Typography variant='h6'>PECtômetro</Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container justify='flex-end' alignItems='center'>
              <Grid item className={classes.menuItem}>
                <Grid container alignItems='center'>
                  <Grid item>
                    <Search className={classes.icon} />
                  </Grid>
                  <Grid item>
                    <AccountCircle className={classes.icon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar className={classes.tollbarBottom}>
        <Grid container justify='space-between'>
          <Grid item className={classes.subMenuItem} onClick={() => history.push('/')}>
            <div>Home</div>
          </Grid>
          <Grid item className={classes.subMenuItem} onClick={() => history.push('/oquee')}>
            <div>O que é</div>
          </Grid>
          <Grid item className={classes.subMenuItem} onClick={() => history.push('/quemsomos')}>
            <div>Quem somos</div>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};

export default TemplateMobile;
