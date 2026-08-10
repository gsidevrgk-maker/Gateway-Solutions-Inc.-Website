'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Printer, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const offices = [
    {
      name: 'Corporate Office',
      address: '12980, Metcalf Ave., Suite 330, Overland Park, Kansas - 66213',
      phone: '913-851-1055',
      fax: '815-366-8259',
    },
    {
      name: 'VA Office',
      address: '44295, Pawnee Terrace, Ashburn, VA - 20147',
      phone: '703-723-9747',
      fax: '703-723-9748',
    },
    {
      name: 'NC Office',
      address: '133 Key bridge Drive, Suite F, Morrisville, NC 27560',
      phone: '919-745-8123 x 1007',
      fax: '815-366-8259',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Get in <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Gateway Solutions operates through a 24x7 Global service model. Reach
          out to our corporate headquarters or regional offices to discover how
          we can pioneer your next web solution.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Office Locations */}
        <div className="lg:col-span-1 space-y-8">
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {office.name}
              </h3>
              <div className="space-y-4 text-slate-300 text-sm">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>{office.phone}</span>
                </p>
                <p className="flex items-center">
                  <Printer className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Fax: {office.fax}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-slate-900/60 p-10 rounded-3xl border border-white/10 backdrop-blur-sm h-full"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Send an Inquiry
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-slate-400 text-sm font-bold">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-slate-400 text-sm font-bold">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Send className="w-5 h-5 mr-2" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
