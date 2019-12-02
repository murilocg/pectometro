import Usuario from './Usuario';
export default class Cidadao extends Usuario {
  constructor(usuario) {
    super(usuario);
    const { dataNascimento, cpf, genero, cidade, uf } = usuario;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.genero = genero;
    this.cidade = cidade;
    this.uf = uf;
  }
}
