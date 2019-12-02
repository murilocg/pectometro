import { validarEmail, validarSenha } from './validadores';

const validarLogin = credenciais => {
  validarEmail(credenciais.email);
  validarSenha(credenciais.senha);
};

export default validarLogin;
