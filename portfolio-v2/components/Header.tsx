"use client"

import Link from 'next/link'; // Esta é a linha que estava faltando
import SmoothLink from './SmoothLink';

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full p-6 sm:p-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase tracking-widest text-brand-white transition-colors hover:text-brand-red">
            GJ
          </h1>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <SmoothLink
              key={link.name}
              href={link.href}
              className="text-md font-medium text-brand-white/80 transition-colors hover:text-brand-red"
            >
              {link.name}
            </SmoothLink>
          ))}
        </nav>
      </div>
    </header>
  );
}