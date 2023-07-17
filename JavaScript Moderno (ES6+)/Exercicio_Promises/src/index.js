import Spaceship from "./spaceship";
import spaceship_engine from "./spaceship_engine";
const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterda", 14, 10)
const dwarfstart = new Spaceship("Estrela-Anã", 20, 4)

const sophiaEngine = new spaceship_engine(sophia)
const amsterdaEngine = new spaceship_engine(amsterda)
const dwarfstartEngine = new spaceship_engine(dwarfstart)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfstartEngine.turnOn()

console.log("Promises")