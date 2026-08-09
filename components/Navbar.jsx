"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/expertise", label: "Expertise" },
    { href: "/industries", label: "Industries" },
    { href: "/staffing", label: "Staffing" },
    { href: "/clients", label: "Clients" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 lg:px-8 py-4 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      
      {/* Logo Container */}
      <Link href="/" className="flex items-center group flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative h-10 w-44 md:h-12 md:w-56 lg:h-16 lg:w-72 z-10"
        >
          <Image 
            src={logoImg} 
            alt="Gateway Solutions, Inc. Logo" 
            fill
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </motion.div>
      </Link>
      
      {/* Desktop Navigation Links (Visible on Large Screens and up) */}
      <div className="hidden lg:flex space-x-4 xl:space-x-6 text-xs xl:text-sm font-bold text-slate-700 uppercase tracking-wider">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-blue-600 transition">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Contact Button & Mobile Hamburger Toggle */}
      <div className="flex items-center space-x-3">
        <Link href="/contact" className="hidden md:inline-block bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-full font-bold transition shadow-md text-sm flex-shrink-0">
          Contact Us
        </Link>

        {/* Hamburger Button for Mobile / Tablet */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-slate-800 hover:text-blue-600 focus:outline-none p-2 bg-slate-100 rounded-xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl lg:hidden py-6 px-6 flex flex-col space-y-3"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition py-2 border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center hover:bg-blue-700 py-3 rounded-full font-bold transition shadow-md text-sm mt-2"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}