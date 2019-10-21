class PecActions {
  SET_CUSTO_POR_PEC = 'SET_CUSTO_POR_PEC';
  SET_ULTIMAS_PECS = 'SET_ULTIMAS_PECS';
  SET_PEC = 'SET_PEC';
  setCustoPorPec = custoPorPec => ({
    type: this.SET_CUSTO_POR_PEC,
    custoPorPec
  });
  setUltimasPecs = ultimasPecs => ({
    type: this.SET_ULTIMAS_PECS,
    ultimasPecs
  });
  setPec = pec => ({
    type: this.SET_PEC,
    pec
  });
}

export default new PecActions();
