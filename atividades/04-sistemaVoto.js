/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) { 
    let frase;
        if(idade < 16) {
           frase = "Não pode Votar"
         }else if(idade >= 18 && idade <= 65) {
            frase = "Pode votar, e é obrigatório!"
        }else{
            frase = "Pode votar, mas é opcional!"
        }
    return frase; 
 }    
let idade = 25;
console.log("idade:", idade, "-", podeVotar(idade));

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

function situação (nota) {
    let frase;
        if(nota < 5) {
           frase = "Reprovado"
        }else if(nota >= 5 && nota <= 6.9) {
            frase = "Recuperação"
        }else if(nota >= 7) {
            frase = "Aprovado"
        }
    return frase;
 }
 let nota = 7;
 console.log("nota", nota, "-", situação(nota));