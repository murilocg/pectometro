import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ZoomIn } from '@material-ui/icons';
import styles from './styles';

const formatarAutores = autores => {
  if (!autores) return '';
  let formatado = '';
  autores.forEach((a, i) => {
    formatado += a.nome + (i < autores.length - 1 ? ',' : '');
  });
  return formatado;
};

const DetalhePec = props => {
  const classes = styles();
  const { pec, idPec, obtemPecPorId } = props;

  useEffect(() => {
    obtemPecPorId(idPec);
  }, [pec.id, idPec, obtemPecPorId]);

  return (
    <Grid container justify='center' className={classes.detalhePecContainer}>
      <Grid item xs={12} sm={8} md={6}>
        <Grid container>
          <Grid item xs={12} className={classes.nomePec}>
            {`PEC ${pec.numero}/${pec.ano}`}
          </Grid>
          <Grid container className={classes.infoPec}>
            <Grid item xs={12} className={classes.texto}>
              <span>Autore(s):</span>
              <span>{formatarAutores(pec.autores)}</span>
            </Grid>
            <Grid item xs={12} className={classes.texto}>
              <span>Resumo:</span>
              <span>{pec.ementa}</span>
            </Grid>
            <Grid
              container
              justify='center'
              alignItems='center'
              className={classes.leiaMaisContainer}
              onClick={() => {
                window.open(pec.url, '_blank');
              }}
            >
              <span className={classes.leiaMaisTexto}>Leia Mais</span>
              <ZoomIn className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetalhePec;
