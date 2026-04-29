//VARIAVEL  PARA ARMAZENAR O ELEMENTO <P> COM CONTADOR 
let contador= document.getElementById("contador");

const adicionar = () => { 
    //VARIAVEL PARA ARMAZENAR O VALOR ATUAL
    let valorAtual = parseInt(contador.innerHTML);
    //AUMENTA O VALOR ATUAL EM +1
    valorAtual++;
    //ATUALIZAR O VALOR DO ELEMENTO (P) COM ID=CONTADOR
    contador.innerHTML = valorAtual;
};

const diminuir = () =>{
    let valorAtual = parseInt(contador.innerHTML);
    valorAtual--;
    contador.innerHTML = valorAtual;
}

const zerar = () =>{
  let valorAtual = parseInt(contador.innerHTML = 0); 
  contador.innerHTML = valorAtual;
}

/*EXERCICIO 02*/
const mudarCor = () => {
     /*CAPTURAR A COR SELECIONADA PELO USUÁRIO*/   
    let cor= document.getElementById("colorPicker"). value;
      /*BUSCAR O ELEMENTO ALVO (QUADRADO*/
      let quadrado = document.getElementById("quadrado");
      //APLICAR A COR AO ELEMENTO-ALTERAR O CSS DO BACKGROUND-COLOR
     quadrado.style.backgroundColor = cor;
}

/*EXERCICIO 03*/
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

const somar = () => {
    let valor = parseFloat(num1.value) + parseFloat(num2.value);
    resultado.innerText = valor;
};


const subtrair = () => {
    let valor = parseFloat(num1.value) - parseFloat(num2.value);
    resultado.innerText = valor;
};


const multiplicar= () => {
    let valor = parseFloat(num1.value) * parseFloat(num2.value);
    resultado.innerText = valor;
};


const dividir = () => {
    let valor = parseFloat(num1.value) / parseFloat(num2.value);
    resultado.innerText = valor;
};