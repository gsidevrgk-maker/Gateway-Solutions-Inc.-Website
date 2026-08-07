'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function CorporateOverview() {
  const values = [
    'Professionalism without pressure',
    'Decisiveness without divisiveness',
    'Collaboration without confrontation',
    'Agility and accountability',
  ];

  return (
    <section
      id="company"
      className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-slate-900">
            A World of Expertise in Information Technology.
          </h2>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
          <p className="text-slate-600 leading-relaxed text-lg">
            Founded in December 2000, Gateway Solutions, Inc. (GSI) has
            continuously provided Information Technology Staffing and Technical
            Services for over 8 years. We recognize that staying current isn't
            sufficient; you have to stay competitive by pinpointing
            opportunities and implementing initiatives with laser precision.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Our people are our success. We aggressively seek professionals who
            embody integrity, responsibility, accountability, perseverance, and
            teamwork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            An Approach That Is Creative, Comprehensive and Collaborative
          </h3>
          <ul className="space-y-4">
            {values.map((value, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-lg">
                  {value}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
