import React from "react";
import { 
  Ship, 
  Anchor, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  Navigation
} from "lucide-react";

export default function ShippingODCCargo() {
  const specializations = [
    {
      title: "Marine Cargo (All Risk)",
      desc: "Comprehensive protection for goods in transit across sea, air, and land, covering theft, damage, and general average.",
      icon: <Ship size={32} />
    },
    {
      title: "ODC & Project Cargo",
      desc: "Specialized risk frameworks for Over-Dimensional Cargo, ensuring heavy-lift engineering projects are protected from site to site.",
      icon: <Navigation size={32} />
    },
    {
      title: "Hull & Machinery",
      desc: "Covering the physical vessel and its vital machinery against marine perils, collisions, and operational breakdowns.",
      icon: <Anchor size={32} />
    },
    {
      title: "Logistics Liability",
      desc: "Protecting freight forwarders and port operators against third-party liabilities and contractual errors.",
      icon: <Truck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Nautical navigation grid representing global transit */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#92D050 0.5px, transparent 0.5px), linear-gradient(90deg, #92D050 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Globe2 size={14} />
            Marine & Logistics SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Global Supply Chain</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides mission-critical insurance for the shipping and cargo 
            sectors, ensuring that global trade moves forward without the 
            interruption of unforeseen maritime risks. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Maritime Expertise</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End Logistics Protection</h3>
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

      {/* 3. RELATABLE CONTENT: ODC Focus */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Project Logistics</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Heavy Lift. <br/> Comprehensive Cover.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              Managing Over-Dimensional Cargo (ODC) requires more than just a policy; 
              it requires a deep understanding of engineering and transit risk. 
              Vestigo partners with global reinsurers to back your most complex 
              logistics challenges with absolute financial certainty. [cite: 1, 2]
            </p>
            
            <div className="grid gap-4">
              {[
                "Route risk assessment and surveying",
                "Voyage-specific insurance for high-value cargo",
                "General Average and Salvage advocacy",
                "Seamless integration with port and terminal risks"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult a Marine Expert <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Anchor and Globe Symbolism */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <ShieldCheck size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Navigating Risk</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "From port of origin to final destination, we ensure your cargo 
                    moves with the protection of a global leader."
                  </p>
                  <div className="mt-8 h-1.5 w-24 bg-vestigo-lime mx-auto rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}