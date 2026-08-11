"use client";
import { motion } from 'framer-motion';
import { Stethoscope, Landmark, ShoppingCart, Factory, Smartphone, Zap } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Stethoscope className="w-6 h-6 text-amber-600" />,
      title: "Healthcare & Life Sciences",
      desc: "Secure, HIPAA-compliant data systems, telehealth platforms, and predictive analytics that improve patient outcomes and operational efficiency."
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      title: "Banking & Financial Services",
      desc: "Robust fintech applications, fraud detection models, and secure transaction processing architectures built for high-stakes regulatory environments."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-amber-600" />,
      title: "Retail & E-Commerce",
      desc: "Scalable digital storefronts, supply chain automation, and personalized customer experience platforms driven by AI and real-time data."
    },
    {
      icon: <Factory className="w-6 h-6 text-amber-600" />,
      title: "Manufacturing & Logistics",
      desc: "IoT integrations, predictive maintenance algorithms, and end-to-end supply chain visibility tools to streamline global operations."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-amber-600" />,
      title: "Telecommunications",
      desc: "High-availability network management tools, billing solutions, and modern CRM systems to support massive subscriber bases."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Energy & Utilities",
      desc: "Smart grid analytics, resource management platforms, and legacy system modernization to drive sustainable and efficient energy delivery."
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
          Industries We <span className="text-amber-600">Serve</span>
        </h1>
        
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-tight font-medium">
          We deliver tailored, enterprise-grade technology solutions designed to meet the unique regulatory, operational, and scaling demands of key global industries.
        </p>
      </motion.div>

      {/* --- INDUSTRIES GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
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
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{industry.title}</h3>
            </div>
            
            <p className="text-slate-700 leading-tight font-medium">
              {industry.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}