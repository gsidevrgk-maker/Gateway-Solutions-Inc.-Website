"use client";
import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, ShieldAlert, Settings, Smartphone, Layers, Code } from 'lucide-react';

export default function ExpertisePage() {
  const techMatrix = [
    { icon: Cloud, title: "Cloud & Infrastructure", desc: "Scalable, highly available environments built for enterprise demands.", tags: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
    { icon: Cpu, title: "Artificial Intelligence & ML", desc: "Advanced algorithmic models driving predictive insights and automation.", tags: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "Machine Learning"] },
    { icon: Code, title: "Modern Frontend & UI/UX", desc: "High-performance, accessible, and responsive user interfaces.", tags: ["React.js", "Next.js", "Angular", "Vue.js", "Tailwind CSS"] },
    { icon: Settings, title: "Backend & Middleware", desc: "Robust microservices and event-driven architectures.", tags: ["Node.js", "Java / Spring Boot", ".NET Core", "C#", "Python"] },
    { icon: Database, title: "Data Engineering & Analytics", desc: "Massive data pipelines, warehousing, and business intelligence.", tags: ["Snowflake", "Databricks", "Informatica", "Oracle 11g/19c", "SQL Server"] },
    { icon: ShieldAlert, title: "Cybersecurity & InfoSec", desc: "Zero-trust implementations and rigorous vulnerability management.", tags: ["Zero Trust", "IAM", "CyberArk", "Splunk", "Penetration Testing"] },
    { icon: Layers, title: "ERP, CRM & Enterprise Apps", desc: "Seamless integration and customization of global business systems.", tags: ["SAP S/4HANA", "Salesforce", "Oracle ERP", "Workday"] },
    { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform applications for a mobile-first workforce.", tags: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          Technology <span className="text-blue-600">Matrix</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
          Our talent acquisition and technical vetting protocols are mapped directly to the modern technology landscape. We deploy specialists who possess deep, tactical expertise across these critical enterprise domains.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {techMatrix.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center border border-blue-800/50 group-hover:scale-110 transition-transform mr-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{domain.title}</h3>
              </div>
              <p className="text-slate-300 text-sm mb-6 flex-grow">{domain.desc}</p>
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-800 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}