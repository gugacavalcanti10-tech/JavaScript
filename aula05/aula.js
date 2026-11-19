let num1 = 5
let num2 = 15
//declaração de variaveis

console.log(num1 > num2 ) // retorna um false (falso)
console.log(num2 > num1) // retorna true (verdadeiro)

//posso complexar um pouco mais essas operações, acrescentando outros valores

console.log(num1 + 11 > num2) // 5 + 11 = 16 > 10 // true 


/*
Além de maior ou menor que, existe outras duas possibilidades, são elas:
>= : menor igual que...
<= : maior igual que...

Logo, isso entrega duas possibilidades de ser true, caso o valor seja tenha o mesmo peso de valor ou maior (<=),
ou caso ele seja menor (>=)
*/

let num3 = 5
let num4 = 5
// declaração de variaveis

console.log(num4 == num3) // true
console.log(!(num3 == num4)) // false
// Essa logística é muito semelhante a proposiçãpo, de racíocinio lógico da matemática 
// Mas o "!" pode ter outra possibílidade de uso, além dessa listada anteriormente.

console.log(num3 != num4) // false
/* Isso acontece porque ele afirma que as duas variaveis são de valores diferentes, mas
sabemos que essa afirmação, torna a proposição falsa, porque as duas variaveis tem o mesmo peso em valor
*/