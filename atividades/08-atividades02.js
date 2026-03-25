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

console.log("----------------------------------------------");

let valor = 100;
let desconto = 10 / 100;

console.log(
  "O valor do produto com o desconto foi:",
  valor - valor * desconto,
  "Reias",
);

console.log("--------------------------------------------------");


function converterCelsiusParaFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

let temperaturaC = 25;
let temperaturaF = converterCelsiusParaFahrenheit(temperaturaC);

console.log(`${temperaturaC}°C é igual a ${temperaturaF}°F`);

console.log("--------------------------------------------------");


let peso = 67;
let ALtura = 167;

console.log("O IMC será", peso / (ALtura * ALtura));

console.log("--------------------------------------------------");


function final(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  let situacao;

  if (media < 5) situacao = "Recuperação";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado";

  return "Média: " + media + " - situação: " + situacao;
}
console.log(final(7, 8, 6));

console.log("--------------------------------------------");


let a = 2;
let b = 3;
let c = -5;

let delta = Math.pow(b, 2) - 4 * a * c;

console.log("O valor de Delta é: " + delta);

 console.log("--------------------------------------------")

 let horas = 1