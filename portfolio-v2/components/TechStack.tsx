"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { technologies } from '@/lib/constants'; // Importando a nova lista

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-24 bg-brand-gray">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-brand-white">
          Ferramentas e Tecnologias
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center gap-4 rounded-lg bg-brand-black p-4 transition-transform hover:scale-110"
            >
              <Image
                src={tech.logo} // Agora usa o URL completo do CDN
                alt={`${tech.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14" // Removemos a classe de cor
              />
              <span className="text-sm font-medium text-brand-white/70">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}