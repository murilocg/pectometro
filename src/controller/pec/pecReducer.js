import pecActions from './pecActions';

const DEFAULT_STATE = {
  custoPorPec: 0,
  ultimasPecs: [],
  pec: {},
  resultadoPesquisa: [],
  comentarios: []
};

const pecReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case pecActions.SET_CUSTO_POR_PEC:
      return { ...state, custoPorPec: action.custoPorPec };
    case pecActions.SET_ULTIMAS_PECS:
      return { ...state, ultimasPecs: action.ultimasPecs };
    case pecActions.SET_PEC:
      return { ...state, pec: action.pec, ultimasPecs: [] };
    case pecActions.SET_RESULTADO_PESQUISA:
      return { ...state, resultadoPesquisa: action.resultadoPesquisa, ultimasPecs: [] };
    case pecActions.SET_RESULTADO_PESQUISA:
      return { ...state, resultadoPesquisa: action.resultadoPesquisa, ultimasPecs: [] };
    case pecActions.SET_COMENTARIOS:
      return { ...state, comentarios: action.comentarios };
    default:
      return { ...state };
  }
};

export default pecReducer;
