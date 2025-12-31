import React from "react";
import { 
  Laptop, 
  ShieldAlert, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Cloud,
  Terminal
} from "lucide-react";

export default function ITIndustry() {
  const techSolutions = [
    {
      title: "Cyber Liability",
      desc: "Robust protection against data breaches, ransomware, and the resulting legal and notification costs.",
      icon: <ShieldAlert size={32} />
    },
    {
      title: "Technology E&O",
      desc: "Safeguarding your firm against claims of professional negligence or failure of software/hardware to perform.",
      icon: <Terminal size={32} />
    },
    {
      title: "Cloud & Data Assets",
      desc: "Specialized coverage for intangible assets and restoration of digital data following a catastrophic event.",
      icon: <Cloud size={32} />
    },
    {
      title: "Business Interruption",
      desc: "Mitigating financial losses arising from network outages or cyber-induced operational downtime.",
      icon: <Database size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Digital circuit/matrix pattern representing the IT landscape */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(90deg, #92D050 0.5px, transparent 0.5px), linear-gradient(#92D050 0.5px, transparent 0.5px)', 
               backgroundSize: '60px 60px' 
             }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Cpu size={14} className="animate-spin-slow" />
            Technology Specialized Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Digital Frontier</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides sophisticated risk frameworks for software giants, 
            data centers, and tech startups, ensuring that your code and 
            infrastructure remain secure in an evolving threat landscape. 
          </p>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Digital Defense</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Comprehensive Tech Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSolutions.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: The Innovation Safety Net */}
      <section className="py-24 px-6 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Cyber Resilience</h2>
            <h3 className="text-4xl md:text-5xl font-black text-vestigo-blue leading-tight">
              Protecting Intellectual <br/> Property & Privacy.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              In the IT sector, your most valuable assets aren't physical—they're 
              digital. Vestigo bridges the gap between traditional insurance and 
              the modern tech stack, providing forensic-level risk assessments and 
              agile claims management for the digital age. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Customized E&O for SaaS and Fintech ",
                "Comprehensive global cyber-threat coverage",
                "Incident response and forensic team access",
                "Data-privacy compliance (GDPR/SOC2) advocacy"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-vestigo-blue/80">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Consult a Tech Specialist <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-tech digital frame */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
               <Laptop size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Encrypted</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We provide the digital armor that allows developers to code and 
                    innovate without the fear of systemic exposure."
                  </p>
                  <div className="mt-8 h-1.5 w-24 bg-vestigo-lime mx-auto rounded-full" />
               </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-8 border-t-8 border-vestigo-lime rounded-tr-[4rem]" />
          </div>
        </div>
      </section>
    </div>
  );
}