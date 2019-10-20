import { connect } from 'react-redux';
import CustoPorPec from './CustoPorPec';
import { PecController } from '../../controller';

const mapDispatchToProps = dispatch => ({
  obtemCustoPorPec: async () => await dispatch(PecController.obtemCustoPorPec())
});

const mapStateToProps = state => ({
  custoPorPec: state.pec.custoPorPec
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustoPorPec);
