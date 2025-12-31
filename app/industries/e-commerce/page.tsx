import React from "react";
import { 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Database,
  PackageSearch
} from "lucide-react";

export default function ECommerce() {
  const solutions = [
    {
      title: "Transit & Cargo Protection",
      desc: "Comprehensive cover for goods in motion, protecting against loss or damage during last-mile delivery and global shipping.",
      icon: <Truck size={32} />
    },
    {
      title: "Cyber & Data Liability",
      desc: "Essential protection against data breaches, ransomware, and digital business interruption for online platforms.",
      icon: <Database size={32} />
    },
    {
      title: "Warehouse & Inventory",
      desc: "Safeguarding fulfillment centers and high-velocity inventory against fire, theft, and natural perils.",
      icon: <PackageSearch size={32} />
    },
    {
      title: "Product Liability",
      desc: "Protection against claims arising from defective products sold through your marketplace or direct-to-consumer site.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Background: Digital grid and connectivity lines representing the e-commerce network  */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#92D050 0.5px, transparent 0.5px), linear-gradient(90deg, #92D050 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <ShoppingCart size={14} />
            Digital Economy SBU 
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Securing the <br/>
            <span className="text-vestigo-lime">Digital Storefront</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Vestigo provides agile risk management solutions for the E-commerce 
            ecosystem, ensuring that your supply chain and digital assets remain 
            protected in a 24/7 global marketplace.
          </p>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Scalable Risk Mitigation</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">End-to-End E-commerce Protection</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item, idx) => (
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

      {/* 3. RELATABLE CONTENT: Global Reach */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-vestigo-lime">Logistics Resilience </h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Protecting Every Click, <br/> From Cart to Door.
            </h3>
            <p className="text-lg text-blue-100/60 leading-relaxed">
              E-commerce success is built on trust and delivery speed. Vestigo’s 
              specialized cargo and liability products are designed to handle 
              high-volume transit risks and digital vulnerabilities, allowing you 
              to scale your platform across borders with confidence.
            </p>
            
            <div className="grid gap-4">
              {[
                "Real-time cargo tracking and transit insurance integration ",
                "Custom cyber-risk frameworks for payment gateways ",
                "Seamless coverage for multi-vendor marketplaces ",
                "Global claims advocacy for international shipments "
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" size={24} />
                  <span className="font-bold text-white/90">{text}</span>
                </div>
              ))}
            </div>

            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3">
              Consult Our Digital Experts <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            {/* Background Image Representation: Digital Globe and Delivery Shield  */}
            <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <Globe size={240} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
               <div className="relative z-10 p-12 text-center">
                  <div className="text-white text-5xl font-black mb-4 italic">Global Reach</div>
                  <p className="text-blue-100/50 font-bold leading-relaxed max-w-xs mx-auto">
                    "We empower digital pioneers to navigate the complexities of global 
                    trade through intelligent, data-driven protection."
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