function saldoRanqueada(vitorias, derrotas) {
    vitorias = 500
    derrotas = 90

    saldo = vitorias - derrotas

    let level;


        if (saldo < 10) {
            level = "Nível Ferro"
            
        } else if (saldo >= 11 && saldo <= 20) {
            level = "Nível Bronze"
            
        } else if (saldo >= 21 && saldo <= 50) {
            level = "Nível Prata"
            
        } else if (saldo >= 51 && saldo <= 80) {
            level = "Nível Ouro"
            
        } else if (saldo >= 81 && saldo <= 90) {
            level = "Nível Diamante"
            
        } else if (saldo >= 91 && saldo <= 100) {
            level = "Nível Lendário"
            
        } else if (saldo >= 101) {
            level = "Nível Imortal"
            
        }

    let final = "O herói tem saldo de " + saldo + "e está no nível: " + level

    console.log(final)

    
        
}