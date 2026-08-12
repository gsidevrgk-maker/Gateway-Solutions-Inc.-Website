"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail } from 'lucide-react'; 
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Notice: 'CONTACT' has been removed from this list
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'STAFFING', path: '/staffing' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CAREERS', path: '/careers' }
  ];

  return (
    /* Golden Transparent Background with Glassmorphism Blur */
    <nav className="fixed top-0 w-full z-50 bg-amber-400/20 backdrop-blur-md border-b border-amber-300/40 shadow-sm transition-all duration-300">
      
      {/* Broadened Container Width */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center h-full py-3">
            <Link href="/" className="h-full flex items-center" onClick={() => setIsOpen(false)}>
              <img 
                src={logo.src} 
                alt="Gateway Solutions, Inc" 
                className="h-full w-auto max-w-[230px] sm:max-w-[350px] md:max-w-[450px] object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation & Contact Button (Hidden on Mobile) */}
          <div className="hidden xl:flex items-center">
            
            {/* Standard Text Links */}
            <div className="flex space-x-6 items-center mr-8">
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

            {/* Dedicated "Contact Us" Button */}
            <Link 
              href="/contact" 
              className="flex items-center bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 mr-2" /> Contact Us
            </Link>

          </div>

          {/* Mobile Controls (Visible only on small screens) */}
          <div className="flex xl:hidden items-center gap-3">
            
            {/* Mobile "Contact Us" Button (Icon only on tiny screens, text on larger phones) */}
            <Link 
              href="/contact" 
              className="flex items-center bg-amber-600 text-white px-3 py-2 sm:px-4 rounded-xl shadow-sm hover:bg-amber-500 transition-colors"
              title="Contact Us"
            >
              <Mail className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline font-bold text-sm">Contact Us</span>
            </Link>

            {/* Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-700 focus:outline-none p-2 bg-amber-100/50 rounded-xl backdrop-blur-sm border border-amber-200/50"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-amber-50/95 backdrop-blur-xl border-b border-amber-200 shadow-xl">
          <div className="px-6 py-6 space-y-2 flex flex-col max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
                  pathname === link.path
                    ? 'text-amber-900 bg-amber-200/60 border border-amber-300/50'
                    : 'text-slate-800 hover:text-amber-800 hover:bg-amber-100/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}