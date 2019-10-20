import constantes from './constantes';
import ServicePec from './ServicePec';
export default class Pec {
  static obtemCustoPorPec = async () => {
    return await ServicePec.obtemCustoPorPec();
  };

  static listaUltimasPecs = async () => {
    return await ServicePec.pesquisarPecs({
      itens: constantes.QTD_ITENS_PEC,
      ordem: 'desc',
      ordenarPor: 'ano'
    });
  };
}
