document.getElementById("nome").value = "";
document.getElementById("quantidade").value = "";
document.getElementById("produto").value = "";
document.getElementById("valor").value = "";



function adicionarEncomenda() {
  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var quantidade = document.getElementById("quantidade").value;
  var produto = document.getElementById("produto").value;
  var valor = document.getElementById("valor").value;

  // Calcular o total
  var total = calculaTotal(quantidade, valor);
  var valor = parseFloat(valor);

  if (nome == "") {
    alert("POR FAVOR, PREENCHA O CAMPO 'NOME'!");
    return;
  } else if (quantidade <= 0 || isNaN(valor)) {
    alert("POR FAVOR, PREENCHA O CAMPO 'QUANTIDADE' CORRETAMENTE!");
    return;
  } else if (valor <= 0 || isNaN(valor)) {
    alert("POR FAVOR, PREENCHA O CAMPO 'VALOR' CORRETAMENTE!");
    return;
  }


  // Criar uma nova linha na tabela
  var tabela = document.getElementById("tabelaEncomendas");

  var novaLinha = tabela.insertRow();
  var colunaNome = novaLinha.insertCell(0);
  var colunaProduto = novaLinha.insertCell(1);
  var colunaQuantidade = novaLinha.insertCell(2);
  var colunaValor = novaLinha.insertCell(3);
  var colunaTotal = novaLinha.insertCell(4);

  // Adicionar os valores às células da nova linha


  colunaNome.textContent = nome;
  colunaProduto.textContent = produto;
  colunaQuantidade.textContent = quantidade;
  colunaValor.textContent = formataValor(valor);
  colunaTotal.textContent = formataValor(total);

  // Limpar os campos do formulário
  document.getElementById("nome").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("valor").value = "";

}


document.addEventListener("dblclick", function (event) {

  if (event.target.tagName === "TD") {
    var linha = event.target.parentNode;
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () { linha.remove(linha); }, 800);
  }
}
);


















