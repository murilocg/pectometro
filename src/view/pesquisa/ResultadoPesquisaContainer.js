import { connect } from 'react-redux';
import ResultadoPesquisa from './ResultadoPesquisa';

const mapStateToProps = state => ({
  resultadoPesquisa: state.pec.resultadoPesquisa
});

export default connect(mapStateToProps)(ResultadoPesquisa);
