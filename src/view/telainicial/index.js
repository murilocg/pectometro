import { connect } from 'react-redux';
import TelaInicial from './TelaInicial';
import { withTemplate } from '../componentes/template';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TelaInicial);

export default withTemplate(Component);
