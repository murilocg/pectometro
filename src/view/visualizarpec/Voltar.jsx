import React from 'react';
import { Grid } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styles from './styles';
import history from '../../shared/history';
const Voltar = () => {
  const classes = styles();
  return (
    <Grid container className={classes.voltarContainer} justify='center'>
      <Grid item xs={12} sm={10} md={8}>
        <span className={classes.voltarTexto} onClick={() => history.goBack()}>
          <ArrowBack className={classes.icon} /> voltar
        </span>
      </Grid>
    </Grid>
  );
};

export default Voltar;
