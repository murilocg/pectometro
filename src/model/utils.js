export const montarQuery = (url, filter) => {
  if (!filter) return url;
  url = url + '?';
  const keys = Object.keys(filter);
  keys.forEach((k, i) => (url += `${k}=${filter[k]}${i < keys.length - 1 ? '&' : ''}`));
  return url;
};

export const parsePec = pec => ({
  id: pec.id,
  ano: pec.ano,
  ementa: pec.ementa,
  numero: pec.numero,
  url: pec.urlInteiroTeor,
  dataApresentacao: pec.dataApresentacao
});

export const parseAutor = autor => ({
  id: autor.id,
  nome: autor.nome,
  tipo: autor.tipo
});
