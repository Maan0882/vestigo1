"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";

const Link = ({ href, children, className, onClick }: any) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu structure following Flow.txt 
  const menuItems = [
    { 
      name: "Company", 
      href: "/company",
      submenu: [
        { name: "Who We Are", href: "/company/who-we-are" },
        { name: "Why Us", href: "/company/why-us" },
        { name: "Our Team", href: "/company/our-team" },
        { name: "Our Partners", href: "/company/our-partners" }
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      submenu: [
        { name: "Commercial Insurance", href: "/solutions/commercial-insurance" },
        { name: "Employee Benefits", href: "/solutions/employee-benefits" },
        { name: "Life Insurance", href: "/solutions/life-insurance" }
      ]
    },
    { 
      name: "Industries", 
      href: "/industries",
      submenu: [
        { name: "Chemical & Pharmaceuticals", href: "/industries/chemical-pharmaceuticals" },
        { name: "SME & MSME", href: "/industries/sme-msme" },
        { name: "Plastic & Textile", href: "/industries/plastic" }, // Grouped for UI brevity
        { name: "Hospitality & BSFI", href: "/industries/hospitality" },
        { name: "E-Commerce", href: "/industries/e-commerce" },
        { name: "Shipping & ODC", href: "/industries/shipping-odc-cargo-handling" },
        { name: "Green Energy", href: "/industries/green-energy" },
        { name: "IT & Education", href: "/industries/it" }
      ]
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav className={`fixed top-0 z-50 min-w-full transition-all rounded-2xl duration-300 ${scrolled || isOpen ? 'bg-white/10 backdrop-blur-sm shadow-xl' : 'bg-white/90'}`}>
      

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/vestigo_logo.png" alt="Vestigo" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Main Menu - IFC Style Spacing */}
        <div className="hidden lg:flex items-center space-x-10 h-full">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative h-full flex items-center group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href} 
                className="flex items-center gap-1 font-bold text-sm text-vestigo-navy hover:text-vestigo-gold transition-colors"
              >
                {item.name}
                {item.submenu && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Mega Dropdown for Desktop */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute top-20 left-0 w-72 bg-white border-t-2 border-vestigo-gold shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
                  {item.submenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="text-[13px] font-medium text-gray-600 hover:text-vestigo-gold transition-colors">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search and Contact CTA */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-vestigo-navy hover:text-vestigo-gold">
            <Search size={20} />
          </button>
          <Link href="/contact" className="hidden md:block bg-vestigo-navy text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-vestigo-gold transition-all">
            Contact Us
          </Link>
          <button className="lg:hidden p-2 text-vestigo-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Accordian Style) */}
      <div className={`lg:hidden overflow-y-auto transition-all duration-500 ease-in-out bg-white ${isOpen ? 'max-h-screen border-b border-gray-100' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-50 pb-4">
              <div className="flex justify-between items-center" onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}>
                <Link href={item.href} className="text-lg font-bold text-vestigo-navy uppercase">{item.name}</Link>
                {item.submenu && <ChevronDown size={20} className={activeDropdown === item.name ? 'rotate-180' : ''} />}
              </div>
              {item.submenu && activeDropdown === item.name && (
                <div className="mt-4 flex flex-col gap-3 ml-4">
                  {item.submenu.map(sub => (
                    <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className="text-gray-500 font-medium text-sm">{sub.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-vestigo-navy text-white py-4 text-center rounded-sm font-bold uppercase tracking-widest">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}