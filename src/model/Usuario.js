import ServiceAutorizacao from './ServiceAutorizacao';
import { validarUsuario, validarLogin } from './validadores';
import NotificationException from '../shared/NotificationException';
import mensagens from '../shared/mensagens';
export default class Usuario {
  static async cadastrar(usuario) {
    validarUsuario(usuario);
    try {
      return await ServiceAutorizacao.cadastrar(usuario);
    } catch (e) {
      throw new NotificationException(mensagens.ERROR_CADASTRO_USUARIO);
    }
  }
  static async login(credenciais) {
    validarLogin(credenciais);
    try {
      return await ServiceAutorizacao.login(credenciais);
    } catch (e) {
      throw new NotificationException(mensagens.ERROR_LOGIN);
    }
  }
}
