import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import TelaInicial from './telainicial/TelaInicial';
import history from '../shared/history';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(TelaInicial)} />
    </Switch>
  </Router>
);

export default Rotas;
