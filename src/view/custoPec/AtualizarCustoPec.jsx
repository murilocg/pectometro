import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import styles from './styles';
import { withTemplate } from '../componentes/template';

const NumberFormatCustom = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix='R$'
    />
  );
};

const AtualizarCustoPec = props => {
  const classes = styles();
  const { custoPorPec, obtemCustoPorPec } = props;
  const [custo, setCusto] = useState(0);
  console.log(custoPorPec);
  useEffect(() => {
    if (!custoPorPec) obtemCustoPorPec();
    else setCusto(custoPorPec);
  }, [custoPorPec, obtemCustoPorPec]);

  const handleOnChangeCusto = e => setCusto(e.target.value);
  const atualizarCusto = () => props.atualizarCustoPorPec(custo);
  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={10} md={6}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.titulo}>
            Atualizar Custo PEC
          </Grid>
          <Grid item xs={12} className={classes.conteudo}>
            <TextField
              fullWidth={true}
              className={classes.input}
              value={custo}
              label='Custo por PEC'
              onChange={handleOnChangeCusto}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
            <Button className={classes.btnAtualizar} onClick={atualizarCusto}>
              Atualizar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTemplate(AtualizarCustoPec);
