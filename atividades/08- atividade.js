/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);

console.table(matriz);
for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);

console.log(
  "----------------------------------------------------------------------",
);

let matris = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2]
];

// Valor que vamos multiplicar
let x = 2;

// Mostrar matriz original
console.log("Matriz original:");
for (let i = 0; i < 3; i++) {
  console.log(matris[i]);
}

// Multiplicar os valores
for (let linha = 0; linha < 3; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    matris[linha][coluna] = matris[linha][coluna] * x;
  }
}

// Mostrar matriz depois
console.log("Matriz depois da multiplicação:");
for (let linha = 0; linha < 3; linha++) {
  console.log(matris[linha]);
}
console.log("--------------------------------------------------");