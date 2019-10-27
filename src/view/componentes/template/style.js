import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  toolbarTop: {
    background: '#00ACC1'
  },
  tollbarBottom: {
    minHeight: 0,
    height: 40,
    background: 'white'
  },
  subMenuItem: {
    color: '#547191'
  },
  menuItem: {
    padding: '0px 10px',
    fontSize: '20px'
  },
  icon: {
    color: 'white'
  },
  logo: {
    height: '40px',
    width: 'auto',
    paddingRight: '10px'
  },
  nomeAppSigla: {
    fontWeight: 'bold'
  },
  nomeApp: {
    fontSize: '20px'
  },
  modalPesquisar: {
    textAlign: 'center'
  },
  containerBtn: {
    padding: '10px 0px'
  },
  inputPesquisar: {
    border: '1px solid #CACACA',
    padding: 10,
    borderRadius: 15,
    width: 'calc(100% - 25px)',
    '&:focus': {
      outline: 'none'
    }
  },
  btnCancelar: {
    border: '1px solid #CACACA',
    background: 'white'
  },
  btnPesquisar: {
    background: '#00ACC1',
    color: 'white'
  }
}));

export default styles;
