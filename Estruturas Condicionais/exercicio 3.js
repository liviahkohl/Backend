num1= entradaDados.question('Digite o primeiro numero: ')
num2= entradaDados.question('Digite o segundo numero: ')
operacao = entradaDados.question('Digite a operação de deseja fazer: \n 1-Multiplicação \n 2-divisão \n 3-Adição \n 4-Subtração \n')

switch(operacao) {
    case '1':
    console.log(`${num1} * ${num2} = ${num1*num2}`)
        break
    case '2':
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        break
    case '3':
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break
    case '4':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break
    default:
        console.log('Operação inválida! Digite um número de 1 a 4, conrrespondente a operação desejada')
}