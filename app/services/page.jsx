"use client";
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Shield, 
  Code2, 
  BrainCircuit, 
  CloudCog, 
  DatabaseZap, 
  Briefcase 
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { 
      icon: BrainCircuit, 
      title: "Artificial Intelligence & ML", 
      desc: "Supplying elite talent for next-generation initiatives, including LLM integration, predictive analytics, and algorithmic data processing to future-proof enterprise workflows." 
    },
    { 
      icon: CloudCog, 
      title: "Cloud & DevOps Engineering", 
      desc: "Accelerating digital transformation with specialized consultants in AWS, Azure, and Google Cloud, focusing on scalable infrastructure, CI/CD pipelines, and containerization (Kubernetes)." 
    },
    { 
      icon: Code2, 
      title: "Custom HR & Payroll Systems", 
      desc: "Building and deploying tailored data processing tools. We engineer customized web applications featuring robust payroll management and automated, real-time attendance tracking functionalities." 
    },
    { 
      icon: DatabaseZap, 
      title: "Data Engineering & ETL", 
      desc: "Architecting massive data pipelines and warehousing solutions. Providing experts in Informatica, Snowflake, Databricks, and complex EDI mapping for Fortune 1000 ecosystems." 
    },
    { 
      icon: Shield, 
      title: "Cybersecurity & InfoSec", 
      desc: "Deploying highly-vetted security analysts and engineers to implement Zero-Trust architectures, threat hunting, and compliance governance for critical State and Federal networks." 
    },
    { 
      icon: Briefcase, 
      title: "ERP & CRM Implementation", 
      desc: "Driving enterprise efficiency with veteran functional and technical consultants across major platforms including SAP, Oracle ERP, PeopleSoft, and Salesforce." 
    },
    { 
      icon: Globe, 
      title: "Modern Full-Stack Web", 
      desc: "Delivering high-performance, interactive web applications using the latest JavaScript frameworks like React, Next.js, and Node.js to create seamless, user-centric digital experiences." 
    },
    { 
      icon: Smartphone, 
      title: "Mobile App Development", 
      desc: "Leveraging liberating mobile technologies to build cross-platform and native iOS/Android enterprise applications that synchronize securely with corporate server gateways." 
    },
    { 
      icon: Server, 
      title: "Managed IT & Infrastructure", 
      desc: "Providing 24/7 global support models, network administration, and world-class data center management guaranteeing 99.90% uptime for high-bandwidth corporate environments." 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Enterprise <span className="text-blue-500">Capabilities</span></h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          From Artificial Intelligence to legacy system modernization, Gateway Solutions maintains a deep, actively vetted bench of top-tier IT professionals ready to deploy across every major technology vertical in the market.
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
              className="group bg-slate-900/80 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-950/50 rounded-2xl flex items-center justify-center mb-6 border border-blue-900/50 group-hover:scale-110 group-hover:bg-blue-900/50 transition-all">
                <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-grow">{srv.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}