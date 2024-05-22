const form = document.getElementById("form-contatos");
const contatos = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("numero-contato");

  if (contatos.includes(inputNomeContato.value)) {
    alert(`O Contato: ${inputNomeContato.value} já existe`);
  } else if (
    inputNumeroContato.value.length < 11 ||
    inputNumeroContato.value.length > 14
  ) {
    alert(`O Número deve conter o DDD, o DDI é opcional`);
  } else {
    contatos.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
