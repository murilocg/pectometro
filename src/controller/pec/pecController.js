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
}
