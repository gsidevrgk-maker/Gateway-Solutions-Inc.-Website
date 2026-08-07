'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
// This forces Webpack to bundle the image, bypassing the StackBlitz public folder bug
import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      {/* Tightly Wrapped, Animated Logo Container */}
      <Link href="/" className="flex items-center group">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white p-2 md:p-2.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center"
        >
          {/* Subtle Animated Glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/30 to-red-500/20 blur-sm pointer-events-none"
          />

          {/* Next.js Image bound directly to the imported Webpack asset */}
          <div className="relative h-10 w-48 md:h-12 md:w-56 z-10">
            <Image
              src={logoImg}
              alt="Gateway Solutions, Inc. Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </motion.div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-6 text-sm font-bold text-white uppercase tracking-wider">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-400 transition">
          Services
        </Link>
        <Link href="/expertise" className="hover:text-blue-400 transition">
          Expertise
        </Link>
        <Link href="/clients" className="hover:text-blue-400 transition">
          Clients
        </Link>
        <Link href="/portfolio" className="hover:text-blue-400 transition">
          Portfolio
        </Link>
      </div>

      <Link
        href="/contact"
        className="hidden md:inline-block bg-blue-600 text-white hover:bg-blue-500 px-6 py-2.5 rounded-full font-bold transition shadow-[0_0_15px_rgba(37,99,235,0.3)]"
      >
        Contact Us
      </Link>
    </nav>
  );
}
