import notificationActions from './notificationActions';

const DEFAULT_STATE = {
  open: false,
  messagem: '',
  tipo: undefined
};

const notificationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case notificationActions.SEND:
      return { ...state, ...action.notification };
    case notificationActions.CLOSE:
      return { ...state, ...action.notification };
    default:
      return { ...state };
  }
};

export default notificationReducer;
