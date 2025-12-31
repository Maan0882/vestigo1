import React from "react";
import { 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  UserCheck
} from "lucide-react";

export default function LifeInsurance() {
  const offerings = [
    {
      title: "Executive Life Plans",
      desc: "High-limit coverage designed for key decision-makers, offering supplemental retirement and tax-advantaged benefits.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Key Person Insurance",
      desc: "Financial protection for the business against the loss of vital employees whose expertise drives your success.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Buy-Sell Funding",
      desc: "Structured life insurance solutions to fund buyout agreements, ensuring seamless ownership transitions.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Wealth Transfer",
      desc: "Strategic estate planning and legacy protection for high-net-worth individuals and their families.",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Relatable Background: Subtle interlocking rings representing legacy/connection */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #92D050 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Heart size={14} className="animate-pulse" />
            Financial Legacy SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Protecting the <br/>
            <span className="text-vestigo-lime">Promise of Tomorrow</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides sophisticated life insurance strategies that safeguard both 
            corporate stability and personal legacies, ensuring that long-term goals 
            remain uncompromised by the unexpected.
          </p>
        </div>
      </section>

      {/* 2. CORE OFFERINGS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Strategic Protection</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Comprehensive Life & Legacy Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, idx) => (
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

      {/* 3. RELATABLE CONTENT: Business Continuity */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Operational Stability</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Life Insurance as a <br/> Strategic Asset.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              In the corporate world, life insurance is more than a payout—it is a tool 
              for business continuity. From funding buy-sell agreements to securing 
              personal guarantees on business loans, we structure policies to serve 
              your firm's broader financial strategy.
            </p>
            
            <div className="grid gap-4">
              {[
                "Tax-advantaged cash value accumulation",
                "Seamless ownership transition through buy-sell funding",
                "Retention strategies for high-compensated talent",
                "Estate liquidity for complex family-owned enterprises"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:bg-vestigo-lime transition-all flex items-center gap-3">
              Plan Your Legacy <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: A shield/crest design */}
            <div className="aspect-4/5 bg-linear-to-br from-white/10 to-transparent backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <ShieldCheck size={280} className="text-vestigo-lime opacity-10 absolute" />
               <div className="relative z-10 p-12 text-left">
                  <div className="text-vestigo-lime text-5xl font-black mb-4">Continuity</div>
                  <p className="text-white/70 font-bold leading-relaxed max-w-xs">
                    "Our goal is to ensure that the visionaries of today remain protected, 
                    leaving behind a foundation that thrives for generations."
                  </p>
                  <div className="mt-8 h-1 w-20 bg-vestigo-lime rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}