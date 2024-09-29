import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './provider';
import { Header } from './header';


export const metadata: Metadata = {
  title: 'Forger.ai',
  description: 'An application that saves you AGES tryna cold email!',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
         <Providers>
            <Header />
            <div className="container mx-auto">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}