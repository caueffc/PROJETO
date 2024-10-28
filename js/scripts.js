document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const products = document.querySelectorAll('.product');

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
});
  // Variável para contar os itens no carrinho
  let cartCount = 0;

  // Seleciona o botão "Comprar"
  const buyButton = document.querySelector('.buy-button');

  // Seleciona o contador do carrinho
  const cartCounter = document.getElementById('cart-count');

  // Adiciona evento de clique ao botão "Comprar"
  buyButton.addEventListener('click', function() {
    // Aumenta o número do carrinho
    cartCount++;
    
    // Atualiza o número exibido no ícone do carrinho
    cartCounter.textContent = cartCount;
  });
