import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience'; // Importar
import BlogSection from '@/components/BlogSection'; // Importar
import Contact from '@/components/Contact';

export default function Home() {
  // ... (o useEffect continua o mesmo)
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience /> {/* Adicionado */}
      <BlogSection /> {/* Adicionado */}
      <Contact />
    </>
  );
}