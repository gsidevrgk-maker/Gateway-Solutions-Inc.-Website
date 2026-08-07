'use client';
import { motion } from 'framer-motion';

export default function ExpertisePage() {
  const domains = [
    {
      title: 'Modern Web & UI/UX',
      items:
        'React, Next.js, Tailwind CSS, HTML5/DHTML, JavaScript, ASP.NET, WebSphere, and interactive application design.',
    },
    {
      title: 'ERP, CRM & Enterprise Apps',
      items:
        'SAP, Oracle ERP, PeopleSoft, Great Plains, JD Edwards, Siebel, Vantive, Clarify, and Vitria.',
    },
    {
      title: 'Data Integration (ETL & EDI)',
      items:
        'Informatica (PowerCenter, PowerMart, PowerConnect), DataStage, Microstrategy, EDI Mapping, B2B Integration, and CyberCash interfaces.',
    },
    {
      title: 'Artificial Intelligence & Next-Gen',
      items:
        'Machine Learning models, AI-driven automation, predictive analytics, and advanced algorithmic data processing.',
    },
    {
      title: 'Databases & Data Warehousing',
      items:
        'Oracle 10g/11i, MS SQL Server, Berkeley DB, PostgreSQL, MySQL, Informix, Business Objects, Cognos.',
    },
    {
      title: 'Architectures, Cloud & Middleware',
      items:
        'Microsoft.NET, J2EE, Linux Kernel Architecture, TCP/IP Suite, BEA Weblogic, IBM WebSphere, MQSeries, and Unix/Linux platforms.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Technical <span className="text-blue-500">Expertise</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          GSI IT consulting services provide experienced individuals with
          expertise spanning legacy systems to the latest advancements in
          Artificial Intelligence, React-based web development, SAP integration,
          and complex ETL/EDI data pipelines.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/60 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-slate-800/80 transition-colors shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {domain.title}
            </h3>
            <p className="text-slate-300 font-mono text-sm leading-relaxed">
              {domain.items}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
