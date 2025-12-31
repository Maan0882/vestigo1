import React from "react";
import { 
  Zap, 
  Sun, 
  Wind, 
  BatteryCharging, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Leaf
} from "lucide-react";

export default function GreenEnergy() {
  const specializations = [
    {
      title: "Solar Power Assets",
      desc: "Comprehensive coverage for photovoltaic plants, including hail damage, fire, and performance degradation.",
      icon: <Sun size={32} />
    },
    {
      title: "Wind Farm Protection",
      desc: "Specialized mechanical breakdown and natural catastrophe insurance for onshore and offshore wind turbines.",
      icon: <Wind size={32} />
    },
    {
      title: "EV Infrastructure",
      desc: "Liability and asset protection for electric vehicle charging networks and battery storage systems.",
      icon: <BatteryCharging size={32} />
    },
    {
      title: "Hydrogen & Biofuels",
      desc: "Complex risk frameworks for the next generation of clean combustion and energy storage technologies.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Geometric "Sunburst" pattern using brand colors */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Leaf size={14} className="animate-bounce" />
            Sustainable Energy Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Insuring the <br/>
            <span className="text-vestigo-lime">Energy Transition</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides the financial safety net required for the world's most 
            ambitious renewable energy projects, from utility-scale solar arrays 
            to hydrogen storage clusters.
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Renewable Focus</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Specialized Asset Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((item, idx) => (
              <div key={idx} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Sustainability Philosophy */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element: Turbine-inspired curve */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Powering Tomorrow</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              De-Risking the <br/> Net-Zero Journey.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              We understand that renewable energy assets face unique environmental 
              and technical risks. Our Green Energy SBU combines traditional 
              asset insurance with modern risk modeling to ensure that the transition 
              to net-zero is bankable and sustainable.
            </p>
            
            <div className="grid gap-4">
              {[
                "Delay in Start-Up (DSU) coverage for new projects",
                "Advanced weather-index based risk modeling",
                "Environmental impairment liability protection",
                "Carbon credit and green certificate insurance"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Insure Your Project <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-contrast circular power core */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <ShieldCheck size={260} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">1.2k+</div>
                  <p className="text-blue-100/50 font-black uppercase tracking-widest text-sm mx-auto">
                    Solar Units Installed & Protected
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