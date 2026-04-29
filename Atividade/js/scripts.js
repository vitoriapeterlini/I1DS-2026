

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
    id + " - " + nome + " - " + email +
    ' <button onclick="editar(this)">Editar</button>' +
    ' <button onclick="deletar(this)">Deletar</button>';

  lista.appendChild(novoItem);

  atualizarContador();

  // limpar campos 
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

};
