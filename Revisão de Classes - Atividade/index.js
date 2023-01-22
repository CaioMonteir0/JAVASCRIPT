class Spaceship {
    constructor(name, crewQuantity) {
      this.name = name;
      this.crewQuantity = crewQuantity;
      this.currentVelocity = 0
    }
  }
  
  class battleSpaceship extends Spaceship{
      constructor(name, crewQuantity, gunsQuantity){
          super(name, crewQuantity)
  
      this.gunsQuantity = gunsQuantity
      }   
  }
  
  class transportSpaceship extends Spaceship{
      constructor(name, crewQuantity, numberOfPlaces){
          super(name, crewQuantity)
  
      this.numberOfPlaces = numberOfPlaces
      }   
  }
  
  let userSpaceship = new Spaceship(
    prompt("Informe o nome da nave: "),
    Number(prompt("Informe a quantidade de tripulantes: "))
  );
  
  let typeOfSpaceship = prompt("Informe o tipo de nave: \n1- Nave de Batalha \n2- Nave de Transporte")
  
  switch (typeOfSpaceship) {
      case "1":
          let gunsQuantity = prompt("Informe a quantidade de armas disponíveis: ")
          userSpaceship = new battleSpaceship(userSpaceship.name, userSpaceship.crewQuantity, gunsQuantity);
          break;
      case "2":
          let numberOfPlaces = prompt("Informe a quantidade de lugares disponíveis: ")
          userSpaceship = new transportSpaceship(userSpaceship.name, userSpaceship.crewQuantity, numberOfPlaces);
          break;
      default:
          console.log("Tipo de nave inválido");
          break;
  }
  

  userSpaceship.accelerate = function() {
    let acceleration = Number(prompt("Informe a aceleração desejada: "));
    let deceleration = acceleration * 0.17;
    this.currentVelocity += (acceleration - deceleration);
    console.log(`Acelerando para ${this.currentVelocity}`);
}


  userSpaceship.changeSpaceship = function(newSpaceship) {
      userSpaceship = newSpaceship;
      console.log(`Nave atual alterada para ${userSpaceship.name}`);
  }
  
  userSpaceship.endProgram = function() {
      console.log("Programa encerrado");
  }
  