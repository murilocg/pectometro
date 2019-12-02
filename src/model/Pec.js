import constantes from './constantes';
import ServicePec from './ServicePec';
import Autor from './Autor';
import NotificationException from '../shared/NotificationException';
import mensagens from '../shared/mensagens';
export default class Pec {
  static obtemCustoPorPec = async () => {
    const custo = await ServicePec.obtemCustoPorPec();
    return custo ? custo : 0;
  };

  static atualizarCustoPorPec = async custo => {
    try {
      return await ServicePec.atualizarCustoPorPec(custo);
    } catch (e) {
      throw new NotificationException(mensagens.ERRO_ATUALIZA_CUSTO);
    }
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

  static pesquisarPecs = async termo => {
    return await ServicePec.pesquisa(termo);
  };

  static listaComentarios = async pecId => {
    return await ServicePec.listaComentarios(pecId);
  };

  static criarComentario = async comentario => {
    return await ServicePec.criarComentario(comentario);
  };
}
