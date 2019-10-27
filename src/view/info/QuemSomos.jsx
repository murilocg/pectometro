import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';
import { withTemplate } from '../componentes/template';

const QuemSomos = () => {
  const classes = styles();
  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={10} md={6}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.titulo}>
            Quem Somos
          </Grid>
          <Grid item xs={12} className={classes.conteudo}>
            <p>Autoria: Simone Diogo de Souza</p>
            <p>Coordenação e Co-orientação: Profa. Dra. Luciana da Silva Costa</p>
            <p>Coordenação da pesquisa: Profa. Dra. Renata Furtado de Barros</p>
            <p>Professores responsáveis pela equipe: Prof. Dr. Tadeu e Profa. Dra. Soraia</p>
            <p>Engenheiros de Software: Murilo Costa Gonçalves e Jônata Rafael Teodoro Ferreira</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTemplate(QuemSomos);
