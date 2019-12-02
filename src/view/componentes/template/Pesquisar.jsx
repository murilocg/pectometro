import React, { useState } from 'react';
import { DialogContent, Dialog, Button, DialogActions } from '@material-ui/core';
import history from '../../../shared/history';
import styles from './style';

const Pesquisar = props => {
  const classes = styles();
  const [termo, setTermo] = useState('');
  const { aberto, setAberto } = props;
  const handleOnChange = e => setTermo(e.target.value);
  const handleOnClick = () => {
    history.push(`/pesquisa?termo=${termo}`);
    setAberto(false);
  };
  const handleOnKeyPress = e => e.charCode === 13 && handleOnClick();
  const handleOnClickCancelar = () => {
    setTermo('');
    setAberto(false);
  };
  return (
    <Dialog open={aberto} fullWidth={true} maxWidth={'xs'}>
      <DialogContent className={classes.modalPesquisar}>
        <input
          placeholder={'Digite o número da PEC'}
          className={classes.inputPesquisar}
          onKeyPress={handleOnKeyPress}
          onChange={handleOnChange}
        />
      </DialogContent>
      <DialogActions>
        <Button className={classes.btnCancelar} onClick={handleOnClickCancelar}>
          Cancelar
        </Button>
        <Button className={classes.btnPesquisar} onClick={handleOnClick}>
          Pesquisar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Pesquisar;
