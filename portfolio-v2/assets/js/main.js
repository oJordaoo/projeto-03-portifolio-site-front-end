// assets/js/main.js - VERSÃO COM CORREÇÃO FINAL DOS CARDS

// ===================================================================================
// BANCO DE DADOS DOS PROJETOS
// ===================================================================================
const meusProjetos = [
  {
    id: 'otimizador-frete',
    titulo: 'Otimizador de Frete',
    resumo: 'Algoritmo que calcula a rota mais eficiente para entregas, reduzindo custos e tempo.',
    descricao: 'Este projeto utiliza algoritmos de grafos para analisar uma matriz de distâncias e otimizar as rotas de uma frota de veículos. A solução, desenvolvida em Python, demonstrou uma redução de até 18% nos custos logísticos em simulações com dados reais.',
    tecnologias: ['Python', 'Pandas', 'Flask', 'Docker']
  },
  {
    id: 'painel-sentimento',
    titulo: 'Painel de Sentimento',
    resumo: 'Análise de sentimento de reviews de produtos em tempo real com visualização de dados.',
    descricao: 'Dashboard interativo que coleta reviews de produtos de uma API, processa o texto para identificar o sentimento (positivo, negativo, neutro) e exibe os resultados em gráficos dinâmicos. O back-end foi construído em Node.js e o front-end com React.',
    tecnologias: ['React', 'Chart.js', 'Node.js', 'Express', 'API REST']
  },
  {
    id: 'portfolio-pessoal',
    titulo: 'Portfólio Pessoal',
    resumo: 'O site que você está navegando, construído para ser rápido, responsivo e interativo.',
    descricao: 'Desenvolvido com foco em performance e design limpo, este portfólio utiliza HTML semântico, CSS moderno com animações otimizadas e JavaScript puro (Vanilla JS) para criar todas as interatividades, como modais e elementos dinâmicos, sem a necessidade de frameworks pesados.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'UI/UX Design']
  }
];

// ===================================================================================
// INICIALIZAÇÃO DE TODAS AS FUNCIONALIDADES
// ===================================================================================
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollObserver();
    initHistoriaModal();
    initProjectCards();
    initLogoInteraction();
});

// ===================================================================================
// DEFINIÇÃO DAS FUNÇÕES
// ===================================================================================

function initSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initScrollObserver() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('nav a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) { activeLink.classList.add('active'); }
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(section => { observer.observe(section); });
}

function initHistoriaModal() {
    const fotoPerfil = document.querySelector('.foto-perfil');
    const historiaModal = document.getElementById('historiaModal');
    const closeModalButton = document.querySelector('.modal .close-button');
    if (!fotoPerfil || !historiaModal || !closeModalButton) { return; }
    const openModal = () => {
        historiaModal.classList.add('is-visible');
        document.body.classList.add('no-scroll');
    };
    const closeModal = () => {
        historiaModal.classList.remove('is-visible');
        document.body.classList.remove('no-scroll');
    };
    fotoPerfil.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => { if (event.target === historiaModal) { closeModal(); } });
    window.addEventListener('keydown', (event) => { if (event.key === 'Escape' && historiaModal.classList.contains('is-visible')) { closeModal(); } });
}

// ===================================================================================
// CORREÇÃO FINAL: Lógica dos cards com setTimeout para garantir a animação
// ===================================================================================
function initProjectCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const clickedCard = this;
            const projectId = clickedCard.dataset.projectId;
            const isExpanded = clickedCard.classList.contains('expanded');

            if (!projectId) return;

            // Fecha todos os outros cards
            cards.forEach(otherCard => {
                if (otherCard !== clickedCard) {
                    otherCard.classList.remove('expanded');
                    const details = otherCard.querySelector('.project-details');
                    if (details) { details.remove(); }
                }
            });

            // Lida com o card que foi clicado
            if (isExpanded) {
                clickedCard.classList.remove('expanded');
                const details = clickedCard.querySelector('.project-details');
                if (details) { details.remove(); }
            } else {
                const projectData = meusProjetos.find(p => p.id === projectId);
                if (projectData) {
                    const detailsHTML = `
                        <div class="project-details">
                            <p class="project-description">${projectData.descricao}</p>
                            <div class="tech-stack">
                                <strong>Tecnologias:</strong>
                                <ul>
                                    ${projectData.tecnologias.map(tech => `<li>${tech}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                    clickedCard.insertAdjacentHTML('beforeend', detailsHTML);
                    
                    // A MÁGICA ACONTECE AQUI:
                    // Dá um tempo mínimo para o navegador renderizar o elemento antes de animá-lo.
                    setTimeout(() => {
                        clickedCard.classList.add('expanded');
                    }, 10); 
                }
            }
        });
    });
}

function initLogoInteraction() {
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            logoLink.classList.add('clicked');
            logoLink.addEventListener('animationend', () => {
                logoLink.classList.remove('clicked');
            }, { once: true });
        });
    }
}