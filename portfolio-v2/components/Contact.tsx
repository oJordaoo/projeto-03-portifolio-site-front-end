"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Check, Loader2, AlertCircle } from 'lucide-react';

// Tipos para o estado do formulário
type FormStatus = "idle" | "submitting" | "success" | "error";

const contactLinks = [
  { href: "mailto:gabriel.jordao.dev@gmail.com", icon: Mail, text: "gabriel.jordao.dev@gmail.com" },
  { href: "https://www.linkedin.com/in/ojordaoo/", icon: Linkedin, text: "LinkedIn" },
  { href: "https://github.com/oJordaoo", icon: Github, text: "GitHub" },
];

// Função simples de validação de formato de e-mail
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('_replyto') as string;

    // --- NOSSA NOVA VALIDAÇÃO ---
    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um formato de e-mail válido.");
      return; // Interrompe o envio se o e-mail for inválido
    }
    
    setEmailError(null); // Limpa o erro se o e-mail for válido
    setStatus("submitting");

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Erro de formulário:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-brand-gray">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="text-center text-4xl font-bold text-brand-white mb-12">
          Vamos Conversar?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-brand-white">Me envie uma mensagem</h3>
            <p className="text-lg text-brand-white/70">
              Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou quer trocar uma ideia, use o formulário ao lado ou me encontre online.
            </p>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-brand-white/80 transition-colors hover:text-brand-red">
                  <link.icon className="h-6 w-6" />
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate // Desativa a validação padrão do navegador para usarmos a nossa
            action="https://formspree.io/f/mqalqdjz" 
            method="POST"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-white/80">Nome</label>
              <input type="text" id="name" name="name" required className="mt-2 block w-full rounded-md border-2 border-brand-gray bg-brand-black p-3 text-brand-white transition-colors focus:border-brand-red focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-white/80">Email</label>
              <input type="email" id="email" name="_replyto" required className="mt-2 block w-full rounded-md border-2 border-brand-gray bg-brand-black p-3 text-brand-white transition-colors focus:border-brand-red focus:outline-none" />
              {/* Mensagem de erro que aparece se a validação falhar */}
              {emailError && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} />
                  <span>{emailError}</span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-white/80">Mensagem</label>
              <textarea id="message" name="message" rows={4} required className="mt-2 block w-full rounded-md border-2 border-brand-gray bg-brand-black p-3 text-brand-white transition-colors focus:border-brand-red focus:outline-none resize-none"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full rounded-md bg-brand-red px-10 py-4 font-bold text-brand-white transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-opacity-70 flex items-center justify-center gap-2"
            >
              {status === "submitting" && <Loader2 className="animate-spin" />}
              {status === "success" ? <><Check />Enviado com Sucesso!</> : null}
              {status === "error" ? "Falha no Envio. Tente Novamente." : null}
              {status === "idle" ? "Enviar Mensagem" : null}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}