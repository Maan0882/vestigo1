import React from "react";
import { 
  Shirt, 
  ShieldCheck, 
  Zap, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Layers
} from "lucide-react";

export default function TextileIndustry() {
  const specializations = [
    {
      title: "Stock & Inventory Cover",
      desc: "Comprehensive protection for raw cotton, yarn, and finished garments against fire, moisture, and theft.",
      icon: <Layers size={32} />
    },
    {
      title: "Machinery Breakdown",
      desc: "Minimizing downtime for high-speed looms and processing units with specialized repair and replacement cover.",
      icon: <Settings size={32} />
    },
    {
      title: "Marine & Export Transit",
      desc: "End-to-end global logistics insurance ensuring your exports reach international markets securely.",
      icon: <Truck size={32} />
    },
    {
      title: "Operational Interruption",
      desc: "Protecting your bottom line during production halts caused by accidental damage to utilities or plant.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Woven line pattern representing textile fibers */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #92D050 0, #92D050 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Shirt size={14} />
            Textile & Apparel SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Weaving a <br/>
            <span className="text-vestigo-lime">Safety Net for Fashion</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides the textile industry with robust risk management frameworks 
            that protect everything from the ginning mill to the global retail shelf. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Vertical Integration</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Protection Across the Loom</h3>
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

      {/* 3. RELATABLE CONTENT: Industrial Resilience */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Supply Chain Mastery</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              From Yarn to Store. <br/> Completely Secured.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              Textile manufacturing is a journey of precision and high-volume logistics. 
              We identify vulnerabilities in your production line and global transit 
              routes, ensuring that your commitments to international buyers are 
              never delayed by unforeseen risks. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Multi-location fire and warehouse insurance",
                "Product liability for international exports",
                "Dynamic coverage for fluctuating stock values",
                "Specialized boiler and pressure plant protection"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult Our Textile Experts <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Abstract Woven Shield */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Factory size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Resilient</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We provide the fabric of security that allows the textile industry to 
                    expand globally with absolute peace of mind."
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

function Settings({ size, className }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  );
}