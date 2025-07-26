"use client"
import { motion } from "framer-motion";
import { ServerCog, Database, Code, Bot } from "lucide-react";
import SkillCard from "./SkillCard"; // Vamos reutilizar o componente que já temos

// Textos atualizados para os boxes de habilidades
const skills = [
  { 
    icon: ServerCog, 
    title: "Arquitetura de Back-end", 
    description: "Desenho e construção de APIs e a lógica que sustenta aplicações escaláveis." 
  },
  { 
    icon: Database, 
    title: "Persistência de Dados", 
    description: "Modelagem e otimização de bancos de dados SQL e NoSQL para garantir performance." 
  },
  { 
    icon: Code, 
    title: "Qualidade de Código", 
    description: "Foco em práticas de código limpo para software legível, testável e de fácil manutenção." 
  },
  { 
    icon: Bot, 
    title: "Automação Inteligente", 
    description: "Utilização de scripts e integração com IA para automatizar tarefas e otimizar processos." 
  }
];

export default function About() {
  return (
    <section id="sobre" className="w-full bg-brand-gray py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold text-brand-white"
        >
          Minha Jornada até o Código
        </motion.h2>
        
        {/* Container principal que organiza o texto e os cards lado a lado */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Coluna do Texto (Sua história) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed text-brand-white/80"
          >
            <p>
              Da curiosidade com a lógica por trás dos jogos à epifania operando um software industrial, minha trajetória sempre foi guiada pelo desejo de entender e construir sistemas. A Engenharia me deu uma base sólida, mas foi no código que encontrei minha verdadeira vocação.
            </p>
            <p>
              Hoje, meu foco é traduzir essa paixão em soluções de software <span className="text-brand-red font-semibold">robustas e inovadoras</span>, arquitetando a lógica, construindo a automação e entregando produtos digitais que funcionam de forma inteligente e eficiente.
            </p>
          </motion.div>

          {/* Coluna dos Quadrados de Habilidades */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}