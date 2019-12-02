import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './style';
import { Grid, Link } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ContaMenu from './ContaMenu';
import history from '../../../shared/history';
import { isLoggedIn } from '../../../shared/auth';
import { AutorizacaoController } from '../../../controller';

const TemplateDesktop = props => {
  const classes = styles();
  const { setAberto } = props;
  const logado = isLoggedIn();
  return (
    <Toolbar className={classes.toolbarTop}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Grid container alignItems='center'>
            <img className={classes.logo} src='/logo.png' alt='logo Pectometro' />
            <span className={classes.nomeApp}>
              <span className={classes.nomeAppSigla}>PEC</span>
              <span>tômetro</span>
            </span>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify='flex-end' alignItems='center'>
            <Grid item className={classes.menuItem} onClick={() => history.push('/')}>
              <span>Home</span>
            </Grid>
            <Grid item className={classes.menuItem} onClick={() => history.push('/oquee')}>
              <span>O que é</span>
            </Grid>
            <Grid item className={classes.menuItem} onClick={() => history.push('/quemsomos')}>
              <span>Quem somos</span>
            </Grid>
            {!logado && (
              <Grid item className={classes.menuItem} onClick={() => history.push('/login')}>
                <Link className={classes.btnEntrar} onClick={() => history.push('/login')}>
                  Entrar
                </Link>
              </Grid>
            )}
            <Grid item className={classes.menuItem}>
              <Search className={classes.icon} onClick={() => setAberto(true)} />
            </Grid>
            {logado && (
              <Grid item className={classes.menuItem}>
                <ContaMenu logout={() => AutorizacaoController.logout()} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
export default TemplateDesktop;
