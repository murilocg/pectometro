import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';
import history from '../../shared/history';

const abrirPec = pecId => history.push(`/pec/${pecId}`);

const ResultadoPesquisa = props => {
  const { resultadoPesquisa } = props;
  const classes = styles();
  return (
    <>
      {resultadoPesquisa.map(pec => (
        <Grid
          item
          xs={12}
          key={pec.id}
          className={classes.resultadoPesquisaItem}
          onClick={() => abrirPec(pec.id)}
        >{`PEC ${pec.numero}/${pec.ano}`}</Grid>
      ))}
    </>
  );
};

export default ResultadoPesquisa;
