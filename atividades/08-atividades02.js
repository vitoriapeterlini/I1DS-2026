var nome = "José"
var idade = 17;
var cidade = "Jahu"
console.log("Meu nome é" , nome,", tenho", idade, "anos e moro em", cidade);

console.log("----------------------------------------------");

let num1 = 9;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log("O resultado da Soma é", soma);
console.log("O resultado da subtração é", subtracao);
console.log("O resultado da multiplicação é", multiplicacao);
console.log("O resultado da Divisão é", divisao);
console.log("O resultado do Resto da Divisão é", restoDivisao);

console.log("----------------------------------------------");

function calcularArea(largura, altura) {
  return largura * altura;
}

let largura = 15
let altura = 7

let area = calcularArea(largura, altura);
console.log("A Aréa de um retangulo é", area);

console.log("----------------------------------------------");

function calcularVolume(Comprimento, largura, altura) {
  return Comprimento * largura * altura;
}
let Comprimento = 6;
let Largura = 5;
let Altura = 4;

let volume = calcularVolume(Comprimento, Largura, Altura);
console.log("Volume do paralelepípedo:", volume);

