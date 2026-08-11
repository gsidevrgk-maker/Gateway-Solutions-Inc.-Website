"use client";
import { motion } from 'framer-motion';
import { Cloud, Cpu, AppWindow, BarChart, Shield, Server } from 'lucide-react';

export default function ExpertisePage() {
  const expertiseAreas = [
    {
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      title: "Cloud & Infrastructure",
      desc: "Expertise in AWS, Azure, and Google Cloud Platform. We architect scalable, secure, and highly available environments for enterprise workloads."
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Artificial Intelligence & ML",
      desc: "Deploying intelligent solutions using advanced ML models, predictive analytics, and automated workflows to drive data-backed decisions."
    },
    {
      icon: <AppWindow className="w-6 h-6 text-amber-600" />,
      title: "Enterprise Applications",
      desc: "Full-stack proficiency in modern frameworks (React, Node.js, Java Spring). Delivering robust web applications and microservices architectures."
    },
    {
      icon: <BarChart className="w-6 h-6 text-amber-600" />,
      title: "Data Analytics & BI",
      desc: "Harnessing the power of big data processing and analytics pipelines to deliver real-time, actionable business intelligence."
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Cybersecurity",
      desc: "Implementing zero-trust architectures, advanced threat protection, and strict compliance frameworks to secure critical enterprise assets."
    },
    {
      icon: <Server className="w-6 h-6 text-amber-600" />,
      title: "Legacy Modernization",
      desc: "Seamlessly migrating and refactoring monolithic legacy systems into agile, cloud-native solutions without disrupting business operations."
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
          Technology <span className="text-amber-600">Matrix</span>
        </h1>
        
        {/* Adjusted mobile text size and line height */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          Our talent acquisition and technical vetting protocols are mapped directly to the modern technology landscape. We deploy specialists who possess deep, tactical expertise across these critical enterprise domains.
        </p>
      </motion.div>

      {/* --- EXPERTISE GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            /* Adjusted card padding for mobile (p-6 md:p-8) */
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300"
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