"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoImg from '../assets/logo.png'; 

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 lg:px-8 py-4 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      
      {/* Enlarged Logo Container */}
      <Link href="/" className="flex items-center group flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          /* Increased the dimensions significantly here */
          className="relative h-12 w-64 md:h-16 md:w-80 lg:h-20 lg:w-96 z-10"
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
      
      {/* Navigation Links */}
      <div className="hidden xl:flex space-x-6 text-sm font-bold text-slate-700 uppercase tracking-wider">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="/expertise" className="hover:text-blue-600 transition">Expertise</Link>
        <Link href="/industries" className="hover:text-blue-600 transition">Industries</Link>
        <Link href="/staffing" className="hover:text-blue-600 transition">Staffing</Link>
        <Link href="/clients" className="hover:text-blue-600 transition">Clients</Link>
        <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
      </div>

      <Link href="/contact" className="hidden md:inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-full font-bold transition shadow-md flex-shrink-0 ml-4">
        Contact Us
      </Link>
    </nav>
  );
}