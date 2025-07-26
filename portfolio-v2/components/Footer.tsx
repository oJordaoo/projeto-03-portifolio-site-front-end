"use client"
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import SmoothLink from "./SmoothLink";

const socialLinks = [
  { href: "https://github.com/oJordaoo", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ojordaoo/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/ojordaoo", icon: Instagram, label: "Instagram" },
  { href: "mailto:gabriel.jordao.dev@gmail.com", icon: Mail, label: "Email" }, // E-mail atualizado aqui
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-white/10 bg-brand-black px-4 py-6 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
        
        <p className="text-sm text-brand-white/50">
          © {new Date().getFullYear()} Gabriel Jordão
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-brand-white/60 transition-colors hover:text-brand-red"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          <SmoothLink href="#home" className="text-sm font-medium text-brand-white/60 transition-colors hover:text-brand-red">
            Voltar ao topo
          </SmoothLink>
        </div>
      </div>
    </footer>
  );
}