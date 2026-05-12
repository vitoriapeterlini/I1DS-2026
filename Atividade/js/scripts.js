let userCount = 0;

const cadastrar = (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let lista = document.getElementById("lista");

  userCount++;
  let id = userCount;

  let novoItem = document.createElement("li");

  novoItem.innerHTML =
    id +
    " - " +
    nome +
    " - " +
    email +
    ' <button onclick="editar(this)">Editar</button>' +
    ' <button onclick="deletar(this)">Deletar</button>';

  lista.appendChild(novoItem);

  atualizarContador();

  // limpar campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};
//-----------------------------------------------------------------------------------------------------
//Array q vai guardar todos os produtos - totalGeral = var q guarda a soma
let produtos = [];
let totalGeral = 0;

//Ela será executada quando clicar no botão "Adicionar"
const adicionarProduto = () => {
  //procura um elemento HTML com id "produto"
  //pega o valor digitado (value)
  let nome = document.getElementById("produto").value;

  //Converte texto para número inteiro.
  let qtd = parseInt(document.getElementById("quantidade").value);

  //Converte texto para número decimal. Exemplo: 10.50 vira 10.5
  let valor = parseFloat(document.getElementById("valor").value);

  //Aqui o código verifica se algum campo está vazio.
  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    //Interrompe a função.
    return;
  }

  // Calcula: qtd * valor

  let total = qtd * valor;

  // SOMAR TOTAL GERAL
  totalGeral += total;

  // ADICIONAR NO FINAL DO ARRAY
  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });

  //Chama a função que mostra a tabela na tela.
  atualizarTabela();

  // LIMPAR CAMPOS
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

//reconstruir tabela
const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");

  //limpando tabela: Remove todo conteúdo antigo.
  tbody.innerHTML = "";

  //Percorre todos os elementos do array.
  produtos.forEach((item) => {
    //Adicionando linhas HTML
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>R$ ${item.valor.toFixed(2)}</td>
        <td>R$ ${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};

const finalizarCompra = () => {
  document.getElementById("total").innerText = totalGeral.toFixed(2);
};
// APLICAR DESCONTO

const aplicarDesconto = () => {
  // Captura o desconto em reais
  let descontoReais =
    parseFloat(document.getElementById("descontoValor").value) || 0;

  // Captura o desconto em porcentagem
  let descontoPorcentagem =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;

  let valorFinal = totalGeral;

  // DESCONTO EM PORCENTAGEM

  // Verifica se foi digitado algum %
  if (descontoPorcentagem > 0) {
    // Calcula o valor do desconto
    let valorDesconto = totalGeral * (descontoPorcentagem / 100);

    // Subtrai do valor final
    valorFinal -= valorDesconto;
  }

  // DESCONTO EM REAIS

  // Verifica se foi digitado desconto em reais
  if (descontoReais > 0) {
    // Subtrai do valor final
    valorFinal -= descontoReais;
  }

  // EVITAR VALOR NEGATIVO

  // Se o valor final ficar menor que 0
  if (valorFinal < 0) {
    // Define como 0
    valorFinal = 0;
  }

  // MOSTRAR VALOR FINAL

  // Mostra o valor líquido na tela
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};
