import loadingActions from './loadingActions';
export default class NotificationController {
  static show = () => async dispatch => {
    dispatch(loadingActions.show());
  };
  static hide = () => async dispatch => {
    dispatch(loadingActions.hide());
  };
}
