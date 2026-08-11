"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, X, ChevronRight, Loader2, Lock, LogOut, Edit, Trash2, Plus, Mail, Upload, Phone, Globe, FileText, IdCard } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import emailjs from '@emailjs/browser';

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Admin & Auth State
  const [session, setSession] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Job Form State
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '', location: '', type: 'Full-Time', locals: 'All', taxStatus: 'W2', visaStatus: 'Open', 
    desc: '', responsibilities: '', requirements: '', contactName: '', contactEmail: ''
  });

  // Application State
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchJobs();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user?.email) {
        setApplicantEmail(session.user.email);
      }
      
      const pendingJobStr = localStorage.getItem('pendingApplication');
      if (session && session.user && pendingJobStr) {
        if (session.user.app_metadata.provider === 'google') {
          setSelectedJob(JSON.parse(pendingJobStr));
          localStorage.removeItem('pendingApplication'); 
        }
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user?.email) setApplicantEmail(session.user.email);
    });
    
    return () => subscription.unsubscribe();
  }, []);

  async function fetchJobs() {
    setLoading(true);
    const { data, error } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      const mappedJobs = data.map(job => ({
        ...job, contactName: job.contactname || job.contactName, contactEmail: job.contactemail || job.contactEmail
      }));
      setJobs(mappedJobs);
    }
    setLoading(false);
  }

  // --- ADMIN AUTHENTICATION ---
  async function handleAdminLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
    if (error) alert(error.message);
    else { setShowLogin(false); setLoginEmail(''); setLoginPassword(''); }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  // --- JOB CRUD OPERATIONS ---
  function openForm(job = null) {
    if (job) {
      setEditingJob(job);
      setFormData({ 
        ...job, 
        locals: job.locals || 'All',
        taxStatus: job.tax_status || 'W2',
        visaStatus: job.visa_status || 'Open',
        responsibilities: job.responsibilities?.join('\n') || '', 
        requirements: job.requirements?.join('\n') || '' 
      });
    } else {
      setEditingJob(null);
      setFormData({ title: '', location: '', type: 'Full-Time', locals: 'All', taxStatus: 'W2', visaStatus: 'Open', desc: '', responsibilities: '', requirements: '', contactName: '', contactEmail: '' });
    }
    setShowForm(true);
  }

  async function handleSaveJob(e) {
    e.preventDefault();
    const jobData = {
      title: formData.title, location: formData.location, type: formData.type, 
      locals: formData.locals, tax_status: formData.taxStatus, visa_status: formData.visaStatus,
      desc: formData.desc,
      responsibilities: formData.responsibilities.split('\n').filter(line => line.trim() !== ''),
      requirements: formData.requirements.split('\n').filter(line => line.trim() !== ''),
      contactname: formData.contactName, contactemail: formData.contactEmail
    };

    if (editingJob) {
      const { error } = await supabase.from('jobs').update(jobData).eq('id', editingJob.id);
      if (error) alert("Failed to update: " + error.message);
    } else {
      const { error } = await supabase.from('jobs').insert([jobData]);
      if (error) alert("Failed to save: " + error.message);
    }
    setShowForm(false);
    fetchJobs();
  }

  async function handleDeleteJob(id, e) {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      await supabase.from('jobs').delete().eq('id', id);
      fetchJobs();
    }
  }

  // --- PUBLIC APPLY FLOW VIA GOOGLE OAUTH ---
  async function handleApplyWithGoogle() {
    localStorage.setItem('pendingApplication', JSON.stringify(selectedJob));
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google', options: { redirectTo: `${window.location.origin}/careers` }
    });
    if (error) {
      alert("Error connecting to Google.");
      localStorage.removeItem('pendingApplication');
    }
  }

  // --- AUTOMATED UPLOAD & EMAIL DISPATCH ---
  async function processApplication(e) {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please select a resume to upload.");
      return;
    }
    if (!applicantPhone || !applicantEmail) {
      alert("Please provide both email and phone number.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const user = session.user;
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('resumes').upload(fileName, resumeFile);
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('resumes').getPublicUrl(fileName);

      const serviceID = 'service_kae19xl'; 
      const templateID = 'template_avqlh';
      const publicKey = 'L_4sEBwSjARFZtehc';

      const templateParams = {
        hiring_manager: selectedJob.contactName || selectedJob.contactname || "Hiring Manager",
        job_title: selectedJob.title,
        applicant_name: user.user_metadata.full_name || "Applicant",
        applicant_email: applicantEmail, 
        applicant_phone: applicantPhone,
        to_email: selectedJob.contactEmail || selectedJob.contactemail,
        resume_link: publicUrl
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      alert(`Success! Your application and resume for ${selectedJob.title} have been securely sent.`);
      setSelectedJob(null);
      setResumeFile(null);
      setApplicantPhone('');
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("There was an issue submitting your application. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-screen relative">
      
      {/* --- OPTIMIZED RESPONSIVE HEADER SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-10 md:mb-12 relative px-2"
      >
        {/* Changed to flex-col on mobile so the button doesn't squish the text */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">Join Our <span className="text-amber-600 ml-1">Team</span></div>
          
          <div className="flex items-center mt-2 md:mt-0">
            {!session ? (
              <button onClick={() => setShowLogin(true)} className="p-3 bg-white/80 hover:bg-amber-100 rounded-full transition-colors group shadow-sm border border-slate-200" title="Admin Login">
                <Lock className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </button>
            ) : (
              <button onClick={handleLogout} className="p-3 bg-white/80 hover:bg-red-50 rounded-full transition-colors group shadow-sm border border-slate-200" title="Logout">
                <LogOut className="w-5 h-5 md:w-6 md:h-6 text-red-400 group-hover:text-red-600 transition-colors" />
              </button>
            )}
          </div>
        </h1>
        
        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed md:leading-tight font-medium">
          Gateway Solutions is always looking for elite talent. Explore our open positions and become part of a workforce that drives enterprise technology forward.
        </p>

        {session && session.user.app_metadata.provider !== 'google' && (
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => openForm()}
            className="mt-8 mx-auto flex items-center bg-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-amber-500 transition-all hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" /> Post New Job
          </motion.button>
        )}
      </motion.div>

      {/* --- JOBS GRID --- */}
      {loading ? (
        <div className="flex justify-center items-center h-40"><Loader2 className="w-10 h-10 text-amber-600 animate-spin" /></div>
      ) : jobs.length === 0 ? (
        <div className="text-center text-slate-500 font-medium bg-amber-50/50 p-10 rounded-3xl border border-amber-200 mx-2">No open positions currently available.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <motion.div 
              key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedJob(job)}
              className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-300/60 shadow-xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full relative"
            >
              {session && session.user.app_metadata.provider !== 'google' && (
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button onClick={(e) => { e.stopPropagation(); openForm(job); }} className="p-2 bg-white/60 hover:bg-white rounded-full text-blue-600 shadow-sm transition"><Edit className="w-4 h-4" /></button>
                  <button onClick={(e) => handleDeleteJob(job.id, e)} className="p-2 bg-white/60 hover:bg-red-100 rounded-full text-red-600 shadow-sm transition"><Trash2 className="w-4 h-4" /></button>
                </div>
              )}

              <div className="flex items-center gap-4 mb-4 pr-12">
                <div className="w-12 h-12 shrink-0 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                  <Briefcase className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{job.title}</h3>
              </div>
              
              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-sm font-semibold text-amber-800"><MapPin className="w-4 h-4 mr-2 text-amber-600 shrink-0" /> <span className="truncate">{job.location}</span></div>
                <div className="flex items-center text-sm font-semibold text-amber-800"><Clock className="w-4 h-4 mr-2 text-amber-600 shrink-0" /> {job.type}</div>
              </div>
              
              <button className="flex items-center text-amber-700 font-bold text-sm group-hover:text-amber-600 transition-colors mt-auto pt-4 border-t border-amber-200/60">
                View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* --- PUBLIC JOB DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedJob && !showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-6 pt-28 md:pt-32">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-gradient-to-br from-amber-50/95 via-yellow-50/90 to-amber-100/95 backdrop-blur-xl border border-amber-300/60 shadow-2xl rounded-3xl w-full max-w-3xl max-h-[calc(100vh-8rem)] overflow-y-auto relative z-10 p-6 sm:p-10 mb-8">
              <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-amber-200/50 hover:bg-amber-300/50 rounded-full text-amber-900 transition-colors"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 pr-10">{selectedJob.title}</h2>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><MapPin className="w-4 h-4 mr-1 text-amber-700" /> {selectedJob.location}</span>
                <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><Clock className="w-4 h-4 mr-1 text-amber-700" /> {selectedJob.type}</span>
                {selectedJob.locals && <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><Globe className="w-4 h-4 mr-1 text-amber-700" /> {selectedJob.locals}</span>}
                {selectedJob.tax_status && <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><FileText className="w-4 h-4 mr-1 text-amber-700" /> {selectedJob.tax_status}</span>}
                {selectedJob.visa_status && <span className="flex items-center text-xs font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><IdCard className="w-4 h-4 mr-1 text-amber-700" /> {selectedJob.visa_status}</span>}
              </div>

              <div className="space-y-8">
                <div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Job Description</h4><p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-base">{selectedJob.desc}</p></div>
                {selectedJob.responsibilities && (<div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Key Responsibilities</h4><ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-sm sm:text-base">{selectedJob.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}</ul></div>)}
                {selectedJob.requirements && (<div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Requirements</h4><ul className="list-disc list-inside space-y-2 text-slate-700 font-medium text-sm sm:text-base">{selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}</ul></div>)}

                <div className="bg-white/60 p-6 sm:p-8 rounded-3xl border border-amber-200 mt-8 shadow-sm text-center">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Ready to Join?</h4>
                  <p className="text-slate-600 leading-tight font-medium mb-6 text-sm sm:text-base">Hiring Manager: {selectedJob.contactName || selectedJob.contactname}</p>
                  
                  {!session || session?.user?.app_metadata?.provider !== 'google' ? (
                    <button onClick={handleApplyWithGoogle} className="w-full sm:w-auto mx-auto flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 text-sm sm:text-base">
                      <Mail className="w-5 h-5 mr-3" /> Step 1: Sign in with Gmail
                    </button>
                  ) : (
                    <form onSubmit={processApplication} className="max-w-lg mx-auto space-y-5">
                      <div className="text-left bg-amber-50/70 p-4 sm:p-5 rounded-2xl border border-amber-200 space-y-4 shadow-sm">
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center">
                              <Mail className="w-4 h-4 mr-1.5 text-amber-600" /> Confirm Email
                            </label>
                            <input 
                              type="email" required value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)}
                              className="w-full p-2.5 bg-white border border-amber-200 rounded-xl text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center">
                              <Phone className="w-4 h-4 mr-1.5 text-amber-600" /> Phone Number
                            </label>
                            <input 
                              type="tel" required placeholder="(555) 123-4567" value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)}
                              className="w-full p-2.5 bg-white border border-amber-200 rounded-xl text-sm"
                            />
                          </div>
                        </div>

                        <div className="pt-2">
                          <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                            <Upload className="w-4 h-4 mr-1.5 text-amber-600" /> Upload Resume
                          </label>
                          <input 
                            type="file" required accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files[0])}
                            className="w-full text-xs sm:text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-bold file:bg-amber-600 file:text-white hover:file:bg-amber-500 cursor-pointer"
                          />
                        </div>
                      </div>
                      
                      <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 text-sm sm:text-base">
                        {isSubmitting ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
                        {isSubmitting ? "Submitting Application..." : "Step 2: Submit Application"}
                      </button>
                    </form>
                  )}
                  <p className="text-xs text-slate-500 mt-5">By applying, your contact details and resume will be securely sent directly to the hiring manager.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADMIN LOGIN MODAL --- */}
      {showLogin && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-28 md:pt-32 bg-slate-900/60 backdrop-blur-sm">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-sm relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center"><Lock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-600"/> Admin Access</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input type="email" required placeholder="Admin Email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
              <input type="password" required placeholder="Password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition">Login</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- ADMIN JOB FORM MODAL (Add/Edit) --- */}
      {showForm && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-6 pt-28 md:pt-32 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-4xl relative mb-10">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-900"><X className="w-5 h-5 sm:w-6 sm:h-6" /></button>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pr-8">{editingJob ? "Edit Job Posting" : "Post New Job"}</h2>
            
            <form onSubmit={handleSaveJob} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-sm font-bold text-slate-700">Job Title</label><input required type="text" value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" /></div>
                <div><label className="text-sm font-bold text-slate-700">Location</label><input required type="text" value={formData.location} onChange={e=>setFormData({...formData, location: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. Remote, KS" /></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase">Job Type</label>
                  <select value={formData.type} onChange={e=>setFormData({...formData, type: e.target.value})} className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase">Locals</label>
                  <select value={formData.locals} onChange={e=>setFormData({...formData, locals: e.target.value})} className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer">
                    <option value="All">All</option>
                    <option value="Locals">Locals</option>
                    <option value="Non Locals">Non Locals</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase">Tax Status</label>
                  <select value={formData.taxStatus} onChange={e=>setFormData({...formData, taxStatus: e.target.value})} className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer">
                    <option value="C2C">C2C</option>
                    <option value="W2">W2</option>
                    <option value="1099">1099</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase">Visa Status</label>
                  <select value={formData.visaStatus} onChange={e=>setFormData({...formData, visaStatus: e.target.value})} className="w-full mt-1 p-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer">
                    <option value="Open">Open</option>
                    <option value="H1B">H1B</option>
                    <option value="OPT EAD">OPT EAD</option>
                    <option value="GC">GC</option>
                    <option value="USC">USC</option>
                    <option value="H4-EAD">H4-EAD</option>
                    <option value="CPT">CPT</option>
                  </select>
                </div>
              </div>
              
              <div><label className="text-sm font-bold text-slate-700">Job Description</label><textarea required rows="3" value={formData.desc} onChange={e=>setFormData({...formData, desc: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"></textarea></div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-sm font-bold text-slate-700">Responsibilities (One per line)</label><textarea required rows="4" value={formData.responsibilities} onChange={e=>setFormData({...formData, responsibilities: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"></textarea></div>
                <div><label className="text-sm font-bold text-slate-700">Requirements (One per line)</label><textarea required rows="4" value={formData.requirements} onChange={e=>setFormData({...formData, requirements: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"></textarea></div>
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3 text-sm sm:text-base">Internal Contact Details (Hidden from Public)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="text-xs sm:text-sm font-bold text-amber-800">Hiring Manager Name</label><input required type="text" value={formData.contactName} onChange={e=>setFormData({...formData, contactName: e.target.value})} className="w-full mt-1 p-3 bg-white border border-amber-200 rounded-xl text-sm" /></div>
                  <div><label className="text-xs sm:text-sm font-bold text-amber-800">Receive Apps at Email</label><input required type="email" value={formData.contactEmail} onChange={e=>setFormData({...formData, contactEmail: e.target.value})} className="w-full mt-1 p-3 bg-white border border-amber-200 rounded-xl text-sm" /></div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button type="submit" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all text-sm sm:text-base">{editingJob ? "Update Job" : "Publish Job"}</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}