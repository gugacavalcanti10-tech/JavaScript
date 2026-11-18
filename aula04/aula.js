"use strict";

// ===== OPERADORES ARITMÉTICOS =====

let a = 10;
let b = 3;

// Adição (+)
console.log(a + b); // 13

// Subtração (-)
console.log(a - b); // 7

// Multiplicação (*)
console.log(a * b); // 30

// Divisão (/)
console.log(a / b); // 3.3333...

// Resto da divisão (%)
console.log(a % b); // 1

// Exponenciação (**)
console.log(a ** b); // 1000 (10³)

// ===== INCREMENTO E DECREMENTO =====

let x = 5;

x++; // Incrementa 1 (x = 6)
x--; // Decrementa 1 (x = 5)

// Pré-incremento e pós-incremento
console.log(++x); // 6 (incrementa antes de retornar)
console.log(x++); // 6 (retorna antes de incrementar)
console.log(x);   // 7

// ===== OPERADORES DE ATRIBUIÇÃO ARITMÉTICA =====

let numero = 10;

numero += 5;  // numero = numero + 5  -> 15
numero -= 3;  // numero = numero - 3  -> 12
numero *= 2;  // numero = numero * 2  -> 24
numero /= 4;  // numero = numero / 4  -> 6
numero %= 4;  // numero = numero % 4  -> 2
numero **= 3; // numero = numero ** 3 -> 8

// ===== PRECEDÊNCIA DOS OPERADORES =====

console.log(10 + 5 * 2);   // 20 (multiplicação primeiro)
console.log((10 + 5) * 2); // 30 (parênteses primeiro)
console.log(2 ** 3 * 2);   // 16 (potência primeiro)

// ===== OPERADORES UNÁRIOS =====

let valor = 10;

console.log(-valor); // -10 (inverte o sinal)
console.log(+valor); // 10 (conversão numérica)

// ===== CUIDADO COM STRINGS =====

console.log(10 + "5"); // "105" (concatenação)
console.log(10 - "5"); // 5 (conversão numérica)
console.log(10 * "5"); // 50 (conversão numérica)