import { connect } from 'react-redux';
import { PecController } from '../../controller';
import InputPesquisa from './InputPesquisa';

const mapDispatchToProps = dispatch => ({
  pesquisar: async termo => await dispatch(PecController.pesquisarPecs(termo))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InputPesquisa);
