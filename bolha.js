/*
// Algoritimo de valores bolha //
*/

var numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var valores = numeros;

function ordena() {
    let inicio = 0;
    let fim = valores.length;
    let tmp;

    for (vezes = 0; vezes < valores.length; vezes++) {

        for (pos = inicio; pos < fim - 1 - vezes, pos++;) {

            if (valores[pos] > valores[pos + 1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }

}

ordena();
console.log("vetor ordenado...");
console.log(valores);
