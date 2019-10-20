import pecActions from './pecActions';

const DEFAULT_STATE = {
  custoPorPec: 0,
  ultimasPecs: []
};

const pecReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case pecActions.SET_CUSTO_POR_PEC:
      return { ...state, custoPorPec: action.custoPorPec };
    case pecActions.SET_ULTIMAS_PECS: {
      return { ...state, ultimasPecs: action.ultimasPecs };
    }
    default:
      return { ...state };
  }
};

export default pecReducer;
