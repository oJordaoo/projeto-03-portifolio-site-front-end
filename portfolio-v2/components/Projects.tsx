"use client"
import { PROJECTS } from "@/lib/constants";
import ProjectGridItem from "./ProjectGridItem";

export default function Projects() {
  return (
    <section 
      id="projetos" 
      className="w-full min-h-screen flex flex-col items-center justify-center bg-brand-black px-4 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-brand-white">
          Projetos em Destaque
        </h2>
        
        {/* O grid agora tem uma perspectiva para a animação 3D funcionar */}
        <div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1000px" }}
        >
          {PROJECTS.map((project) => (
            <ProjectGridItem
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}