"use client";
import React from "react";
import { 
  ShieldCheck, 
  Globe, 
  Leaf, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  Building2,
  Truck,
  HeartPulse,
  ChevronRight
} from "lucide-react";

const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function Home() {
  return (
    <div className="bg-white font-sans text-vestigo-navy">
      {/* 1. HERO SECTION - GIFT Gujarat Style */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Financial Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-vestigo-navy via-vestigo-navy/80 to-transparent" />
        </div>

        <div className="m-30 max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vestigo-gold/10 border border-vestigo-gold/20 text-vestigo-gold text-xs font-black uppercase tracking-[0.2em]">
              Global Risk Leadership
            </div> */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Securing the <br/>
              <span className="text-vestigo-gold">Modern Economy</span>
            </h1>
            <p className="text-xl text-blue-100/70 leading-relaxed">
              Vestigo is a leading risk management and insurance conglomerate, leveraging global expertise to provide world-class protection for industrial pioneers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/solutions" className="bg-vestigo-gold text-vestigo-navy px-8 py-4 rounded-full font-black text-lg hover:bg-white transition-all flex items-center gap-2 shadow-xl shadow-vestigo-gold/20">
                Explore Business Units <ArrowRight size={20}/>
              </Link>
              <Link href="/contact" className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-gray/20 -skew-x-12 translate-x-20 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office Architecture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-vestigo-navy/20" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-vestigo-gold p-12 rounded-[3rem] shadow-2xl">
                <div className="text-white text-5xl font-black mb-2">15+</div>
                <div className="text-vestigo-navy/60 font-black uppercase text-xs tracking-widest">Global Sectors</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-gold">Corporate Profile</h2>
                <h3 className="text-4xl md:text-5xl font-black leading-tight text-vestigo-navy">
                  Heritage Meets <br/> Technological Agility
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Just as GIFT City redefines the financial landscape, Vestigo stands as a pillar of reliability. We combine a century-long legacy of risk management with modern, data-driven diagnostics.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-vestigo-gray/30 rounded-3xl border border-vestigo-gray">
                  <Award className="text-vestigo-gold mb-4" size={32} />
                  <h4 className="font-black text-vestigo-navy mb-2">Miniratna Status</h4>
                  <p className="text-sm text-gray-500 font-bold">Unparalleled governance and efficiency in risk brokerage.</p>
                </div>
                <div className="p-6 bg-vestigo-gray/30 rounded-3xl border border-vestigo-gray">
                  <ShieldCheck className="text-vestigo-gold mb-4" size={32} />
                  <h4 className="font-black text-vestigo-navy mb-2">Certified Excellence</h4>
                  <p className="text-sm text-gray-500 font-bold">Standard-setting protocols for industrial asset protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC VERTICALS */}
      <section className="py-32 bg-vestigo-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-vestigo-gold">Strategic Solutions</h2>
            <h3 className="text-4xl md:text-6xl font-black">Industrial Resilience</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Commercial Risk", icon: <Building2 />, href: "/solutions/commercial-insurance" },
              { title: "Marine Logistics", icon: <Truck />, href: "/solutions/shipping-odc-cargo-handling" },
              { title: "Employee Benefits", icon: <HeartPulse />, href: "/solutions/employee-benefits" },
              { title: "Green Energy", icon: <Leaf />, href: "/solutions/green-energy" }
            ].map((unit, idx) => (
              <Link 
                key={idx} 
                href={unit.href}
                className="group p-10 rounded-[3rem] border border-white/10 hover:border-vestigo-gold hover:bg-white/5 transition-all flex flex-col h-full bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-vestigo-gold/10 text-vestigo-gold rounded-2xl flex items-center justify-center mb-10 group-hover:bg-vestigo-gold group-hover:text-vestigo-navy transition-all border border-vestigo-gold/20">
                  {unit.icon}
                </div>
                <h4 className="text-2xl font-black mb-6">{unit.title}</h4>
                <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-vestigo-gold group-hover:translate-x-2 transition-transform">
                  Access Unit <ChevronRight size={16} strokeWidth={3} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-15 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="bg-vestigo-gold rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <h2 className="text-4xl md:text-6xl font-black text-vestigo-navy tracking-tight relative z-10">
               Ready to Secure <br/> Your Future?
             </h2>
             <p className="text-xl text-vestigo-navy/60 font-black max-w-xl mx-auto relative z-10">
               Partner with global risk experts to safeguard your enterprise against the unexpected.
             </p>
             <Link href="/contact" className="inline-block bg-vestigo-navy text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl relative z-10">
               Consult an Expert
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}