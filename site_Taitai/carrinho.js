// Adiciona um evento de clique ao ícone do carrinho
document.getElementById("cartIcon").addEventListener("click", function() {
    // Seleciona a área do carrinho
    var cartArea = document.getElementById("cartArea");

    // Verifica se a área do carrinho está visível
    if (cartArea.style.display === "none") {
        // Se estiver oculta, mostra a área do carrinho
        cartArea.style.display = "block";
    } else {
        // Se estiver visível, oculta a área do carrinho
        cartArea.style.display = "none";
    }
});

// Adiciona um evento de clique ao botão "Fechar"
document.getElementById("closeButton").addEventListener("click", function() {
    // Oculta a área do carrinho ao clicar no botão "Fechar"
    document.getElementById("cartArea").style.display = "none";
});

// Estrutura de dados para o carrinho
let cartItems = [];

// Função para carregar os itens do carrinho do armazenamento local
function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
        updateCartDisplay(); // Atualiza a exibição do carrinho com os itens carregados
    }
}

// Função para salvar os itens do carrinho no armazenamento local
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Função para adicionar item ao carrinho
function addToCart(productName, quantity, size) {
    // Verifica se o item já está no carrinho
    const existingItemIndex = cartItems.findIndex(item => item.productName === productName && item.size === size);
    
    if (existingItemIndex !== -1) {
        // Se o item já está no carrinho, apenas atualiza a quantidade
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        // Se o item não está no carrinho, adiciona como um novo item
        cartItems.push({ productName, quantity, size });
    }

    // Atualiza a exibição do carrinho e salva os itens no armazenamento local
    updateCartDisplay();
    saveCartToLocalStorage(); // Salva os itens sempre que forem atualizados
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartContent = document.getElementById("cartContent");
    // Limpa o conteúdo anterior do carrinho
    cartContent.innerHTML = "";

    // Adiciona os novos itens ao carrinho
    cartItems.forEach(item => {
        const newItem = document.createElement("div");
        newItem.textContent = `${item.productName} - T: ${item.size} - Qnt: ${item.quantity}`;
        cartContent.appendChild(newItem) ;
        cartContent.appendChild(document.createElement("br"));
    });
}

// Adiciona um evento de clique aos botões "Comprar"
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        const product = event.target.closest(".product");
        const productName = "Camisa Barcelona I 23/24 M";
        const quantity = parseInt(product.querySelector(".quantity input").value);
        const size = product.querySelector(".size select").value;
        addToCart(productName, quantity, size);
    });
});

// Adiciona um evento de clique aos botões "Comprar"
document.querySelectorAll(".buy-btn2").forEach(button => {
    button.addEventListener("click", function(event) {
        const product = event.target.closest(".product2");
        const productName = "Camisa Al Hilal I 23/24 M";
        const quantity = parseInt(product.querySelector(".quantity2 input").value);
        const size = product.querySelector(".size2 select").value;
        addToCart(productName, quantity, size);
    });
});

// Adiciona um evento de clique aos botões "Comprar"
document.querySelectorAll(".buy-btn3").forEach(button => {
    button.addEventListener("click", function(event) {
        const product = event.target.closest(".product3");
        const productName = "Camisa Inter Miami II 23/24 M" ;
        const quantity = parseInt(product.querySelector(".quantity3 input").value);
        const size = product.querySelector(".size3 select").value;
        addToCart(productName, quantity, size);
    });
});

// Adicione essa chamada para carregar os itens do carrinho quando a página é carregada
window.addEventListener('load', loadCartFromLocalStorage);

document.getElementById("logoutButton").addEventListener("click", function() {
    // Limpa o carrinho ao clicar no botão "Sair"
    cartItems = []; // Remove todos os itens do carrinho
    updateCartDisplay(); // Atualiza a exibição do carrinho
    saveCartToLocalStorage(); // Salva o carrinho vazio no armazenamento local
});
