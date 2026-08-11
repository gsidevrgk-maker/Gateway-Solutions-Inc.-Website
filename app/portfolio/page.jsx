"use client";
import { motion } from 'framer-motion';
import { Cloud, LineChart, ShieldCheck, Calculator } from 'lucide-react';

export default function PortfolioPage() {
  const portfolioProjects = [
    {
      icon: <Calculator className="w-6 h-6 text-amber-600" />,
      title: "Enterprise Payroll & Attendance System",
      desc: "A highly customized web application engineered to streamline complex HR workflows. Features include automated attendance tracking, detailed leave encashment calculations, and comprehensive, real-time payroll reporting.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      icon: <Cloud className="w-6 h-6 text-amber-600" />,
      title: "Global Cloud Infrastructure Migration",
      desc: "Architected and executed a large-scale legacy migration to AWS for a multi-national financial institution. The new environment achieved 99.99% uptime and reduced ongoing operational costs by 40%.",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      icon: <LineChart className="w-6 h-6 text-amber-600" />,
      title: "AI-Driven Predictive Analytics",
      desc: "Developed a custom machine learning pipeline integrated directly into a retail client's supply chain. The model forecasts demand with 94% accuracy, dramatically optimizing inventory turnover.",
      tags: ["Python", "TensorFlow", "AWS SageMaker", "Power BI"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Zero-Trust Cybersecurity Framework",
      desc: "Conducted a comprehensive security overhaul for a major healthcare provider. Implemented zero-trust architectures ensuring strict HIPAA compliance and safeguarding sensitive patient data.",
      tags: ["Cybersecurity", "Zero-Trust", "HIPAA", "Splunk"]
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
          Our Success <span className="text-amber-600">Stories</span>
        </h1>
        
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-tight font-medium">
          Explore a selection of our most impactful enterprise projects. We deliver scalable software and strategic staffing solutions that solve complex technical challenges.
        </p>
      </motion.div>

      {/* --- PORTFOLIO GRID --- */}
      {/* Using 2 columns here gives the portfolio items plenty of room to display their descriptions and tech stacks cleanly */}
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioProjects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl border border-amber-300/60 shadow-xl group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
          >
            {/* Flex container for Icon + Title Side-by-Side */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 shrink-0 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
            </div>
            
            {/* Description with 1.25 line spacing */}
            <p className="text-slate-700 leading-tight font-medium mb-8 flex-grow">
              {project.desc}
            </p>

            {/* Tech Stack Tags at the bottom */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-amber-300/40">
              {project.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx} 
                  className="bg-white/60 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200/60 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}