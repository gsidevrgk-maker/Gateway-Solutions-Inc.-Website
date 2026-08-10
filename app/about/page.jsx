"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Award, Globe2, ShieldCheck, Building } from 'lucide-react';

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
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-amber-100/80 border border-amber-300/60 rounded-full px-4 py-2 mb-6 text-amber-900 text-sm font-bold tracking-wider uppercase shadow-sm">
          <Building className="w-4 h-4 text-amber-600" />
          <span>Established 2000</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          A Quarter Century of <span className="text-amber-600">IT Excellence.</span>
        </h1>
        <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
          For over 25 years, Gateway Solutions has served as the bedrock of enterprise technology deployment. Since 2000, we have provided a full complementary range of multi-disciplinary solutions, powered by a highly dexterous workforce that evolves in parallel with cutting-edge technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 rounded-3xl text-center shadow-xl border border-amber-300/60"
            >
              <div className="mx-auto bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-amber-300/60">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-amber-700 font-bold text-sm uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-slate-600 text-xs font-medium">{stat.desc}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl shadow-xl h-full border border-amber-300/60">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-amber-500 pl-4">Elite Manpower</h2>
            <p className="text-slate-700 leading-relaxed mb-8 font-medium">
              Experience mitigates risk. We prepossess some of the best professional teams in our areas of specialization, ensuring your enterprise initiatives are guided by proven veterans.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-slate-800 font-semibold text-sm">
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> Project Architects</li>
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> Mobile Experts</li>
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> Network/Server Admins</li>
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> App Developers</li>
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> Banking Analysts</li>
              <li className="flex items-center"><CheckCircle2 className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" /> Hyper-Programmers</li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-amber-300/60">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-amber-500 pl-4">Our Methodology</h2>
          <div className="space-y-4">
            {methodologies.map((m, idx) => (
/home/gsidevrgk-maker/Gateway-Solutions-Inc.-Website/app/clients              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border border-amber-300/60">
                    <span className="text-amber-800 text-sm font-bold">{idx + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base">{m.step.substring(3)}</h4>
                  <p className="text-slate-700 mt-0.5 text-xs font-medium leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}