"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, X, Mail, ChevronRight, User } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock data - We will replace this with Supabase data in the next step
  const mockJobs = [
    {
      id: 1,
      title: "AI Integration Specialist",
      location: "Overland Park, KS (Hybrid)",
      type: "Full-Time",
      desc: "Lead the implementation of advanced artificial intelligence models and automation tools into existing enterprise client architectures.",
      responsibilities: [
        "Develop and deploy machine learning models.",
        "Integrate LLMs into enterprise workflows.",
        "Collaborate with stakeholders to identify automation opportunities."
      ],
      requirements: [
        "Strong background in Artificial Intelligence and Python.",
        "Experience with cloud AI services (AWS/GCP).",
        "Excellent analytical and problem-solving skills."
      ],
      contactName: "Sarah Jenkins",
      contactEmail: "s.jenkins@gatewaysi.com"
    },
    {
      id: 2,
      title: "HR & Payroll Systems Engineer",
      location: "Morrisville, NC (Remote)",
      type: "Contract",
      desc: "Develop and test customized web applications featuring comprehensive payroll management and automated real-time attendance tracking functionalities.",
      responsibilities: [
        "Architect and maintain robust payroll processing modules.",
        "Implement leave encashment and attendance logic.",
        "Ensure data security and compliance with state regulations."
      ],
      requirements: [
        "Proven experience building HR/Payroll software.",
        "Proficiency in React, Node.js, and SQL.",
        "Understanding of complex enterprise HR workflows."
      ],
      contactName: "David Vuyyuru",
      contactEmail: "vuyyuru@gatewaysi.com"
    },
    {
      id: 3,
      title: "Senior Cybersecurity Analyst",
      location: "Ashburn, VA (On-Site)",
      type: "Full-Time",
      desc: "Deliver highly cleared cybersecurity expertise to secure vulnerable state endpoints and implement zero-trust architectures.",
      responsibilities: [
        "Perform active threat hunting and analytics.",
        "Design zero-trust network protocols.",
        "Conduct regular vulnerability assessments."
      ],
      requirements: [
        "Active Security Clearance required.",
        "CISSP or equivalent certification.",
        "5+ years in enterprise network security."
      ],
      contactName: "Marcus Thorne",
      contactEmail: "m.thorne@gatewaysi.com"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12 min-h-screen">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Join Our <span className="text-amber-600">Team</span></h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Gateway Solutions is always looking for elite talent. Explore our open positions and become part of a workforce that drives enterprise technology forward.
        </p>
      </motion.div>

      {/* Job Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockJobs.map((job, idx) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedJob(job)}
            className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl border border-amber-300/60 shadow-xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
              <Briefcase className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{job.title}</h3>
            
            <div className="space-y-2 mb-6 flex-grow">
              <div className="flex items-center text-sm font-semibold text-amber-800">
                <MapPin className="w-4 h-4 mr-2 text-amber-600" /> {job.location}
              </div>
              <div className="flex items-center text-sm font-semibold text-amber-800">
                <Clock className="w-4 h-4 mr-2 text-amber-600" /> {job.type}
              </div>
            </div>
            
            <button className="flex items-center text-amber-700 font-bold text-sm group-hover:text-amber-600 transition-colors mt-auto pt-4 border-t border-amber-200/60">
              View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal / Dialogue Box */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Dark overlay background */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setSelectedJob(null)}
            />
            
            {/* Modal Content - Golden Glassmorphism */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-amber-50/95 via-yellow-50/90 to-amber-100/95 backdrop-blur-xl border border-amber-300/60 shadow-2xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 p-8 sm:p-10"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 bg-amber-200/50 hover:bg-amber-300/50 rounded-full text-amber-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-black text-slate-900 mb-4 pr-10">{selectedJob.title}</h2>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60">
                  <MapPin className="w-4 h-4 mr-1.5 text-amber-700" /> {selectedJob.location}
                </span>
                <span className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60">
                  <Clock className="w-4 h-4 mr-1.5 text-amber-700" /> {selectedJob.type}
                </span>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Job Description</h4>
                  <p className="text-slate-700 leading-relaxed font-medium">{selectedJob.desc}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Key Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Requirements</h4>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-amber-200 mt-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Contact Hiring Manager</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700 font-medium">
                      <User className="w-5 h-5 mr-3 text-amber-600" /> {selectedJob.contactName}
                    </div>
                    <div className="flex items-center text-slate-700 font-medium">
                      <Mail className="w-5 h-5 mr-3 text-amber-600" /> 
                      <a href={`mailto:${selectedJob.contactEmail}`} className="text-amber-700 hover:underline font-bold">
                        {selectedJob.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}