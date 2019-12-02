import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import styles from './styles';
import formataDataComentario from '../../shared/formataDataComentario';
const ListaComentario = props => {
  const { pecId, comentarios, listaComentarios } = props;
  useEffect(() => {
    listaComentarios(pecId);
  }, [pecId, listaComentarios]);
  const classes = styles();
  return (
    <Grid item xs={12} className={classes.listaComentario}>
      {comentarios.map(c => {
        return (
          <Grid key={c.id} container className={classes.listaComentarioItem}>
            <Grid container alignItems='center'>
              <AccountCircle className={classes.comentarioIcone} />
              <span className={classes.comentarioUsuario}>
                {c.nomeCidadao + ' ' + c.sobrenomeCidadao}
              </span>
            </Grid>
            <Grid container>
              <span className={classes.comentarioTexto}>{c.texto}</span>
            </Grid>
            <Grid>
              <span className={classes.comentarioData}>
                {formataDataComentario(new Date(c.createdAt))}
              </span>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ListaComentario;
