import { Usuario } from '../../model';
import history from '../../shared/history';
import { NotificationController } from '..';
import { armazenarSessao, removerSessao } from '../../shared/auth';

export default class AutorizacaoController {
  static cadastrar = usuario => async dispatch => {
    try {
      const { email, senha } = usuario;
      await Usuario.cadastrar(usuario);
      await dispatch(this.login({ email, senha }));
    } catch (e) {
      dispatch(NotificationController.send(e));
    }
  };
  static login = credenciais => async dispatch => {
    try {
      const data = await Usuario.login(credenciais);
      armazenarSessao(data);
      history.push('/');
    } catch (e) {
      dispatch(NotificationController.send(e));
    }
  };
  static logout = () => {
    removerSessao();
    history.push('/login');
  };
}
