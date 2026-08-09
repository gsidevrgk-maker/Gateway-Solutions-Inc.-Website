"use client";
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, Send, Building } from 'lucide-react';

export default function ContactPage() {
  const locations = [
    { title: "Corporate Headquarters", state: "Kansas (KS)", address: "12980 Metcalf Ave, Suite 330, Overland Park, KS 66213", phone: "913-851-1055", fax: "913-535-2486", email: "HR@GatewaySI.com" },
    { title: "Regional Office", state: "North Carolina (NC)", address: "Morrisville, NC", phone: "913-851-1055", fax: "913-535-2486", email: "HR@GatewaySI.com" },
    { title: "Regional Office", state: "Virginia (VA)", address: "44295 Pawnee Terr, Ashburn, VA 20147", phone: "703-723-9747", fax: "815-366-8259", email: "vuyyuru@GatewaySI.com" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Get in <span className="text-blue-600">Touch</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you are looking to augment your IT staff, embark on a major infrastructure modernization, or inquire about our consulting services, our strategists are ready to assist.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div className="lg:col-span-3 bg-slate-900 p-10 rounded-3xl shadow-xl border border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">Send an Inquiry</h2>
          <form action="https://formsubmit.co/hr@gatewaysi.com" method="POST" className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://gatewaysi.com/" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">How can we help you? *</label>
              <textarea name="message" required rows="5" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Briefly describe your project or staffing needs..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center group">
              Submit Inquiry <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <motion.div className="lg:col-span-2 space-y-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <Building className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-800/50 group-hover:text-blue-900/20 transition-colors pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-1 relative z-10">{loc.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-6 relative z-10">{loc.state}</p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-start"><MapPin className="w-5 h-5 text-slate-500 mr-3 mt-0.5" /><span className="text-slate-300 text-sm">{loc.address}</span></div>
                <div className="flex items-center"><Phone className="w-5 h-5 text-slate-500 mr-3" /><span className="text-slate-300 text-sm">{loc.phone}</span></div>
                <div className="flex items-center"><Printer className="w-5 h-5 text-slate-500 mr-3" /><span className="text-slate-300 text-sm">Fax: {loc.fax}</span></div>
                <div className="flex items-center"><Mail className="w-5 h-5 text-slate-500 mr-3" /><a href={`mailto:${loc.email}`} className="text-blue-400 text-sm hover:underline">{loc.email}</a></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}