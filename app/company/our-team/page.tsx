import React from "react";
import { Users, ShieldCheck, Target, Award, ArrowRight } from "lucide-react";

export default function OurTeam() {
  const leadershipLevels = [
    { name: "Executive Leadership", role: "Board of Directors", count: 4, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" },
    { name: "Risk Analysts", role: "Technical SBU Leads", count: 12, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
    { name: "Claims Advocates", role: "Client Success Unit", count: 8, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-white text-vestigo-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Vestigo Team Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/90 to-vestigo-navy/70" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vestigo-navy/5 border border-vestigo-navy/10 text-vestigo-navy text-xs font-black uppercase tracking-widest mb-8">
            <Users size={16} /> Human Capital Unit
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-vestigo-navy tracking-tighter mb-8 leading-none">
            Meet the <br/>
            <span className="text-vestigo-gold">Visionaries</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-bold">
            Our team comprises industry veterans, forensic analysts, and tech innovators working together to safeguard the global industrial backbone.
          </p>
        </div>
      </section>

      {/* 2. LEADERSHIP GRID */}
      <section className="py-32 px-6 bg-vestigo-gray/20 relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {leadershipLevels.map((m, i) => (
              <div key={i} className="group relative">
                <div className="aspect-3/4 rounded-[4rem] overflow-hidden shadow-2xl border border-vestigo-gray hover:border-vestigo-gold transition-all duration-500 bg-vestigo-navy">
                   <img 
                     src={m.img} 
                     alt={m.name} 
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-vestigo-navy via-transparent to-transparent" />
                   <div className="absolute inset-0 flex flex-col justify-end p-12">
                      <div className="text-vestigo-gold text-6xl font-black mb-4">{m.count}+</div>
                      <div className="text-white text-3xl font-black tracking-tighter mb-2">{m.name}</div>
                      <div className="text-white/40 text-xs font-black uppercase tracking-[0.3em]">{m.role}</div>
                   </div>
                </div>
                {/* Decorative gold element */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-vestigo-gold rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE CALLOUT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Driven by <br/> Technical Depth.
            </h3>
            <p className="text-lg text-gray-600 font-bold leading-relaxed">
              At Vestigo, we hire specialists with deep domain expertise in engineering, pharmaceuticals, and shipping. This technical mindset allows us to speak the language of your industry and identify risks that generic insurers miss.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-vestigo-gold" size={24} />
                <span className="font-black text-sm uppercase tracking-widest">Global Expertise</span>
              </div>
              <div className="flex items-center gap-4">
                <Award className="text-vestigo-gold" size={24} />
                <span className="font-black text-sm uppercase tracking-widest">Sector Specialists</span>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-vestigo-navy text-white px-10 py-5 rounded-full font-black hover:bg-vestigo-gold transition-all shadow-xl shadow-vestigo-navy/20">
              Join the Team <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="p-12 bg-vestigo-navy rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-vestigo-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <Target size={80} className="text-vestigo-gold mx-auto" />
             <h4 className="text-3xl font-black text-white">"Precision is our only <br/> standard of service."</h4>
             <div className="h-1 w-24 bg-vestigo-gold mx-auto rounded-full" />
             <p className="text-white/40 font-black uppercase text-xs tracking-[0.3em]">Institutional Commitment</p>
          </div>
        </div>
      </section>
    </div>
  );
}