let nameSpaceship = prompt("Qual o nome da espaçonave ? ")
let invertedNameSpaceship = ""
for (i = nameSpaceship.length - 1 ; i >= 0 ; i--) {
    if(nameSpaceship[i] == "e"){
        break
    }
    invertedNameSpaceship += nameSpaceship[i]
    
}
alert("Nome original da nave: "+nameSpaceship+"\nNome após ocultação: "+invertedNameSpaceship)