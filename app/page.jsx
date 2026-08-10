"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      
      {/* Translucent Shining Golden Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-5xl mx-auto bg-gradient-to-br from-amber-50/70 via-yellow-100/40 to-amber-200/50 backdrop-blur-md p-8 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.25)] border border-amber-300/60 relative z-10"
      >
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-300/60 shadow-sm">
            <Award className="w-4 h-4 mr-2 text-amber-600" /> ISO 9001: 2000 Conformance
          </span>
          <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-300/60 shadow-sm">
            <ShieldCheck className="w-4 h-4 mr-2 text-amber-600" /> CMM Level 4 Implementation
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Pioneering <span className="text-amber-600">Software</span><br/>Solutions.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
          Gateway Solutions, Inc. is a leading software and business solutions company providing a full complementary range of multi-disciplinary solutions through a 24x7 Global service model. Powered by a strong, qualified workforce updated in par with cutting edge technologies.
        </p>

        {/* Location Tags */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-semibold text-slate-700">
          <span className="flex items-center bg-amber-100/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200"><MapPin className="w-4 h-4 mr-1 text-amber-600" /> Overland Park, KS (HQ)</span>
          <span className="flex items-center bg-amber-100/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200"><MapPin className="w-4 h-4 mr-1 text-amber-600" /> Ashburn, VA</span>
          <span className="flex items-center bg-amber-100/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-200"><MapPin className="w-4 h-4 mr-1 text-amber-600" /> Morrisville, NC</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" className="bg-amber-600 text-white hover:bg-amber-500 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105">
            Explore Our Services
          </Link>
          <Link href="/about" className="bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-white border-2 border-amber-300 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-sm">
            Our Methodology
          </Link>
        </div>
      </motion.div>

    </div>
  );
}