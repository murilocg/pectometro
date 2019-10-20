import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './style';
import { Grid } from '@material-ui/core';
import { AccountCircle, Search } from '@material-ui/icons';
import history from '../../../shared/history';

const TemplateDesktop = () => {
  const classes = styles();
  return (
    <Toolbar className={classes.toolbarTop}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item xs={2}>
          <Typography variant='h6'>PECtômetro</Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid container justify='flex-end' alignItems='center'>
            <Grid item>
              <Grid container>
                <Grid item className={classes.menuItem} onClick={() => history.push('/')}>
                  <Typography variant='h6'>Home</Typography>
                </Grid>
                <Grid item className={classes.menuItem} onClick={() => history.push('/oquee')}>
                  <Typography variant='h6'>O que é</Typography>
                </Grid>
                <Grid item className={classes.menuItem} onClick={() => history.push('/quemsomos')}>
                  <Typography variant='h6'>Quem somos</Typography>
                </Grid>
              </Grid>
            </Grid>
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
  );
};
export default TemplateDesktop;
