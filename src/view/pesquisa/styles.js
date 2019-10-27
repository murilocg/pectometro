import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  pesquisaContainer: { marginTop: 40 },
  resultadoPesquisaItem: {
    fontSize: '18px',
    border: '1px solid #CACACA',
    borderTop: 'none',
    padding: '15px',
    paddingLeft: '20px'
  },
  inputPesquisaContainer: {
    background: '#8CBABE',
    color: 'white',
    fontSize: '21px',
    textAlign: 'center',
    padding: '10px'
  },
  inputPesquisa: {
    width: 'calc(100% - 20px)',
    padding: '5px',
    borderRadius: '15px',
    border: '1px solid white',
    '&:focus': {
      outline: 'none'
    }
  }
}));

export default styles;
