function adicionarEncomenda() {
  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var quantidade = document.getElementById("quantidade").value;
  var produto = document.getElementById("produto").value;
  var valor = document.getElementById("valor").value;
  
  // Calcular o total
  var total = calculaTotal(quantidade, valor);
  var valor = parseFloat(valor);
  
  
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
 


  
}
