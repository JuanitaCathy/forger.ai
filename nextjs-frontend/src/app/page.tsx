import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-12">
          <div className="text-center">
          <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 sm:text-6xl">
              Craft Cold Emails 
              <br /> With Deadly Precision!
            </h1>
            <p className="mt-7 text-lg leading-8 text-gray-300">
              Channel the precision of Yor Forger as you craft cold emails that hit their mark every time. Our AI-powered tool ensures your outreach is sharp, professional, and unforgettable.
            </p>
            <div className="mt-7 flex items-center justify-center gap-x-6">
              <Link
                href="/browse"
                className="relative z-20 rounded-md overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-gray-900 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-300 ease-in-out"
              >
                <button className="relative rounded-md overflow-hidden bg-gradient from-gray-800 to-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}