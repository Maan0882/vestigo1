// app/solutions/page.tsx
import React from "react";
import { 
  ShieldCheck, 
  Leaf, 
  Users, 
  HeartPulse, 
  Building2, 
  Scale, 
  Briefcase, 
  FileSearch,
  ChevronRight
} from "lucide-react";

const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function SolutionsLanding() {
  const solutions = [
    {
      title: "Commercial Insurance",
      href: "/solutions/commercial-insurance",
      desc: "Comprehensive risk management for large-scale manufacturing and heavy industry.",
      icon: <Building2 size={32} />
    },
    {
      title: "Employee Benefits",
      href: "/solutions/employee-benefits",
      desc: "Strategic health, wellness, and life insurance solutions for global workforces.",
      icon: <Users size={32} />
    },
    {
      title: "Life Insurance",
      href: "/solutions/life-insurance",
      desc: "Personalized protection and wealth management for executives and individuals.",
      icon: <HeartPulse size={32} />
    },
    {
      title: "Claims Management",
      href: "/solutions/claims-management",
      desc: "Our dedicated SBU for rapid, agile, and transparent claims processing.",
      icon: <Scale size={32} />
    },
    {
      title: "Green Insurance",
      href: "/solutions/green-insurance",
      desc: "Specialized risk solutions for renewable energy and sustainable projects.",
      icon: <Leaf size={32} />
    },
    {
      title: "Surety & Credit",
      href: "/solutions/surety-bond-credit-insurance",
      desc: "Financial guarantees and trade credit protection for global commerce.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Usability Suite",
      href: "/solutions/usability-suite",
      desc: "Tech-driven insurance tools designed for seamless user experience.",
      icon: <Briefcase size={32} />
    },
    {
      title: "Audit & Risk Assessment",
      href: "/solutions/audit&risk-assessment",
      desc: "Data-driven diagnostics to prevent losses before they occur.",
      icon: <FileSearch size={32} />
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-vestigo-blue py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-16" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Strategic <span className="text-vestigo-lime">Solutions</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed">
            Vestigo operates through specialized Business Units, providing end-to-end 
            risk mitigation strategies tailored for a modern, global economy.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all flex flex-col"
            >
              <div className="w-16 h-16 bg-vestigo-blue text-vestigo-lime rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-vestigo-blue mb-4">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 grow">{item.desc}</p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-vestigo-lime">
                Explore Unit <ChevronRight size={16} strokeWidth={3} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}