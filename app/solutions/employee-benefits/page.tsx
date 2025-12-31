import React from "react";
import { 
  HeartPulse, 
  Users, 
  Stethoscope, 
  PiggyBank, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function EmployeeBenefits() {
  const benefits = [
    {
      title: "Group Health Insurance",
      desc: "Comprehensive medical coverage designed to protect your workforce and their families.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Corporate Wellness",
      desc: "Proactive health programs that improve employee engagement and reduce absenteeism.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "Retirement Planning",
      desc: "Strategic pension and provident fund management to secure your employees' future.",
      icon: <PiggyBank size={32} />
    },
    {
      title: "Group Life & Disability",
      desc: "Financial security umbrellas providing peace of mind during life's most challenging moments.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Abstract "Pulse" pattern using brand colors */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            Human Capital SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Empowering Your <br/>
            <span className="text-vestigo-lime">Greatest Asset</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo helps global enterprises build resilient workforces through 
            strategic health, wellness, and financial protection programs that 
            drive long-term loyalty and productivity.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT SECTION */}
      <section className="py-24 px-6 bg-vestigo-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Why Vestigo?</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Beyond Coverage: <br/> A Partnership in Care.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              We don't just broker policies; we manage the health of your organization. 
              By leveraging data-driven insights and global provider networks, we 
              ensure your benefits package is a competitive advantage in the war for talent.
            </p>
            
            <div className="grid gap-4">
              {[
                "Customized plans for diverse global workforces",
                "Seamless digital claims and enrollment experience",
                "Dedicated wellness and mental health support",
                "Strategic cost-containment and risk analysis"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult Our Specialists <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Users size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-vestigo-lime text-7xl font-black mb-2">98%</div>
                  <div className="text-white font-black uppercase tracking-widest text-sm">Client Retention Rate</div>
                  <div className="mt-6 h-1 w-24 bg-vestigo-lime mx-auto rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}