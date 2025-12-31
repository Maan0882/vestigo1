import React from "react";
import { 
  Gavel, 
  Zap, 
  FileCheck, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Clock
} from "lucide-react";

export default function ClaimsManagement() {
  const processSteps = [
    {
      title: "Rapid Intimation",
      desc: "Instant digital reporting to trigger immediate response protocols and loss mitigation.",
      icon: <Zap size={32} />
    },
    {
      title: "Expert Surveying",
      desc: "On-site and remote risk assessment by certified analysts to ensure technical accuracy.",
      icon: <Search size={32} />
    },
    {
      title: "Document Advocacy",
      desc: "Assisting clients in meticulous documentation to meet stringent reinsurer requirements.",
      icon: <FileCheck size={32} />
    },
    {
      title: "Agile Settlement",
      desc: "Aggressive negotiation and tracking to ensure the fastest possible fund disbursement.",
      icon: <Clock size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Data-grid pattern representing tracking and transparency */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#92D050 0.5px, transparent 0.5px), linear-gradient(90deg, #92D050 0.5px, transparent 0.5px)', backgroundSize: '50px 50px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Gavel size={14} />
            Client Advocacy SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            The Moment of <br/>
            <span className="text-vestigo-lime">Truth, Managed.</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            At Vestigo, we believe an insurance policy is only as good as its claim. 
            Our dedicated SBU acts as your advocate, ensuring transparency and 
            speed when it matters most.
          </p>
        </div>
      </section>

      {/* 2. PROCESS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Our Methodology</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End Resolution Framework</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4">{step.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADVOCACY SECTION */}
      <section className="py-24 px-6 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Background Image Representation: High-contrast technical shield */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <ShieldAlert size={220} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-white text-4xl font-black mb-4 italic">"Zero Friction"</div>
                <div className="text-vestigo-lime font-black uppercase tracking-[0.2em] text-sm">Settlement Philosophy</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-vestigo-lime rounded-tl-[4rem]" />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-black text-vestigo-blue leading-tight">
              We Don't Just File Claims. <br/> We Fight for Results.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Vestigo’s claims specialists are industry veterans who understand the technical 
              nuances of policy wordings. We bridge the gap between complex legal 
              language and your right to a fair settlement.
            </p>
            
            <ul className="space-y-4">
              {[
                "24/7 emergency response for industrial catastrophes",
                "Pre-claims audits to ensure policy adequacy",
                "Aggressive negotiation with global reinsurers",
                "Transparent digital tracking for real-time updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-vestigo-blue">
                  <CheckCircle2 size={20} className="text-vestigo-lime" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Track Your Claim <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}