'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const methodologies = [
    {
      step: '1. Discovery',
      desc: 'Understanding software requirements, defining intended users, formulating objective statements, and gathering flow information.',
    },
    {
      step: '2. Initial Development',
      desc: "Developing and deploying the software/servers strictly as per the client's specifications.",
    },
    {
      step: '3. Approval By Client',
      desc: 'Presenting the initial version to the client for modification and approval.',
    },
    {
      step: '4. Incorporation',
      desc: 'Our developers and designers implement changes, modifications, and redesigning requests.',
    },
    {
      step: '5. Quality Testing',
      desc: 'Stringent quality measures ensuring conformity to ISO standards prior to final delivery.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
          About Gateway Solutions
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
          Our mission is to deliver on-time every time, qualitative and
          innovative software solutions that extend clients with competitive
          advantage in their functional areas. We utilize a highly dexterous
          Project Management System that functions as a single point protocol
          coordinating various departments.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/60 p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-8">
            Our Methodology
          </h2>
          <div className="space-y-6">
            {methodologies.map((m, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{m.step}</h4>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Quality Process
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Gateway Solutions has a full-fledged QA team that ensures, through
              rigorous testing, ISO compliant processes and qualitative output
              of all applications/products that are being rolled out.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Elite Manpower
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We prepossess some of the best professional teams in our areas of
              specialization, including:
            </p>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
              <li>• Project Management Architects</li>
              <li>• Application & Product Developers</li>
              <li>• Network/Server Administrators</li>
              <li>• Banking Software Analysts</li>
              <li>• Mobile Applications Experts</li>
              <li>• Hyper-Programmers</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
