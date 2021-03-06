/*
// na busca binária temos que ter os dados ordenados.//
// encontra o meio do array e faz a busca//
*/ 
var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(num) {
    for (i = 0; i < valores.length; i++) {
        if (num == valores[i])
        return i;
    }
    return -1;
}

// usando a nossa ferramenta de busca

console.log("achei na posição" + busca(10));
console.log("não achei" + busca(50));

// busca binária
function buscaBin(num) {
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = valores.length;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;
        if (num == valores[meio]) {
            console.log("achei em "+ passos +" passos");
            return meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio +1;
            } else {
                fim = meio -1;
            }
        }
    }
    console.log("não achei em "+ passos +" passos");
    return -1;
}

// usando a busca binária
console.log(buscaBin(10));
console.log(buscaBin(60));
console.log(buscaBin(50));

