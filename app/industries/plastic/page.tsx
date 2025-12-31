import React from "react";
import { 
  Boxes, 
  ShieldCheck, 
  Factory, 
  ThermometerSnowflake, 
  CheckCircle2, 
  ArrowRight,
  Recycle,
  Layers
} from "lucide-react";

export default function PlasticIndustry() {
  const specializations = [
    {
      title: "Polymer Asset Protection",
      desc: "Comprehensive coverage for high-value extrusion machinery, injection molds, and polymer processing units.",
      icon: <Layers size={32} />
    },
    {
      title: "Fire & Chemical Risk",
      desc: "Advanced fire suppression and liability frameworks designed for the high-combustibility environment of plastic plants.",
      icon: <Factory size={32} />
    },
    {
      title: "Product Liability",
      desc: "Protecting manufacturers against claims arising from product defects, material failures, or regulatory non-compliance.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Environmental & ESG",
      desc: "Strategic insurance for recycling initiatives and compliance with global plastic waste management regulations.",
      icon: <Recycle size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Geometric honeycomb pattern representing polymer structures */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '35px 35px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Boxes size={14} />
            Polymer & Plastics SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Molding a <br/>
            <span className="text-vestigo-lime">Resilient Future</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides precision risk management for the plastics industry, 
            protecting the entire value chain—from raw resin procurement to 
            sophisticated finished-goods manufacturing. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Sector Expertise</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End Plastic Industry Coverage</h3>
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

      {/* 3. RELATABLE CONTENT: Operational Continuity */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Industrial Durability</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Protecting the <br/> Mechanics of Innovation.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              In the plastics sector, operational downtime due to machine failure or 
              facility hazards can be catastrophic. Our specialized audits identify 
              thermal and mechanical risks, ensuring your production lines remain 
              active while your business remains compliant with global ESG standards. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Machinery breakdown and business interruption [cite: 1, 3]",
                "Stock and transit insurance for global distribution ",
                "Public and Environmental Liability ",
                "Customized wording for chemical and polymer storage "
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Request a Plant Audit <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Abstract Extrusion/Polymer pattern */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <ThermometerSnowflake size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Resilient</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "From injection molding to sustainable recycling, we safeguard 
                    the materials that build the modern world."
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