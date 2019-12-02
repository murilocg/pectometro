import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  detalhePecContainer: {},
  nomePec: {
    fontSize: '26px',
    background: '#8CBABE',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0px'
  },
  infoPec: {
    border: '1px solid #CACACA',
    borderTop: 'none',
    paddingBottom: '10px'
  },
  texto: {
    padding: '10px'
  },
  voltarContainer: {
    paddingTop: '20px',
    paddingBottom: '40px'
  },
  voltarTexto: {
    fontSize: '22px',
    color: '#547191'
  },
  leiaMaisContainer: {
    paddingTop: '10px'
  },
  leiaMaisTexto: {
    fontSize: '18px',
    color: '#547191'
  },
  icon: {
    color: '#78DE84'
  },
  listaComentario: {},
  listaComentarioItem: {
    padding: 10,
    borderBottom: '1px solid #CACACA'
  },
  comentarioUsuario: {
    fontSize: 16,
    padding: '0px 10px',
    color: '#547191'
  },
  comentarioTexto: {
    padding: '5px 35px',
    paddingRight: 0
  },
  comentarioData: {
    paddingLeft: 35,
    fontSize: 14,
    color: 'gray'
  },
  comentarioIcone: {
    color: '#8CBABE'
  },
  inputComentarioContainer: {
    padding: 15
  },
  inputComentario: {
    width: 'calc(100% - 50px)'
  },
  btnEnviarComentario: {
    color: '#00ACC1'
  },
  linkEntrar: {
    fontWeight: 'bold',
    padding: '0px 5px'
  }
}));

export default styles;
