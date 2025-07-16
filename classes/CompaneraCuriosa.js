const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
  recolectarInfo() {
    console.log("🧑‍💼 Hace preguntas aparentemente profesionales a los compañeros de trabajo");
    this.aumentarReputacion(Math.random() * 2);    // 0-2
    this.aumentarNivelChisme(Math.random());        // 0-1
  }

  contarChisme() {
    console.log("💼 Comenta el chisme como ejemplo de vida en el trabajo");
    this.aumentarReputacion(Math.random());        // 0-1
    this.aumentarNivelChisme(Math.random());        // 0-1
  }
}

module.exports = CompaneraCuriosa;
