"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative bg-slate-50 overflow-hidden">
      
      {/* Subtle Light Mode Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Badges */}
      <div className="flex gap-4 mb-8 relative z-10">
        <span className="flex items-center text-xs font-bold text-blue-700 bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
          <Award className="w-4 h-4 mr-2" /> ISO 9001: 2000 Conformance
        </span>
        <span className="flex items-center text-xs font-bold text-blue-700 bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
          <ShieldCheck className="w-4 h-4 mr-2" /> CMM Level 4 Implementation
        </span>
      </div>

      {/* Hero Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight relative z-10"
      >
        Pioneering <span className="text-blue-600">Software</span><br/>Solutions.
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 relative z-10 font-medium"
      >
        Gateway Solutions, Inc. is a leading software and business solutions company providing a full complementary range of multi-disciplinary solutions through a 24x7 Global service model. Powered by a strong, qualified workforce updated in par with cutting edge technologies.
      </motion.p>

      {/* Location Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-semibold text-slate-500 relative z-10"
      >
        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-blue-500" /> Overland Park, KS (HQ)</span>
        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-blue-500" /> Ashburn, VA</span>
        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-blue-500" /> Morrisville, NC</span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 relative z-10"
      >
        <Link href="/services" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105">
          Explore Our Services
        </Link>
        <Link href="/about" className="bg-white text-slate-800 hover:bg-slate-100 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-sm">
          Our Methodology
        </Link>
      </motion.div>
    </div>
  );
}