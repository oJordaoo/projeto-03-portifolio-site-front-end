"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type Project } from "@/lib/constants";
import { ArrowUpRight, Wrench } from "lucide-react"; // Importamos o ícone Wrench
import Link from "next/link";

interface ProjectGridItemProps {
  project: Project;
}

export default function ProjectGridItem({ project }: ProjectGridItemProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Condição para verificar se é um placeholder
  const isPlaceholder = project.title === "Em Desenvolvimento...";

  if (isPlaceholder) {
    return (
      <div className="group relative h-60 w-full rounded-xl bg-brand-gray border-2 border-dashed border-brand-white/20 flex flex-col items-center justify-center p-6 text-center">
        <Wrench className="h-10 w-10 text-brand-white/30 mb-4" />
        <h3 className="text-xl font-bold text-brand-white">{project.title}</h3>
        <p className="mt-2 text-sm text-brand-white/60">{project.short}</p>
      </div>
    );
  }

  return (
    <Link href={`/projetos/${project.slug}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        // Altura fixa para todos os cards
        className="group relative h-60 w-full rounded-xl bg-brand-gray"
      >
        <div 
          style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-brand-black p-6 shadow-lg"
        >
          {/* Container flex para alinhar o conteúdo */}
          <div className="flex flex-col h-full justify-between text-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-white">{project.title}</h3>
              <p className="mt-2 text-sm text-brand-white/60">{project.short}</p>
            </div>
            <ArrowUpRight className="absolute bottom-4 right-4 h-8 w-8 text-brand-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}