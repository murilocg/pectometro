import React from 'react';
import { Switch, Route, withRouter, Router, Redirect } from 'react-router-dom';
import TelaInicial from './telainicial/TelaInicial';
import VisualizarPec from './visualizarpec/VisualizarPec';
import Pesquisa from './pesquisa/Pesquisa';
import { OQueE, QuemSomos } from './info';
import Login from './login';
import Cadastro from './cadastro';
import AtualizarCustoPec from './custoPec';
import history from '../shared/history';
import { isAdmin, isLoggedIn } from '../shared/auth';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(TelaInicial)} />
      <Route path='/pec/:idPec' render={withRouter(VisualizarPec)} />
      <Route path='/pesquisa' render={withRouter(Pesquisa)} />
      <Route path='/oquee' render={withRouter(OQueE)} />
      <Route path='/quemsomos' render={withRouter(QuemSomos)} />
      <Route path='/login' render={withRouter(Login)} />
      <Route path='/cadastro' render={withRouter(Cadastro)} />
      <Route path='/custopec' render={() => isAdminRoute(withRouter(AtualizarCustoPec))} />
    </Switch>
  </Router>
);

const isAdminRoute = Component => {
  if (!isLoggedIn() || !isAdmin()) return <Redirect to='/' />;
  return <Component />;
};

export default Rotas;
