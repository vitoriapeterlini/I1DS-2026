/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

// Parte 01 - Início da resolução de Exercícios
//  function verificarSituacao(nota)
//    if (nota < 5 ) {
//      return "Reprovado";
//    } else if (nota < 7) {  
//      return "Recuperação";
//    } else {  
//      return "Aprovado"
//    }  
// }

// console.log(verificarsituacao(5));
// console.log(verificarsituacao(7));

// Parte 02- solução + parte extra
function situaçãoFinal(n1,n2,n3,n4) {
    let media = (n1+n2+n3+n4)/ 4;

    if(media < 5) {
        return "Reprovado";
    } else if (media < 7) {
        return "Recuperação";
    } else {    
        return "Aprovado";
    }    
}    
console.log(situaçãoFinal(7,8,6,5));
console.log(situaçãoFinal(7,7,7,7));


console.log("-----------------------------------------------------------")
console.log("                     Solução 03                            ")
console.log("-----------------------------------------------------------")

function final(n1,n2,n3,n4) {
    let media = (n1+n2+n3+n4)/ 4;
    let situação;

    if(media < 5) situação = "Reprovado";
    else if (media < 7) situação = "Recuperação";
    else situação = "Aprovado";

    return "Média: " + media + " - Situação: " + situação;
}

console.log(final(7, 8, 6, 5));