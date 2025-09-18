//clase Tiquetera pascalCase

class Tiquetera { //entidad 

  constructor({ nrotiquetera, cliente, saldo, totalTransacciones, observaciones }) {
    this.nrotiquetera = nrotiquetera;
    this.cliente = cliente;
    this.saldo = saldo;
    this.totalTransacciones = totalTransacciones;
    this.observaciones = observaciones;
  }
}

export default Tiquetera;