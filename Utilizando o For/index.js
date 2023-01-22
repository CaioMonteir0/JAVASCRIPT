let nameSpaceship = prompt("Qual o nome da espaçonave ?")
let remvCaractere = prompt("Qual caractere deseja retirar ?")
let newCaractere = prompt("Qual caractere deseja pôr no lugar?")
let newNameSpaceship = ""

for (let i = 0; i < nameSpaceship.length; i++) {
    if(nameSpaceship[i] == remvCaractere){

        newNameSpaceship += newCaractere

    }else{
        newNameSpaceship += nameSpaceship[i]
    }
    
}

alert("O novo nome da nave é "+newNameSpaceship)