// Reusable template for Industry sub-pages
import React from "react";
import { ShieldCheck, Target, Zap, CheckCircle2, ArrowRight, FlaskConical } from "lucide-react";

export default function IndustryDetail() {
  const points = [
    "Material Damage & Business Interruption",
    "Product Liability & Recall Coverage",
    "Supply Chain & Logistics Protection",
    "Environmental Risk Management"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. SECTION: Industrial Hero */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        {/* Relatable Background Image Representation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-vestigo-lime/5 skew-x-12 translate-x-32" />
           <div className="absolute inset-0 bg-linear-to-b from-vestigo-blue via-vestigo-blue to-white/5" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 text-vestigo-lime mb-6">
            <FlaskConical size={32} />
            <span className="text-sm font-black uppercase tracking-[0.2em]">Industry Specialized Unit</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Chemical & <br/>
            <span className="text-vestigo-lime">Pharmaceuticals</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Navigating the high-stakes risks of R&D, chemical volatility, and 
            stringent global compliance for life-science leaders.
          </p>
        </div>
      </section>

      {/* 2. SECTION: Deep Insights */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-vestigo-blue">Comprehensive Risk Frameworks</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We understand that in the pharmaceutical and chemical sectors, precision is 
              not just a goal—it's a requirement. Our risk experts provide the 
              diagnostics and protection necessary for heavy manufacturing and 
              highly regulated laboratory environments.
            </p>
            
            <div className="space-y-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
                  <CheckCircle2 className="text-vestigo-lime" />
                  <span className="font-bold text-vestigo-blue">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual Box representing background/image elements */}
            <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl">
              <ShieldCheck size={200} className="text-vestigo-lime opacity-10 absolute animate-pulse" />
              <div className="relative z-10 text-center p-12">
                <div className="text-vestigo-lime text-6xl font-black mb-2">98%</div>
                <div className="text-white font-black uppercase tracking-widest text-sm">Retention in Sector</div>
                <div className="mt-8 h-1 w-20 bg-vestigo-lime mx-auto rounded-full" />
              </div>
            </div>
            {/* Decorative lime square */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vestigo-lime rounded-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* 3. SECTION: CTA */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-black text-vestigo-blue mb-8">Ready to secure your operations?</h3>
          <button className="bg-vestigo-blue text-white px-12 py-5 rounded-full font-black text-lg hover:bg-black transition-all flex items-center gap-3 mx-auto shadow-xl shadow-blue-900/20">
            Get an Industry Quote <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}