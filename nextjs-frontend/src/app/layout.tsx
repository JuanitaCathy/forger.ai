import type { Metadata } from 'next';
import './globals.css';
import { Inter,  Calistoga } from "next/font/google";
import { Providers } from './provider';
import { Header } from './header';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });


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
      <head>
        <link rel="icon" href="/ForgeR (4).svg" />
      </head>
        <body className={`${inter.className}`}>
         <Providers>
            <Header />
            <div className="container mx-auto">{children}</div>
          </Providers>
        </body>
      </html>
    </>
  );
}