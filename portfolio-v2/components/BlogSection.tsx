"use client"
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/lib/constants';
import BlogPostCard from './BlogPostCard';

export default function BlogSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  // Efeito para calcular a largura total do carrossel
  useEffect(() => {
    if (carouselRef.current) {
      // Largura total de todos os cards menos a largura da tela
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, [BLOG_POSTS]); // Recalcula se os posts mudarem

  return (
    <section id="blog" className="py-24 bg-brand-black overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="text-4xl font-bold text-brand-white mb-4">
          Meus Artigos
        </h2>
        <p className="text-lg text-brand-white/70 mb-12">
          Explorando ideias, tecnologias e a jornada do desenvolvimento de software.
        </p>
        
        {/* Container externo que esconde o excesso */}
        <motion.div className="cursor-grab">
          {/* Container interno que tem a largura total dos itens */}
          <motion.div
            ref={carouselRef}
            className="flex gap-8"
            drag="x" // Permite arrastar no eixo X
            // Limites de arraste: não pode ir para a direita (0), e o limite da esquerda é a largura calculada
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
          >
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}