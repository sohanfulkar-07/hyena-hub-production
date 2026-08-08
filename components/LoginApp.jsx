import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, Globe, Eye, EyeOff, Lock, CheckCircle } from 'lucide-react';

export default function LoginApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0A0A0C] overflow-hidden font-sans">
      
      {/* Background Animated Radial Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(221,214,254,0.12)_0%,transparent_45%)]" />

      {/* Main Glassmorphic Split-Screen Panel */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl bg-[#121215]/70 backdrop-blur-xl border border-[#D4B44A]/25 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Left Visual Column (50%) */}
        <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between relative bg-gradient-to-br from-white/5 to-transparent border-b lg:border-b-0 lg:border-r border-[#D4B44A]/15">
          <div className="flex items-center gap-3">
            <img src="/assets/images/logo/logo.png" alt="TheHyenaHub Logo" className="w-10 h-10 rounded-full object-cover border border-[#D4B44A]/40" />
            <span className="font-serif text-xl font-bold text-white">The Hyena <span className="text-[#D4B44A]">Hub</span></span>
          </div>

          <div className="my-12 flex flex-col items-center justify-center text-center">
            {/* Floating 3D-Inspired Glass Emblem */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotateX: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-44 h-44 rounded-3xl bg-gradient-to-br from-white/15 to-[#D4B44A]/10 backdrop-blur-md border border-[#D4B44A]/40 flex items-center justify-center shadow-2xl shadow-[#D4B44A]/20"
            >
              <img src="/assets/images/logo/logo.png" alt="Emblem" className="w-24 h-24 rounded-full object-cover filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            </motion.div>

            <h1 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Welcome to <br />
              <span className="bg-gradient-to-r from-white via-[#D4B44A] to-amber-200 bg-clip-text text-transparent">
                TheHyenaHub
              </span>
            </h1>
            <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Enter your credentials to access the secure executive portal and worldwide distribution infrastructure.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-6 border-t border-white/10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AES-256 Encrypted
            </span>
            <span>FIAPF Certified</span>
          </div>
        </div>

        {/* Right Form Column (50%) */}
        <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center">
          {!isSuccess ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#DDD6FE] font-semibold">AUTHENTICATION</span>
                  <h2 className="text-2xl font-bold text-white mt-1">Executive Portal</h2>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  System Online
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-[#121215]/60 border border-white/15 rounded-xl px-4 pt-5 pb-2 text-white text-sm focus:border-[#D4B44A] focus:shadow-[0_0_20px_rgba(212,175,55,0.25)] focus:scale-[1.01] transition-all outline-none"
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#D4B44A] peer-focus:font-semibold uppercase tracking-wider transition-all pointer-events-none">
                    Email / Username
                  </label>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-[#121215]/60 border border-white/15 rounded-xl px-4 pt-5 pb-2 pr-12 text-white text-sm focus:border-[#D4B44A] focus:shadow-[0_0_20px_rgba(212,175,55,0.25)] focus:scale-[1.01] transition-all outline-none"
                  />
                  <label className="absolute left-4 top-3.5 text-gray-400 text-xs peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#D4B44A] peer-focus:font-semibold uppercase tracking-wider transition-all pointer-events-none">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#DDD6FE]/70 hover:text-[#DDD6FE] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <div
                      onClick={() => setKeepSignedIn(!keepSignedIn)}
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${keepSignedIn ? 'bg-[#D4B44A]' : 'bg-gray-700'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-[#0A0A0C] transition-transform ${keepSignedIn ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                    <span className="text-gray-400">Keep me signed in</span>
                  </label>

                  <a href="#" className="text-[#D4B44A] hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#D4B44A] hover:bg-[#F3E5AB] shadow-lg shadow-[#D4B44A]/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Verifying Access...' : 'Sign In →'}
                </motion.button>
              </form>

              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
                <span className="relative px-4 text-xs uppercase tracking-widest text-gray-500 bg-[#121215]">OR SIGN IN WITH</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="py-2.5 px-4 rounded-full border border-white/15 bg-white/5 hover:border-[#D4B44A] hover:text-[#D4B44A] text-xs font-medium text-gray-300 transition-all flex items-center justify-center gap-2">
                  <Key size={16} /> Passkey
                </button>
                <button type="button" className="py-2.5 px-4 rounded-full border border-white/15 bg-white/5 hover:border-[#D4B44A] hover:text-[#D4B44A] text-xs font-medium text-gray-300 transition-all flex items-center justify-center gap-2">
                  <Globe size={16} /> SSO Login
                </button>
              </div>
            </div>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-[#D4B44A]/20 border-2 border-[#D4B44A] text-[#D4B44A] flex items-center justify-center text-3xl mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                ✦
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-2">Access Granted</h3>
              <p className="text-sm text-gray-400 max-w-sm mx-auto mb-8">
                Welcome back to TheHyenaHub Executive Portal. Redirecting to your dashboard...
              </p>
              <a href="/portfolio.html#theater" className="inline-block py-3 px-6 rounded-xl bg-[#D4B44A] text-[#0A0A0C] font-bold text-xs uppercase tracking-wider hover:bg-[#F3E5AB]">
                Open Private Theater
              </a>
            </motion.div>
          )}
        </div>
      </motion.main>
    </div>
  );
}
