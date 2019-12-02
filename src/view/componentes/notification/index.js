import { connect } from 'react-redux';
import Notification from './Notification';
import { NotificationController } from '../../../controller';

const mapDispatchToProps = dispatch => ({
  close: async () => await dispatch(NotificationController.close())
});

const mapStateToProps = state => ({
  open: state.notification.open,
  mensagem: state.notification.mensagem,
  tipo: state.notification.tipo
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
