class Chismosa {
    #reputacion;
    #nivelChisme;
  
    constructor(nombre, reputacion = 5, nivelChisme = 0) {
      if (this.constructor === Chismosa) {
        throw new Error("No se puede instanciar una clase abstracta");
      }
  
      this.nombre = nombre;
      this.#reputacion = reputacion;
      this.#nivelChisme = nivelChisme;
    }
  
    getReputacion() {
      return this.#reputacion;
    }
  
    getNivelChisme() {
      return this.#nivelChisme;
    }
  
    aumentarReputacion(valor) {
      this.#reputacion = Math.min(10, Math.max(0, this.#reputacion + valor));
    }
  
    aumentarNivelChisme(valor) {
      this.#nivelChisme = Math.min(10, Math.max(0, this.#nivelChisme + valor));
    }
  
    recolectarInfo() {
      throw new Error("Método abstracto: recolectarInfo");
    }
  
    contarChisme() {
      throw new Error("Método abstracto: contarChisme");
    }
  }
  
  module.exports = Chismosa;
  