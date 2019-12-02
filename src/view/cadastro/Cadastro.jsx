import React, { useState } from 'react';
import { withTemplate } from '../componentes/template';
import styles from './styles';
import MaskedInput from 'react-text-mask';
import {
  Grid,
  TextField,
  Button,
  Link,
  FormControl,
  FormControlLabel,
  Radio,
  InputLabel,
  RadioGroup,
  Select,
  MenuItem
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import history from '../../shared/history';
import estados from '../../shared/estados.json';
import profissoes from '../../shared/profissoes.json';

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

const Cadastro = props => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [uf, setUf] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [profissao, setProfissao] = useState('');
  const [cpf, setCpf] = useState('');
  const handleOnChangeNome = e => setNome(e.target.value);
  const handleOnChangeSobrenome = e => setSobrenome(e.target.value);
  const handleOnChangeEmail = e => setEmail(e.target.value);
  const handleOnChangeSenha = e => setSenha(e.target.value);
  const handleOnChangeConfirmaSenha = e => setConfirmaSenha(e.target.value);
  const handleOnChangeGenero = e => setGenero(e.target.value);
  const handleOnChangeDataNascimento = data => setDataNascimento(data);
  const handleOnChangeProfissao = e => setProfissao(e.target.value);
  const handleOnChangeUf = e => setUf(e.target.value);
  const handleOnChangeCpf = e => setCpf(e.target.value);

  const cadastrar = () => {
    props.cadastrar({
      nome,
      sobrenome,
      email,
      senha,
      confirmaSenha,
      genero,
      dataNascimento,
      profissao,
      uf,
      cpf
    });
  };
  return (
    <Grid container justify='center'>
      <Grid item xs={10} sm={6} md={4}>
        <Grid container className={classes.containerLogin}>
          <Grid item xs={12} className={classes.loginTitulo}>
            Cadastro
          </Grid>
          <Grid container className={classes.containerBody}>
            <Grid item xs={12} className={classes.containerInput}>
              <TextField
                fullWidth={true}
                className={classes.input}
                value={nome}
                placeholder={'Digite seu Nome'}
                onChange={handleOnChangeNome}
              />
              <TextField
                fullWidth={true}
                className={classes.input}
                value={sobrenome}
                placeholder={'Digite seu Sobrenome'}
                onChange={handleOnChangeSobrenome}
              />
              <TextField
                fullWidth={true}
                className={classes.input}
                value={email}
                placeholder={'Digite o email'}
                onChange={handleOnChangeEmail}
              />
              <TextField
                className={classes.input}
                fullWidth={true}
                value={senha}
                type='password'
                placeholder={'Digite a senha'}
                onChange={handleOnChangeSenha}
              />
              <TextField
                className={classes.input}
                fullWidth={true}
                value={confirmaSenha}
                type='password'
                placeholder={'Confirme a senha'}
                onChange={handleOnChangeConfirmaSenha}
              />
              <TextField
                className={classes.input}
                fullWidth={true}
                value={cpf}
                placeholder={'Digite seu CPF'}
                onChange={handleOnChangeCpf}
                InputProps={{
                  inputComponent: TextMaskCustom
                }}
              />
              <FormControl className={classes.selectQuiz} fullWidth>
                <InputLabel>UF</InputLabel>
                <Select
                  fullWidth
                  value={uf}
                  onChange={handleOnChangeUf}
                  placeholder='Selecione um estado'
                >
                  {estados.map(e => (
                    <MenuItem key={e} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.selectQuiz} fullWidth>
                <InputLabel>Profissão</InputLabel>
                <Select
                  fullWidth
                  value={profissao}
                  onChange={handleOnChangeProfissao}
                  placeholder='Selecione uma Profissão'
                >
                  {profissoes.map(p => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Data Nascimento'
                  value={dataNascimento}
                  onChange={handleOnChangeDataNascimento}
                  fullWidth
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
              <FormControl component='fieldset' className={classes.opcaoGenero}>
                <RadioGroup
                  aria-label='position'
                  name='position'
                  value={genero}
                  onChange={handleOnChangeGenero}
                  row
                >
                  <FormControlLabel
                    value={'masculino'}
                    control={<Radio color='primary' />}
                    label='Masculino'
                    labelPlacement='top'
                    classes={{ label: classes.opcaoGenero }}
                  />
                  <FormControlLabel
                    className={classes.opcaoGenero}
                    value={'feminino'}
                    control={<Radio color='primary' />}
                    label='Feminino'
                    labelPlacement='top'
                    classes={{ label: classes.opcaoGenero }}
                  />
                  <FormControlLabel
                    className={classes.opcaoGenero}
                    value={'outros'}
                    control={<Radio color='primary' />}
                    label='Outros'
                    labelPlacement='top'
                    classes={{ label: classes.opcaoGenero }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.containerBtn}>
              <Button className={classes.btnEntrar} onClick={() => cadastrar()}>
                Cadastrar
              </Button>
            </Grid>
            <Grid className={classes.containerCadastrese} item xs={12}>
              <Link className={classes.linkCadastro} onClick={() => history.push('/login')}>
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withTemplate(Cadastro);
