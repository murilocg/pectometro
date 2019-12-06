import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateToProps = state => ({
  open: state.loading.open
});

export default connect(mapStateToProps)(Loading);
