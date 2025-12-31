import React from "react";
import { 
  TreePine, 
  FlameKindling, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Wind,
  Layers
} from "lucide-react";

export default function WoodAndLaminates() {
  const industryRisks = [
    {
      title: "Fire & Explosion Protection",
      desc: "Specialized coverage for high-combustibility environments, including sawmills and laminate pressing units.",
      icon: <FlameKindling size={32} />
    },
    {
      title: "Product Liability",
      desc: "Protection against claims related to adhesive failure, formaldehyde emissions, or structural defects.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Transit & Logistics",
      desc: "Securing raw timber imports and finished laminate exports against moisture damage and transit perils.",
      icon: <Truck size={32} />
    },
    {
      title: "Environmental Compliance",
      desc: "Coverage for pollution liability and sustainable sourcing certifications required for global markets.",
      icon: <Wind size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Relatable Background: Wood grain texture representation using lime-green lines */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #92D050 0, #92D050 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-vestigo-lime/5 skew-x-12 translate-x-24" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <TreePine size={14} />
            Manufacturing SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Strength in <br/>
            <span className="text-vestigo-lime">Layers & Texture</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides specialized risk mitigation for the timber and laminate 
            industry, safeguarding the complex journey from raw forest resources to 
            high-end architectural finishes. 
          </p>
        </div>
      </section>

      {/* 2. RISK MODULES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Sector Exposures</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Integrated Protection for Timber Units</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryRisks.map((risk, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-14 h-14 bg-vestigo-blue/5 text-vestigo-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vestigo-blue group-hover:text-white transition-all">
                  {risk.icon}
                </div>
                <h4 className="text-xl font-black text-vestigo-blue mb-3">{risk.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Industrial Detail */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Background Image Representation: Abstract Laminate Stacks */}
            <div className="aspect-square bg-vestigo-blue rounded-[3rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <Layers size={220} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-vestigo-lime text-6xl font-black mb-4">24/7</div>
                <div className="text-white font-black uppercase tracking-[0.2em] text-sm">On-Site Risk Monitoring</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-vestigo-lime rounded-tl-[3rem]" />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-black text-vestigo-blue leading-tight">
              Securing the Future of <br/> Sustainable Wood Processing.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              The wood and laminates sector faces unique challenges—from high-combustibility 
              stock to global supply chain fluctuations. Vestigo’s specialized team 
              conducts technical audits to help you reduce fire risks and optimize 
              your insurance premiums through evidence-based safety standards. 
            </p>
            
            <ul className="space-y-4">
              {[
                "Fire safety and sprinkler system adequacy audits",
                "Machinery breakdown coverage for heavy presses",
                "Marine transit for international timber trade",
                "Stock throughput and warehouse fire protection"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-vestigo-blue">
                  <CheckCircle2 size={20} className="text-vestigo-lime" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Request a Technical Survey <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}