import { PROJECTS } from "@/lib/constants"; // Importamos seus projetos

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-brand-black">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-brand-white">
          Experiência Prática
        </h2>
        <div className="space-y-12">
          {/* Mapeamos seus projetos para criar uma "linha do tempo" */}
          {PROJECTS.map((project) => (
            <div key={project.title} className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* Coluna da Esquerda: Título e Tecnologias */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-brand-red">{project.title}</h3>
                <p className="mt-1 text-sm text-brand-white/60">{project.short}</p>
              </div>
              
              {/* Coluna da Direita: Descrição Detalhada */}
              <div className="md:col-span-3">
                <p className="text-lg leading-relaxed text-brand-white/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}