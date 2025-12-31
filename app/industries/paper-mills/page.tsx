import React from "react";
import { 
  Printer, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  FlameKindling
} from "lucide-react";

export default function PaperMills() {
  const industryRisks = [
    {
      title: "Fire & Property Damage",
      desc: "Specialized coverage for high-combustibility environments, including raw material storage and finished goods.",
      icon: <FlameKindling size={32} />
    },
    {
      title: "Machinery Breakdown",
      desc: "Protection against the mechanical or electrical failure of heavy pulping and paper-making equipment.",
      icon: <Settings size={32} />
    },
    {
      title: "Environmental Liability",
      desc: "Comprehensive solutions for effluent management and compliance with stringent ecological regulations.",
      icon: <Droplets size={32} />
    },
    {
      title: "Supply Chain Continuity",
      desc: "Mitigating risks associated with raw material procurement and global distribution logistics.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Relatable Background: Geometric lines representing paper rolls and industrial flow */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #92D050 0, #92D050 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Printer size={14} />
            Pulp & Paper SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Industrial Cycle</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides mission-critical risk management for paper mills, 
            balancing the high-intensity demands of heavy manufacturing with 
            the delicate requirements of environmental sustainability.
          </p>
        </div>
      </section>

      {/* 2. INDUSTRY RISKS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Risk Specializations</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Comprehensive Mill Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryRisks.map((risk, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {risk.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{risk.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Sustainability & Reliability */}
      <section className="py-24 px-6 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Background Image Representation: Industrial Roll Design */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <Factory size={220} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-white text-4xl font-black mb-4 italic">"Zero Downtime"</div>
                <div className="text-vestigo-lime font-black uppercase tracking-[0.2em] text-sm">Operational Commitment</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-vestigo-lime rounded-tl-[4rem]" />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-black text-vestigo-blue leading-tight">
              Protecting the Future <br/> of Sustainable Fiber.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We understand that paper mills operate on narrow margins and high 
              throughput. Our technical auditors specialize in heavy machinery 
              risk diagnostics, ensuring that your production line remains 
              protected against both internal failures and external shocks.
            </p>
            
            <ul className="space-y-4">
              {[
                "Customized wording for Industrial All Risk (IAR) policies [cite: 2]",
                "Advanced thermography and machinery safety audits [cite: 3]",
                "Specialized loss-of-profit coverage for boiler explosions",
                "Environmental compliance and effluent liability frameworks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-vestigo-blue">
                  <CheckCircle2 size={20} className="text-vestigo-lime" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Consult Our Mill Experts <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Settings({ size, className }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}