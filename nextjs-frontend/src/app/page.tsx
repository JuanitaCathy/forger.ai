import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Section container */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-14">
          <div className="text-center">

            {/* Main Heading with Gradient */}
            <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 leading-tight overflow-visible sm:text-6xl">
              Craft Cold Emails 
              <br /> 
              <span className="inline-block leading-tight sm:mt-2">With Deadly Precision!</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Channel the precision of Yor Forger as you craft cold emails that hit their mark every time. 
              Our AI-powered tool ensures your outreach is sharp, professional, and unforgettable.
            </p>

            {/* Call to Action Button */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/browse" passHref>
                <button className="relative z-20 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-gradient-to-l hover:from-gray-900 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-300 ease-in-out">
                  Start Crafting
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
