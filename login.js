document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o formulário de login
  var loginForm = document.getElementById("loginForm");

  // Adiciona um evento de "submit" ao formulário
  loginForm.addEventListener("submit", function(event) {
      // Previne o envio padrão do formulário
      event.preventDefault();

      // Obtém os valores do nome de usuário e senha do formulário
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Verifica se o nome de usuário e a senha correspondem aos dados de login simulados
      if (username === "lucas" && password === "lucas") {
          // Exibe uma mensagem de sucesso
          document.getElementById("error").innerText = "Login bem-sucedido!";

          // Oculta a seção de login
          document.getElementById("loginSection").style.display = "none";

          // Mostra a seção de conteúdo
          document.getElementById("contentSection").style.display = "block";

          // Define o nome de usuário na seção de conteúdo em maiúsculas
          document.getElementById("loggedInUsername").innerText = username.toUpperCase();
      } else {
          // Exibe uma mensagem de erro se os dados de login estiverem incorretos
          document.getElementById("error").innerText = "Nome de usuário ou senha incorretos. Tente novamente.";
      }
  });
});

