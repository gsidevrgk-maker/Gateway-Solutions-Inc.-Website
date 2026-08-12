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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-12 min-h-screen relative">
      
      {/* --- TIGHTENED RESPONSIVE HEADER SECTION --- */}
      {/* Reduced mb-20 down to mb-8 to pull the cards up closer */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 px-2">
        
        {/* Reduced mb-6 to mb-2 to pull the description up */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2 flex flex-wrap items-center justify-center gap-2">
          Get in <span className="text-amber-600">Touch</span>
        </h1>
        
        {/* Added explicit leading-[1.25] */}
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-[1.25] font-medium">
          Whether you are looking to augment your IT staff, embark on a major infrastructure modernization, or inquire about our consulting services, our strategists are ready to assist.
        </p>
      </motion.div>

      {/* Reduced gap-12 to gap-8 for tighter column spacing */}
      <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
        
        {/* Left Column: Form */}
        <motion.div className="lg:col-span-3 bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-amber-300/60 h-fit">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-4 leading-[1.25]">Send an Inquiry</h2>
          
          <form action="https://formsubmit.co/hr@gatewaysi.com" method="POST" className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://gatewaysi.com/" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5 leading-[1.25]">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5 leading-[1.25]">Email Address *</label>
                <input type="email" name="email" required className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5 leading-[1.25]">How can we help you? *</label>
              <textarea name="message" required rows="4" className="w-full bg-white/80 border border-amber-300/60 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none" placeholder="Briefly describe your project or staffing needs..."></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-base md:text-lg py-3 rounded-xl transition-all shadow-lg flex items-center justify-center group mt-2">
              Submit Inquiry <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Right Column: Contact Cards */}
        {/* Changed space-y-6 to space-y-4 to pull the location cards tighter together */}
        <motion.div className="lg:col-span-2 space-y-4">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-amber-300/60 shadow-xl relative overflow-hidden group">
              <Building className="absolute -right-6 -bottom-6 w-32 h-32 text-amber-200/40 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-0.5 relative z-10 leading-[1.25]">{loc.title}</h3>
              <p className="text-amber-700 text-sm font-bold mb-3 relative z-10 leading-[1.25]">{loc.state}</p>
              
              {/* Changed space-y-4 to space-y-2 to tighten icon rows, and added leading-[1.25] to all text spans */}
              <div className="space-y-2 relative z-10">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-amber-600 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium leading-[1.25]">{loc.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-amber-600 mr-2.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium leading-[1.25]">{loc.phone}</span>
                </div>
                <div className="flex items-center">
                  <Printer className="w-4 h-4 text-amber-600 mr-2.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium leading-[1.25]">Fax: {loc.fax}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-amber-600 mr-2.5 flex-shrink-0" />
                  <a href={`mailto:${loc.email}`} className="text-amber-700 text-sm font-bold hover:underline truncate leading-[1.25]">{loc.email}</a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}