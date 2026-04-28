// function olaMundo() {
//  alert("Olá Mundo!");
//}

/* Forma certa de utilizar o aviso */
const olaMundo = () => {
  alert("Jesus te ama!");
};

const mudarTexto = () => {

/*Criar uma variavel para armazebar o elemento do documento */

let elementoAlvo = document.getElementById("texto");

    elementoAlvo. innerHTML = "🔥 Novo texto com js";
    elementoAlvo.style.color= "red";
    elementoAlvo.style.backgroundColor = "yellow";
}


const enviarNome= () =>{

   let nomeDigitado= document.getElementById("nome").value;
   alert("ola" + nomeDigitado);

  /* let nomeDigitado = document.getElementsByName("nome").value;
   alert("ola"+ nomeDigitado); */
}


const somar = () => {
    event.preventDefault();

    /*Buscou os elementos por id*/
    let numero1= parseInt(document.getElementById("n1"). value);
    let numero2= parseInt(document.getElementById("n2"). value);
    /* let result = + numero 2*/ 

    /* Realizou a soma dos valores*/
    let result = parseInt(numero1) + parseInt(numero2);

    /*Devolveu o resultado para o formulario */
    document.getElementById("resultado"). innerHTML = result;

}