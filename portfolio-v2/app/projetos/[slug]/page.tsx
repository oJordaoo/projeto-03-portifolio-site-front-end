"use client"
import { use } from 'react';
import { PROJECTS } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

function getProjectDetails(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = getProjectDetails(resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-black pt-32 px-8 text-center">
        <h1 className="text-4xl font-bold text-brand-white">Projeto não encontrado</h1>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 text-brand-red">
          <ArrowLeft size={20} /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-24 sm:pt-32 px-4 sm:px-8 pb-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projetos" className="inline-flex items-center gap-2 text-brand-red mb-8 transition-colors hover:text-brand-white">
          <ArrowLeft size={20} /> Voltar para todos os projetos
        </Link>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-white">{project.title}</h1>
        <p className="mt-2 text-lg text-brand-white/70">{project.overview}</p>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-white border-l-4 border-brand-red pl-4">O Desafio</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-white/80">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-white border-l-4 border-brand-red pl-4">A Solução</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-white/80">{project.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-white border-l-4 border-brand-red pl-4">Tecnologias Utilizadas</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-brand-gray rounded-md text-brand-white/80">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-white border-l-4 border-brand-red pl-4">Principais Aprendizados</h2>
            <ul className="mt-4 space-y-3">
              {project.learnings.map(learning => (
                <li key={learning} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <span className="text-lg text-brand-white/80">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}