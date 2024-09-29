'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { DeleteIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function Header() {

  return (
    <header className="py-2 z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex ml-8 gap-2 items-center text-xl">
          <Image
            src="/ForgeR (3).png"
            width="100"
            height="60"
            alt="icon"
          />
        </Link>

        <nav className="flex gap-12 font-semibold text-xl">
            <>
              <Link className="hover:text-sky-300" href="/services">
                Services
              </Link>
              <Link className="hover:text-sky-300" href="/pricing">
                Pricing
              </Link>
              <Link className="hover:text-sky-300" href="/about-us">
                Why Us?
              </Link>
              <Link className="hover:text-sky-300" href="https://github.com/JuanitaCathy/forger.ai/blob/main/README.md">
                Docs
              </Link>
              <Link className="hover:text-sky-300" href="https://github.com/JuanitaCathy/forger.ai">
                Github
              </Link>
            </>
        </nav>

        <div className="flex items-center mr-8 gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}