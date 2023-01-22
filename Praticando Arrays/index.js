const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let filterCrewSpaceships = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => {
    return spaceship[0];
  });

let pendantHitchPlatform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false

});

let CapslockSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

let message =
  "Espaçonaves com mais de 9 tripulantes: "  + filterCrewSpaceships.join(", ");
message +=
  "\n\nPlatafornma com processo de engate: " + (pendantHitchPlatform + 1);
message += "\n\nEspaçonaves destacadas: " + CapslockSpaceships.join(", ");

alert(message);
