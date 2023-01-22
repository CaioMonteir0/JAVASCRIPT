let DistAnosLuz = prompt("Qual a distância em anos-luz ? ");

let Option = prompt(
 "Distância em Anos-luz: "+DistAnosLuz+
  "\nEscolha a unidade para conversão: " +
    "\n1- Parsec(pc) \n2- Unidade astronônima(AU) \n3- Quilômetros(km)"
);

switch (Option) {
  case "1":
    Parsec = DistAnosLuz * 0.306601;

    alert(
      "Distância em Anos-luz: " +
        DistAnosLuz +
        "\nConversão desejada: " +
        Parsec +
        " pc"
    );
    break;

  case "2":
    AU = DistAnosLuz * 63241.1;

    alert(
      "Distância em Anos-luz: " +
        DistAnosLuz +
        "\nConversão desejada: " +
        AU +
        " AU"
    );

    break;

  case "3":
    KM = DistAnosLuz * 9.5 * Math.pow(10, 12);

    alert(
      "Distância em Anos-luz: " +
        DistAnosLuz +
        "\nConversão desejada: " +
        KM +
        " km"
    );
    break;

  default:
    alert(
      "Nenhuma opção foi selecionada" +
        "\nDistância em Anos-luz: " +
        DistAnosLuz
    );
}
