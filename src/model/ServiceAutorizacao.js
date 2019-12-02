import axios from 'axios';

export default class ServiceAutorizacao {
  static cadastrar = async cidadao => {
    const url = `http://localhost:4200/usuarios/cidadao`;
    const response = await axios.post(url, cidadao);
    return response.data;
  };
  static login = async credenciais => {
    const url = `http://localhost:4200/auth/login`;
    const response = await axios.post(url, credenciais);
    return response.data;
  };
}
