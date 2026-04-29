import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BistroBoost | High-Converting Websites for Restaurants',
  description: 'Increase your café sales with a professional website and WhatsApp ordering system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-orange-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
