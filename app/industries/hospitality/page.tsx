import React from "react";
import { 
  Hotel, 
  Utensils, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin
} from "lucide-react";

export default function HospitalityIndustry() {
  const specializedServices = [
    {
      title: "Property & Asset Cover",
      desc: "Protection for high-value hotel infrastructure, fine dining assets, and luxury resort facilities against physical damage.",
      icon: <Hotel size={32} />
    },
    {
      title: "Public & Guest Liability",
      desc: "Comprehensive coverage for guest injuries, food-borne illnesses, and third-party property damage within your premises.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Business Interruption",
      desc: "Safeguarding revenue streams during seasonal downturns or unexpected closures due to insured perils.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Employee Benefits",
      desc: "Tailored health and life insurance programs for hotel staff, from front-of-house to management levels.",
      icon: <Users size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Abstract luxury pattern representing service excellence */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Utensils size={14} />
            Leisure & Hospitality SBU
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Art of Service</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            In the hospitality world, your reputation is your most valuable asset. 
            Vestigo provides the invisible safety net that allows you to focus 
            on guest experiences while we manage the risks. 
          </p>
        </div>
      </section>

      {/* 2. SPECIALIZED SERVICES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Comprehensive Coverage</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Tailored for the Guest Economy</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-[3rem] hover:border-vestigo-lime hover:shadow-2xl hover:shadow-lime-500/10 transition-all">
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

      {/* 3. RELATABLE CONTENT: Reputation Management */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Bespoke Protection</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Protecting Your Guests, <br/> Preserving Your Brand.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              From boutique hotels to global resort chains, we understand that 
              operational risks in hospitality are unique. We offer data-driven 
              risk assessments that cover everything from liquor liability to 
              cyber threats in booking systems. 
            </p>
            
            <div className="grid gap-4">
              {[
                "Global reinsurance network for luxury properties",
                "Fast-track claims for guest-related incidents",
                "Comprehensive food & beverage safety audits",
                "Multi-location policy management for chains"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Secure Your Venue <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Elegant destination frame */}
            <div className="aspect-3/4 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <MapPin size={240} className="text-vestigo-lime opacity-10 absolute animate-bounce" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Global Reach</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We empower hospitality leaders to expand into new territories with 
                    absolute confidence in their local and global risk frameworks."
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