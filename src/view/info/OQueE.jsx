import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ZoomIn } from '@material-ui/icons';
import styles from './styles';
import { withTemplate } from '../componentes/template';

const OQueE = () => {
  const classes = styles();
  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={10} md={6}>
        <Grid container className={classes.oqueeContainer}>
          <Grid item xs={12} className={classes.oqueeTitulo}>
            Proposta de Emenda Constitucional
          </Grid>
          <Grid item xs={12} className={classes.oqueeExplicacao}>
            A Proposta de Emenda à Constituição (PEC) pode ser apresentada pelo presidente da
            República, por um terço dos deputados federais ou dos senadores ou por mais da metade
            das assembleias legislativas, desde que cada uma delas se manifeste pela maioria
            relativa de seus componentes. Não podem ser apresentadas PECs para suprimir as chamadas
            cláusulas pétreas da Constituição (forma federativa de Estado; voto direto, secreto,
            universal e periódico; separação dos poderes e direitos e garantias individuais). A PEC
            é discutida e votada em dois turnos, em cada Casa do Congresso. Será aprovada se
            obtiver, na Câmara e no Senado,três quintos dos votos dos deputados (número mínimo de
            deputados:308) e dos senadores (número mínimo para aprovação: 49).
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTemplate(OQueE);
