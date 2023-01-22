let nomeMaisVelha=prompt("Informe o nome da pessoa mais velha: ")
let idadeMaisVelha=prompt("Informe a idade da pessoa mais velha:")
let nomeMaisNova=prompt("Informe o nome da pessoa mais nova: ")
let idadeMaisNova=prompt("Informe a idade da pessoa mais nova: ")

var diferencaIdade

diferencaIdade= idadeMaisVelha-idadeMaisNova

alert(
    "Nome da pessoa mais velha e sua idade: "+nomeMaisVelha+", "
    +idadeMaisVelha+" "+"anos \n\n"
    
    +"Nome da pessoa mais nova e sua idade: "+nomeMaisNova+", "
    +idadeMaisNova+" "+"anos \n\n"

    +"A diferença de idade é: "+diferencaIdade+" "+"anos"

)