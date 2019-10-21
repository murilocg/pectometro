import ServicePec from './ServicePec';
export default class Autor {
  static listaAutoresPorPec = async pecId => {
    return await ServicePec.listaAutoresPorPec(pecId);
  };
}
