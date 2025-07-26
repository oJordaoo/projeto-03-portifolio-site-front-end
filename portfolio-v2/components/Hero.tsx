import { ArrowDown } from "lucide-react";
import SmoothLink from "./SmoothLink";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight sm:text-7xl md:text-8xl">
          Gabriel Jordão
        </h1>
        <p className="mt-4 text-xl text-brand-white/70 md:text-2xl">
          Desenvolvedor Full Stack | Construindo soluções <span className="text-brand-red">escaláveis e resilientes</span> que impulsionam negócios.
        </p>
      </div>

      <SmoothLink href="#sobre" className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-brand-red" />
      </SmoothLink>
    </section>
  );
}