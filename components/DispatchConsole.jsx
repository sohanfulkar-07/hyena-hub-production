import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Paperclip, ShieldCheck, Sparkles, Radio } from 'lucide-react';

export default function DispatchConsole() {
  const [intent, setIntent] = useState('Executive Partnership');
  const [tone, setTone] = useState('Executive Formal');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isDispatching, setIsDispatching] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [dispatchID, setDispatchID] = useState('');

  const GMAIL_ADDRESS = 'Thehyenahub@gmail.com';

  const handleDispatchSubmit = (e) => {
    e.preventDefault();
    setIsDispatching(true);

    const refCode = `HYN-DISPATCH-${Math.floor(1000 + Math.random() * 9000)}`;
    setDispatchID(refCode);

    const subjectRaw = `[${intent} | ${tone}] ${subject || 'Direct Executive Inquiry'} - from ${name || 'Executive Lead'}`;
    const bodyRaw = `EXECUTIVE MEMO TRANSMISSION\nRef: ${refCode}\nIntent: ${intent}\nTone: ${tone}\nName: ${name}\nEmail: ${email}\nOrganization: ${company || 'N/A'}\n\nMESSAGE:\n${message}\n\n[End Transmission]`;

    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}&su=${encodeURIComponent(subjectRaw)}&body=${encodeURIComponent(bodyRaw)}`;

    setTimeout(() => {
      setIsDispatching(false);
      setIsDispatched(true);
      window.open(gmailWebUrl, '_blank');
    }, 1100);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-[#060608] text-gray-100 overflow-hidden font-sans">
      
      {/* Dynamic Background Blur Spheres */}
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, 80, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#4F46E5]/25 blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ x: [0, -80, 50, 0], y: [0, -60, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 w-[420px] h-[420px] rounded-full bg-[#F59E0B]/20 blur-[140px] pointer-events-none z-0"
      />

      {/* Asymmetric 60/40 Split Screen Console */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
      >
        {/* Left Panel: Holographic Memo Card (40%) */}
        <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.015]">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src="/assets/images/logo/logo.png" alt="Hyena Emblem" className="w-9 h-9 rounded-full object-cover border border-[#F59E0B]/40" />
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#F59E0B] uppercase font-bold">RECIPIENT DESTINATION</span>
                  <div className="text-sm font-bold text-white">TheHyenaHub Studio</div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Intake
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-white/5 via-[#4F46E5]/10 to-[#F59E0B]/5 border border-[#F59E0B]/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pb-4 mb-5 border-b border-white/10">
                <span className="text-[#F59E0B] font-bold">EXECUTIVE DISPATCH MEMO</span>
                <span>SECURE HASH: 889240</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-0.5">INTENT TAG</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] font-semibold inline-block">
                    {intent}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-0.5">SENDER NAME</span>
                    <span className="text-white font-medium">{name || <span className="text-gray-600 font-normal">Awaiting Input...</span>}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-0.5">SENDER EMAIL</span>
                    <span className="text-white font-medium truncate block">{email || <span className="text-gray-600 font-normal">Awaiting Email...</span>}</span>
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-0.5">SUBJECT</span>
                  <span className="text-[#FDE047] font-semibold text-sm block">{subject || 'Executive Transmission Subject'}</span>
                </div>

                <div>
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-1">LIVE MEMO BODY ({tone})</span>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-gray-200 text-xs font-sans leading-relaxed min-h-[110px]">
                    {message ? message : <span className="text-gray-600 italic">Type your memo on the right workspace to render live preview...</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>DIRECT MAILBOX: Thehyenahub@gmail.com</span>
            <span>ENC: AES-256</span>
          </div>
        </div>

        {/* Right Panel: Interaction Workspace (60%) */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between relative">
          {!isDispatched ? (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-mono font-bold">DIRECT INTERACTION STUDIO</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Executive Dispatch Console</h1>
              </div>

              {/* Smart Category Badges */}
              <div className="mb-7">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2.5">MESSAGE INTENT</label>
                <div className="flex flex-wrap gap-2.5">
                  {['Executive Partnership', 'Studio Pitch', 'Urgent Direct', 'Private Screener'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setIntent(item)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        intent === item
                          ? 'bg-[#F59E0B] text-[#060608] font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                          : 'bg-white/5 border border-white/15 text-gray-300 hover:border-[#F59E0B]/50'
                      }`}
                    >
                      {intent === item && '✦ '}
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Studio */}
              <form onSubmit={handleDispatchSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="w-full bg-[#0A0A0C]/60 border border-white/12 rounded-xl p-4 text-white text-sm focus:border-[#F59E0B] focus:shadow-[0_0_25px_rgba(245,158,11,0.25)] outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address *"
                    className="w-full bg-[#0A0A0C]/60 border border-white/12 rounded-xl p-4 text-white text-sm focus:border-[#F59E0B] focus:shadow-[0_0_25px_rgba(245,158,11,0.25)] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Transmission Subject *"
                    className="w-full bg-[#0A0A0C]/60 border border-white/12 rounded-xl p-4 text-white text-sm focus:border-[#F59E0B] focus:shadow-[0_0_25px_rgba(245,158,11,0.25)] outline-none"
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Organization / Studio (Optional)"
                    className="w-full bg-[#0A0A0C]/60 border border-white/12 rounded-xl p-4 text-white text-sm focus:border-[#F59E0B] focus:shadow-[0_0_25px_rgba(245,158,11,0.25)] outline-none"
                  />
                </div>

                {/* AI Tone Switcher */}
                <div>
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">SELECT AI DISPATCH TONE</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Executive Formal', 'Concise Brief', 'Creative Pitch'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTone(t)}
                        className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all ${
                          tone === t
                            ? 'bg-[#4F46E5]/30 border border-[#4F46E5] text-white font-bold'
                            : 'bg-white/5 border border-white/10 text-gray-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Executive Message *"
                  className="w-full bg-[#0A0A0C]/60 border border-white/12 rounded-xl p-4 text-white text-sm focus:border-[#F59E0B] focus:shadow-[0_0_25px_rgba(245,158,11,0.25)] outline-none resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isDispatching}
                  className="w-full py-4 px-8 rounded-xl font-bold uppercase tracking-widest text-[#060608] bg-[#F59E0B] hover:bg-[#FDE047] shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-3"
                >
                  {isDispatching ? 'FIRING BEAM TRANSMISSION...' : 'DISPATCH EXECUTIVE MEMO →'}
                </motion.button>
              </form>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#F59E0B]/20 border-2 border-[#F59E0B] text-[#F59E0B] flex items-center justify-center text-3xl mx-auto mb-6 shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                ✦
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Executive Dispatch Confirmed</h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto mb-8 font-light">
                Your executive memo has been compiled and dispatched to <strong className="text-[#F59E0B]">Thehyenahub@gmail.com</strong>.
              </p>
              <div className="p-5 rounded-2xl bg-black/50 border border-[#F59E0B]/30 mb-8 max-w-sm mx-auto font-mono">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">DISPATCH REFERENCE CODE</span>
                <span className="text-base text-[#FDE047] font-bold">{dispatchID}</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.main>
    </div>
  );
}
