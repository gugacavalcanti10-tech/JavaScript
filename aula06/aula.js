// 1. && — E
// Com booleanos, só dá true quando os dois lados são true.

const idade = 20;
const temIngresso = true;

console.log(idade >= 18 && temIngresso); // true
// A pessoa tem 18 anos ou mais E tem ingresso.

console.log(idade >= 18 && false); // false
// A condição da idade é verdadeira, mas o outro lado é falso.


// 2. || — OU
// Com booleanos, dá true quando pelo menos um lado é true.

const temCartao = false;
const temPix = true;

console.log(temCartao || temPix); // true
// Ter Pix já é suficiente para poder pagar.

console.log(false || false); // false
// Nenhuma das opções está disponível.


// 3. ! — NÃO
// Inverte o valor lógico. !true vira false, e !false vira true.

const estaChovendo = false;

console.log(!estaChovendo); // true
// Leia como “não está chovendo”.


// 4. Combinando os três operadores

const temConvite = false;
const estaNaLista = true;
const eventoCancelado = false;

const podeEntrar = (temConvite || estaNaLista) && !eventoCancelado;

console.log(podeEntrar); // true
// A pessoa está na lista e o evento não foi cancelado.


// 5. Curto-circuito
// O JavaScript pula o lado direito quando o esquerdo já decide o resultado.

false && console.log("Esta mensagem não aparece");
true || console.log("Esta mensagem também não aparece");