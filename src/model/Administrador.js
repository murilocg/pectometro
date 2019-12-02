import Usuario from './Usuario';
export default class Administador extends Usuario {
  constructor(usuario) {
    super(usuario);
  }

  static banirUsuario() {}
  static listaUsuarios() {}
}
