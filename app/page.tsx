'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto space-y-8 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <span className="flex items-center text-blue-400 bg-blue-950/50 px-4 py-2 rounded-full border border-blue-800/50">
            <Award className="w-5 h-5 mr-2" /> ISO 9001: 2000 Conformance
          </span>
          <span className="flex items-center text-blue-400 bg-blue-950/50 px-4 py-2 rounded-full border border-blue-800/50">
            <ShieldCheck className="w-5 h-5 mr-2" /> CMM Level 4 Implementation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
          Pioneering{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Software Solutions.
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Gateway Solutions, Inc. is a leading software and business solutions
          company providing a full complementary range of multi-disciplinary
          solutions through a 24x7 Global service model. Powered by a strong,
          qualified workforce updated in par with cutting edge technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium pt-4">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> Overland Park, KS
            (HQ)
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> Ashburn, VA
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> Morrisville, NC
          </span>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/services"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-500"
          >
            Explore Our Services
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-slate-400 text-white rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors"
          >
            Our Methodology
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
