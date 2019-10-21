import constantes from './constantes';
import ServicePec from './ServicePec';
import Autor from './Autor';
export default class Pec {
  static obtemCustoPorPec = async () => {
    return await ServicePec.obtemCustoPorPec();
  };

  static listaUltimasPecs = async () => {
    return await ServicePec.pesquisarPecs({
      itens: constantes.QTD_ITENS_PEC,
      siglaTipo: 'PEC',
      ordem: 'desc',
      ordenarPor: 'id'
    });
  };

  static obtemPecPorId = async pecId => {
    const pec = await ServicePec.obtemPecPorId(pecId);
    const autores = await Autor.listaAutoresPorPec(pecId);
    return { ...pec, autores };
  };
}
