"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Link = ({ href, children, className, onClick }: any) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Company", href: "/company", subLinks: [{name: "Who We Are", href: "/company/who-we-are"}, {name: "Why Us", href: "/company/why-us"}, {name: "Our Team", href: "/company/our-team"}, {name: "Our Partners", href: "/company/our-partners"}] },
    { name: "Solutions", href: "/solutions", subLinks: [{name: "Commercial", href: "/solutions/commercial-insurance"}, {name: "Life", href: "/solutions/life-insurance"}] },
    { name: "Industries", href: "/industries", subLinks: [{name: "Chemical", href: "/industries/chemical-pharmaceuticals"}, {name: "Shipping", href: "/industries/shipping-odc-cargo-handling"}] },
    { name: "Blogs", href: "/blogs" },
    { name: "Career", href: "/career" },
  ];

  const toggleMobileSub = (name: string) => {
    setActiveMobileSub(activeMobileSub === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-vestigo-blue/10 shadow-xl h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/vestigo_logo.png" alt="Vestigo" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group px-4 py-6">
                <Link href={item.href} className={`flex items-center gap-1 font-black uppercase text-xs tracking-widest hover:text-vestigo-gold transition-colors ${scrolled ? 'text-vestigo-gold' : 'text-vestigo-gold'}`}>
                  {item.name}
                  {item.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.subLinks && (
                  <div className="absolute left-0 top-full w-64 bg-vestigo-navy border border-white/5 shadow-2xl rounded-2xl py-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
                    {item.subLinks.map(sub => (
                      <Link key={sub.name} href={sub.href} className="block px-8 py-3 text-xs font-black text-white/60 hover:text-vestigo-gold hover:bg-white/5">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pl-6">
              <Link href="/contact" className="bg-vestigo-navy text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-vestigo-gold hover:text-vestigo-navy transition-all">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-vestigo-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto p-6 pb-32">
          {menuItems.map(item => (
            <div key={item.name} className="border-b border-gray-100">
              <div className="flex justify-between items-center py-5">
                <Link href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-black text-vestigo-navy uppercase tracking-tighter">
                  {item.name}
                </Link>
                {item.subLinks && (
                  <button onClick={() => toggleMobileSub(item.name)} className="p-2 bg-gray-50 rounded-lg">
                    <ChevronDown size={20} className={`transition-transform ${activeMobileSub === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {item.subLinks && activeMobileSub === item.name && (
                <div className="bg-gray-50 rounded-2xl mb-4 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {item.subLinks.map(sub => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-4 text-sm font-bold text-gray-600 border-b border-white last:border-0"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-8">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-vestigo-navy text-white py-5 rounded-2xl font-black text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;