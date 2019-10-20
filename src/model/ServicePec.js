import axios from 'axios';
import { montarQuery, parsePec } from './utils';
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
}
