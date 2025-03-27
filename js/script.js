document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    const usuarioLogadoElement = document.getElementById('usuarioLogado');

    // Exibe o nome do usuário logado
    if (isLoggedIn && usuarioLogado) {
        usuarioLogadoElement.textContent = `Você está logado como: ${usuarioLogado}`;
    } else {
        usuarioLogadoElement.textContent = 'Você não está logado.';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.getAttribute('data-content');

            switch (content) {
                case 'produtos':
                    alert('Você clicou em Produtos. Aqui você encontra todas as nossas opções!');
                    break;
                case 'contato':
                    alert('Você clicou em Contato. Entre em contato conosco para mais informações.');
                    break;
                case 'sobre':
                    alert('Você clicou em Sobre. Conheça mais sobre a SheFit!');
                    break;
                default:
                    alert('Item não reconhecido.');
            }
        });
    });
});
let cartCount = 0; // Contador de itens no carrinho

document.querySelectorAll('.buy-button').forEach(button => {
button.addEventListener('click', () => {
cartCount++; // Aumenta o contador ao clicar no botão de comprar
document.getElementById('cart-count').textContent = cartCount; // Atualiza o contador na navbar
});
});
document.addEventListener('DOMContentLoaded', () => {
const filterButtons = document.querySelectorAll('.filter-button');
const products = document.querySelectorAll('.product');
const cartCount = document.getElementById('cart-count');
let count = 0; // Contador para o carrinho

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    
    products.forEach(product => {
        if (color === 'todos' || product.getAttribute('data-color') === color) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
});

// Configuração para rolar suavemente para a seção de produtos
document.querySelector('.button').addEventListener('click', function(e) {
e.preventDefault();
document.querySelector('#produtos').scrollIntoView({
    behavior: 'smooth'
});
});

// Smooth scroll para todos os links com hash #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

// Alterna a classe para mostrar ou esconder o menu
menuButton.addEventListener('click', () => {
nav.classList.toggle("show-menu");
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
} else {
    backToTopButton.style.display = 'none';
}
});

const animatedElements = document.querySelectorAll('.scroll-animation');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
});
});

animatedElements.forEach(element => {
observer.observe(element);
});

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("site-info-modal");
const closeButton = document.querySelector(".close-button");

// Adiciona um evento de clique ao item do menu
document.querySelectorAll('nav ul li').forEach(item => {
item.addEventListener('click', () => {
    modal.style.display = "flex"; // Mostra o modal
});
});

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
modal.style.display = "none";
});

// Fecha o modal se o usuário clicar fora da área de conteúdo do modal
window.addEventListener('click', (event) => {
if (event.target === modal) {
    modal.style.display = "none";
}
});

// Aumenta o contador do carrinho ao clicar no botão "Comprar"
document.querySelectorAll('.buy-button').forEach(button => {
button.addEventListener('click', () => {
    count++; // Incrementa o contador
    cartCount.textContent = count; // Atualiza o contador no carrinho
    
});
});
});
document.addEventListener('DOMContentLoaded', function() {
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', function() {
const searchTerm = searchInput.value.toLowerCase();

products.forEach(product => {
    const productName = product.querySelector('.product-name').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
        product.style.display = 'block';
    } else {
        product.style.display = 'none';
    }
});
});
});
// Script para interação com a barra de pesquisa
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase();
const products = document.querySelectorAll('.product');

products.forEach(product => {
const productName = product.querySelector('.product-name').textContent.toLowerCase();
if (productName.includes(searchTerm)) {
    product.style.display = 'block';
} else {
    product.style.display = 'none';
}
});
});

// Script para interação com a barra de pesquisa
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase();
const products = document.querySelectorAll('.product');

products.forEach(product => {
const productName = product.querySelector('.product-name').textContent.toLowerCase();
if (productName.includes(searchTerm)) {
    product.style.display = 'block';
} else {
    product.style.display = 'none';
}
});
});

// Script para filtro de cores de produtos
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
const color = button.getAttribute('data-color');
const products = document.querySelectorAll('.product');

products.forEach(product => {
    if (color === 'todos' || product.getAttribute('data-color') === color) {
        product.style.display = 'block';
    } else {
        product.style.display = 'none';
    }
});
});
});




