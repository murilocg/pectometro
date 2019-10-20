import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';

const formatarCusto = custo => {
  return custo
    .toFixed(0)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const CustoPorPec = props => {
  const { custoPorPec, obtemCustoPorPec } = props;
  useEffect(() => {
    obtemCustoPorPec();
  }, [custoPorPec, obtemCustoPorPec]);
  const classes = styles();
  return (
    <Grid container justify='center' className={classes.custoPorPecContainer}>
      <Grid item xs={12} className={classes.tituloCustoPorPec}>
        Custos por PEC
      </Grid>
      <Grid item xs={12} className={classes.custoPorPec}>{`R$ ${formatarCusto(custoPorPec)}`}</Grid>
    </Grid>
  );
};

export default CustoPorPec;
