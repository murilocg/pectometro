import React from 'react';
import { Grid } from '@material-ui/core';
import CustoPorPecContainer from './CustoPorPecContainer';
import UltimasPecsContainer from './UltimasPecsContainer';
import { withTemplate } from '../componentes/template';

const TelaInicial = () => {
  return (
    <Grid container>
      <CustoPorPecContainer />
      <UltimasPecsContainer />
    </Grid>
  );
};

export default withTemplate(TelaInicial);
