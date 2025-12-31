import React from "react";
import { Handshake, Building, ShieldCheck, Globe, Globe2, Briefcase, ArrowRight } from "lucide-react";

export default function OurPartners() {
  const partnerTypes = [
    { 
      icon: <Handshake size={48} />, 
      title: "Strategic Reinsurers", 
      desc: "Partnering with A-rated global reinsurers to provide multi-billion dollar capacity and financial strength.",
      features: ["Global Claims Support", "High-Value Backing"] 
    },
    { 
      icon: <Building size={48} />, 
      title: "Industry Bodies", 
      desc: "Active leadership roles within FICCI, CII, and the Insurance Regulatory and Development Authority (IRDAI).",
      features: ["Policy Advocacy", "Standard Setting"]
    },
    { 
      icon: <ShieldCheck size={48} />, 
      title: "Risk Consultants", 
      desc: "Collaborating with forensic engineering firms to provide the most accurate risk diagnostics in the market.",
      features: ["Technical Audits", "Safety Protocols"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-vestigo-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-vestigo-navy via-vestigo-navy/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vestigo-gold/10 border border-vestigo-gold/20 text-vestigo-gold text-xs font-black uppercase tracking-widest mb-8">
            Global Synergy
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Our <span className="text-vestigo-gold">Synergy</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-bold">
            Vestigo operates at the center of a global network of elite financial institutions, reinsurers, and industry bodies to deliver unmatched institutional value.
          </p>
        </div>
      </section>

      {/* 2. PARTNERSHIP GRID */}
      <section className="py-32 px-6 bg-vestigo-gray/20 relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((p, i) => (
              <div key={i} className="group p-12 rounded-[4rem] border border-vestigo-gray bg-white hover:border-vestigo-gold hover:shadow-2xl transition-all duration-500">
                <div className="text-vestigo-gold mb-10 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h4 className="text-3xl font-black text-vestigo-navy mb-6">{p.title}</h4>
                <p className="text-gray-500 font-bold leading-relaxed mb-10">{p.desc}</p>
                
                <div className="space-y-4">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-vestigo-navy/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-vestigo-gold" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NETWORK STATS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-vestigo-navy">
              A Unified Risk <br/> Ecosystem.
            </h3>
            <p className="text-lg text-gray-600 font-bold leading-relaxed">
              Our partnerships are not merely contractual; they are strategic integrations. We work with our global partners to create unique policy wordings and risk transfer mechanisms that aren't available through traditional channels.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="space-y-2">
                <div className="text-4xl font-black text-vestigo-gold">15+</div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-400">Global Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-vestigo-gold">A-Rated</div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-400">Reinsurance Backing</div>
              </div>
            </div>
            <button className="bg-vestigo-navy text-white px-12 py-5 rounded-full font-black text-lg hover:bg-vestigo-gold transition-all shadow-xl shadow-vestigo-navy/20 flex items-center gap-3">
              Explore Our Network <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-vestigo-navy rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <Globe2 size={240} className="text-vestigo-gold opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-navy/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-white text-5xl font-black mb-4 italic">Synergy</div>
                <div className="text-vestigo-gold font-black uppercase tracking-[0.2em] text-sm">Institutional Strength</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-8 border-t-8 border-vestigo-gold rounded-tr-[4rem]" />
          </div>
        </div>
      </section>
    </div>
  );
}