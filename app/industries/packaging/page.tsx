import React from "react";
import { 
  Package, 
  ShieldCheck, 
  Truck, 
  Recycle, 
  CheckCircle2, 
  ArrowRight,
  Boxes,
  Factory
} from "lucide-react";

export default function PackagingIndustry() {
  const specializations = [
    {
      title: "Stock & Transit Protection",
      desc: "Comprehensive coverage for raw materials and finished goods against damage during high-speed production and global transit.",
      icon: <Boxes size={32} />
    },
    {
      title: "Machinery Breakdown",
      desc: "Protecting high-precision printing, molding, and sealing equipment to minimize operational downtime in automated lines.",
      icon: <Factory size={32} />
    },
    {
      title: "Product Liability",
      desc: "Safeguarding against claims related to material safety, contamination, or defects in consumer-facing packaging solutions.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Logistics & Marine",
      desc: "End-to-end risk management for global supply chains, ensuring your packaging reaches its destination intact.",
      icon: <Truck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Geometric "box" pattern representing the core of the industry */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(45deg, #92D050 25%, transparent 25%, transparent 75%, #92D050 75%, #92D050), linear-gradient(45deg, #92D050 25%, transparent 25%, transparent 75%, #92D050 75%, #92D050)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Package size={14} />
            Supply Chain SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Final Touchpoint</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides specialized risk solutions for the packaging sector, 
            ensuring that innovation in materials and automation is backed by 
            unshakeable financial protection.
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Industrial Focus</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Tailored Packaging Risk Frameworks</h3>
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

      {/* 3. RELATABLE CONTENT: Sustainable Growth */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">The Future of Wrap</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Protecting Innovation. <br/> Supporting Sustainability.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              As the industry shifts toward biodegradable materials and smart packaging, 
              risk profiles are evolving. Vestigo stays ahead by providing 
              data-driven diagnostics that protect your new ventures in sustainable 
              packaging without compromising your bottom line.
            </p>
            
            <div className="grid gap-4">
              {[
                "End-to-end supply chain transit coverage",
                "Comprehensive public and product liability",
                "Protection for eco-friendly material transitions",
                "Global reinsurance support for high-volume exports"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult a Sector Expert <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-contrast packaging structure */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Recycle size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Resilient</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We wrap your business in layers of security, ensuring your product's 
                    journey is as safe as its destination."
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