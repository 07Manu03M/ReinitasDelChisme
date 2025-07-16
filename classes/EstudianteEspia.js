const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
  recolectarInfo() {
    console.log("🧑‍🎓 Lee chats ajenos desde el último puesto del salón");
    this.aumentarNivelChisme(Math.random() * 2 + 1); // 1-3
    if (Math.random() < 0.3) this.aumentarReputacion(-2); // riesgo de ser descubierta
  }

  contarChisme() {
    console.log("📱 Filtra el chisme por estados en WhatsApp");
    this.aumentarNivelChisme(Math.random() * 2); // 0-2
    if (Math.random() < 0.2) this.aumentarReputacion(-1); // otro pequeño riesgo
  }
}

module.exports = EstudianteEspia;
