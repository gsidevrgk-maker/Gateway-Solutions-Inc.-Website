"use client";
import { motion } from 'framer-motion';
import { Users, UserPlus, Briefcase, Search, Shield, Award } from 'lucide-react';

export default function StaffingPage() {
  const models = [
    { icon: Users, title: "Temporary Staffing", desc: "Agile deployment of qualified employees for short and long-term project assignments to meet immediate operational needs." },
    { icon: UserPlus, title: "Direct Hire", desc: "Expert sourcing, recruiting, and placement of full-time professionals within your organization on a contingency or retained basis." },
    { icon: Briefcase, title: "Temp-To-Hire", desc: "A cost-effective transition model supplying employees for projects with the seamless option to transition them to your internal payroll." },
    { icon: Search, title: "Executive Search", desc: "Leveraging our extensive database to successfully recruit and place high-level IT executives and visionary leadership." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-white mb-6">Staffing <span className="text-blue-500">Solutions</span></h1>
        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Gateway Solutions serves as a critical strategic partner, offering flexible, value-added outsourcing of staff augmentation services across the United States.
        </p>
      </motion.div>

      {/* Engagement Models Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {models.map((model, idx) => {
          const Icon = model.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex items-start gap-6"
            >
              <div className="w-14 h-14 bg-blue-950/50 rounded-2xl flex items-center justify-center border border-blue-900/50 flex-shrink-0">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{model.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* The Gateway Guarantees */}
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/90 to-blue-950/40 p-10 rounded-3xl border border-blue-500/30 backdrop-blur-sm"
        >
          <Shield className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Security Cleared Talent</h3>
          <p className="text-slate-300 leading-relaxed">
            We excel in recruiting difficult skill sets. Gateway Solutions specializes in vetting applicants capable of undergoing stringent government security investigations, ensuring they meet all eligibility requirements for access to classified information.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-900/90 to-blue-950/40 p-10 rounded-3xl border border-blue-500/30 backdrop-blur-sm"
        >
          <Award className="w-12 h-12 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">The Performance Guarantee</h3>
          <p className="text-slate-300 leading-relaxed">
            To ensure client expectations are flawlessly met, a dedicated Quality Assurance representative is assigned to every project. Furthermore, all GSI consultants come with a strict performance guarantee: if the job isn't getting done to your satisfaction, you don't pay, and the consultant is replaced.
          </p>
        </motion.div>
      </div>

    </div>
  );
}