import React from "react";
import { CheckCircle2, Zap, BarChart3, Globe2, ShieldCheck, Trophy, ArrowRight } from "lucide-react";

export default function WhyUs() {
  const highlights = [
    { icon: <CheckCircle2 size={32} />, title: "98% Retention", desc: "Our partnerships are built on decades of consistent delivery and trust." },
    { icon: <Zap size={32} />, title: "Agile Claims", desc: "Rapid processing powered by our proprietary Client Advocacy SBU." },
    { icon: <BarChart3 size={32} />, title: "Risk Diagnostics", desc: "Beyond insurance—we help you prevent losses before they happen." },
    { icon: <Globe2 size={32} />, title: "15+ Industries", desc: "Deep domain expertise in everything from Chemicals to IT Infrastructure." }
  ];

  return (
    <div className="min-h-screen bg-white text-vestigo-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/5.jpg" 
            alt="Business Strategy" 
            className="w-full h-full object-cover bg-cover grayscale blur-[5px]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-vestigo-navy via-vestigo-navy/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vestigo-gold/10 border border-vestigo-gold/20 text-vestigo-gold text-sm font-black uppercase tracking-widest mb-8">
            The Vestigo Advantage
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-8 leading-none">
            Why Global <br/>
            <span className="text-vestigo-gold">Leaders Partner</span>
          </h1>
          <p className="text-lg lg:text-xl text-blue-100/60 max-w-2xl leading-relaxed font-bold">
            We provide more than just coverage; we provide the technical diagnostic depth that allows the world’s most ambitious enterprises to scale with absolute certainty.
          </p>
        </div>
      </section>

      {/* 2. CORE DIFFERENTIATORS */}
      <section className="py-32 px-6 bg-vestigo-gray/20 relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-vestigo-gold mb-4">Core Competencies</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-vestigo-navy">A Higher Standard of Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-vestigo-gray rounded-[3rem] hover:border-vestigo-gold hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-vestigo-navy text-vestigo-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl lg:text-2xl font-black mb-4 text-vestigo-navy">{item.title}</h4>
                <p className="text-base lg:text-lg text-gray-500 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE VESTIGO EDGE - DETAILED */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-square bg-vestigo-navy rounded-[4rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573161158521-8034a8186917?auto=format&fit=crop&q=80&w=1200" 
                alt="Risk Analysis" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="space-y-4 text-center">
                   <Trophy size={64} className="text-vestigo-gold mx-auto mb-4" />
                   <h4 className="text-white text-2xl lg:text-3xl font-black">Miniratna Status</h4>
                   <p className="text-white/60 text-base lg:text-lg font-bold">Benchmark for efficiency and governance in the insurance landscape.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-vestigo-gold rounded-full -z-10 blur-3xl opacity-20" />
          </div>

          <div className="space-y-10">
            <h3 className="text-3xl lg:text-4xl font-black leading-tight text-vestigo-navy">
              Technical Depth <br/> Meets Global Scale.
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 font-bold leading-relaxed">
              Our edge lies in our ability to translate complex industrial risks into bankable opportunities. By leveraging on-site risk engineering and forensic analytics, we ensure that your insurance portfolio is an asset, not just an expense.
            </p>
            
            <div className="space-y-6">
              {[
                "On-site technical surveys by sector specialists",
                "Custom wording to close policy gaps in complex sectors",
                "Advanced liability structures for autonomous & tech firms",
                "Aggressive advocacy in high-value claims settlements"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-vestigo-gray/20 rounded-3xl border border-transparent hover:border-vestigo-gold transition-colors">
                  <ShieldCheck className="text-vestigo-gold shrink-0" size={24} />
                  <span className="font-black text-vestigo-navy text-base lg:text-lg">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-navy text-white px-12 py-5 rounded-full font-black text-lg hover:bg-vestigo-gold transition-all shadow-xl shadow-vestigo-navy/20 flex items-center gap-3">
              Learn More About Our Process <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-vestigo-gold rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <h2 className="text-3xl lg:text-4xl font-black text-vestigo-navy tracking-tight relative z-10">
               Ready to secure <br/> your enterprise?
             </h2>
             <button className="relative z-10 bg-vestigo-navy text-white px-14 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
               Get a Strategic Quote
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}