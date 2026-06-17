'use client';

import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  const scrollTo = (id: string) => {
    // If already on home, just scroll
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home with the hash, so back button returns to /#id
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className="bg-(--accent-medium) shadow-md fixed w-full z-15 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-gray-800">MyLogo</span>
          </div>

          <div className='text-black text-xl'>
            <button className="p-4" onClick={() => scrollTo("hero")}>Home</button>            
            <Link className="p-4" href="/art">Art</Link>
            <Link className="p-4" href="/devlog">Devlog</Link>
            <button className="p-4" onClick={() => scrollTo("contact")}>Contact</button>
          </div>

        </div>
      </div>
    </nav>
  );
};

