import React from "react";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

// Local Link shim to avoid Next.js resolution errors in this environment
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-vestigo-navy text-white pt-32 pb-16 relative overflow-hidden">
      {/* Subtle architectural grid background */}
      <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center gap-3">
              <img src="/vestigo_logo.png" alt="Vestigo" className="h-10 w-auto brightness bg-amber-50" />
              {/* <div className="text-3xl font-black tracking-tighter">VESTIGO</div> */}
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
              A global risk management conglomerate. Protecting the industrial and financial pillars of the modern world through precision diagnostics and institutional excellence.
            </p>
            <div className="space-y-6">
              <a href="mailto:relations@vestigo.com" className="flex items-center gap-4 text-sm font-black hover:text-vestigo-gold transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                  <Mail size={18}/>
                </div>
                relations@vestigo.com
              </a>
              <div className="flex items-start gap-4 text-sm font-black text-white/40">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin size={18}/>
                </div>
                <span>Corporate HQ: Global Financial Center, <br/>GIFT City, Gujarat</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-vestigo-gold mb-10">Strategic SBU</h4>
            <ul className="space-y-5 text-white/50 text-xs font-black uppercase tracking-widest">
              <li><Link href="/solutions/commercial-insurance" className="hover:text-vestigo-gold transition-colors">Industrial Risk</Link></li>
              <li><Link href="/solutions/employee-benefits" className="hover:text-vestigo-gold transition-colors">Employee Benefits</Link></li>
              <li><Link href="/solutions/green-insurance" className="hover:text-vestigo-gold transition-colors">Green Transition</Link></li>
              <li><Link href="/solutions/surety-bond-credit-insurance" className="hover:text-vestigo-gold transition-colors">Trade Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-vestigo-gold mb-10">Verticals</h4>
            <ul className="space-y-5 text-white/50 text-xs font-black uppercase tracking-widest">
              <li><Link href="/industries/chemical-pharmaceuticals" className="hover:text-vestigo-gold transition-colors">Chemical & Pharma</Link></li>
              <li><Link href="/industries/shipping-odc-cargo-handling" className="hover:text-vestigo-gold transition-colors">Marine Logistics</Link></li>
              <li><Link href="/industries/bsfi" className="hover:text-vestigo-gold transition-colors">Financial Systems</Link></li>
              <li><Link href="/industries/it" className="hover:text-vestigo-gold transition-colors">Tech & Cyber</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-black text-xs uppercase tracking-[0.4em] text-vestigo-gold mb-10">Connect</h4>
            <div className="flex space-x-4 mb-auto">
              <Link href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-vestigo-gold hover:text-vestigo-navy transition-all border border-white/10">
                <Linkedin size={24}/>
              </Link>
              <Link href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-vestigo-gold hover:text-vestigo-navy transition-all border border-white/10">
                <Twitter size={24}/>
              </Link>
            </div>
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Vestigo Insurance Brokers Ltd.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            <Link href="/privacy" className="hover:text-vestigo-gold transition-colors">Privacy Protocols</Link>
            <Link href="/terms" className="hover:text-vestigo-gold transition-colors">Governance Terms</Link>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-vestigo-gold">
            Assured & Insured
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;