'use client';

import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-2 z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex ml-8 gap-2 items-center text-xl">
          <Image src="/ForgeR (3).png" width="100" height="60" alt="icon" />
        </Link>

        {/* Navigation with Dots */}
        <nav className="flex items-center gap-5 font-semibold text-xl text-gray-200">
          <Link className="hover:text-pink-600" href="/services">
            Services
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-600" href="/pricing">
            Pricing
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-600" href="/about-us">
            Why Us?
          </Link>
          <span className="text-gray-600">•</span>
          <Link
            className="hover:text-pink-600"
            href="https://github.com/JuanitaCathy/forger.ai/blob/main/README.md"
          >
            Docs
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-600" href="https://github.com/JuanitaCathy/forger.ai">
            Github
          </Link>
        </nav>

        {/* Mode toggle on the right */}
        <div className="flex items-center mr-8 gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
