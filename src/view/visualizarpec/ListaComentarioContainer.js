import { connect } from 'react-redux';
import ListaComentario from './ListaComentario';
import { PecController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  listaComentarios: async pecId => await dispatch(PecController.listaComentarios(pecId))
});

const mapStateToProps = state => ({
  comentarios: state.pec.comentarios
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaComentario);
