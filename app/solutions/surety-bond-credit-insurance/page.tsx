import React from "react";
import { 
  ShieldCheck, 
  FileText, 
  Globe, 
  Handshake, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Scale
} from "lucide-react";

export default function SuretyAndCredit() {
  const specializations = [
    {
      title: "Performance Bonds",
      desc: "Contractual guarantees ensuring that projects are completed according to agreed-upon terms and specifications.",
      icon: <Scale size={32} />
    },
    {
      title: "Trade Credit Insurance",
      desc: "Protecting your accounts receivable against non-payment risks, insolvency, or political upheavals.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Bid & Tender Bonds",
      desc: "Essential financial backing for infrastructure and government projects to demonstrate firm commitment.",
      icon: <FileText size={32} />
    },
    {
      title: "Customs & Excise Bonds",
      desc: "Facilitating smooth cross-border trade by guaranteeing payment of duties and taxes to authorities.",
      icon: <Globe size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Geometric pattern representing global trade routes and stability */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.8px, transparent 0.8px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Handshake size={14} />
            Financial Guarantees SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            The Foundation of <br/>
            <span className="text-vestigo-lime">Contractual Trust</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides the financial leverage required for global commerce, 
            offering surety bonds and credit insurance that turn risks into 
            bankable opportunities for growth. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Core Competencies</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Trade & Performance Security</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((item, idx) => (
              <div key={idx} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Trade Resilience */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Market Expansion</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Unlocking Capital. <br/> Securing Cash Flow.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              In high-value infrastructure and international trade, liquidity is king. 
              Our surety solutions free up your bank lines, while credit insurance 
              empowers you to offer competitive terms to new buyers in emerging 
              markets with absolute confidence. [cite: 1, 2]
            </p>
            
            <div className="grid gap-4">
              {[
                "Strategic alternatives to bank guarantees",
                "Protection against bad debts and insolvency",
                "Enhanced borrowing power through credit-wrapped receivables",
                "Seamless international tender participation"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Secure Your Contracts <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Financial Shield and Globe */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <ShieldCheck size={260} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Guaranteed</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs">
                    "We provide the financial architecture that allows global enterprises 
                    to build, trade, and scale without borders."
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