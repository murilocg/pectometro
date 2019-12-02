const WARNING = 'warning';
const ERROR = 'error';
const SUCCESS = 'success';

export default {
  PREENCHA_NOME: { mensagem: 'Por favor preencha o nome', tipo: WARNING },
  APENAS_UM_NOME: { mensagem: 'O campo nome não pode conter mais de um nome', tipo: WARNING },
  PREENCHA_SOBRENOME: { mensagem: 'Por favor preencha o sobrenome', tipo: WARNING },
  APENAS_UM_SOBRENOME: {
    mensagem: 'O campo sobrenome não pode conter mais de um sobrenome',
    tipo: WARNING
  },
  PREENCHA_EMAIL: { mensagem: 'Por favor preencha o email', tipo: WARNING },
  EMAIL_FORMATO_INVALIDO: { mensagem: 'O email está em formato inválido', tipo: WARNING },
  PREENCHA_UF: { mensagem: 'Por favor selecione o UF', tipo: WARNING },
  PREENCHA_SENHA: { mensagem: 'Por favor preencha a senha', tipo: WARNING },
  PREENCHA_CONFIRMACAO_SENHA: {
    mensagem: 'Por favor preencha a confirmação de senha',
    tipo: WARNING
  },
  SENHA_CONFIRMACAO_INCORRETA: {
    mensagem: 'Senha e Confirmação de senha não são iguais',
    tipo: WARNING
  },
  PREENCHA_CPF: { mensagem: 'Por favor preencha o CPF', tipo: WARNING },
  CPF_INVALIDO: { mensagem: 'O CPF está no formato inválido', tipo: WARNING },
  SELECIONE_PROFISSAO: { mensagem: 'Por favor selecione uma profissão', tipo: WARNING },
  SELECIONE_DATA_NASCIMENTO: {
    mensagem: 'Por favor selecione a data de nascimento',
    tipo: WARNING
  },
  IDADE_MINIMA: { mensagem: 'A idade minima para se cadastrar é 15 anos', tipo: WARNING },
  SELECIONE_GENERO: { mensagem: 'Por favor selecione o genero', tipo: WARNING },
  ERROR_CADASTRO_USUARIO: { mensagem: 'Desculpe, ocorreu um erro ao cadastrar', tipo: ERROR },
  ERRRO_INESPERADO: { mensagem: 'Desculpe, ocorreu um erro inesperado', tipo: ERROR },
  ERRO_LOGIN: { mensagem: 'Desculpe, ocorreu um erro ao entrar', tipo: ERROR },
  ERRO_ATUALIZA_CUSTO: { mensagem: 'Desculpe, ocorreu um erro ao atualizar o custo', tipo: ERROR },
  CUSTO_ATUALIZADO: { mensagem: 'Custo por PEC atualizado', tipo: SUCCESS },
  ERROR_CRIAR_COMENTARIO: { mensagem: 'Ocorreu um erro inesperado', tipo: ERROR },
  ERRO_INESPERADO: { mensagem: 'Ocorreu um erro inesperado', tipo: ERROR }
};
