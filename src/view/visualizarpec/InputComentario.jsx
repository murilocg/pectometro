import React, { useState } from 'react';
import { Grid, TextField, IconButton, Link } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { isLoggedIn } from '../../shared/auth';
import styles from './styles';
import history from '../../shared/history';

const InputComentario = props => {
  const { pecId, criarComentario } = props;
  const [texto, setTexto] = useState('');
  const handleOnChange = e => setTexto(e.target.value);
  const handleOnKeyPress = e => {
    if (e.charCode === 13) handleOnClick();
  };

  const handleOnClick = async () => {
    if (texto.trim() !== '' && pecId) {
      await criarComentario({ pecId, texto });
      setTexto('');
    }
  };
  const classes = styles();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.inputComentarioContainer}
    >
      {isLoggedIn() ? (
        <>
          <TextField
            className={classes.inputComentario}
            value={texto}
            onChange={handleOnChange}
            onKeyPress={handleOnKeyPress}
            multiline
            rows={1}
            placeholder='Comente aqui'
          />
          <IconButton className={classes.btnEnviarComentario} onClick={handleOnClick}>
            <Send />
          </IconButton>
        </>
      ) : (
        <span className={classes.textoEntrar}>
          Para comentar
          <Link className={classes.linkEntrar} onClick={() => history.push('/login')}>
            Entre aqui
          </Link>
        </span>
      )}
    </Grid>
  );
};

export default InputComentario;
