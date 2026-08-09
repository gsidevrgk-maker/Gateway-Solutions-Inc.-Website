"use client";
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Cpu, 
  Database, 
  ShieldAlert, 
  Settings, 
  Smartphone, 
  Layers, 
  Code 
} from 'lucide-react';

export default function ExpertisePage() {
  const techMatrix = [
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      desc: "Scalable, highly available environments built for enterprise demands.",
      tags: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "Kubernetes", "Docker", "Terraform", "Jenkins", "Linux/Unix"]
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence & ML",
      desc: "Advanced algorithmic models driving predictive insights and automation.",
      tags: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "Machine Learning", "NLP", "Computer Vision", "R"]
    },
    {
      icon: Code,
      title: "Modern Frontend & UI/UX",
      desc: "High-performance, accessible, and responsive user interfaces.",
      tags: ["React.js", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "HTML5/CSS3", "TypeScript", "Figma"]
    },
    {
      icon: Settings,
      title: "Backend & Middleware",
      desc: "Robust microservices and event-driven architectures.",
      tags: ["Node.js", "Java / Spring Boot", ".NET Core", "C#", "Python / Django", "MuleSoft", "Kafka", "REST/GraphQL"]
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      desc: "Massive data pipelines, warehousing, and business intelligence.",
      tags: ["Snowflake", "Databricks", "Informatica (ETL)", "Oracle 11g/19c", "SQL Server", "PostgreSQL", "MongoDB", "PowerBI"]
    },
    {
      icon: ShieldAlert,
      title: "Cybersecurity & InfoSec",
      desc: "Zero-trust implementations and rigorous vulnerability management.",
      tags: ["Zero Trust", "IAM", "CyberArk", "Splunk", "Penetration Testing", "NIST Compliance", "FISMA", "DevSecOps"]
    },
    {
      icon: Layers,
      title: "ERP, CRM & Enterprise Apps",
      desc: "Seamless integration and customization of global business systems.",
      tags: ["SAP S/4HANA", "Salesforce", "Oracle ERP", "Workday", "Microsoft Dynamics", "PeopleSoft", "ServiceNow"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      desc: "Native and cross-platform applications for a mobile-first workforce.",
      tags: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Objective-C", "Mobile Device Management"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      
      {/* Strategic Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Technology <span className="text-blue-500">Matrix</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Our talent acquisition and technical vetting protocols are mapped directly to the modern technology landscape. We deploy specialists who possess deep, tactical expertise across these critical enterprise domains.
        </p>
      </motion.div>

      {/* The Keyword-Rich Tech Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {techMatrix.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1 }}
              className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg group flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-950/50 rounded-xl flex items-center justify-center border border-blue-900/50 group-hover:scale-110 transition-transform mr-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{domain.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow">{domain.desc}</p>
              
              {/* Tech Tags (Crucial for recruiter/client keyword scanning) */}
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-slate-950 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-800 group-hover:border-slate-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Vetting Process Highlight */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/40 to-slate-900/80 p-10 rounded-3xl border border-blue-500/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-2/3 mb-6 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-2xl font-bold text-white mb-3">Rigorous Technical Vetting</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            Gateway Solutions does not just match resumes to job descriptions. Every consultant in our pipeline undergoes rigorous peer-to-peer technical evaluations, coding assessments, and architectural whiteboard sessions to ensure they meet CMM Level 4 and ISO 9001 quality standards before they ever touch your infrastructure.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-32 h-32 relative flex items-center justify-center">
            {/* Spinning decorative element */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-blue-500/50 rounded-full"
            />
            <div className="text-center">
              <span className="block text-3xl font-black text-blue-400">Top 5%</span>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Talent Pool</span>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}