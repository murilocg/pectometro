import React from 'react';
import { Grid } from '@material-ui/core';
import InputPesquisaContainer from './InputPesquisaContainer';
import ResultadoPesquisaContainer from './ResultadoPesquisaContainer';
import { withTemplate } from '../componentes/template';
import styles from './styles';
const getNumeroPec = search => {
  const termo = search.substring(search.indexOf('=') + 1);
  return termo ? termo.replace(/\%20/g, ' ') : '';
};

const Pesquisa = props => {
  const termo = getNumeroPec(props.location.search);
  const classes = styles();
  return (
    <Grid container justify='center' className={classes.pesquisaContainer}>
      <Grid item xs={12} sm={10} md={6}>
        <Grid container justify='center'>
          <h3>Pesquisar de PECs</h3>
          <InputPesquisaContainer termo={termo} />
          <ResultadoPesquisaContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTemplate(Pesquisa);
