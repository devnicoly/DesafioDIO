function saldoRanqueada(vitorias, derrotas) {

    let saldo = vitorias - derrotas;

    let level;

    if (saldo < 10) {
        level = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        level = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        level = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        level = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        level = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        level = "Lendário";
    } else if (saldo >= 101) {
        level = "Imortal";
    }

    let mensagem = "O herói tem saldo de " + saldo + " e está no nível: " + level;

    return mensagem;
}

let resultado = saldoRanqueada(500, 90);
console.log(resultado);
