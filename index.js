const chalk = require('chalk');
const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');

const chismosas = [
  new TiaVecina("Doña Gladys"),
  new CompaneraCuriosa("Sandra la del cubículo 4"),
  new EstudianteEspia("Daniela la de atrás"),
];

for (let ronda = 1; ronda <= 2; ronda++) {
  console.log(chalk.bold(`\n💥 Ronda ${ronda}`));
  chismosas.forEach((chismosa) => {
    console.log(`\n🔹 ${chismosa.nombre}`);
    chismosa.recolectarInfo();
    chismosa.contarChisme();
  });
}

// Estadísticas finales
console.log(chalk.bold("\n📊 Estadísticas finales:"));

let campeona;
let mayorNivel = 0;

chismosas.forEach((c) => {
  const rep = c.getReputacion().toFixed(2);
  const nivel = c.getNivelChisme().toFixed(2);
  let colorChisme = c.getNivelChisme() >= 7 ? chalk.magenta : chalk.gray;
  let colorReputacion = c.getReputacion() >= 7 ? chalk.hex("#FFA500") : chalk.black;

  console.log(`\n👑 ${c.nombre}`);
  console.log(`Nivel de Chisme: ${colorChisme(nivel)}`);
  console.log(`Reputación: ${colorReputacion(rep)}`);

  if (c.getNivelChisme() > mayorNivel) {
    mayorNivel = c.getNivelChisme();
    campeona = c.nombre;
  }
});

console.log(chalk.bold(`\n🏆 La reina del chisme más viral es: ${chalk.magentaBright(campeona)} 💥`));



  