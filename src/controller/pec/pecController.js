import { Pec } from '../../model';
import pecActions from './pecActions';
import { NotificationController } from '..';
import mensagens from '../../shared/mensagens';
import { obtemDadosSessao } from '../../shared/auth';

export default class PecController {
  static obtemCustoPorPec = () => async dispatch => {
    const custo = await Pec.obtemCustoPorPec();
    dispatch(pecActions.setCustoPorPec(custo));
  };
  static atualizarCustoPorPec = custo => async dispatch => {
    try {
      await Pec.atualizarCustoPorPec(custo);
      dispatch(NotificationController.send(mensagens.CUSTO_ATUALIZADO));
    } catch (e) {
      dispatch(NotificationController.send(e));
    }
  };
  static listaUltimasPecs = () => async dispatch => {
    const ultimasPecs = await Pec.listaUltimasPecs();
    dispatch(pecActions.setUltimasPecs(ultimasPecs));
  };
  static obtemPecPorId = pecId => async dispatch => {
    const pec = await Pec.obtemPecPorId(pecId);
    dispatch(pecActions.setPec(pec));
  };
  static pesquisarPecs = termo => async dispatch => {
    const resultadoPesquisa = await Pec.pesquisarPecs(termo);
    dispatch(pecActions.setResultadoPesquisa(resultadoPesquisa));
  };
  static listaComentarios = pecId => async dispatch => {
    try {
      const comentarios = await Pec.listaComentarios(pecId);
      dispatch(pecActions.setComentarios(comentarios));
    } catch (e) {
      dispatch(NotificationController.send(mensagens.ERRRO_INESPERADO));
    }
  };
  static criarComentario = comentario => async dispatch => {
    try {
      const sessao = obtemDadosSessao();
      await Pec.criarComentario({ ...comentario, cidadaoId: Number(sessao.usuario) });
      await dispatch(this.listaComentarios(comentario.pecId));
    } catch (e) {
      dispatch(NotificationController.send(mensagens.ERRRO_INESPERADO));
    }
  };
}
