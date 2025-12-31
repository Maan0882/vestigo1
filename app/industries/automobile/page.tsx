import React from "react";
import { 
  Car, 
  ShieldCheck, 
  Settings, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Gauge,
  Truck
} from "lucide-react";

export default function AutomobileIndustry() {
  const specializations = [
    {
      title: "Manufacturing & Assembly",
      desc: "Comprehensive coverage for assembly lines, robotic infrastructure, and specialized tooling assets.",
      icon: <Settings size={32} />
    },
    {
      title: "Supply Chain Resilience",
      desc: "Protecting against business interruptions and transit delays in the global automotive component network.",
      icon: <Truck size={32} />
    },
    {
      title: "EV & Battery Liability",
      desc: "Specialized risk frameworks for electric vehicle manufacturers and battery storage technology.",
      icon: <Zap size={32} />
    },
    {
      title: "Recall & Warranty",
      desc: "Mitigating the financial impact of product recalls and large-scale warranty fulfillment obligations.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Abstract motion lines representing speed and precision engineering */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, #92D050 0, #92D050 1px, transparent 0, transparent 50%)', 
               backgroundSize: '30px 30px' 
             }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Car size={14} />
            Automotive Specialized Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Driving Industrial <br/>
            <span className="text-vestigo-lime">Resilience</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides high-performance risk management for the automotive 
            ecosystem, safeguarding manufacturers, component suppliers, and 
            EV pioneers through every gear shift of the industry. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Core Competencies</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End Automotive Protection</h3>
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

      {/* 3. RELATABLE CONTENT: The Future of Mobility */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Engineering Trust</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              From Internal Combustion <br/> to Electric Innovation.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              The automotive landscape is evolving at breakneck speed. Vestigo’s 
              experts provide the diagnostic depth required to manage risks in 
              automated assembly, global supply logistics, and the emerging 
              challenges of battery technology and autonomous systems. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Customized wording for just-in-time logistics risks",
                "Advanced liability structures for autonomous software",
                "Global reinsurance for high-value assembly plants",
                "Specialized fire & hazard protection for EV facilities"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult an Industry Expert <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Dynamic Dashboard/Gauge visual */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Gauge size={260} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">High Velocity</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We provide the technical safety net that allows the world’s leading 
                    automotive brands to innovate with absolute confidence."
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