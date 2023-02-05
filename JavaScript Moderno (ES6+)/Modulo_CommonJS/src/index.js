alert("Funcionando!");
const solarSystem = require("./solar_system");
const Planet = require("./planet");
const moment = require("moment");
const earth = new Planet("Terra", 50100000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 14480000));
solarSystem.planets.push(new Planet("Mercúrio", 74880000));
solarSystem.planets.push(new Planet("Saturno", 42700000));

console.log(solarSystem);
console.log(moment().format("HH:mm"))
