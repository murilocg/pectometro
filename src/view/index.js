import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import TelaInicial from './telainicial/TelaInicial';
import VisualizarPec from './visualizarpec/VisualizarPec';
import history from '../shared/history';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(TelaInicial)} />
      <Route path='/pec/:idPec' render={withRouter(VisualizarPec)} />
    </Switch>
  </Router>
);

export default Rotas;
