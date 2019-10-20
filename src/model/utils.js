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
  dataApresentacao: pec.dataApresentacao
});
