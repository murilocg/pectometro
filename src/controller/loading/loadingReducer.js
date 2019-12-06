import loadingActions from './loadingActions';

const DEFAULT_STATE = {
  open: false
};

const loadingReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case loadingActions.SHOW:
      return { ...state, open: action.open };
    case loadingActions.HIDE:
      return { ...state, open: action.open };
    default:
      return { ...state };
  }
};

export default loadingReducer;
