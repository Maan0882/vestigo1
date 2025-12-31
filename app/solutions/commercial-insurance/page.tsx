import React from "react";
import { 
  Building2, 
  ShieldCheck, 
  Factory, 
  HardHat, 
  Zap, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function CommercialInsurance() {
  const coreServices = [
    { title: "Property & Asset", desc: "Safeguarding physical infrastructure, machinery, and inventory against perils.", icon: <Building2 size={32} /> },
    { title: "Liability Management", desc: "Comprehensive public and product liability coverage for corporate reputation.", icon: <ShieldCheck size={32} /> },
    { title: "Industrial All Risk", desc: "Broad-spectrum coverage for large-scale manufacturing and industrial complexes.", icon: <Factory size={32} /> },
    { title: "Business Continuity", desc: "Ensuring financial stability and cash flow during periods of operational downtime.", icon: <Zap size={32} /> }
  ];

  return (
    <div className="min-h-screen bg-white text-vestigo-navy">
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-vestigo-navy/60" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vestigo-navy/10 border border-vestigo-navy/10 text-vestigo-navy text-xs font-black uppercase tracking-widest mb-8">
            <HardHat size={16} /> Industrial Specialized Unit
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-vestigo-navy tracking-tighter mb-8 leading-none">
            Commercial <br/>
            <span className="text-vestigo-gold">Risk Frameworks</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-bold">
            Vestigo provides mission-critical insurance strategies for global conglomerates, ensuring operational resilience across volatile market cycles.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-32 px-6 bg-vestigo-gray/20 relative">
        <div className="absolute inset-0 bg-pattern-lines opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-vestigo-gold">Service Spectrum</h2>
              <h3 className="text-4xl md:text-5xl font-black">Enterprise Protection</h3>
            </div>
            <p className="max-w-md text-gray-500 font-bold italic">
              "We identify structural vulnerabilities before they impact your balance sheet."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, idx) => (
              <div key={idx} className="group p-10 bg-white border border-vestigo-gray rounded-[3rem] hover:border-vestigo-gold hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-vestigo-navy text-vestigo-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{service.title}</h4>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Engineered for the <br/> Industrial Pioneer.
            </h3>
            <div className="space-y-6">
              {[
                "On-site risk engineering & safety audits",
                "Bespoke policy wording for niche verticals",
                "Global reinsurance network support",
                "24/7 dedicated catastrophe response"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white border border-vestigo-gray rounded-3xl shadow-sm hover:border-vestigo-gold transition-colors">
                  <CheckCircle2 size={24} className="text-vestigo-gold shrink-0" />
                  <span className="font-black text-lg">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-vestigo-navy text-white px-12 py-5 rounded-full font-black text-lg hover:bg-vestigo-gold hover:text-vestigo-navy transition-all shadow-xl shadow-vestigo-navy/20">
              Schedule Site Diagnostic
            </button>
          </div>

          <div className="relative group">
            <div className="aspect-square bg-vestigo-navy rounded-[4rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Technical Risk Assessment" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div className="space-y-4">
                  <div className="text-vestigo-gold text-7xl font-black">2.5k+</div>
                  <div className="text-white font-black uppercase tracking-[0.3em] text-sm">Industrial Plants Secured</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-vestigo-gold rounded-full -z-10 blur-3xl opacity-30" />
          </div>
        </div>
      </section>
    </div>
  );
}