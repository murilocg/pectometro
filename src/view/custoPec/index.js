import { connect } from 'react-redux';
import { PecController } from '../../controller';
import AtualizarCustoPec from './AtualizarCustoPec';

const mapDispatchToProps = dispatch => ({
  atualizarCustoPorPec: async custo => await dispatch(PecController.atualizarCustoPorPec(custo)),
  obtemCustoPorPec: async () => await dispatch(PecController.obtemCustoPorPec())
});

const mapStateToProps = state => ({
  custoPorPec: state.pec.custoPorPec
});

export default connect(mapStateToProps, mapDispatchToProps)(AtualizarCustoPec);
