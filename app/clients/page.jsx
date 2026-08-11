"use client";
import { motion } from 'framer-motion';
import { Landmark, Network, Building2, MapPin, Briefcase, Star } from 'lucide-react';

export default function ClientsPage() {
  const clientCategories = [
    {
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      title: "Government & VMS",
      desc: "We are prime vendors for state governments nationwide, providing top-tier talent through leading VMS portals.",
      bullets: [
        { name: "State of North Carolina", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of South Carolina", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Virginia", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Michigan", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Arkansas", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Oregon", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Colorado", icon: <MapPin className="w-4 h-4 text-amber-600" /> },
        { name: "State of Georgia", icon: <MapPin className="w-4 h-4 text-amber-600" /> }
      ]
    },
    {
      icon: <Network className="w-6 h-6 text-amber-600" />,
      title: "Implementation Partners",
      desc: "We successfully serve top-tier global implementation partners, providing elite technical resources directly through their prime vendors.",
      bullets: [
        { name: "Deloitte", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> },
        { name: "TCS", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> },
        { name: "Cognizant", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> },
        { name: "Tech Mahindra", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> },
        { name: "HCL", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> },
        { name: "Infosys", icon: <Briefcase className="w-4 h-4 text-emerald-600" /> }
      ]
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      title: "Direct Enterprise Clients",
      desc: "We deliver strategic IT staffing and customized, full-stack software solutions directly to third-party enterprise organizations.",
      bullets: [
        { name: "Annexus", icon: <Star className="w-4 h-4 text-amber-500" /> },
        { name: "ICF", icon: <Star className="w-4 h-4 text-amber-500" /> },
        { name: "McLane", icon: <Star className="w-4 h-4 text-amber-500" /> },
        { name: "And Many More...", icon: <Star className="w-4 h-4 text-slate-400" /> }
      ]
    }
  ];

  return (
    /* Increased top padding (pt-32) to clear the navbar on mobile */
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-screen relative">
      
      {/* --- OPTIMIZED RESPONSIVE HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-10 md:mb-12 relative px-2"
      >
        {/* Changed to flex-wrap and responsive text sizes (text-3xl md:text-5xl) */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-4">
          Our Trusted <span className="text-amber-600">Clients</span>
        </h1>
        
        {/* Adjusted mobile text size and line height */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          We prioritize long-term, secure, and transparent partnerships. Our extensive global network spans state governments, enterprise implementation partners, and direct third-party clients.
        </p>
      </motion.div>

      {/* --- VERTICAL GLOWING CARDS GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {clientCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className="relative w-full group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className="relative bg-white/10 backdrop-blur-md border border-white/40 shadow-xl rounded-[2rem] p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 bg-white/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/50 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <p className="text-slate-800 leading-tight font-medium mb-4">
                {category.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {category.bullets.map((bullet, bulletIdx) => (
                  <div 
                    key={bulletIdx} 
                    className="flex items-center text-sm font-bold text-slate-800 bg-white/30 hover:bg-white/50 transition-colors backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/40 shadow-sm"
                  >
                    <span className="mr-2 shrink-0">{bullet.icon}</span>
                    <span>{bullet.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}