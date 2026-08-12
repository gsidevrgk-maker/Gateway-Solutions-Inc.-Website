"use client";
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, Send, Building } from 'lucide-react';

export default function ContactPage() {
  const locations = [
    { title: "Corporate Headquarters", state: "Kansas (KS)", address: "12980 Metcalf Ave, Suite 330, Overland Park, KS 66213", phone: "913-851-1055", fax: "913-535-2486", email: "HR@GatewaySI.com" },
    { title: "Regional Office", state: "North Carolina (NC)", address: "133 Keybridge Drive, Suite F, Morrisville, NC 27560", phone: "913-851-1055", fax: "913-535-2486", email: "HR@GatewaySI.com" },
    { title: "Regional Office", state: "Virginia (VA)", address: "44295 Pawnee Terr, Ashburn, VA 20147", phone: "703-723-9747", fax: "815-366-8259", email: "vuyyuru@GatewaySI.com" }
  ];

  return (
    /* Increased top padding (pt-32) to clear the navbar on mobile */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-screen relative">
      
      {/* --- OPTIMIZED RESPONSIVE HEADER SECTION --- */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-20 px-2">
        {/* Changed to flex-wrap and responsive text sizes */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2">
          Get in <span className="text-amber-600">Touch</span>
        </h1>
        {/* Adjusted mobile text size and line height */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          Whether you are looking to augment your IT staff, embark on a major infrastructure modernization, or inquire about our consulting services, our strategists are ready to assist.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
        
        {/* Adjusted card padding for mobile (p-6 md:p-10) */}
        <motion.div className="lg:col-span-3 bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-amber-300/60">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 border-l-4 border-amber-500 pl-4">Send an Inquiry</h2>
          <form action="https://formsubmit.co/hr@gatewaysi.com" method="POST" className="space-y-4 md:space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://gatewaysi.com/" />
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Email Address *</label>
                <input type="email" name="email" required className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">How can we help you? *</label>
              <textarea name="message" required rows="5" className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" placeholder="Briefly describe your project or staffing needs..."></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-xl transition-all shadow-lg flex items-center justify-center group">
              Submit Inquiry <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <motion.div className="lg:col-span-2 space-y-6">
          {locations.map((loc, idx) => (
            /* Adjusted card padding for mobile (p-6 md:p-8) */
            <div key={idx} className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-300/60 shadow-xl relative overflow-hidden group">
              <Building className="absolute -right-6 -bottom-6 w-32 h-32 text-amber-200/40 pointer-events-none" />
              <h3 className="text-xl font-bold text-slate-900 mb-1 relative z-10">{loc.title}</h3>
              <p className="text-amber-700 text-sm font-bold mb-4 md:mb-6 relative z-10">{loc.state}</p>
              <div className="space-y-3 md:space-y-4 relative z-10">
                <div className="flex items-start"><MapPin className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><span className="text-slate-700 text-sm font-medium">{loc.address}</span></div>
                <div className="flex items-center"><Phone className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" /><span className="text-slate-700 text-sm font-medium">{loc.phone}</span></div>
                <div className="flex items-center"><Printer className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" /><span className="text-slate-700 text-sm font-medium">Fax: {loc.fax}</span></div>
                <div className="flex items-center"><Mail className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" /><a href={`mailto:${loc.email}`} className="text-amber-700 text-sm font-bold hover:underline truncate">{loc.email}</a></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}