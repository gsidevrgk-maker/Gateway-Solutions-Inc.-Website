"use client";
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Building2, Wifi, MonitorPlay, ShieldCheck, ShoppingCart, Landmark as Bank } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    { icon: Landmark, title: "Public Sector & Government", desc: "Delivering cleared talent and IT solutions for State, Local, and Federal agencies." },
    { icon: HeartPulse, title: "Healthcare & Pharmaceutical", desc: "Providing compliant data systems and IT staffing for major medical and pharma enterprises." },
    { icon: Bank, title: "Finance & Insurance", desc: "Deploying secure fintech, data warehousing, and banking software analysts." },
    { icon: Wifi, title: "Telecommunications", desc: "Supporting network administration and high-bandwidth infrastructure overhauls." },
    { icon: ShoppingCart, title: "Consumer Products & E-Commerce", desc: "Building scalable retail platforms and seamless digital payment integrations." },
    { icon: MonitorPlay, title: "Entertainment & Media", desc: "Empowering content delivery networks and interactive web platforms." },
    { icon: Building2, title: "Manufacturing & Logistics", desc: "Streamlining ERP integrations and supply chain data management." },
    { icon: ShieldCheck, title: "Data Networking & Hosting", desc: "Ensuring 24x7 global support and world-class data center management." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-white mb-6">Industries <span className="text-blue-500">Served</span></h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Gateway Solutions supports a broad industrial spectrum, deploying top-tier IT consultants to multi-national private enterprises and government entities at every level.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm group text-center flex flex-col items-center h-full shadow-lg"
            >
              <div className="w-16 h-16 bg-slate-950 rounded-full flex items-center justify-center mb-6 border border-slate-800 group-hover:border-blue-500 group-hover:bg-blue-900/30 transition-all">
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{ind.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}