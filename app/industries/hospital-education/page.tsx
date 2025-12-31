import React from "react";
import { 
  Hospital, 
  GraduationCap, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  Users
} from "lucide-react";

export default function HospitalEducation() {
  const specializedModules = [
    {
      title: "Healthcare Liability",
      desc: "Comprehensive medical malpractice and professional indemnity coverage for hospitals and clinical staff.",
      icon: <Activity size={32} />
    },
    {
      title: "Campus Protection",
      desc: "Robust property and liability solutions for schools and universities, covering everything from dorms to laboratories.",
      icon: <GraduationCap size={32} />
    },
    {
      title: "Cyber Security for Institutions",
      desc: "Protecting sensitive patient records and student data against global digital threats and breaches.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Employee Wellness",
      desc: "Tailored health and life insurance programs for educators and healthcare professionals.",
      icon: <Users size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Geometric pattern representing a safety net and connectivity */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.8px, transparent 0.8px)', backgroundSize: '36px 36px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Hospital size={14} />
            Social Infrastructure Unit
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Pillars of Society</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides specialized risk frameworks for the healthcare and 
            education sectors, ensuring that institutions can focus on healing and 
            learning while we manage their complex liabilities.
          </p>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Core Coverage</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Integrated Institutional Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedModules.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Care & Compliance */}
      <section className="py-24 px-6 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Commitment to Care</h2>
            <h3 className="text-4xl md:text-5xl font-black text-vestigo-blue leading-tight">
              Protecting Those <br/> Who Care for Us.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We understand that hospitals and schools operate under intense public 
              scrutiny and high legal standards. Our risk specialists partner with 
              your administration to identify blind spots in patient safety and student 
              welfare, creating a secure environment for all.
            </p>
            
            <div className="grid gap-4">
              {[
                "Medical malpractice and clinical trial indemnity",
                "Educational liability and student accident coverage",
                "Advanced data protection for sensitive records",
                "Emergency response and crisis management planning"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-vestigo-blue">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Consult Our Unit <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-contrast technical heart/shield */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <Heart size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-white text-4xl font-black mb-4 italic">"Mission First"</div>
                <div className="text-vestigo-lime font-black uppercase tracking-[0.2em] text-sm">Security for Service</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-vestigo-lime rounded-tl-[4rem]" />
          </div>
        </div>
      </section>
    </div>
  );
}