import React from 'react';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import TelaInicial from './telainicial/TelaInicial';
import VisualizarPec from './visualizarpec/VisualizarPec';
import Pesquisa from './pesquisa/Pesquisa';
import { OQueE } from './info';
import history from '../shared/history';

const Rotas = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={withRouter(TelaInicial)} />
      <Route path='/pec/:idPec' render={withRouter(VisualizarPec)} />
      <Route path='/pesquisa' render={withRouter(Pesquisa)} />
      <Route path='/oquee' render={withRouter(OQueE)} />
    </Switch>
  </Router>
);

export default Rotas;
