"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type BlogPost } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex-shrink-0 w-[380px] h-[320px] rounded-xl bg-brand-gray p-6 flex flex-col justify-between"
    >
      <div style={{ transform: "translateZ(50px)" }} className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-brand-black rounded-full text-brand-white/70">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-brand-white">{post.title}</h3>
        <p className="text-brand-white/60">{post.excerpt}</p>
      </div>
      
      <Link 
        href={`/blog/${post.slug}`} 
        className="flex items-center gap-2 font-semibold text-brand-red self-start"
        style={{ transform: "translateZ(50px)" }}
      >
        Leia o artigo <ArrowUpRight size={20} />
      </Link>
    </motion.div>
  );
}