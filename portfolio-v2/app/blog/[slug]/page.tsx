"use client"
import { use } from 'react';
import { BLOG_POSTS } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function getPostDetails(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = getPostDetails(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-black pt-32 px-8 text-center">
        <h1 className="text-4xl font-bold text-brand-white">Artigo não encontrado</h1>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 text-brand-red">
          <ArrowLeft size={20} /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-brand-black pt-24 sm:pt-32 px-4 sm:px-8 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-brand-red mb-8 transition-colors hover:text-brand-white">
          <ArrowLeft size={20} /> Voltar para todos os artigos
        </Link>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-white leading-tight">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-sm px-3 py-1 bg-brand-gray rounded-full text-brand-white/80">{tag}</span>
          ))}
        </div>
        
        <div className="my-12 h-px w-full bg-brand-white/20"></div>

        <div 
          className="prose prose-invert prose-lg max-w-none text-brand-white/80 prose-headings:text-brand-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}