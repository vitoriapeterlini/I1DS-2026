/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

// Criando variaveis do tipo Array (Vetor)

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

//Imprimindo os dados em forma de linha
console.log(frutas);
//Imprimindo os dados em forma de tabelas
console.table(frutas);

//push -> Adiciona um elemento ao final da fila
frutas.push("Tangerina");
console.table(frutas);

//unshift -> Adiciona um elemento no inicio da fila
frutas.unshift("Goiaba");
console.table(frutas);

//Imprimir elemento a partir do indice
console.log(frutas[5]);

//Excluir um elemento com base no seu nome
//1º Localizar o indice do elemento a partir de seu nome
//2º Excluir o registro com base no elemento retornado
procurado = "Uva";
indice = frutas.indexOf(procurado);
console.log("A", procurado, "está no indice", indice);
frutas.splice(indice, 1);
console.table(frutas);

// slice -> Cria uma cópia copia do vetor
let listaParcial = frutas.slice(); // Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
listaParcial =frutas.slice(2, 5);
console.table(listaParcial);
