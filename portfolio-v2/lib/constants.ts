// --- TIPOS ---
import { ServerCog, Database, Code, Bot, Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  slug: string;
  short: string;
  overview: string;
  description: string;
  href: string;
  challenge: string;
  solution: string;
  learnings: string[];
  techStack: string[];
  image: string;
  color: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

export interface Technology {
  name: string;
  logo: string;
}

// --- CONSTANTES EXPORTADAS ---

export const NAV_LINKS: NavLink[] = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export const PROJECTS: Project[] = [
    {
    title: "Sentiment Analyzer API",
    slug: "sentiment-analyzer-api",
    short: "Python • IA • Análise de Dados",
    overview: "Uma API de back-end que utiliza Processamento de Linguagem Natural para analisar o sentimento de textos.",
    description: "Desenvolvimento de um serviço robusto em Python e Flask para análise de sentimento. Responsável pela criação da API RESTful, integração com a biblioteca NLTK para análise de texto e pela estruturação de uma resposta JSON clara e útil.",
    href: "/projetos/sentiment-analyzer-api",
    challenge: "Empresas de e-commerce recebem milhares de reviews, tornando inviável a análise manual para entender a percepção do cliente sobre um produto. O desafio era criar um sistema automatizado para processar esses textos e extrair insights valiosos em tempo real.",
    solution: "Desenvolvi uma API RESTful com Python e Flask. O serviço recebe um texto, o pré-processa (removendo ruídos e normalizando) e utiliza a biblioteca NLTK com um classificador pré-treinado para determinar o sentimento (positivo, negativo, neutro). A resposta é retornada em um JSON estruturado, pronto para ser consumido por qualquer front-end.",
    learnings: [
      "Implementação de pipelines de pré-processamento de texto para NLP.",
      "Criação e deployment de uma API Python leve e performática com Flask.",
      "Compreensão das nuances e limitações de modelos de análise de sentimento."
    ],
    techStack: ["Python", "Flask", "NLTK", "Docker"],
    image: "/images/projeto-ia.jpg",
    color: "#87CEEB",
  },
  {
    title: "Inventory Control API",
    slug: "inventory-control-api",
    short: "Java • Spring Boot • PostgreSQL",
    overview: "Uma API RESTful robusta para gerenciamento de estoque, focada em segurança, transações e integridade dos dados.",
    description: "Criação de um sistema de controle de estoque utilizando Java e Spring Boot...",
    href: "/projetos/inventory-control-api",
    challenge: "Pequenos negócios precisam de um controle de estoque preciso para evitar perdas financeiras. O desafio era criar um back-end que garantisse a consistência e a atomicidade das transações de estoque.",
    solution: "Utilizando Java e Spring Boot, construí uma API segura com autenticação JWT. A arquitetura foi focada em transações ACID com um banco de dados PostgreSQL, garantindo que operações de entrada e saída de estoque fossem atômicas. A modelagem de dados foi cuidadosamente planejada para suportar futuras funcionalidades.",
    learnings: [
      "Modelagem de dados relacional complexa com JPA/Hibernate.",
      "Implementação de segurança baseada em tokens com Spring Security.",
      "A importância de transações de banco de dados para a lógica de negócio."
    ],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "Maven"],
    image: "/images/projeto-estoque.jpg",
    color: "#90EE90",
  },
  {
    title: "Real-time Log Processor",
    slug: "real-time-log-processor",
    short: "Scala • Akka • Processamento de Dados",
    overview: "Um serviço de alta performance para processar fluxos contínuos de logs de aplicações em tempo real.",
    description: "Implementação de um sistema de processamento de dados com Scala e Akka Streams...",
    href: "/projetos/real-time-log-processor",
    challenge: "Aplicações modernas geram um volume massivo de logs. Analisar esses dados em tempo real é um grande desafio de engenharia de dados.",
    solution: "Construí um serviço com Scala e Akka Streams que simula o consumo de um fluxo de logs...",
    learnings: [
      "Programação reativa e processamento de streams com Akka.",
      "Conceitos de concorrência e paralelismo em Scala.",
      "Design de sistemas para processamento de dados em tempo real."
    ],
    techStack: ["Scala", "Akka Streams", "SBT", "Docker"],
    image: "/images/projeto-logs.jpg",
    color: "#FFD700",
  },
  {
    title: "Dev Insights Dashboard",
    slug: "dev-insights-dashboard",
    short: "Next.js • TypeScript • Integração",
    overview: "O painel de controle que unifica e demonstra o poder das outras três APIs, provando a capacidade full-stack.",
    description: "Desenvolvimento de uma interface rica e interativa com Next.js...",
    href: "/projetos/dev-insights-dashboard",
    challenge: "Provar a funcionalidade de múltiplas APIs de back-end de forma isolada é ineficiente...",
    solution: "Desenvolvi um dashboard completo com Next.js e TypeScript. A aplicação se conecta às APIs...",
    learnings: [
      "Consumo de múltiplas APIs heterogêneas em um único front-end.",
      "Gerenciamento de estado complexo em aplicações React.",
      "Criação de visualizações de dados interativas com bibliotecas de gráficos."
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projeto-dashboard.jpg",
    color: "#C80000",
  },
  {
    title: "Em Desenvolvimento...",
    slug: "novo-projeto",
    short: "Novas tecnologias. Novo desafio.",
    overview: "Estou sempre explorando novas tecnologias e arquiteturas. Um novo projeto está sendo idealizado para resolver um problema complexo com uma abordagem inovadora.",
    description: "Detalhes sobre este novo projeto serão revelados em breve.",
    href: "#",
    challenge: "",
    solution: "",
    learnings: [],
    techStack: ["Em breve"],
    image: "/images/projeto-placeholder.jpg",
    color: "#888888",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Da Linha de Montagem à Linha de Código: Uma Tese sobre Convergência entre Engenharia Industrial e Software",
    slug: "da-fabrica-ao-codigo",
    excerpt: "Como princípios da indústria — como Poka-Yoke, Tolerância a Falhas e Otimização de Fluxo — moldam a engenharia de software moderna.",
    tags: ["Engenharia", "Arquitetura de Sistemas", "Qualidade"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>Quando iniciei minha carreira no ambiente fabril, operando uma coladeira de bordos industrial, acreditava estar a anos-luz de distância do universo do software. Hoje, compreendo que minha formação como desenvolvedor não começou com linhas de código, mas com peças de MDF desalinhadas e máquinas que falhavam silenciosamente. Este artigo explora como a engenharia industrial e a engenharia de software compartilham fundamentos filosóficos e operacionais. A convergência não é metafórica — ela é estrutural.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. A Máquina e o Sistema: Calibração como Prevenção de Débito Técnico</h2>
      <p>Uma fábrica que opera com máquinas não calibradas sofre perdas sistemáticas. Segundo dados da Bosch Manufacturing Insights (2020), desvios de 0,2mm em fresas industriais geram desperdícios de até 8% do material bruto por lote. O paralelo em software é o débito técnico silencioso — más decisões arquiteturais, algoritmos ineficientes ou convenções inconsistentes que funcionam “por ora”, mas geram entropia exponencial no sistema.</p>
      <p>Assim como a manutenção preditiva evita paradas não planejadas, testes automatizados e refatorações periódicas mantêm o sistema saudável. Empresas que adotam práticas contínuas de refatoração reduzem em 40% os bugs em produção (JetBrains Developer Ecosystem Report, 2023). A fábrica me ensinou que qualidade não é uma etapa; é um fluxo constante de verificação.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Interface Operador-Máquina e API Design: O Poka-Yoke Digital</h2>
      <p>Poka-Yoke (à prova de erros) é um princípio de design industrial que visa prevenir a inserção de parâmetros inválidos. Uma peça que só encaixa da forma correta exemplifica isso. No software, o equivalente é uma API bem projetada, que valida entradas, tem contratos claros, mensagens de erro precisas e é difícil de ser usada incorretamente.</p>
      <p>Em 2018, minha experiência com uma interface industrial pouco intuitiva levou à produção de 84 peças defeituosas em menos de 3 minutos. Em software, esse tipo de falha custa em escala. Interfaces mal pensadas causam mais de 70% dos bugs reportados em sistemas distribuídos (Google SRE Handbook, 2022).</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. Automação, Qualidade e a Ilusão do Custo Invisível</h2>
      <p>Na fábrica, cada erro custa MDF, tempo, energia e reputação. Em software, o bug em produção custa horas de debug, rollback, clientes insatisfeitos e burnout da equipe. A diferença é que no mundo físico o custo é visível; no digital, ele se esconde em métricas de churn, latency e retrabalho.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>Engenharia é engenharia — seja em aço ou em código. Os princípios são eternos: controle de qualidade, redução de ruído, melhoria contínua, sistemas centrados no usuário e feedback rápido. Aprendi mais sobre software calibrando serras do que em frameworks. Porque no fim, toda tecnologia é um sistema, e todo sistema é uma sequência de decisões com impacto acumulativo.</p>
    `
  },
  {
    title: "A Saturação do Mercado Júnior: Uma Análise de Estratificação Competitiva no Setor de Software",
    slug: "o-paradoxo-do-primeiro-emprego",
    excerpt: "Nem todo mundo que aplica para vagas júnior compete no mesmo nível. A saturação existe — mas não onde a maioria pensa.",
    tags: ["Carreira", "Estratégia", "Mercado"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>A sensação de saturação no mercado de tecnologia para iniciantes é generalizada. Bootcamps crescem, cursos se multiplicam, e milhares de pessoas concluem trilhas de programação todos os meses. Mas por que poucos conseguem boas vagas? Este artigo explora uma hipótese mais refinada: a de que o mercado é estratificado — não pela tecnologia dominada, mas pela mentalidade de entrega de valor.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. A Pirâmide 90-9-1 do Primeiro Emprego</h2>
      <p>Inspirada no modelo de Nielsen sobre engajamento digital, podemos pensar o mercado de entrada em três grandes blocos:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>90%:</strong> O grupo que replica projetos-tutorial, onde o foco é apenas “fazer funcionar”. O diferencial é fraco e a curva de competição é quase horizontal.</li>
        <li><strong>9%:</strong> Aqueles que já constroem sistemas completos, entendem stack, deploy, integração com APIs. Mas muitas vezes falham em comunicar o “porquê”.</li>
        <li><strong>1%:</strong> O grupo que cria soluções para problemas reais — com storytelling, impacto medido e um senso de produto. São esses que disputam as melhores vagas, mesmo sem experiência formal.</li>
      </ul>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Diferenciação por Narrativa de Valor</h2>
      <p>Empresas contratam para resolver problemas, não para rodar código. Desenvolvedores que estruturam seus projetos como estudos de caso — com contexto, problema, solução, métricas — transformam seu GitHub em um pitch de negócios.</p>
      <p>Segundo o LinkedIn Emerging Jobs Report (2024), candidatos que apresentam portfólios com impacto mensurável têm 5x mais chances de receber convites para entrevistas, mesmo com menos tempo de formação.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. Mérito Real vs. Sinalização Fraca</h2>
      <p>Certificados, badges e selos são sinais fracos de competência. Portfólios bem escritos, artigos técnicos e projetos open-source são sinais fortes. A competição real não está nas vagas — está no posicionamento. Um mesmo projeto, mal descrito, vira um item genérico. Bem descrito, vira autoridade.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>Sim, o mercado está saturado — mas apenas na base. Quanto mais próximo do topo da pirâmide você estiver, mais a competição deixa de ser por volume e passa a ser por clareza de raciocínio. O diferencial não é saber programar — é saber demonstrar valor técnico e estratégico com clareza e autenticidade.</p>
    `
  },
  {
    title: "IA como Alavanca Cognitiva: A Nova Abstração do Século XXI",
    slug: "ia-e-o-futuro-do-desenvolvimento",
    excerpt: "IA não substitui programadores — ela promove os mais capazes. O futuro pertence a quem entende arquitetura, contexto e intenção.",
    tags: ["Inteligência Artificial", "Futuro", "Engenharia de Software"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>O surgimento da IA generativa trouxe a pergunta: o programador será substituído? A resposta é contraintuitiva. A IA não elimina o engenheiro de software — ela o força a subir de nível. Este artigo discute a IA como a nova abstração — tão transformadora quanto o advento das linguagens de alto nível. A diferença é que agora não abstraímos só a máquina, mas a própria intenção humana.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. A História das Abstrações</h2>
      <p>De Assembly a C, de C a JavaScript, de jQuery a React — toda evolução na engenharia de software é uma fuga do baixo nível. A IA generativa é o novo salto: ela permite declarar intenções ("crie um componente que faça X") e recebe código funcional. Isso desloca o papel do engenheiro para o domínio da modelagem e validação.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Prompt Engineering e a Nova Alfabetização Técnica</h2>
      <p>Escrever prompts não é dar ordens; é modelar contextos. Saber decompor problemas, isolar variáveis, prover exemplos, controlar estilo e impor restrições — isso define quem usa IA como alavanca, e quem vira dependente dela. A nova alfabetização técnica envolve raciocínio abstrato, domínio de linguagem e clareza contextual.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. Arquitetura, Orquestração e Validação</h2>
      <p>IA não entende infraestrutura. Ela não sabe versionar, lidar com dados sensíveis ou projetar arquitetura resiliente. Esse papel continua 100% humano. A validação de código gerado também exige revisão semântica e estratégica: performance, segurança, escalabilidade. O novo engenheiro é mais arquiteto e menos executor.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>Quem sabe modelar problemas, estruturar soluções e validar hipóteses se torna exponencial com IA. O resto será substituído — não pela IA, mas por colegas mais capazes que a utilizam como ferramenta de escala. O futuro pertence aos que pensam sistemicamente, comunicam com clareza e têm obsessão por entendimento profundo.</p>
    `
  },
  {
    title: "Por que Arquitetura Vale Mais que Sintaxe: Pensando como Engenheiro, Não como Codificador",
    slug: "arquitetura-elevada",
    excerpt: "A diferença entre um desenvolvedor medíocre e um excelente está menos no código e mais na forma de pensar sistemas.",
    tags: ["Arquitetura", "Engenharia de Software", "Reflexão"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>A maioria dos desenvolvedores passa anos aprendendo sintaxe, frameworks e atalhos. Poucos, porém, desenvolvem pensamento arquitetural. Este artigo defende que a verdadeira senioridade começa quando se abandona o vício da linha de código e se passa a modelar sistemas — com foco em acoplamento, coesão, escalabilidade, separação de responsabilidades e resiliência.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. Codificar é Resolver; Arquitetar é Evitar o Problema</h2>
      <p>Codificadores apagam incêndios. Arquitetos evitam que eles existam. O design de um sistema define até onde ele aguenta crescer sem colapsar. Em startups que escalam rápido, 90% dos reworks derivam de más decisões arquitetônicas nos primeiros 6 meses (Harvard Business Review Tech Edition, 2023).</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Acoplamento Invisível e a Ilusão do Código Limpo</h2>
      <p>É possível ter um código “bonito” que seja arquitetonicamente insustentável. O acoplamento oculto — via dependências implícitas, funções que fazem mais do que deveriam ou estados globais mascarados — é o maior vilão silencioso. Um sistema modular mal desenhado dobra seu tempo de desenvolvimento a cada 12 meses (McKinsey Software Delivery Report, 2022).</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. A Mudança Mental: De Executor para Tomador de Decisão Técnica</h2>
      <p>Programar é operar. Arquitetar é decidir. E toda decisão tem trade-offs: performance x manutenibilidade, simplicidade x extensibilidade. Um verdadeiro engenheiro lida com ambiguidade técnica e projeta sob incerteza. É a habilidade de fazer escolhas que moldam o amanhã, mesmo sem todos os dados do hoje.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>Sintaxe é commodity. Design é raro. Frameworks mudam; princípios não. Quem pensa em termos de fluxo de dados, responsabilidade de componentes, latência sistêmica e degradação controlada, constrói software para durar. O futuro do desenvolvimento está em quem projeta — não em quem apenas executa.</p>
    `
  },
  {
    title: "O GitHub Não Mente: Como Projetos Pessoais Revelam o Pensamento de um Engenheiro",
    slug: "github-nao-mente",
    excerpt: "O que seu repositório diz sobre você? Um bom projeto pessoal não é sobre funcionalidade — é sobre como você pensa.",
    tags: ["Carreira", "Portfólio", "Reputação Técnica"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>Recrutadores sérios não leem apenas README.md — eles leem estrutura, organização, mensagens de commit, padrões de branch, testes e design de código. Seu GitHub é mais que portfólio: é um espelho da sua maturidade técnica. Este artigo detalha como projetar repositórios que comuniquem senioridade, mesmo sem anos de experiência profissional.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. Estrutura é Mensagem</h2>
      <p>Pastas bem organizadas, modularização clara, separação entre domínio e apresentação, config e lógica — tudo isso comunica intencionalidade. Repositórios bagunçados sinalizam pressa, desatenção e ausência de método. Arquitetura, mesmo em projetos simples, é uma forma de narrativa silenciosa.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Commits que Contam uma História</h2>
      <p>Mensagens como “fix bug”, “final”, “ajustes” ou “teste 123” revelam ausência de processo. Bons commits seguem padrões (como Conventional Commits) e mostram granularidade cognitiva: o quanto o desenvolvedor consegue decompor e explicar cada decisão técnica. Em times de alto desempenho, mais de 85% das mensagens de commit seguem padrões formais (GitLab Engineering Survey, 2023).</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. README Não é Decoração — É Design de Experiência</h2>
      <p>README bem escrito mostra clareza de produto: problema, solução, stack, instruções de uso, escopo e limitações. Quando um repositório trata o README como onboarding técnico, ele se torna uma extensão do raciocínio do criador. É UX para desenvolvedores.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>O GitHub não é vitrine — é raio-X. Ele revela maturidade, método, clareza e estilo de raciocínio. Projetos pessoais mal organizados derrubam a percepção de competência. Projetos bem estruturados colocam um júnior no radar de empresas de ponta. GitHub bom não é o que tem estrela — é o que transmite visão.</p>
    `
  },
  {
    title: "Pensamento Sistêmico para Desenvolvedores: Enxergando Além do Código",
    slug: "pensamento-sistemico",
    excerpt: "Entender software como um organismo vivo é o que separa técnicos comuns de engenheiros de elite.",
    tags: ["Engenharia", "Raciocínio", "Estratégia"],
    content: `
      <p><strong>Introdução:</strong></p>
      <p>A maioria dos bugs em sistemas não vem de erros no código, mas de falhas no pensamento sistêmico. Este artigo apresenta como modelar aplicações como ecossistemas: com entradas, saídas, retroalimentações, gargalos, efeitos colaterais e comportamento emergente. Pensar sistemicamente é pensar como um arquiteto do invisível.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">1. De Componente para Fluxo: O Foco no Que Acontece Entre as Coisas</h2>
      <p>Enquanto o programador iniciante foca nos componentes, o pensador sistêmico observa os fluxos: de dados, eventos, estados e intenções. O problema raramente está “em um lugar”. Ele emerge da interação entre partes. Em sistemas distribuídos, 68% das falhas são causadas por problemas de comunicação entre serviços, não por bugs internos (Google SRE, 2022).</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">2. Loops de Feedback e Comportamento Não Linear</h2>
      <p>Todo sistema tem loops: positivos (amplificadores) e negativos (estabilizadores). Ignorar isso é projetar software que não se regula. Exemplo: um sistema que envia e-mails de recuperação de senha infinitamente, ou que faz polling excessivo por falta de debounce. Pensar em feedback é projetar software com comportamento previsível sob pressão.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">3. Entropia, Degradação e Deuda Técnica como Fenômenos Naturais</h2>
      <p>Todo sistema tende ao caos — isso é termodinâmica, não opinião. A dívida técnica é entropia acumulada. Se não há governança, versionamento, limites de escopo e ownership claros, o software se degrada por default. O papel do engenheiro é desacelerar essa degradação com decisões inteligentes.</p>
      <h2 class="text-xl font-bold mt-6 mb-4 text-brand-white">Conclusão:</h2>
      <p>Programar é manipular elementos. Pensar sistemicamente é entender suas consequências. Quanto mais complexo o produto, menos o código importa — e mais importa a visão. Quem vê software como um organismo vivo projeta soluções resilientes, elegantes e sustentáveis. Pensamento sistêmico é a nova elite da engenharia.</p>
    `
  }
];

export const technologies: Technology[] = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Scala', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
];

export const skills: Skill[] = [
  { icon: ServerCog, title: "Arquitetura de Back-end", description: "Desenho e construção de APIs e a lógica que sustenta aplicações escaláveis." },
  { icon: Database, title: "Persistência de Dados", description: "Modelagem e otimização de bancos de dados SQL e NoSQL para garantir performance." },
  { icon: Code, title: "Qualidade de Código", description: "Foco em práticas de código limpo para software legível, testável e de fácil manutenção." },
  { icon: Bot, title: "Automação Inteligente", description: "Utilização de scripts e integração com IA para automatizar tarefas e otimizar processos." }
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/oJordaoo", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ojordaoo/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/ojordaoo", icon: Instagram, label: "Instagram" },
  { href: "mailto:gabriel.jordao.dev@gmail.com", icon: Mail, label: "Email" },
];