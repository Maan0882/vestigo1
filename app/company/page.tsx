import React from "react";
import { Users, HelpCircle, Handshake, Info, ChevronRight } from "lucide-react";

// Local Link shim for preview environment
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function CompanyLanding() {
  const companyLinks = [
    {
      name: "Who We Are",
      href: "/company/who-we-are",
      description: "Discover our heritage, vision, and the core values that drive our commitment to global risk leadership.",
      icon: <Info size={32} className="text-vestigo-lime" />,
    },
    {
      name: "Why Us",
      href: "/company/why-us",
      description: "Learn why leading global enterprises trust Vestigo for specialized insurance and agile claims management.",
      icon: <HelpCircle size={32} className="text-vestigo-lime" />,
    },
    {
      name: "Our Team",
      href: "/company/our-team",
      description: "Meet the visionaries, risk analysts, and specialists who power our diverse industrial solutions.",
      icon: <Users size={32} className="text-vestigo-lime" />,
    },
    {
      name: "Our Partners",
      href: "/company/our-partners",
      description: "Explore our global network of reinsurers and industry bodies that strengthen our service delivery.",
      icon: <Handshake size={32} className="text-vestigo-lime" />,
    },
  ];

  return (
    <div className="min-h-screen bg-vestigo-dark relative overflow-hidden">
      {/* 1. RELATABLE BACKGROUND: Tech-Grid & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Deep Navy Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-vestigo-lime to-vestigo-blue opacity-90" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        {/* Animated Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-vestigo-blue/30 rounded-full blur-[100px]" />
      </div>

      {/* 2. HEADER SECTION */}
      <section className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-vestigo-lime animate-pulse" />
            Corporate Headquarters
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            Our <span className="text-vestigo-lime">Foundation</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed">
            Vestigo operates as a global conglomerate of specialized risk experts. 
            Explore our heritage, meet our leaders, and understand the core values 
            that protect our clients' futures.
          </p>
        </div>
      </section>

      {/* 3. DIRECTORY GRID */}
      <section className="relative z-10 py-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {companyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] hover:border-vestigo-lime/50 hover:bg-white/10 transition-all duration-500 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-vestigo-blue/50 rounded-2xl flex items-center justify-center shadow-inner mb-8 group-hover:bg-vestigo-lime transition-all duration-500">
                  <div className="group-hover:text-vestigo-blue transition-colors text-vestigo-lime">
                    {link.icon}
                  </div>
                </div>
                
                <h2 className="text-3xl font-black text-white mb-4 group-hover:text-vestigo-lime transition-colors">
                  {link.name}
                </h2>
                
                <p className="text-blue-100/40 font-medium mb-10 grow leading-relaxed">
                  {link.description}
                </p>
                
                <div className="w-full h-px bg-white/10 mb-8" />
                
                <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-vestigo-lime group-hover:gap-5 transition-all">
                  Access Section <ChevronRight size={16} strokeWidth={4} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CALLOUT */}
      <section className="relative z-10 py-16 border-t border-white/5 bg-blue backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-black text-white">Ready to partner with Vestigo?</h3>
            <p className="text-blue-100/40 text-sm mt-1">Join the network of 15+ industrial sectors we protect.</p>
          </div>
          <Link href="/contact" className="bg-vestigo-lime text-vestigo-blue px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-lime-500/10">
            Contact Relations
          </Link>
        </div>
      </section>
    </div>
  );
}