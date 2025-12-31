"use client";
import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Globe2,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <MessageSquare size={14} />
            Global Relations Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Let's Secure Your <br/>
            <span className="text-vestigo-lime">Next Venture</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed font-medium">
            Whether you are a global enterprise or a growing MSME, our risk experts 
            are ready to provide the diagnostic depth your business deserves.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-24 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-gray-100 p-8 md:p-12">
              <h3 className="text-3xl font-black text-vestigo-blue mb-8">Request a Consultation</h3>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-vestigo-lime transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-vestigo-lime transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Industry</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-vestigo-lime transition-all appearance-none">
                    <option>Chemical & Pharma</option>
                    <option>Logistics & Shipping</option>
                    <option>Green Energy</option>
                    <option>IT & Digital</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-vestigo-lime transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your risk management needs..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-vestigo-lime transition-all" />
                </div>
                <button className="md:col-span-2 bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center justify-center gap-3 mt-4 group">
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact Cards */}
              <div className="bg-vestigo-blue p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vestigo-lime/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-vestigo-lime" size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-vestigo-lime uppercase tracking-widest text-xs mb-1">Email Us</h4>
                      <p className="font-bold">info@vestigo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-vestigo-lime" size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-vestigo-lime uppercase tracking-widest text-xs mb-1">Call Support</h4>
                      <p className="font-bold">+1 (555) 000-VEST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-vestigo-lime" size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-vestigo-lime uppercase tracking-widest text-xs mb-1">Headquarters</h4>
                      <p className="font-bold text-blue-100/60 text-sm">Global Financial Center, 88 Risk Plaza, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <h4 className="text-vestigo-blue font-black mb-6">Our Commitment</h4>
                <ul className="space-y-4">
                  {[
                    "24/7 Emergency Claims Support",
                    "Response within 12 business hours",
                    "Dedicated Industry Specialists",
                    "Global Reinsurance Network"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                      <CheckCircle2 className="text-vestigo-lime" size={18} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GLOBAL REACH MAP PLACEHOLDER */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Network</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Global Presence</h3>
          </div>
          <div className="aspect-video bg-vestigo-blue rounded-[4rem] relative overflow-hidden flex items-center justify-center shadow-2xl">
            <Globe2 size={300} className="text-vestigo-lime opacity-5 absolute animate-pulse" />
            <div className="relative z-10 p-12 text-center">
               <div className="text-white text-5xl font-black mb-4">15+ Countries</div>
               <p className="text-blue-100/40 font-bold uppercase tracking-[0.3em] text-sm">Unified Risk Management Ecosystem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}