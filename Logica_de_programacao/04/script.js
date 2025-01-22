console.log("Executando! 1");
console.log("Executando! 2");
console.log("Executando! 3");
console.log("Executando! 4");
console.log("Executando! 5");

for (let i = 5; i > 0; i--) {
  console.log("executando..", i);
}

// While
let i = 1;
while (i < 10) {
  console.log(i);
  i++;
}

// For of
const frutas = ["Maçã", "Banana", "Uva"];

for (let fruta of frutas) {
  console.log(fruta);
}

frutas.forEach((e, i) => {
  console.log(e, i);
});

// Criar loop que conta de 1980 a 2025

// let anos_totais = 0;

// for (let i = 1980; i <= 2025; i++) {
//   console.log("Ano: ", i);
//   anos_totais++;
// }

// console.log(`De 1980 a 2025 são ${anos_totais} anos`);

// Criar lista que conta de 1980 a 2025
// let lista = [];

// for (let ano = 1980; ano <= 2025; ano++) {
//   lista.push(ano);
// }

// console.log(lista.length);

// Criar lista que conta 10 anos atrás até ano atual

// let lista_anos = [];
// let ano_atual = new Date().getFullYear();

// for (let ano = ano_atual - 10; ano <= ano_atual; ano++) {
//   lista_anos.push(ano);
// }

// console.log(lista_anos);

// Imprimir numeros pares até 50

// for (let i = 0; i <= 50; i++) {
//   i % 2 == 0 ? console.log(i) : null;
// }

// let valorTotal = 0;
// for (let i = 0; i <= 100; i++) {
//   valorTotal += i;
// }

// console.log(valorTotal);

// Remover números negativos de um array

let numbers = [10, -5, 20, -2, 0, 15, -7];
// let newArr = [];

// for (const a of numbers) {
//   if (a >= 0) {
//     newArr.push(a);
//   }
// }
// console.log(newArr);

// Usando o filter
const numerosPositivos = numbers.filter((e) => {
  return e >= 0;
});

console.log(numerosPositivos);
