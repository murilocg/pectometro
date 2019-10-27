import { Pec } from '../../model';
import pecActions from './pecActions';

export default class PecController {
  static obtemCustoPorPec = () => async dispatch => {
    const custo = await Pec.obtemCustoPorPec();
    dispatch(pecActions.setCustoPorPec(custo));
  };
  static listaUltimasPecs = () => async dispatch => {
    const ultimasPecs = await Pec.listaUltimasPecs();
    dispatch(pecActions.setUltimasPecs(ultimasPecs));
  };
  static obtemPecPorId = pecId => async dispatch => {
    const pec = await Pec.obtemPecPorId(pecId);
    dispatch(pecActions.setPec(pec));
  };
  static pesquisarPecs = numero => async dispatch => {
    const resultadoPesquisa = await Pec.pesquisarPecs(numero);
    dispatch(pecActions.setResultadoPesquisa(resultadoPesquisa));
  };
}
