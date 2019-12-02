class PecActions {
  SET_CUSTO_POR_PEC = 'PEC/SET_CUSTO_POR_PEC';
  SET_ULTIMAS_PECS = 'PEC/SET_ULTIMAS_PECS';
  SET_PEC = 'PEC/SET_PEC';
  SET_RESULTADO_PESQUISA = 'PEC/SET_RESULTADO_PESQUISA';
  SET_COMENTARIOS = 'PEC/SET_COMENTARIOS';
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
  setResultadoPesquisa = resultadoPesquisa => ({
    type: this.SET_RESULTADO_PESQUISA,
    resultadoPesquisa
  });
  setComentarios = comentarios => ({
    type: this.SET_COMENTARIOS,
    comentarios
  });
}

export default new PecActions();
