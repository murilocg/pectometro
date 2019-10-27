import { connect } from 'react-redux';
import { PecController } from '../../controller';
import InputPesquisa from './InputPesquisa';

const mapDispatchToProps = dispatch => ({
  pesquisar: async numero => await dispatch(PecController.pesquisarPecs(numero))
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPesquisa);
