import {
  validarNome,
  validarSobrenome,
  validarEmail,
  validarSenha,
  validarCpf,
  validarUf,
  validarProfissao,
  validarDataNascimento,
  validarGenero
} from './validadores';
import NotificationException from '../../shared/NotificationException';
import mensagens from '../../shared/mensagens';
const validarUsuario = usuario => {
  validarNome(usuario.nome);
  validarSobrenome(usuario.sobrenome);
  validarEmail(usuario.email);
  validarSenha(usuario.senha);
  validarConfirmaSenha(usuario.senha, usuario.confirmaSenha);
  validarCpf(usuario.cpf);
  validarUf(usuario.uf);
  validarProfissao(usuario.profissao);
  validarDataNascimento(usuario.dataNascimento);
  validarGenero(usuario.genero);
};

const validarConfirmaSenha = (senha, confirmaSenha) => {
  if (confirmaSenha === '') throw new NotificationException(mensagens.PREENCHA_CONFIRMACAO_SENHA);
  if (senha !== confirmaSenha)
    throw new NotificationException(mensagens.PREENCHA_CONFIRMACAO_SENHA);
};

export default validarUsuario;
