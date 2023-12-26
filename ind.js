let player = "welldorm";
let xP = 5720;
let nivel;

if (xP < 1000) {
    nivel = " É nível Ferro.";
} else if (xP >= 1001 && xP <= 2000) {
    nivel = " É nível Bronze.";
} else if (xP >= 2001 && xP <= 5000) {
    nivel = " É nível Prata.";
} else if (xP >= 5001 && xP <= 7000) {
    nivel = " É nível Ouro.";
} else if (xP >= 7001 && xP <= 8000) {
    nivel = " É nível Platina.";
} else if (xP >= 8001 && xP <= 9000) {
    nivel = " É nível Ascendente.";
} else if (xP >= 9001 && xP <= 10000) {
    nivel = " É nível Imortal.";
} else if (xP >= 10001) {
    nivel = " É nível Radiante.";
}

console.log(player + nivel)



