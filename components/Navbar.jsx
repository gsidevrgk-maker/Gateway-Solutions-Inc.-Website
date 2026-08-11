"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'STAFFING', path: '/staffing' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CAREERS', path: '/careers' },
  ];

  return (
    /* Golden Transparent Background with Glassmorphism Blur */
    <nav className="fixed top-0 w-full z-40 bg-amber-400/20 backdrop-blur-md border-b border-amber-300/40 shadow-sm transition-all duration-300">
      
      {/* Broadened Container Width */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Adjusted Navbar Height */}
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center h-full py-3">
            <Link href="/" className="h-full flex items-center">
              <img 
                src={logo.src} 
                alt="Gateway Solutions, Inc" 
                /* 
                  Added contrast-125 and brightness-110. 
                  This pushes the off-white background to pure white, 
                  allowing mix-blend-multiply to completely erase the rectangular edges!
                */
                className="h-full w-auto max-w-[350px] md:max-w-[450px] object-contain mix-blend-multiply contrast-125 brightness-110" 
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-bold tracking-wide transition-colors pb-1 border-b-2 ${
                  pathname === link.path 
                    ? 'text-amber-800 border-amber-600' 
                    : 'text-slate-800 border-transparent hover:text-amber-700 hover:border-amber-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}