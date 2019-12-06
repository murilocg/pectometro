import NotificationException from '../../shared/NotificationException';
import mensagens from '../../shared/mensagens';

export const validarGenero = genero => {
  genero = genero.trim();
  if (genero === '') throw new NotificationException(mensagens.SELECIONE_GENERO);
};

export const validarDataNascimento = data => {
  if (!data) throw new NotificationException(mensagens.SELECIONE_DATA_NASCIMENTO);
  const dataMinima = new Date();
  dataMinima.setFullYear(dataMinima.getFullYear() - 16);
  if (data > dataMinima) throw new NotificationException(mensagens.IDADE_MINIMA);
};

export const validarProfissao = profissao => {
  profissao = profissao.trim();
  if (profissao === '') throw new NotificationException(mensagens.SELECIONE_PROFISSAO);
};

export const validarUf = uf => {
  uf = uf.trim();
  if (uf === '') throw new NotificationException(mensagens.PREENCHA_UF);
};

export const validarCpf = cpf => {
  cpf = cpf.replace(/\./g, '');
  cpf = cpf.replace(/\-/g, '');
  cpf = cpf.trim();
  if (cpf === '') throw new NotificationException(mensagens.PREENCHA_CPF);
};

export const validarSenha = senha => {
  senha = senha.trim();
  if (senha === '') throw new NotificationException(mensagens.PREENCHA_SENHA);
};

export const validarEmail = email => {
  if (email.trim() === '') throw new NotificationException(mensagens.PREENCHA_EMAIL);
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )
    throw new NotificationException(mensagens.EMAIL_FORMATO_INVALIDO);
};

export const validarSobrenome = sobrenome => {
  const arr = sobrenome.trim().split(' ');
  if (arr.length === 0) throw new NotificationException(mensagens.PREENCHA_SOBRENOME);
  else if (arr.length > 1) throw new NotificationException(mensagens.APENAS_UM_SOBRENOME);
};

export const validarNome = nome => {
  nome = nome.trim();
  const arr = nome.split(' ');
  if (arr.length === 0) throw new NotificationException(mensagens.PREENCHA_NOME);
  if (arr.length > 1) throw new NotificationException(mensagens.APENAS_UM_NOME);
};
