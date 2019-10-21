import { connect } from 'react-redux';
import DetalhePec from './DetalhePec';
import { PecController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  obtemPecPorId: async pecId => await dispatch(PecController.obtemPecPorId(pecId))
});

const mapStateToProps = state => ({
  pec: state.pec.pec
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetalhePec);
