"use client";
import { motion } from 'framer-motion';
import { Cloud, Cpu, Code, Database, ShieldCheck, Users } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      title: "Cloud & Infrastructure",
      desc: "Scalable, secure, and highly available cloud architectures. We manage seamless migrations and optimize your infrastructure for modern enterprise demands."
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Artificial Intelligence & ML",
      desc: "Integrate predictive analytics, automation, and machine learning models into your workflows to drive data-backed decisions and operational efficiency."
    },
    {
      icon: <Code className="w-6 h-6 text-amber-600" />,
      title: "Custom Software Engineering",
      desc: "End-to-end full-stack development of robust web and mobile applications, tailored precisely to meet your unique business objectives."
    },
    {
      icon: <Database className="w-6 h-6 text-amber-600" />,
      title: "Enterprise Data Solutions",
      desc: "Comprehensive database architecture, big data processing, and analytics pipelines that turn raw data into actionable business intelligence."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Cybersecurity & Compliance",
      desc: "Advanced threat protection, security audits, and strict compliance management to ensure your enterprise data remains completely safeguarded."
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Strategic IT Staffing",
      desc: "Deploying elite technical specialists and agile teams possessing deep, tactical expertise across critical enterprise domains."
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
          Our Enterprise <span className="text-amber-600">Services</span>
        </h1>
        
        {/* Adjusted mobile text size and line height */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          Our talent acquisition and technical vetting protocols are mapped directly to the modern technology landscape. We deploy specialists who possess deep, tactical expertise across these critical enterprise domains.
        </p>
      </motion.div>

      {/* --- SERVICES GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            /* Adjusted card padding for mobile (p-6 md:p-8) */
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Flex container to place Icon and Title side-by-side */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 shrink-0 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            </div>
            
            <p className="text-slate-700 leading-tight font-medium">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}