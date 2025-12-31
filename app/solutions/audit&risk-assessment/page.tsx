import React from "react";
import { 
  FileSearch, 
  ShieldAlert, 
  BarChart3, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Microscope
} from "lucide-react";

export default function AuditAndRiskAssessment() {
  const assessmentModules = [
    {
      title: "Technical Risk Audits",
      desc: "In-depth physical inspections of industrial assets to identify operational vulnerabilities and fire hazards.",
      icon: <Microscope size={32} />
    },
    {
      title: "Gap Analysis",
      desc: "Comparative study of existing insurance portfolios against actual risk exposures to eliminate under-insurance.",
      icon: <ShieldAlert size={32} />
    },
    {
      title: "Loss Prevention Diagnostics",
      desc: "Data-driven insights to implement preventative measures, reducing the frequency and severity of future claims.",
      icon: <Activity size={32} />
    },
    {
      title: "Compliance Reviews",
      desc: "Ensuring your risk management framework aligns with global standards and local regulatory requirements.",
      icon: <ClipboardCheck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Abstract Diagnostic Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <FileSearch size={14} />
            Diagnostic SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Precision <br/>
            <span className="text-vestigo-lime">Risk Diagnostics</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo moves beyond traditional brokerage by providing forensic-level 
            risk assessments. We identify what could go wrong before it happens, 
            turning uncertainty into a calculated strategy.
          </p>
        </div>
      </section>

      {/* 2. ASSESSMENT MODULES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Diagnostic Framework</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Science-Led Risk Analysis</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentModules.map((module, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
                <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {module.icon}
                </div>
                <h4 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight">{module.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATABLE CONTENT: Prevention Philosophy */}
      <section className="py-24 px-6 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Background Image Representation: High-contrast data heatmap overlay */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl relative">
              <BarChart3 size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="absolute inset-0 bg-linear-to-br from-vestigo-blue/40 to-black/60" />
              <div className="relative z-10 p-12 text-center">
                <div className="text-white text-4xl font-black mb-4 italic">"Forensic"</div>
                <div className="text-vestigo-lime font-black uppercase tracking-[0.2em] text-sm">Depth of Analysis</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-8 border-b-8 border-vestigo-lime rounded-br-[4rem]" />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-black text-vestigo-blue leading-tight">
              Pre-empting Loss <br/> Through Evidence.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We believe the most affordable claim is the one that never occurs. 
              Our risk engineering team conducts on-site diagnostics to uncover 
              hidden technical exposures, helping you optimize your safety protocols 
              and premium costs simultaneously.
            </p>
            
            <ul className="space-y-4">
              {[
                "Fire and health safety engineering audits",
                "Supply chain vulnerability mapping",
                "Business interruption impact modeling",
                "Post-loss forensic investigation and analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-vestigo-blue">
                  <CheckCircle2 size={20} className="text-vestigo-lime" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-vestigo-blue text-white px-10 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3">
              Schedule an Audit <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}