import axios from 'axios';
import { montarQuery, parsePec, parseAutor } from './utils';
import constantes from './constantes';

export default class ServicePec {
  static obtemCustoPorPec = async () => {
    const url = 'http://localhost:4200/pecs/custo';
    const response = await axios.get(url);
    return response.data.custo;
  };

  static atualizarCustoPorPec = async custo => {
    const url = 'http://localhost:4200/pecs/custo';
    await axios.post(url, { custo });
  };

  static pesquisa = async termo => {
    const url = `http://localhost:4200/pecs?termo=${termo}`;
    const response = await axios.get(url);
    return response.data.pecs;
  };

  static listaComentarios = async pecId => {
    const url = `http://localhost:4200/pecs/${pecId}/comentarios`;
    const response = await axios.get(url);
    return response.data;
  };

  static criarComentario = async comentario => {
    const url = `http://localhost:4200/pecs/${comentario.pecId}/comentarios`;
    const response = await axios.post(url, comentario);
    return response.data;
  };

  static pesquisarPecs = async filter => {
    const url = montarQuery(`${constantes.URL_API_PEC}/proposicoes`, filter);
    const response = await axios.get(url);
    return response.data.dados.map(parsePec);
  };
  static obtemPecPorId = async pecId => {
    const response = await axios.get(`${constantes.URL_API_PEC}/proposicoes/${pecId}`);
    return parsePec(response.data.dados);
  };

  static listaAutoresPorPec = async pecId => {
    const response = await axios.get(`${constantes.URL_API_PEC}/proposicoes/${pecId}/autores`);
    return response.data.dados.map(parseAutor);
  };
}
