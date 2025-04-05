let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Atualiza a contagem de itens no carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Adiciona evento de clique aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));
        
       

        // Adiciona o produto ao carrinho
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} adicionado ao carrinho!`);

        // Atualiza a contagem de itens no carrinho
        updateCartCount();
    });
});
let total = 0;
let produtos = [
    { nome: "Produto 1", preco: 10, quantidade: 2 },
    { nome: "Produto 2", preco: 20, quantidade: 1 }
];

produtos.forEach(produto => {
    total += produto.preco * produto.quantidade; // Calcula o total
});

// Exibe o total
document.getElementById('total-price').textContent = total;

document.getElementById('somar').addEventListener('click', function() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let total = valor1 + valor2; // Calcula o total
    document.getElementById('total-price').textContent = total; // Exibe o total
});

// Atualiza a contagem de itens no carrinho ao carregar a página
updateCartCount();

// Lida com a finalização do pedido
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Armazena os dados do cliente e do carrinho no localStorage
    const orderDetails = {
        name: name,
        address: address,
        payment: payment,
        cart: cart,
        total: totalPriceElement.textContent // Armazena o total
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Limpa o carrinho após a finalização do pedido
    localStorage.removeItem('cart');

    // Redireciona para a página de confirmação
    window.location.href = 'order-confirmation.html'; 
});

