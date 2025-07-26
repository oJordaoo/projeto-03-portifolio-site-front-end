"use client"

import React from 'react';

// Tipagem para as propriedades do nosso novo componente
interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function SmoothLink({ href, children, ...props }: SmoothLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 1. Previne o comportamento padrão do link (o pulo)
    e.preventDefault();
    
    // 2. Garante que o href existe e é um link de âncora
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1); // Remove o '#'
      const elem = document.getElementById(targetId);
      
      // 3. Se o elemento for encontrado, rola a página suavemente até ele
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <a href={href} onClick={handleScroll} {...props}>
      {children}
    </a>
  );
}