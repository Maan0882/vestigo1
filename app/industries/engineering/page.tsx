import React from "react";
import { 
  Settings, 
  ShieldCheck, 
  Construction, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Wrench
} from "lucide-react";

export default function EngineeringIndustry() {
  const specializations = [
    {
      title: "Erection All Risk (EAR)",
      desc: "Comprehensive protection for machinery during the critical phases of storage, assembly, and testing.",
      icon: <Settings size={32} />
    },
    {
      title: "Contractors All Risk (CAR)",
      desc: "Safeguarding large-scale infrastructure projects against material damage and third-party liabilities.",
      icon: <Construction size={32} />
    },
    {
      title: "Machinery Breakdown",
      desc: "Ensuring operational continuity by covering internal mechanical or electrical failures of vital plant equipment.",
      icon: <Wrench size={32} />
    },
    {
      title: "Electronic Equipment Insurance",
      desc: "Specialized coverage for high-precision CNC machines, robotics, and industrial automation systems.",
      icon: <Cpu size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Blueprint/Grid pattern representing structural design */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#92D050 0.5px, transparent 0.5px), linear-gradient(90deg, #92D050 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Settings size={14} className="animate-spin-slow" />
            Engineering & Infrastructure SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Precision in <br/>
            <span className="text-vestigo-lime">Industrial Security</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides the technical safeguards necessary for complex engineering 
            endeavors, from project inception to operational maturity, ensuring 
            innovation is never sidelined by risk. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Technical Competencies</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End Asset Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((item, idx) => (
              <div key={idx} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: The Engineering Mindset */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Operational Resilience</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Calculated Risk. <br/> Certified Results.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              In the world of engineering, every bolt and byte matters. Vestigo’s 
              experts conduct on-site risk engineering surveys to identify technical 
              bottlenecks, providing solutions that satisfy both your safety 
              officers and your stakeholders. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Customized EAR/CAR policies for complex projects",
                "Advanced machinery breakdown and downtime analysis",
                "Liability protection for professional design errors",
                "On-site risk engineering and safety audits"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Request a Technical Audit <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-contrast technical crest */}
            <div className="aspect-4/5 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <HardHat size={280} className="text-vestigo-lime opacity-10 absolute" />
               <div className="relative z-10 p-12 text-left">
                  <div className="text-white text-5xl font-black mb-4 italic">Reliability</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs">
                    "We bridge the gap between engineering complexity and financial 
                    certainty, allowing your projects to scale with precision."
                  </p>
                  <div className="mt-8 h-1.5 w-24 bg-vestigo-lime rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}