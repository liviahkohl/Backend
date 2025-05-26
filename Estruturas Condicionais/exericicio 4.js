let categorias = entradaDados.question('Digite sua categoria: A, B, C ou D\n')
let salario = entradaDados.questionFloat('Digite seu sálario: ').toUppercase;
let bonus = 0

switch(categoria){
    case 'A':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 5).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'B':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 10).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'C':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 15).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    case 'D':
        console.log(`Seu salário atual vai ser de: ${salario + ((salario/100) * 20).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}`)
        break
    default:
        console.log('Categoria inválida, digite uma letra de A a D, conforme sua categoria')
}''
