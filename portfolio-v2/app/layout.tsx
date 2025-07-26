import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // O Header volta para o layout principal
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gabriel Jordão | Desenvolvedor',
  description: 'Portfólio de Gabriel Jordão, especialista em automações e desenvolvimento moderno.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-brand-black text-brand-white`}>
        <Header /> {/* Header fica aqui para ser fixo em todas as páginas */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}