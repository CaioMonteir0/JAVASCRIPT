import Spaceship from "./spaceship";
import armaments from "./armaments";
import { steelDefenses, laserDefenses } from "./defenses";
import basicDefense from "./defenses";



const spaceship = new Spaceship(
  "USS_Enterprise",
  "James Tiberius Kirk",
  armaments.laser,
  laserDefenses,
  steelDefenses
);

const basicSpaceship = new Spaceship("Nave Básica", "Astronauta Turk", [], basicDefense)


console.log(spaceship)
console.log(basicSpaceship)