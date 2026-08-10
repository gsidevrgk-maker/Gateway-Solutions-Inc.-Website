"use client";
import { motion } from 'framer-motion';
import { Building, Landmark, Globe } from 'lucide-react';

export default function ClientsPage() {
  const clientTypes = [
    { icon: Globe, title: "Fortune 1000 Enterprises", desc: "Supporting multi-national companies across a broad industrial spectrum including distribution, consumer goods, and manufacturing." },
    { icon: Landmark, title: "Government Entities", desc: "Providing cleared IT talent and solutions for United States government agencies at the State, Local, and Federal levels." },
    { icon: Building, title: "Enterprise B2B Sector", desc: "Fostering expanded relationships and tackling complex data architectures for finance, insurance, and telecommunication giants." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Our <span className="text-amber-600">Clients</span></h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Many of our clients look to us for the intrinsic values we bring: Professionalism without pressure. Collaboration without confrontation. We respond with agility in support of their evolving requirements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {clientTypes.map((type, idx) => {
          const Icon = type.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-amber-300/60 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 border border-amber-300/60">
                <Icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm font-medium">{type.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}