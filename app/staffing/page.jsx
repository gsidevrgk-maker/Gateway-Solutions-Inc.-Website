"use client";
import { motion } from 'framer-motion';
import { Users, UserPlus, Briefcase, FileSearch, Network, Handshake } from 'lucide-react';

export default function StaffingPage() {
  const staffingServices = [
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "IT Staff Augmentation",
      desc: "Scale your internal teams rapidly with elite, pre-vetted technical specialists who integrate seamlessly into your agile workflows and daily operations."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-600" />,
      title: "Contract-to-Hire",
      desc: "Evaluate technical talent on the job before making a long-term commitment. Ensure perfect alignment with your project needs and company culture."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-amber-600" />,
      title: "Direct Placement",
      desc: "End-to-end recruitment for full-time technical roles. We handle sourcing, rigorous technical vetting, and cultural alignment to find your ideal candidate."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-amber-600" />,
      title: "Executive IT Search",
      desc: "Targeted acquisition of high-level technology leadership, including CIOs, CTOs, and VP-level engineering directors to drive your strategic vision."
    },
    {
      icon: <Network className="w-6 h-6 text-amber-600" />,
      title: "Dedicated Project Teams",
      desc: "Deploy fully managed, multi-disciplinary pods of developers, QA engineers, and project managers to execute complex enterprise initiatives."
    },
    {
      icon: <Handshake className="w-6 h-6 text-amber-600" />,
      title: "Stringent Technical Vetting",
      desc: "Every candidate undergoes rigorous, multi-tiered technical assessments by our in-house experts to guarantee deep, tactical domain expertise."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12 min-h-screen relative">
      
      {/* --- OPTIMIZED HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-8 relative"
      >
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3 flex items-center justify-center gap-4">
          Strategic IT <span className="text-amber-600">Staffing</span>
        </h1>
        
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-tight font-medium">
          Our talent acquisition protocols are mapped directly to the modern technology landscape. We connect enterprises with elite technical professionals who possess deep, tactical expertise.
        </p>
      </motion.div>

      {/* --- STAFFING SERVICES GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffingServices.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Flex container for Icon + Title Side-by-Side */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 shrink-0 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            </div>
            
            <p className="text-slate-700 leading-tight font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}