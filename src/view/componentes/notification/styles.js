import { makeStyles } from '@material-ui/styles';
import { amber, green, red, blue } from '@material-ui/core/colors';

const styles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: red[600]
  },
  info: {
    backgroundColor: blue[600]
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 1
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default styles;
