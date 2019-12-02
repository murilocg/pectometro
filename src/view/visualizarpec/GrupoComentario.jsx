import React from 'react';
import { Grid } from '@material-ui/core';
import InputComentarioContainer from './InputComentarioContainer';
import ListaComentarioContainer from './ListaComentarioContainer';

const GrupoComentario = props => {
  const { pecId } = props;
  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={8} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <InputComentarioContainer pecId={pecId} />
          </Grid>
          <Grid item xs={12}>
            <ListaComentarioContainer pecId={pecId} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GrupoComentario;
