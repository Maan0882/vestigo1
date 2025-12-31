// Example for app/solutions/green-insurance/page.tsx
import React from "react";
import { Leaf, CheckCircle2, Shield } from "lucide-react";

export default function GreenInsurance() {
  const benefits = [
    "Renewable Energy Infrastructure Protection",
    "Carbon Credit Risk Mitigation",
    "ESG Compliance & Reporting Support",
    "Sustainable Project Lifecycle Coverage"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-vestigo-blue pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-vestigo-lime mb-6">
            <Leaf size={40} />
            <span className="h-px w-12 bg-vestigo-lime/30"></span>
            <span className="text-sm font-black uppercase tracking-widest">Strategic SBU</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            Green <br/><span className="text-vestigo-lime">Insurance</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            Powering the transition to a sustainable future with specialized risk 
            management for solar, wind, and green hydrogen enterprises.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-vestigo-blue">Future-Focused Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                As the global economy shifts toward sustainability, Vestigo provides the 
                safety net required for massive capital investments in green tech.
              </p>
            </div>
            
            <div className="grid gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="text-vestigo-lime shrink-0" />
                  <span className="font-bold text-vestigo-blue">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-vestigo-blue rounded-[4rem] flex items-center justify-center overflow-hidden shadow-2xl">
                <Shield size={200} className="text-vestigo-lime opacity-20 absolute" />
                <div className="relative z-10 text-center p-12">
                   <div className="text-6xl font-black text-white mb-2">30+</div>
                   <div className="text-vestigo-lime font-black uppercase tracking-widest text-sm">Active Projects</div>
                </div>
             </div>
             {/* Decorative lime blob */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vestigo-lime rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </section>
    </div>
  );
}