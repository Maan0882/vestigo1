"use client";
import React from "react";
import { ShieldCheck, ArrowRight, Building2, Truck, HeartPulse, Leaf, Award, ChevronRight } from "lucide-react";

const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function Home() {
  return (
    <div className="bg-white font-sans text-vestigo-navy overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen lg:min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-vestigo-navy via-vestigo-navy/90 md:via-vestigo-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Securing the <br/>
              <span className="text-vestigo-gold">Modern Economy</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed max-w-lg">
              Vestigo is a leading risk management conglomerate, providing world-class protection for industrial pioneers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/solutions" className="bg-vestigo-gold text-vestigo-navy px-8 py-4 rounded-full font-black text-center text-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                Explore Units <ArrowRight size={20}/>
              </Link>
              <Link href="/contact" className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-black text-center text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-vestigo-gold p-8 md:p-12 rounded-4xl md:rounded-[3rem] shadow-2xl">
                <div className="text-white text-3xl md:text-5xl font-black">15+</div>
                <div className="text-vestigo-navy/60 font-black uppercase text-[10px] md:text-xs tracking-widest">Sectors</div>
              </div>
            </div>

            <div className="space-y-6 md:order-2">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-vestigo-gold">Corporate Profile</h2>
              <h3 className="text-3xl md:text-5xl font-black leading-tight text-vestigo-navy">
                Heritage Meets Technological Agility
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                Combining a century-long legacy of risk management with modern, data-driven diagnostics to redefine reliability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-8 pt-4">
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <Award className="text-vestigo-gold mb-3" size={28} />
                  <h4 className="font-black text-vestigo-navy text-sm mb-1">Miniratna Status</h4>
                  <p className="text-xs text-gray-500 font-bold">Unparalleled governance and efficiency.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <ShieldCheck className="text-vestigo-gold mb-3" size={28} />
                  <h4 className="font-black text-vestigo-navy text-sm mb-1">Certified Excellence</h4>
                  <p className="text-xs text-gray-500 font-bold">Standard-setting asset protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC VERTICALS */}
      <section className="py-20 md:py-32 bg-vestigo-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-vestigo-gold">Strategic Solutions</h2>
            <h3 className="text-3xl md:text-6xl font-black">Industrial Resilience</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Commercial Risk", icon: <Building2 />, href: "/solutions/commercial-insurance" },
              { title: "Marine Logistics", icon: <Truck />, href: "/solutions/shipping-odc-cargo-handling" },
              { title: "Employee Benefits", icon: <HeartPulse />, href: "/solutions/employee-benefits" },
              { title: "Green Energy", icon: <Leaf />, href: "/solutions/green-energy" }
            ].map((unit, idx) => (
              <Link key={idx} href={unit.href} className="group p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-vestigo-gold hover:bg-white/5 transition-all flex flex-col bg-white/5">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-vestigo-gold/10 text-vestigo-gold rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-gold group-hover:text-vestigo-navy transition-all">
                  {unit.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black mb-6">{unit.title}</h4>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-vestigo-gold">
                  Access Unit <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-vestigo-gold rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-center space-y-8 relative overflow-hidden">
             <h2 className="text-3xl md:text-6xl font-black text-vestigo-navy tracking-tight">
               Ready to Secure Your Future?
             </h2>
             <Link href="/contact" className="inline-block bg-vestigo-navy text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-transform">
               Consult an Expert
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}