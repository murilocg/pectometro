import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './styles';
import history from '../../shared/history';

const InputPesquisa = props => {
  const { pesquisar } = props;
  const [termo, setTermo] = useState(props.termo);
  const handleOnChange = e => setTermo(e.target.value);
  const handleOnKeyPress = e => {
    if (e.charCode === 13) {
      history.push(`/pesquisa?termo=${termo}`);
    }
  };
  useEffect(() => {
    pesquisar(props.termo);
    setTermo(props.termo);
  }, [props.termo, pesquisar]);
  const classes = styles();
  return (
    <Grid item xs={12} className={classes.inputPesquisaContainer}>
      <input
        placeholder={'Digite o número da PEC'}
        value={termo}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
        className={classes.inputPesquisa}
      />
    </Grid>
  );
};

export default InputPesquisa;
