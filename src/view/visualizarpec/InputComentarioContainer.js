import { connect } from 'react-redux';
import InputComentario from './InputComentario';
import { PecController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  criarComentario: async comentario => await dispatch(PecController.criarComentario(comentario))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InputComentario);
