let nome = prompt("Qual o seu nome ? ");
let velocity = 0;
let newvelocity = prompt("Qual velocidade você gostaria de acelerar a nave ? ");

let confirmVelocity = confirm(
    "Atenção ! " +
    "estamos progredindo para a velocidade " +
    newvelocity +
    " km/s"
);

if (confirmVelocity) {
    velocity = newvelocity;
}
if (velocity <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade");
} else {
    if (velocity < 40) {
        alert("Você está devagar, podemos acelerar mais");
    } else {
        if (velocity >= 40 && velocity < 80) {
            alert("Parece uma boa velocidade para manter");
        } else {
            if (velocity >= 80 && velocity < 100) {
                alert("Velocidade alta. Considere diminuir");
            } else {
                if (velocity >= 100) {
                    alert("Velocidade perigosa. Controle automático forçado.");
                }
            }
        }
    }
}

alert("Piloto: " + nome + "\n Velocidade atual: " + velocity+" km/s");
