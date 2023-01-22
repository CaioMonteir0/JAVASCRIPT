let NaveNome = prompt("Qual o nome da nave ? ")
let DobraEspacial = prompt("Deseja entrar em dobra espacial ? \n1- Sim \n2- Não")
numDobras=0
while(DobraEspacial == "1" || DobraEspacial == "Sim"){

    numDobras += 1
    
    DobraEspacial = prompt("Deseja realizar a próxima dobra ? \n1- Sim \n2- Não")

}
alert("Nave : "+NaveNome+"\nQuantidade de dobras: "+numDobras)