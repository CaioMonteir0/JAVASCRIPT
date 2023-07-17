let userVelocity = prompt("Digite a velocidade: ");
let userAcceleration = prompt("Digite o valor da aceleração: ");
let komodoship = {
    name: "Komodo",
    velocity: userVelocity,
    acceleration: userAcceleration
} 

const velocityAfter25seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {

        
        if(acceleration > 0){
            velocity += acceleration * 2;
            console.log(`Nova velocidade: ${velocity}`);
            resolve(velocity);
            

        }else{
            console.log("Aceleração invalida")
            reject("Não possui aceleração")


        }

    }, 1000)
})
}

velocityAfter25seconds(komodoship.velocity, komodoship.acceleration).then(function(velocity) {

komodoship.velocity = velocity;
console.log("Depois de acelerar: \n", komodoship)
}).catch(message => {
    console.log(`Komodo: ${message}`)
    })
console.log("Execução de Promises")
console.log(komodoship)
