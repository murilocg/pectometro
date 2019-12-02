import { connect } from 'react-redux';
import { AutorizacaoController } from '../../controller';
import Cadastro from './Cadastro';

const mapDispatchToProps = dispatch => ({
  cadastrar: async usuario => await dispatch(AutorizacaoController.cadastrar(usuario))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
