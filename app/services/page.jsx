'use client';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Server,
  CreditCard,
  Shield,
  Code2,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'E-Business & Web Development',
      desc: 'Combining our in-depth domain knowledge to develop exhaustive e-Business services. From designing high profile websites to providing programming, interactive features, security and web databases.',
    },
    {
      icon: Code2,
      title: 'Custom Application & HR Solutions',
      desc: 'We build secure data processing tools and consultancy applications. This includes developing customized web applications featuring robust payroll management and real-time attendance tracking functionalities.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Strategies',
      desc: 'Deploy Mobile server gateways to synchronize Mobile devices with Office files from MS Exchange server simulating Corporate Mobile-Office by leveraging liberating Mobile Technologies.',
    },
    {
      icon: Server,
      title: 'Managed & Shared Hosting',
      desc: 'World-class data centers connected with OC 48 links span through dedicated servers. We guarantee 99.90% uptime services and 24/7 support for mirroring and high bandwidth usage sites.',
    },
    {
      icon: CreditCard,
      title: 'E-Payment Processing',
      desc: 'Digital payment processing solutions starting from payment gateways, online credit card processing, digital certificates, and managed security services.',
    },
    {
      icon: Shield,
      title: 'Offshore Development',
      desc: 'Well equipped with the latest infrastructure and the best available technical skill set. We offer the experience of remote development of solutions spread over the world on a 24x7 availability.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Our <span className="text-blue-500">Service Offerings</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From Online Retailing to Business Intelligence, prospective clients
          will find a solution for every e-need with Gateway Solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-900/60 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <div className="w-14 h-14 bg-blue-950/50 rounded-2xl flex items-center justify-center mb-6 border border-blue-900/50 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {srv.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
