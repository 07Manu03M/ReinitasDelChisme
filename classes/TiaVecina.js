const Chismosa = require('./Chismosa');

class TiaVecina extends Chismosa {
  recolectarInfo() {
    console.log("👵 Aprovecha la reunión del barrio para escuchar discretamente");
    this.aumentarNivelChisme(Math.random() * 2 + 2); // 2-4
    this.aumentarReputacion(-Math.random() * 2);     // -0-2
  }

  contarChisme() {
    console.log("☕ Difunde el chisme mientras ofrece café");
    this.aumentarNivelChisme(Math.random() * 2); // 0-2
    this.aumentarReputacion(-Math.random());     // -0-1
  }
}

module.exports = TiaVecina;
