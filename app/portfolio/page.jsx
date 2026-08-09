"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, MonitorSmartphone, Database, Briefcase, Landmark, Users, Cpu, ShieldCheck } from 'lucide-react';

export default function PortfolioPage() {
  const caseStudies = [
    { icon: Landmark, title: "Citizen Portal Modernization", client: "State of North Carolina", desc: "Supplied a dedicated team of elite .NET developers to spearhead the redesign of a public-facing state portal, significantly improving accessibility.", tags: [".NET Core", "Azure", "UI/UX Design"] },
    { icon: Database, title: "Legacy Systems Migration", client: "State of South Carolina", desc: "Partnered with state agencies to transition decades-old monolithic databases to highly-available environments, driven by specialized Java teams.", tags: ["Java", "Spring Boot", "Oracle 11g"] },
    { icon: Cpu, title: "Intelligent Process Automation", client: "State of Arkansas", desc: "Placed forward-thinking technology specialists to develop predictive models and automate routine data processing using state-of-the-art AI.", tags: ["Artificial Intelligence", "Python", "Machine Learning"] },
    { icon: Users, title: "Large-Scale IT Augmentation", client: "State of Michigan", desc: "Deployed a rapid-response team of 40+ senior consultants to accelerate a statewide infrastructure overhaul and enterprise architecture.", tags: ["IT Staffing", "Agile PM", "Infrastructure"] },
    { icon: MonitorSmartphone, title: "HR & Operational Systems", client: "State of Georgia", desc: "Successfully developed and tested a customized web application featuring comprehensive payroll management and automated real-time attendance tracking.", tags: ["React", "Node.js", "SQL Server"] },
    { icon: ShieldCheck, title: "Statewide Network Security", client: "Multiple State Agencies", desc: "Delivered highly cleared cybersecurity talent to secure vulnerable state endpoints, perform threat analytics, and implement zero-trust architectures.", tags: ["Cybersecurity", "Zero-Trust", "Network Admin"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Consulting <span className="text-blue-600">Portfolio</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Showcasing our proven track record of deploying elite IT talent and delivering robust enterprise solutions for Fortune 1000 companies and State Government agencies across the nation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, idx) => {
          const Icon = study.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-blue-900/30 w-14 h-14 rounded-2xl flex items-center justify-center border border-blue-800/50 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <span className="text-xs font-bold text-blue-300 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">
                  {study.client}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed flex-grow text-sm">{study.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                {study.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-full border border-slate-700 font-semibold">
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