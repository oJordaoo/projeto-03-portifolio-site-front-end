import type { LucideProps } from "lucide-react";
import type { FC } from "react";

interface SkillCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
}

export default function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <div className="rounded-lg bg-brand-black p-6 transition-transform hover:-translate-y-1">
      <Icon className="h-8 w-8 text-brand-red" />
      <h3 className="mt-4 font-bold text-brand-white">{title}</h3>
      <p className="mt-1 text-sm text-brand-white/60">{description}</p>
    </div>
  );
}