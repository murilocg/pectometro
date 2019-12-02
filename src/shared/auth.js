import jwt from 'jsonwebtoken';

export const armazenarSessao = dados => {
  const { usuario, token } = dados.session;
  const { id, email, nome, sobrenome } = usuario;
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('usuario', id);
  sessionStorage.setItem('nome', nome);
  sessionStorage.setItem('sobrenome', sobrenome);
};

export const isAdmin = () => {
  const { token } = obtemDadosSessao();
  const payload = jwt.decode(token);
  console.log(payload);
  return payload.tipo === 'admin';
};

export const isLoggedIn = () => {
  if (!sessionStorage.getItem('usuario')) return false;
  if (!sessionStorage.getItem('token')) return false;
  if (!sessionStorage.getItem('email')) return false;
  if (!sessionStorage.getItem('nome')) return false;
  return true;
};

export const obtemDadosSessao = () => {
  return {
    usuario: sessionStorage.getItem('usuario'),
    email: sessionStorage.getItem('email'),
    nome: sessionStorage.getItem('nome'),
    sobrenome: sessionStorage.getItem('sobrenome'),
    token: sessionStorage.getItem('token')
  };
};

export const removerSessao = () => {
  sessionStorage.removeItem('usuario');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('nome');
  sessionStorage.removeItem('sobrenome');
  sessionStorage.removeItem('token');
};
