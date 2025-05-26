//1
import entradaDados from "readline-sync";

let num =  entradaDados.questionInt('Digite um número e o devolverei sua tabuada: ')

let cont = 1

while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

//2
