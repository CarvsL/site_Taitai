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
            // Armazena o estado de login no localStorage
            localStorage.setItem("loggedIn", username);

  
           
  
            // Oculta a seção de login
            document.getElementById("loginSection").style.display = "none";
  
            // Mostra a seção de conteúdo
            document.getElementById("contentSection").style.display = "block";
  
            // Define o nome de usuário na seção de conteúdo em maiúsculas
            document.getElementById("loggedInUsername").innerText = username.toUpperCase();
        } else {
            // Exibe uma mensagem de erro se os dados de login estiverem incorretos
            alert("Login Incorreto !!!");
        }

        document.getElementById("logoutButton").addEventListener("click", function() {
            // Coloque a ação que deseja realizar aqui
            // Por exemplo, redirecionar para outra página
            localStorage.removeItem("loggedIn");
            document.getElementById("contentSection").style.display = "none";
            document.getElementById("loginSection").style.display = "block";
        });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        // Se o usuário não estiver logado, exibe um alerta com as credenciais padrão
        alert("LOGIN PADRÃO: Usuário - Lucas | Senha - Lucas");
    } else {
        // Se o usuário estiver logado, oculta o formulário de login e mostra o conteúdo
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("contentSection").style.display = "block";

        // Define o nome de usuário na seção de conteúdo em maiúsculas
        document.getElementById("loggedInUsername").innerText = loggedIn.toUpperCase();

        // Adiciona um evento de clique ao botão de "Sair"
        document.getElementById("logoutButton").addEventListener("click", function() {
            // Coloque a ação que deseja realizar aqui
            // Por exemplo, redirecionar para outra página
            localStorage.removeItem("loggedIn");
            document.getElementById("contentSection").style.display = "none";
            document.getElementById("loginSection").style.display = "block";
        });
    }
});


  
        
  
  