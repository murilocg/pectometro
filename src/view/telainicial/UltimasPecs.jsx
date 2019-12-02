import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ZoomIn } from '@material-ui/icons';
import styles from './styles';
import history from '../../shared/history';

const abrirPec = pecId => {
  history.push(`/pec/${pecId}`);
};

const UltimasPecs = props => {
  const { ultimasPecs, listaUltimasPecs } = props;
  useEffect(() => {
    listaUltimasPecs();
  }, [ultimasPecs.length, listaUltimasPecs]);
  const classes = styles();
  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={10} md={6}>
        <Grid container>
          <Grid item xs={12} className={classes.ultimasPecsTitulo}>
            Últimas PECs
          </Grid>
          {ultimasPecs.map(pec => (
            <Grid
              item
              xs={12}
              key={pec.id}
              className={classes.pec}
              onClick={() => abrirPec(pec.id)}
            >{`PEC ${pec.numero}/${pec.ano}`}</Grid>
          ))}
          <Grid
            container
            className={classes.containerVermais}
            onClick={() => history.push('/pesquisa')}
            justify='center'
            alignItems='center'
          >
            <span className={classes.vermais}>ver mais</span>
            <ZoomIn className={classes.zoonIn} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UltimasPecs;
