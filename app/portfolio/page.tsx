'use client';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MonitorSmartphone,
  Database,
  Briefcase,
} from 'lucide-react';

export default function PortfolioPage() {
  const steps = [
    'Discovery & URS Documentation',
    'Initial Development & Deployment',
    'Client Approval & Modification',
    'Incorporation of Final Changes',
    'ISO Standard Quality Testing',
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Project <span className="text-blue-500">Portfolio</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Showcasing our acumen in developing collaborative web solutions,
          digital dashboards, e-commerce platforms, and robust enterprise
          applications.
        </p>
      </motion.div>

      {/* Case Studies */}
      <div className="grid lg:grid-cols-2 gap-10 mb-24">
        {/* Featured Project 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 group"
        >
          <div className="bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-800/50 group-hover:scale-110 transition-transform">
            <MonitorSmartphone className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            HR & Operational Modernization
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Successfully developed and tested a customized web application
            featuring comprehensive payroll management and automated attendance
            tracking functionalities. This solution eliminated legacy system
            bottlenecks and provided real-time HR analytics for a seamless
            workforce management experience.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              .NET Framework
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              SQL Server
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              Custom UI/UX
            </span>
          </div>
        </motion.div>

        {/* Featured Project 2 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 group"
        >
          <div className="bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-800/50 group-hover:scale-110 transition-transform">
            <Database className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Enterprise Data Warehousing
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Executed a large-scale data mapping and clean-up initiative,
            converting extensive legacy system data into a secure,
            highly-available Oracle database environment. Established strict
            guidelines for ongoing database management and predictive business
            intelligence reporting.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              Oracle 10g
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              Informatica
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
              Data Modeling
            </span>
          </div>
        </motion.div>
      </div>

      {/* Execution Methodology */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-950/80 p-10 rounded-3xl border border-white/10 backdrop-blur-sm text-center"
      >
        <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-white mb-8">
          Our Delivery Framework
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-300 text-sm font-medium max-w-[120px] text-center">
                {step}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
