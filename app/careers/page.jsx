"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, X, ChevronRight, User, Loader2, Lock, LogOut, Edit, Trash2, Plus, Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';

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
    title: '', location: '', type: 'Full-Time', desc: '', 
    responsibilities: '', requirements: '', contactName: '', contactEmail: ''
  });

  useEffect(() => {
    fetchJobs();
    // Check if admin is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    // Listen for login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function fetchJobs() {
    setLoading(true);
    const { data } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });
    if (data) setJobs(data);
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
        responsibilities: job.responsibilities.join('\n'),
        requirements: job.requirements.join('\n')
      });
    } else {
      setEditingJob(null);
      setFormData({ title: '', location: '', type: 'Full-Time', desc: '', responsibilities: '', requirements: '', contactName: '', contactEmail: '' });
    }
    setShowForm(true);
  }

  async function handleSaveJob(e) {
    e.preventDefault();
    // Convert multiline text back into arrays for the database
    const jobData = {
      ...formData,
      responsibilities: formData.responsibilities.split('\n').filter(line => line.trim() !== ''),
      requirements: formData.requirements.split('\n').filter(line => line.trim() !== '')
    };

    if (editingJob) {
      await supabase.from('jobs').update(jobData).eq('id', editingJob.id);
    } else {
      await supabase.from('jobs').insert([jobData]);
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

  // --- PUBLIC APPLY FLOW ---
  async function handleApplyWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/careers` }
    });
    if (error) alert("Error connecting to Google.");
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 mt-12 min-h-screen relative">
      
      {/* Header & Admin Toggle */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 flex items-center justify-center gap-4">
          Join Our <span className="text-amber-600">Team</span>
          
          {/* Admin Lock / Logout Icons - Highly Visible */}
          {!session ? (
            <button onClick={() => setShowLogin(true)} className="p-3 bg-white/80 hover:bg-amber-100 rounded-full transition-colors group shadow-sm border border-slate-200 ml-2" title="Admin Login">
              <Lock className="w-6 h-6 text-slate-400 group-hover:text-amber-600 transition-colors" />
            </button>
          ) : (
            <button onClick={handleLogout} className="p-3 bg-white/80 hover:bg-red-50 rounded-full transition-colors group shadow-sm border border-slate-200 ml-2" title="Logout">
              <LogOut className="w-6 h-6 text-red-400 group-hover:text-red-600 transition-colors" />
            </button>
          )}
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Gateway Solutions is always looking for elite talent. Explore our open positions and become part of a workforce that drives enterprise technology forward.
        </p>

        {/* Admin "Add Job" Button */}
        {session && (
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => openForm()}
            className="mt-8 mx-auto flex items-center bg-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-amber-500 transition-all hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" /> Post New Job
          </motion.button>
        )}
      </motion.div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-40"><Loader2 className="w-10 h-10 text-amber-600 animate-spin" /></div>
      ) : jobs.length === 0 ? (
        <div className="text-center text-slate-500 font-medium bg-amber-50/50 p-10 rounded-3xl border border-amber-200">No open positions currently available.</div>
      ) : (
        /* Job Cards Grid */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <motion.div 
              key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedJob(job)}
              className="bg-gradient-to-br from-amber-50/75 via-yellow-100/45 to-amber-200/55 backdrop-blur-md p-8 rounded-3xl border border-amber-300/60 shadow-xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full relative"
            >
              {/* Admin Controls on Card */}
              {session && (
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button onClick={(e) => { e.stopPropagation(); openForm(job); }} className="p-2 bg-white/60 hover:bg-white rounded-full text-blue-600 shadow-sm transition"><Edit className="w-4 h-4" /></button>
                  <button onClick={(e) => handleDeleteJob(job.id, e)} className="p-2 bg-white/60 hover:bg-red-100 rounded-full text-red-600 shadow-sm transition"><Trash2 className="w-4 h-4" /></button>
                </div>
              )}

              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-300/60 group-hover:bg-amber-200 transition-colors">
                <Briefcase className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 pr-12">{job.title}</h3>
              
              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-sm font-semibold text-amber-800"><MapPin className="w-4 h-4 mr-2 text-amber-600" /> {job.location}</div>
                <div className="flex items-center text-sm font-semibold text-amber-800"><Clock className="w-4 h-4 mr-2 text-amber-600" /> {job.type}</div>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-gradient-to-br from-amber-50/95 via-yellow-50/90 to-amber-100/95 backdrop-blur-xl border border-amber-300/60 shadow-2xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 p-8 sm:p-10">
              <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 p-2 bg-amber-200/50 hover:bg-amber-300/50 rounded-full text-amber-900 transition-colors"><X className="w-6 h-6" /></button>

              <h2 className="text-3xl font-black text-slate-900 mb-4 pr-10">{selectedJob.title}</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><MapPin className="w-4 h-4 mr-1.5 text-amber-700" /> {selectedJob.location}</span>
                <span className="flex items-center text-sm font-bold text-amber-900 bg-amber-200/50 px-3 py-1.5 rounded-full border border-amber-300/60"><Clock className="w-4 h-4 mr-1.5 text-amber-700" /> {selectedJob.type}</span>
              </div>

              <div className="space-y-8">
                <div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Job Description</h4><p className="text-slate-700 leading-relaxed font-medium">{selectedJob.desc}</p></div>
                {selectedJob.responsibilities && (<div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Key Responsibilities</h4><ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">{selectedJob.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}</ul></div>)}
                {selectedJob.requirements && (<div><h4 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-3">Requirements</h4><ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">{selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}</ul></div>)}

                {/* Apply Area - Contact Email is Hidden from Public! */}
                <div className="bg-white/60 p-8 rounded-3xl border border-amber-200 mt-8 shadow-sm text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to Join?</h4>
                  <p className="text-slate-600 font-medium mb-6">Hiring Manager: {selectedJob.contactName}</p>
                  <button onClick={handleApplyWithGoogle} className="w-full sm:w-auto mx-auto flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105">
                    <Mail className="w-5 h-5 mr-3" /> Apply with Gmail Oauth
                  </button>
                  <p className="text-xs text-slate-500 mt-4">By applying, your contact details will be securely sent directly to the hiring manager.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADMIN LOGIN MODAL --- */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center"><Lock className="w-6 h-6 mr-2 text-amber-600"/> Admin Access</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input type="email" required placeholder="Admin Email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              <input type="password" required placeholder="Password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition">Login</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- ADMIN JOB FORM MODAL (Add/Edit) --- */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl relative my-auto">
            <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X className="w-6 h-6" /></button>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{editingJob ? "Edit Job Posting" : "Post New Job"}</h2>
            
            <form onSubmit={handleSaveJob} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-sm font-bold text-slate-700">Job Title</label><input required type="text" value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl" /></div>
                <div><label className="text-sm font-bold text-slate-700">Location</label><input required type="text" value={formData.location} onChange={e=>setFormData({...formData, location: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Remote, KS" /></div>
              </div>
              
              <div><label className="text-sm font-bold text-slate-700">Job Description</label><textarea required rows="3" value={formData.desc} onChange={e=>setFormData({...formData, desc: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl"></textarea></div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="text-sm font-bold text-slate-700">Responsibilities (One per line)</label><textarea required rows="4" value={formData.responsibilities} onChange={e=>setFormData({...formData, responsibilities: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Develop APIs...&#10;Manage databases..."></textarea></div>
                <div><label className="text-sm font-bold text-slate-700">Requirements (One per line)</label><textarea required rows="4" value={formData.requirements} onChange={e=>setFormData({...formData, requirements: e.target.value})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="3+ Years React...&#10;SQL Knowledge..."></textarea></div>
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3">Internal Contact Details (Hidden from Public)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="text-sm font-bold text-amber-800">Hiring Manager Name</label><input required type="text" value={formData.contactName} onChange={e=>setFormData({...formData, contactName: e.target.value})} className="w-full mt-1 p-3 bg-white border border-amber-200 rounded-xl" /></div>
                  <div><label className="text-sm font-bold text-amber-800">Receive Apps at Email</label><input required type="email" value={formData.contactEmail} onChange={e=>setFormData({...formData, contactEmail: e.target.value})} className="w-full mt-1 p-3 bg-white border border-amber-200 rounded-xl" /></div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full transition-all">{editingJob ? "Update Job" : "Publish Job"}</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}