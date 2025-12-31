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

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/20 shadow-xl h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center gap-2">
            <img src="/vestigo_logo.png" alt="Vestigo" className="h-10 w-auto" />
            {/* <div className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-vestigo-navy' : 'text-vestigo-navy'}`}>
              VESTIGO
            </div> */}
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group px-4 py-6">
                <Link href={item.href} className={`flex items-center gap-1 font-black uppercase text-xs tracking-widest hover:text-vestigo-blue transition-colors ${scrolled ? 'text-vestigo-blue' : 'text-vestigo-gold'}`}>
                  {item.name}
                  {item.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.subLinks && (
                  <div className="absolute left-0 top-full w-64 bg-vestigo-blue border border-white/5 shadow-2xl rounded-2xl py-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
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
              <Link href="/contact" className="bg-vestigo-navy text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-vestigo-gold hover:text-vestigo-navy transition-all shadow-lg shadow-vestigo-navy/20">
                Contact Us
              </Link>
            </div>
          </div>

          <button className="lg:hidden text-vestigo-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 p-6 overflow-y-auto">
          {menuItems.map(item => (
            <div key={item.name} className="border-b border-vestigo-gray py-6">
               <Link href={item.href} className="text-3xl font-black text-vestigo-navy uppercase tracking-tighter">{item.name}</Link>
            </div>
          ))}
          <div className="mt-12">
            <Link href="/contact" className="block w-full text-center bg-vestigo-navy text-white py-5 rounded-3xl font-black text-lg">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;