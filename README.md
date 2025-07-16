# Portfólio Pessoal (Personal Portfolio)

![Status](https://img.shields.io/badge/status-Concluído%20(v1.0)-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/github/license/ojordaoo/portfolio?style=for-the-badge)

Uma Single Page Application (SPA) interativa e responsiva, construída com tecnologias web puras (Vanilla JS, HTML5, CSS3) para servir como um portfólio dinâmico. O projeto foi desenvolvido com foco em performance, manutenibilidade e uma experiência de usuário moderna.

---

## Tabela de Conteúdos
* [Principais Funcionalidades](#principais-funcionalidades-)
* [Tecnologias Utilizadas](#tecnologias-utilizadas-)
* [Padrões e Boas Práticas](#padrões-e-boas-práticas-aplicadas-)
* [Estrutura do Projeto](#estrutura-do-projeto-)
* [Como Executar Localmente](#como-executar-localmente-️)
* [Licença](#licença-)

---

## Principais Funcionalidades 📋

* **Navegação Inteligente:** Scroll suave entre as seções e menu de navegação que destaca a seção ativa em tempo real.
* **Componentes Interativos:**
    * **Modal de História:** Janela pop-up com uma linha do tempo animada, contando a trajetória profissional do autor.
    * **Cards de Projeto Expansíveis:** Componentes que se expandem ao clique para revelar detalhes técnicos, com o conteúdo sendo injetado dinamicamente via JavaScript.
    * **Página de Links:** Uma página secundária no estilo "link-in-bio" para centralizar todas as redes sociais e contatos.
* **Design Responsivo:** Interface totalmente adaptável para visualização em desktops, tablets e dispositivos móveis.
* **Microinterações:** Animações sutis em elementos como a logo, botões e cards para fornecer feedback visual ao usuário.

---

## Tecnologias Utilizadas 🛠️

| Tecnologia | Propósito |
| :--- | :--- |
| **HTML5** | Estruturação semântica do conteúdo para acessibilidade e SEO. |
| **CSS3** | Estilização completa, animações, e construção de layouts complexos e responsivos com Flexbox e Grid. |
| **JavaScript (ES6+)** | Manipulação do DOM, interatividade, gerenciamento de eventos e lógica dinâmica (Vanilla JS). |
| **Font Awesome** | Biblioteca de ícones vetoriais. |

---

## Padrões e Boas Práticas Aplicadas 📐

* **Código Modular em JS:** O script é organizado em funções com responsabilidades únicas (`initSmoothScroll`, `initProjectCards`, etc.), acionadas por um único evento (`DOMContentLoaded`).
* **Event Delegation:** Utilizado nos cards de projeto para otimizar a performance, adicionando um único "ouvinte" de eventos ao container pai em vez de um para cada card.
* **Intersection Observer API:** Usado para detectar a visibilidade das seções de forma eficiente, atualizando o menu de navegação sem sobrecarregar o navegador.
* **Conteúdo Data-Driven:** As informações dos projetos são armazenadas em um array de objetos JavaScript, separando os dados da apresentação e facilitando a manutenção e escalabilidade.
* **CSS com Variáveis:** A paleta de cores e outras propriedades de design são centralizadas na seção `:root` para garantir consistência e facilitar futuras alterações no tema.

---

## Estrutura do Projeto 📂

O projeto é organizado de forma modular para garantir a separação de responsabilidades e facilitar a manutenção.

```
/
├── assets/
│   ├── css/
│   │   ├── style.css         # Estilos da página principal
│   │   └── links.css         # Estilos da página de links
│   ├── js/
│   │   └── main.js           # Script principal com toda a lógica
│   └── images/
│       ├── foto-perfil.png   # Imagem de perfil
│       └── ...               # Outras imagens
├── index.html                # Página principal do portfólio
├── links.html                # Página de links sociais
├── README.md                 # Esta documentação
└── LICENSE                   # Licença MIT
```

---

## Como Executar Localmente ⚙️

Este projeto não requer um processo de build ou dependências complexas.

1.  Clone o repositório:
    ```sh
    git clone [https://github.com/oJordaoo/seu-repositorio.git](https://github.com/oJordaoo/seu-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```sh
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador.
    * **Recomendado:** Utilizar a extensão "Live Server" do VS Code para evitar possíveis problemas de CORS com arquivos locais.

---

## Licença 📄

Este projeto é distribuído sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.