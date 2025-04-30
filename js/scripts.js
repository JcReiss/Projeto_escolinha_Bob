// Smooth Scroll para links internos da Navbar
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula a posição do elemento alvo ajustando pela altura da navbar fixa
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Animação suave
            });

            // (Opcional) Fecha o menu hamburguer no mobile após clicar em um link
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false // Garante que só vai fechar
                });
                bsCollapse.hide();
            }

            // (Opcional) Atualiza a classe 'active' no link clicado (remove de outros)
             document.querySelectorAll('a.nav-link').forEach(link => link.classList.remove('active'));
             this.classList.add('active');

        }
    });
});

// (Opcional) Ativa a classe 'active' na navbar conforme rola a página
// Isso é um pouco mais complexo e pode exigir mais código com Intersection Observer API
// ou monitoramento do scroll position. Para começar, o clique já atualiza.


// Adicione aqui qualquer outro código JS que precisar no futuro
// Ex: Validação mais complexa de formulário, animações ao rolar, etc.

console.log("Script personalizado carregado!"); // Confirma que o arquivo JS está sendo lido