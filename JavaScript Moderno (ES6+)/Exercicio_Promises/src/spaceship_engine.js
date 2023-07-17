export default class{
    constructor(spaceship){
        this.spaceship = spaceship;
    }

    turnOn(){
        this.checkCurrentCharge().then(currentCharge => {
            console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}%.`);


        }).catch(currentCharge => {
            console.log(`(${this.spaceship.name}) Partida não autorizada: carga atual em apenas ${currentCharge}%.`);
        })

    }

    checkCurrentCharge(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.currentPercentCharge();
        if(currentCharge >=30){
            resolve(currentCharge);
            
        }else{
            reject(currentCharge);
        }
        })
    }
}