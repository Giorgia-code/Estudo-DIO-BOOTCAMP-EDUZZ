/* Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos. assim como é exibido abaixo no exemplo de saída. Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos", conforme o exemplo abaixo: */

let total = 0
let i = 0
let valor

while (i <= 5) {
  valor = parseInt(gets())

  if (valor > 0) {
    total++
  }

  i++
}

console.log(total + ' ' + 'valores positivos')
