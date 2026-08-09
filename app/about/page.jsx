"use client";
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  Building 
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: Clock, value: "25+", label: "Years of Excellence", desc: "Established in 2000" },
    { icon: Award, value: "ISO 9001", label: "Certified", desc: "Uncompromising Quality" },
    { icon: ShieldCheck, value: "CMM L4", label: "Implementation", desc: "Process Maturity" },
    { icon: Globe2, value: "24x7", label: "Global Delivery", desc: "Always-On Support" }
  ];

  const methodologies = [
    { step: "1. Discovery & URS", desc: "Deep-dive analysis into your software requirements, defining intended users, and formulating precise objective statements." },
    { step: "2. Initial Development", desc: "Rapid prototyping and deployment of software and servers strictly aligned with the client's strategic specifications." },
    { step: "3. Client Approval", desc: "Transparent presentation of the initial version to stakeholders for iterative modification and approval." },
    { step: "4. Incorporation", desc: "Our elite developers and designers implement precise changes, modifications, and redesigning requests." },
    { step: "5. Quality Testing", desc: "Stringent QA measures ensuring total conformity to ISO standards prior to final deployment." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      
      {/* Strategic Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-950/50 border border-blue-800/50 rounded-full px-4 py-2 mb-6 text-blue-400 text-sm font-bold tracking-wider uppercase">
          <Building className="w-4 h-4" />
          <span>Established 2000</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
          A Quarter Century of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IT Excellence.</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          For over 25 years, Gateway Solutions has served as the bedrock of enterprise technology deployment. Since 2000, we have provided a full complementary range of multi-disciplinary solutions, powered by a highly dexterous workforce that evolves in parallel with cutting-edge technologies.
        </p>
      </motion.div>

      {/* Trust Metrics Grid (Lead Gen Optimization) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/80 p-6 rounded-3xl border border-slate-700 text-center backdrop-blur-sm shadow-xl"
            >
              <div className="mx-auto bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-blue-800/50">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-blue-400 font-bold text-sm uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-slate-400 text-xs">{stat.desc}</p>
            </motion.div>
          )
        })}
      </div>

      {/* The "Why Us" Narrative */}
      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-slate-900/80 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm h-full">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">Elite Manpower</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Experience mitigates risk. We prepossess some of the best professional teams in our areas of specialization, ensuring your enterprise initiatives are guided by proven veterans.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-slate-300 font-medium text-sm">
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> Project Architects</li>
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> Mobile Experts</li>
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> Network/Server Admins</li>
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> App Developers</li>
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> Banking Analysts</li>
              <li className="flex items-center"><CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" /> Hyper-Programmers</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-900/80 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">Our Methodology</h2>
          <div className="space-y-6">
            {methodologies.map((m, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center group-hover:bg-blue-900/50 group-hover:border-blue-500 transition-colors">
                    <span className="text-slate-300 text-sm font-bold group-hover:text-blue-400">{idx + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{m.step.substring(3)}</h4>
                  <p className="text-slate-400 mt-1 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lead Generation CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/80 to-slate-900/80 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(37,99,235,0.15)]"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Leverage 25+ Years of Expertise?</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Partner with a firm that has consistently delivered qualitative and innovative software solutions since 2000. Let us extend your competitive advantage.
        </p>
        <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Connect With Our Strategists <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>

    </div>
  );
}