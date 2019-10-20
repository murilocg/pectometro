import pecActions from './pecActions';

const DEFAULT_STATE = {};

const pecReducer = (state = DEFAULT_STATE, action) => {
  switch (pecActions.type) {
    default:
      return { ...state };
  }
};

export default pecReducer;
