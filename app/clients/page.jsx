'use client';
import { motion } from 'framer-motion';
import { Building2, Landmark } from 'lucide-react';

export default function ClientsPage() {
  const publicSector = [
    'State of North Carolina',
    'State of South Carolina',
    'State of Colorado',
    'State of Oregon',
    'State of Georgia',
    'State of Mississippi',
    'State of Virginia',
    'State of Iowa (DHS)',
    'State of Pennsylvania',
    'US Navy',
    'US Dept of Agriculture',
    'US Dept of Veteran Affairs',
  ];

  const commercialSector = [
    'Bank of NY Mellon',
    'Caterpillar',
    'Mutual of Omaha',
    'Liberty Mutual',
    'BestBuy',
    'Barclays Bank',
    'JP Morgan Chase',
    'Verizon',
    'Sprint-Nextel',
    'AT&T',
    'Celgene Pharmaceuticals',
    'Publix Supermarkets',
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Our <span className="text-blue-500">Trusted Clients</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Gateway Solutions is proud to serve as a critical strategic partner
          for leading public sector agencies and Fortune 1000 companies across
          the United States.
        </p>
      </motion.div>

      {/* Public Sector Section */}
      <div className="mb-24">
        <div className="flex items-center mb-10 border-b border-slate-700 pb-4">
          <Landmark className="w-8 h-8 text-blue-500 mr-4" />
          <h2 className="text-3xl font-bold text-white">
            Public Sector & Government
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {publicSector.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 hover:border-blue-500 transition-all group h-40"
            >
              {/* Logo Placeholder - Replace the src with actual client logos later */}
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-900/50 transition-colors">
                <Landmark className="w-6 h-6 text-slate-500 group-hover:text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Commercial Sector Section */}
      <div>
        <div className="flex items-center mb-10 border-b border-slate-700 pb-4">
          <Building2 className="w-8 h-8 text-blue-500 mr-4" />
          <h2 className="text-3xl font-bold text-white">
            Commercial & Fortune 1000
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {commercialSector.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 hover:border-blue-500 transition-all group h-40"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-900/50 transition-colors">
                <Building2 className="w-6 h-6 text-slate-500 group-hover:text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
