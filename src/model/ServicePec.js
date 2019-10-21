import axios from 'axios';
import { montarQuery, parsePec, parseAutor } from './utils';
import constantes from './constantes';

export default class ServicePec {
  static obtemCustoPorPec = async () => {
    return 79316160;
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
