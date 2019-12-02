import { connect } from 'react-redux';
import { AutorizacaoController } from '../../controller';
import Login from './Login';

const mapDispatchToProps = dispatch => ({
  login: async credenciais => await dispatch(AutorizacaoController.login(credenciais))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
