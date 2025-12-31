// app/industries/page.tsx
import React from "react";
import { 
  FlaskConical, Factory, Boxes, Shirt, Hotel, Landmark, 
  ShoppingCart, Ship, Settings, Zap, Car, Printer, 
  TreePine, Package, Hospital, Laptop, ChevronRight 
} from "lucide-react";

const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>{children}</a>
);

export default function IndustriesLanding() {
  const industries = [
    { name: "Chemical & Pharmaceuticals", href: "/industries/chemical-pharmaceuticals", icon: <FlaskConical size={24}/> },
    { name: "SME/MSME", href: "/industries/sme-msme", icon: <Factory size={24}/> },
    { name: "Plastic", href: "/industries/plastic", icon: <Boxes size={24}/> },
    { name: "Textile", href: "/industries/textile", icon: <Shirt size={24}/> },
    { name: "Hospitality", href: "/industries/hospitality", icon: <Hotel size={24}/> },
    { name: "BSFI", href: "/industries/bsfi", icon: <Landmark size={24}/> },
    { name: "E-commerce", href: "/industries/e-commerce", icon: <ShoppingCart size={24}/> },
    { name: "Shipping & ODC", href: "/industries/shipping-odc-cargo-handling", icon: <Ship size={24}/> },
    { name: "Engineering", href: "/industries/engineering", icon: <Settings size={24}/> },
    { name: "Green Energy", href: "/industries/green-energy", icon: <Zap size={24}/> },
    { name: "Automobile", href: "/industries/automobile", icon: <Car size={24}/> },
    { name: "Paper Mills", href: "/industries/paper-mills", icon: <Printer size={24}/> },
    { name: "Wood & Laminates", href: "/industries/wood-laminates", icon: <TreePine size={24}/> },
    { name: "Packaging", href: "/industries/packaging", icon: <Package size={24}/> },
    { name: "Hospital & Education", href: "/industries/hospital-education", icon: <Hospital size={24}/> },
    { name: "IT", href: "/industries/it", icon: <Laptop size={24}/> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-vestigo-blue py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Sectors We <span className="text-vestigo-lime">Protect</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl leading-relaxed">
            From heavy manufacturing to digital infrastructure, Vestigo provides 
            specialized risk frameworks tailored to the unique demands of 15+ global industries.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-vestigo-blue text-vestigo-lime rounded-xl group-hover:bg-vestigo-lime group-hover:text-vestigo-blue transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-vestigo-blue">{item.name}</span>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-vestigo-lime group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}