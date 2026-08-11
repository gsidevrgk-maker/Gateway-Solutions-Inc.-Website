"use client";
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12 min-h-screen flex flex-col items-center relative">
      
      {/* --- OPTIMIZED HERO HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-8 relative w-full max-w-4xl"
      >
        {/* ISO and CMM Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
           <span className="bg-amber-100/80 backdrop-blur-sm text-amber-900 font-bold px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm text-sm flex items-center">
             <Award className="w-4 h-4 mr-2 text-amber-600" /> ISO 9001:2000 Conformance
           </span>
           <span className="bg-amber-100/80 backdrop-blur-sm text-amber-900 font-bold px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm text-sm flex items-center">
             <CheckCircle className="w-4 h-4 mr-2 text-amber-600" /> CMM Level 4 Implementation
           </span>
        </div>

        {/* Updated Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight flex flex-col items-center justify-center gap-2">
          Pioneering IT Hiring <span className="text-amber-600">Solutions</span>
        </h1>
        
        {/* Updated Description with Bold Company Name and 1.25 Line Spacing */}
        <p className="text-xl text-slate-700 mx-auto leading-tight font-medium mb-10 max-w-3xl">
          <strong className="font-extrabold text-slate-900">Gateway Solutions, Inc.</strong> is a leading software and business solutions company providing a full complementary range of multi-disciplinary solutions through a 24x7 Global service model. Powered by a strong, qualified workforce updated in par with cutting edge technologies.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6">
            <Link href="/services" className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:scale-105 flex items-center">
                Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
        </div>
      </motion.div>

      {/* --- LOCATIONS SECTION --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 mt-8"
      >
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-50/80 px-5 py-2.5 rounded-full border border-amber-200">
          <MapPin className="w-4 h-4 mr-2 text-amber-600" /> Overland Park, KS (HQ)
        </div>
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-50/80 px-5 py-2.5 rounded-full border border-amber-200">
          <MapPin className="w-4 h-4 mr-2 text-amber-600" /> Ashburn, VA
        </div>
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-50/80 px-5 py-2.5 rounded-full border border-amber-200">
          <MapPin className="w-4 h-4 mr-2 text-amber-600" /> Morrisville, NC
        </div>
      </motion.div>

    </div>
  );
}