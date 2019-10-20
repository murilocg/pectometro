import { connect } from 'react-redux';
import UltimasPecs from './UltimasPecs';
import { PecController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  listaUltimasPecs: async () => await dispatch(PecController.listaUltimasPecs())
});

const mapStateToProps = state => ({
  ultimasPecs: state.pec.ultimasPecs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UltimasPecs);
