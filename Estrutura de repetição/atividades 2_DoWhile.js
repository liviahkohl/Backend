import entradaDados from "readline-sync";

const numeroAleatorio = Math.floor(Math.random()*100) +1;
let palpite;

do {
    palpite = entradaDados.questionInt("tente adivinhar o número (entre 1 e 100): ");
    if (palpite === numeroAleatorio) {
        console.log('Parabens! voce adivinhou o número. ')
    } 
    else if (palpite < numeroAleatorio) {
        console.log('tente número maior.')
    } 
    else {
        console.log('tente um número menor')
    }
    
} while (palpite !== numeroAleatorio);