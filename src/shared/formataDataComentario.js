const formataDataComentario = data => {
  const hoje = new Date();
  const diff = hoje - data;
  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  if (minutos < 1) return 'Há alguns segundos';
  if (minutos < 60) return `Há ${minutos} minutos`;
  if (horas === 1) return `Há 1 hora`;
  if (horas < 24) return `Há ${horas} horas`;
  return data.toLocaleString('pt-BR');
};

export default formataDataComentario;
