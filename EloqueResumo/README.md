# Capítulo 1 — Valores, tipos e operadores

Este resumo reúne conceitos introdutórios de JavaScript: operadores de comparação e negação, o operador ternário, valores vazios, conversão automática de tipos e curto-circuito de operadores lógicos.

## Comparação e negação

Operadores de comparação produzem um valor booleano: `true` (verdadeiro) ou `false` (falso). Eles podem comparar números e resultados de expressões aritméticas:

```js
const num1 = 5;
const num2 = 15;

console.log(num1 > num2);      // false: 5 não é maior que 15
console.log(num2 > num1);      // true: 15 é maior que 5
console.log(num1 + 11 > num2); // true: 16 é maior que 15
```

Além de `>` (maior que) e `<` (menor que), existem `>=` (maior ou igual a) e `<=` (menor ou igual a). A igualdade também torna essas duas últimas comparações verdadeiras:

```js
console.log(5 >= 5); // true
console.log(5 <= 5); // true
console.log(4 >= 5); // false
```

O operador `==` compara valores permitindo conversão automática de tipos; `!=` verifica se os valores são diferentes, também permitindo conversão. O operador lógico `!` nega o resultado de uma expressão booleana:

```js
const num3 = 5;
const num4 = 5;

console.log(num3 == num4);    // true
console.log(!(num3 == num4)); // false
console.log(num3 != num4);    // false
```

Para comparar sem conversão automática de tipos, use `===` para igualdade e `!==` para desigualdade quando apropriado.

## Operador ternário

O operador condicional ternário escolhe entre dois valores de acordo com uma condição. Ele pode substituir um `if...else` simples quando o objetivo é produzir um valor.

```js
condicao ? valorSeVerdadeiro : valorSeFalso;
```

A condição fica antes de `?`; o valor entre `?` e `:` é escolhido quando ela é verdadeira, e o valor depois de `:` é escolhido quando ela é falsa.

```js
console.log(true ? 1 : 2);  // 1
console.log(false ? 1 : 2); // 2
```

## Valores vazios: `undefined` e `null`

JavaScript tem dois valores especiais que representam ausência de valor, mas eles costumam ser usados em situações diferentes.

### `undefined` — valor não definido

Uma variável declarada sem valor inicial recebe `undefined`. É como criar uma caixa e não colocar nada dentro dela.

```js
let nome;

console.log(nome);        // undefined
console.log(typeof nome); // "undefined"
```

`undefined` também pode surgir em outras situações, como ao acessar uma propriedade inexistente.

### `null` — ausência intencional de valor

`null` costuma indicar que a ausência de um valor foi atribuída intencionalmente.

```js
let usuario = null;

console.log(usuario);        // null
console.log(typeof usuario); // "object"
```

O resultado `"object"` é uma particularidade histórica de `typeof`; `null` não é um objeto.

## Conversão automática de tipos

JavaScript pode converter valores automaticamente para realizar uma operação. O resultado depende do operador e dos tipos envolvidos:

```js
console.log(8 * null);    // 0: null é convertido em 0
console.log("5" - 1);     // 4: "5" é convertido em número
console.log("5" + 1);     // "51": + concatena quando há um texto
console.log("five" * 2);  // NaN: "five" não pode ser convertido em número
console.log(false == 0);  // true: == permite conversão de tipos
```

`NaN` significa *Not a Number* (“não é um número”) e representa um resultado numérico inválido. Para comparar valor e tipo sem a conversão automática de `==`, use `===` quando apropriado: `false === 0` resulta em `false`.

## Curto-circuito de operadores lógicos

O curto-circuito ocorre quando o resultado de uma expressão pode ser determinado sem avaliar o lado direito. Esses operadores retornam um dos próprios valores, que não precisa ser um booleano:

- `&&` retorna o primeiro valor se ele for considerado falso; caso contrário, avalia e retorna o segundo.
- `||` retorna o primeiro valor se ele for considerado verdadeiro; caso contrário, avalia e retorna o segundo.
- `??` avalia e retorna o segundo valor apenas se o primeiro for `null` ou `undefined`; caso contrário, retorna o primeiro.

```js
console.log(0 && "executado");       // 0
console.log("olá" && "executado");   // "executado"
console.log("olá" || "alternativa"); // "olá"
console.log(0 || "alternativa");      // "alternativa"
console.log(null ?? "alternativa");   // "alternativa"
console.log(0 ?? "alternativa");      // 0
```

Valores considerados falsos (*falsy*) incluem `false`, `0`, `""`, `null`, `undefined` e `NaN`; os demais são considerados verdadeiros (*truthy*). Por isso, `??` é útil quando `0` ou um texto vazio são valores válidos e não devem ser substituídos.
