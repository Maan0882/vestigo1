import React from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Heart
} from "lucide-react";

export default function CareerPage() {
  const openings = [
    {
      title: "Senior Risk Analyst",
      dept: "Industrial & Commercial SBU",
      location: "Mumbai / Remote",
      type: "Full-Time"
    },
    {
      title: "Claims Specialist",
      dept: "Client Advocacy Unit",
      location: "Delhi",
      type: "Full-Time"
    },
    {
      title: "Digital Transformation Lead",
      dept: "Technology SBU",
      location: "Bangalore",
      type: "Hybrid"
    },
    {
      title: "Graduate Trainee",
      dept: "Financial Institutions SBU",
      location: "Chennai",
      type: "Full-Time"
    }
  ];

  const benefits = [
    { title: "Global Exposure", icon: <Rocket size={24} />, desc: "Work with 15+ global industries and international partners." },
    { title: "Health & Wellness", icon: <Heart size={24} />, desc: "Comprehensive benefits for you and your family." },
    { title: "Learning Culture", icon: <GraduationCap size={24} />, desc: "Continuous professional development and certifications." },
    { title: "Performance Bonus", icon: <TrendingUp size={24} />, desc: "Competitive rewards for excellence and innovation." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 0.8px, transparent 0.8px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vestigo-lime/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Users size={14} />
            Join the Conglomerate
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Build the Future of <br/>
            <span className="text-vestigo-lime">Risk Leadership</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed font-medium">
            At Vestigo, we don't just hire employees; we recruit visionaries. 
            Join a team of industry veterans and tech-savvy innovators dedicated 
            to redefining global insurance.
          </p>
        </div>
      </section>

      {/* 2. WHY JOIN US - BENEFITS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime mb-4">Life at Vestigo</h2>
            <h3 className="text-4xl font-black text-vestigo-blue">Empowering People, Protecting Innovation</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-vestigo-lime/30 transition-all group">
                <div className="w-14 h-14 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-black text-vestigo-blue mb-4">{benefit.title}</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-vestigo-lime">Opportunities</h2>
              <h3 className="text-4xl font-black text-vestigo-blue">Current Openings</h3>
            </div>
            <div className="text-gray-400 font-bold text-sm uppercase tracking-widest border-b-2 border-vestigo-lime pb-1">
              {openings.length} Active Roles
            </div>
          </div>

          <div className="grid gap-6">
            {openings.map((job, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:p-12 bg-white border border-gray-100 rounded-[2.5rem] hover:border-vestigo-lime hover:bg-gray-50/50 transition-all cursor-pointer">
                <div className="space-y-2 mb-6 md:mb-0">
                  <div className="text-xs font-black text-vestigo-lime uppercase tracking-[0.2em]">{job.dept}</div>
                  <h4 className="text-2xl font-black text-vestigo-blue group-hover:text-black transition-colors">{job.title}</h4>
                  <div className="flex gap-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="bg-vestigo-blue text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-vestigo-lime hover:text-vestigo-blue transition-all flex items-center gap-3">
                  Apply Now <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA / RESUME SUBMIT */}
      <section className="py-24 px-6 bg-vestigo-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h3 className="text-4xl md:text-5xl font-black leading-tight">
            Don't see a perfect fit? <br/>
            <span className="text-vestigo-lime">Join our talent pool.</span>
          </h3>
          <p className="text-lg text-blue-100/60 font-medium">
            We are always looking for passionate risk experts. Submit your resume 
            and we'll reach out when a suitable position opens up.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-lime-500/20">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}