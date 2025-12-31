import React from "react";
import { 
  Factory, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  CheckCircle2, 
  ArrowRight,
  Store,
  Briefcase
} from "lucide-react";

export default function SMEMSME() {
  const solutions = [
    {
      title: "Business Shield",
      desc: "An all-in-one package covering fire, burglary, and natural calamities tailored for small workshops and stores.",
      icon: <Store size={32} />
    },
    {
      title: "Worker's Compensation",
      desc: "Fulfilling statutory requirements while ensuring your workforce is protected against workplace accidents.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Credit Guarantee",
      desc: "Protecting your cash flow against bad debts and buyer insolvency to keep your growth on track.",
      icon: <Coins size={32} />
    },
    {
      title: "Professional Indemnity",
      desc: "Safeguarding service-oriented MSMEs against legal costs and damages arising from professional errors.",
      icon: <Briefcase size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Subtle dot-grid representing the backbone of the economy */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.8px, transparent 0.8px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Factory size={14} />
            MSME Specialized Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Protecting the <br/>
            <span className="text-vestigo-lime">Backbone of Growth</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo empowers SMEs and MSMEs with the same high-level risk management 
            strategies used by global corporations, scaled to fit your unique 
            operational needs and budget.
          </p>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Scalable Protection</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Tailored for Local Enterprises</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item, idx) => (
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

      {/* 3. RELATABLE CONTENT: Growth Philosophy */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Scale with Confidence</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Enterprise Risk, <br/> Entrepreneurial Agility.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              We understand that for an MSME, even a minor loss can impact survival. 
              Vestigo bridges the gap by providing low-friction, high-value insurance 
              products that protect your assets while freeing up your focus to 
              innovate and expand.
            </p>
            
            <div className="grid gap-4">
              {[
                "Simplified documentation and rapid issuance",
                "Affordable premiums with flexible payment terms",
                "Digital-first claims process for immediate relief",
                "Access to expert risk-reduction advisory"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Get Your SME Plan <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Dynamic Growth Chart and Shield */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <TrendingUp size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Future-Ready</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "Empowering the visionaries of today to become the global conglomerates 
                    of tomorrow through steadfast protection."
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