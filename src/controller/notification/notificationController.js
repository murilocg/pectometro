import notificationActions from './notificationActions';
import mensagens from '../../shared/mensagens';
export default class NotificationController {
  static send = notification => async dispatch => {
    if (!notification.tipo) dispatch(notificationActions.send(mensagens.ERRRO_INESPERADO));
    else dispatch(notificationActions.send(notification));
  };
  static close = () => async dispatch => {
    dispatch(notificationActions.close());
  };
}
