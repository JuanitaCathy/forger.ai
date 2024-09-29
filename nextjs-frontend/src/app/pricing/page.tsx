import Image from 'next/image';
import Link from 'next/link';
import PricingDemo from "@/components/pricingdemo"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
        <PricingDemo />
    </div>
  );
}

