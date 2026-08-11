"use client";
import { motion } from 'framer-motion';
import { Building, Target, Shield, Award, MapPin, Globe } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Globe className="w-6 h-6 text-amber-600" />,
      title: "Global Service Model",
      desc: "We provide a full complementary range of multi-disciplinary solutions through a 24x7 Global service model, powered by a highly qualified workforce."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Certified Excellence",
      desc: "Committed to the highest quality standards, we operate with ISO 9001:2000 Conformance and CMM Level 4 Implementation to ensure elite project delivery."
    },
    {
      icon: <Target className="w-6 h-6 text-amber-600" />,
      title: "Cutting-Edge Innovation",
      desc: "Our team stays consistently updated on par with cutting-edge technologies, allowing us to pioneer modern software solutions for enterprise clients."
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Reliable Partnership",
      desc: "We prioritize long-term, secure, and transparent partnerships with our clients, ensuring business continuity and operational success at every phase."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12 min-h-screen relative">
      
      {/* --- OPTIMIZED HEADER SECTION --- */}
      {/* Reduced mb-16 to mb-8 to pull cards closer to header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-8 relative"
      >
        {/* Reduced mb-6 to mb-3 to pull paragraph closer to heading */}
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3 flex items-center justify-center gap-4">
          Pioneering Software <span className="text-amber-600">Solutions</span>
        </h1>
        
        {/* Applied leading-tight for reduced line spacing (1.25) */}
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-tight font-medium">
          Gateway Solutions, Inc. is a leading software and business solutions company providing a full complementary range of multi-disciplinary solutions. Powered by a strong, qualified workforce updated in par with cutting edge technologies.
        </p>
      </motion.div>

      {/* --- LOCATIONS BANNER --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-2 text-amber-700" /> Overland Park, KS (HQ)
        </div>
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-2 text-amber-700" /> Ashburn, VA
        </div>
        <div className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-2 text-amber-700" /> Morrisville, NC
        </div>
      </motion.div>

      {/* --- CORE VALUES GRID --- */}
      <div className="grid md:grid-cols-2 gap-8">
        {coreValues.map((value, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 + 0.2 }}
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5 border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
              {value.icon}
            </div>
            {/* Reduced mb to keep title and description cohesive */}
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{value.title}</h3>
            
            {/* Applied leading-tight to card descriptions as well */}
            <p className="text-slate-700 leading-tight font-medium">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}