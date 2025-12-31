import React from "react";
import { Shield, Target, Eye, Award, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white text-vestigo-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-vestigo-navy via-vestigo-navy/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vestigo-gold/10 border border-vestigo-gold/20 text-vestigo-gold text-xs font-black uppercase tracking-widest mb-8">
            Established on Trust
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Our <span className="text-vestigo-gold">Heritage</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-bold">
            Founded on the principles of precision and transparency, Vestigo has evolved into a global leader in institutional risk management.
          </p>
        </div>
      </section>

      {/* 2. CORE VALUES - GIFT STYLE */}
      <section className="py-32 px-6 bg-vestigo-gray/20 relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-vestigo-gold">Foundation</h2>
              <h3 className="text-4xl font-black text-vestigo-navy">A Legacy of <br/> Excellence.</h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                We combine the stability of a century-old institution with the agility of a modern financial powerhouse. Our governance reflects our commitment to protecting global industrial progress.
              </p>
              <div className="pt-4">
                <div className="p-8 bg-vestigo-navy text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-vestigo-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <p className="text-xl italic font-black relative z-10 mb-6">"To be the most trusted global partner in navigating risk."</p>
                  <div className="text-vestigo-gold font-black uppercase text-xs tracking-widest">Our Mission Statement</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { icon: <Target className="text-vestigo-gold" />, title: "Precision", desc: "Data-driven risk assessment that eliminates ambiguity in industrial safety." },
                { icon: <Eye className="text-vestigo-gold" />, title: "Transparency", desc: "Clear, ethical conduct that forms the basis of our 98% client retention rate." },
                { icon: <Award className="text-vestigo-gold" />, title: "Governance", desc: "Miniratna-level operational efficiency in every transaction and claim." },
                { icon: <Shield className="text-vestigo-gold" />, title: "Protection", desc: "A holistic shield designed for the world's most complex industrial sectors." }
              ].map((v, i) => (
                <div key={i} className="p-10 bg-white border border-vestigo-gray rounded-[3rem] hover:border-vestigo-gold hover:shadow-2xl transition-all">
                  <div className="mb-6">{v.icon}</div>
                  <h4 className="text-2xl font-black mb-4 text-vestigo-navy">{v.title}</h4>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL CALLOUT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-21/9 rounded-[4rem] overflow-hidden relative group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
              alt="Vestigo Innovation Lab" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-vestigo-navy/40 flex items-center justify-center">
              <div className="text-center space-y-4">
                <h3 className="text-white text-4xl md:text-6xl font-black tracking-tight">Global Presence. <br/> Local Depth.</h3>
                <div className="h-1.5 w-32 bg-vestigo-gold mx-auto rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}