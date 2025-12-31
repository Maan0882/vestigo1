import React from "react";
import { 
  Monitor, 
  Smartphone, 
  BarChart, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  MousePointer2
} from "lucide-react";

export default function UsabilitySuite() {
  const features = [
    {
      title: "Self-Service Portals",
      desc: "Empowering clients with 24/7 access to policy documents, certificate issuance, and real-time endorsements.",
      icon: <Monitor size={32} />
    },
    {
      title: "Mobile Claims Intake",
      desc: "Submit and track claims on the go with our intuitive mobile interface, including instant photo uploads.",
      icon: <Smartphone size={32} />
    },
    {
      title: "Risk Analytics Dashboard",
      desc: "Visualize your insurance spend and loss ratios through interactive, high-fidelity data heatmaps.",
      icon: <BarChart size={32} />
    },
    {
      title: "API Integration Hub",
      desc: "Seamlessly connect your ERP or HRMS systems with our insurance infrastructure for automated data flow.",
      icon: <Layers size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Digital circuit pattern representing the tech-suite */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.5px, transparent 0.5px), linear-gradient(0deg, transparent 49%, #92D050 50%, transparent 51%)', backgroundSize: '40px 40px, 100% 40px' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <MousePointer2 size={14} />
            Digital Transformation SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Insurance at the <br/>
            <span className="text-vestigo-lime">Speed of Thought</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo’s Usability Suite removes the friction from traditional insurance, 
            providing a digital ecosystem where complex risk management becomes 
            as simple as a single click.
          </p>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">The Digital Edge</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Proprietary Technology Tools</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
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

      {/* 3. RELATABLE CONTENT: Tech Empowerment */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">User-Centric Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Complex Data. <br/> Simple Experience.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              We bridge the gap between global risk complexity and executive decision-making. 
              Our suite is designed for modern enterprises that demand agility, 
              transparency, and a paperless environment for their insurance portfolios.
            </p>
            
            <div className="grid gap-4">
              {[
                "Zero-lag policy access and certificate generation",
                "Automated renewal alerts and premium tracking",
                "High-fidelity data visualization for board reporting",
                "Multi-device compatibility for teams on the move"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Request a Demo <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: High-tech digital frame */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Zap size={260} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Agile</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs">
                    "Innovation isn't just about the technology we use—it's about the 
                    clarity and speed we provide to our clients."
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