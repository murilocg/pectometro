import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  container: {
    marginTop: 50
  },
  conteudo: {
    fontSize: '18px',
    border: '1px solid #CACACA',
    borderTop: 'none',
    padding: '20px',
    textAlign: 'center'
  },
  titulo: {
    background: '#8CBABE',
    color: 'white',
    fontSize: '21px',
    textAlign: 'center',
    padding: '10px 0px'
  },
  btnAtualizar: {
    width: '100%',
    background: '#00ACC1',
    color: 'white',
    fontWeight: 'bold',
    maxWidth: '250px',
    marginTop: '30px'
  }
}));

export default styles;
