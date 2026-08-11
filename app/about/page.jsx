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
    /* Increased top padding (pt-32) to clear the navbar on mobile */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-screen relative">
      
      {/* --- OPTIMIZED RESPONSIVE HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-10 md:mb-12 relative px-2"
      >
        {/* Changed to flex-wrap and responsive text sizes (text-3xl md:text-5xl) */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          Pioneering Software <span className="text-amber-600">Solutions</span>
        </h1>
        
        {/* Adjusted mobile text size and line height */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          Gateway Solutions, Inc. is a leading software and business solutions company providing a full complementary range of multi-disciplinary solutions. Powered by a strong, qualified workforce updated in par with cutting edge technologies.
        </p>
      </motion.div>

      {/* --- LOCATIONS BANNER --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
      >
        <div className="flex items-center text-xs sm:text-sm font-bold text-amber-900 bg-amber-200/50 px-4 sm:px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-1.5 sm:mr-2 text-amber-700 shrink-0" /> Overland Park, KS (HQ)
        </div>
        <div className="flex items-center text-xs sm:text-sm font-bold text-amber-900 bg-amber-200/50 px-4 sm:px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-1.5 sm:mr-2 text-amber-700 shrink-0" /> Ashburn, VA
        </div>
        <div className="flex items-center text-xs sm:text-sm font-bold text-amber-900 bg-amber-200/50 px-4 sm:px-5 py-2.5 rounded-full border border-amber-300/60 shadow-sm">
          <MapPin className="w-4 h-4 mr-1.5 sm:mr-2 text-amber-700 shrink-0" /> Morrisville, NC
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
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Flex container to place Icon and Title side-by-side */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 shrink-0 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
            </div>
            
            <p className="text-slate-700 leading-tight font-medium">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}