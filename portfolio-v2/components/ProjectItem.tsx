"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from "@/lib/constants";
import { X } from 'lucide-react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItemProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

export default function ProjectItem({ project, isSelected, onClick }: ProjectItemProps) {
  return (
    <div className="border-b border-brand-white/20 overflow-hidden">
      {/* O container que recebe o clique permanece o mesmo */}
      <div
        onClick={onClick}
        className="group flex cursor-pointer items-start justify-between gap-8 py-8"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-brand-white transition-colors group-hover:text-brand-red">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-brand-white/60">{project.short}</p>
        </div>

        <div className="relative mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-white/30 transition-colors group-hover:border-brand-red">
          <motion.div
            className="absolute text-brand-red"
            animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }}
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <X size={24} />
          </motion.div>
        </div>
      </div>

      {/* A MUDANÇA ESTÁ AQUI: Animação de altura e conteúdo */}
      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.4 }, opacity: { duration: 0.25, delay: 0.15 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4 }, opacity: { duration: 0.25 } } }}
          >
            {/* O conteúdo expandido agora tem seu próprio padding, resolvendo a compressão */}
            <div className="pb-8 -mt-4">
              <p className="text-lg text-brand-white/80">
                {project.description}
              </p>
              <Link
                href={`/projetos/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-red transition-all hover:gap-3"
              >
                Ver estudo de caso
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}