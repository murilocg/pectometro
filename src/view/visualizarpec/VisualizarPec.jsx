import React from 'react';
import { Grid } from '@material-ui/core';
import Voltar from './Voltar';
import DetalhePecContainer from './DetalhePecContainer';
import { withTemplate } from '../componentes/template';
import styles from './styles';
import GrupoComentario from './GrupoComentario';
const VisualizaPec = props => {
  const classes = styles();
  const { idPec } = props.match.params;
  return (
    <Grid className={classes.visualizarPecContainer}>
      <Voltar />
      <DetalhePecContainer idPec={Number(idPec)} />
      <GrupoComentario pecId={Number(idPec)} />
    </Grid>
  );
};

export default withTemplate(VisualizaPec);
