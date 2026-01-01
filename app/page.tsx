import React from 'react';
import { Shield, Handshake, Settings, Factory, Cpu, HardHat, Search, FileText, Users, FileCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 min-h-125 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bs_meet3.jpg" 
            alt="Background" 
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-800 via-slate-800/95 to-slate-900/40"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-5">
                <span className="text-yellow-400">Strategic Risk<br/> Advisory</span>
                <span className="text-white"> for Growth</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Vestigo is a licensed insurance broker delivering risk advisory, claims advocacy, 
                and technology-driven insurance solutions to protect forward thinking businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg">
                  Get Expert Advice
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition">
                  Our Technology →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-linear-to-t from-white via-transparent to-transparent rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow relative">
              
              
              <div className="relative inline-block mb-6 -mt-2">
                <div className="bg-white absolute inset-0 rounded-full shadow-xl scale-110">
                  <div className="absolute top-13 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="min-w-89 h-1.5 bg-linear-to-r from-yellow-400 via-transparent to-yellow-400"></div>
                  </div>
                </div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full border-5 border-yellow-400">
                  <Shield className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Compliant</h3>
              <p className="text-gray-600">Fully Licensed & Transparent</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-linear-to-t from-white via-transparent to-transparent rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow relative">
                        
              <div className="relative inline-block mb-6 -mt-2">
                <div className="bg-white absolute inset-0 rounded-full shadow-xl scale-110">
                  <div className="absolute top-13 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="min-w-89 h-1.5 bg-linear-to-r from-yellow-400 via-transparent to-yellow-400"></div>
                  </div>
                </div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full border-5 border-yellow-400">
                  <Handshake className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert B2B Advisory</h3>
              <p className="text-gray-600">Tailored B2B Solutions</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-linear-to-t from-white via-transparent to-transparent rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow relative">
                
              <div className="relative inline-block mb-6 -mt-2">
                <div className="bg-white absolute inset-0 rounded-full shadow-xl scale-110">
                  <div className="absolute top-13 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="min-w-89 h-1.5 bg-linear-to-r from-yellow-400 via-transparent to-yellow-400"></div>
                  </div>
                </div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full border-5 border-yellow-400">
                  <Settings className="w-9 h-9 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tech-Enabled Process</h3>
              <p className="text-gray-600">Efficient & Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <Factory className="w-12 h-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Manufacturing Risks</h3>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <Cpu className="w-12 h-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Cyber Liability</h3>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <HardHat className="w-12 h-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Construction & Infra</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-12">A clear, client-centric approach to risk management and insurance braking.</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Understand Risk</h3>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Design Coverage</h3>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Place with Insurers</h3>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Support Claims</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white py-12">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000" 
            alt="City skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Protect your business with the right insurance strategy
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-5">
            Schedule a no-obligation consultation with our experts today
          </p>
          <button className="bg-yellow-400 text-slate-900 px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition shadow-lg">
            Request Your Consultation
          </button>
        </div>
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto p-5 px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-5 gap-6 border-t border-gray-700 p-5">
            {/* Company Info */}
            <div>
              <div className="text-xl font-bold mb-3">
                <img src="/vestigo_logo.png" alt="Vestigo" className="h-8 md:h-10 w-auto" />
              </div>
              <p className="text-lime-500 text-xs mb-3">
                Vestigo Insurance Provider - powered by the trusted name in{' '}
                <span className="text-blue-400">content at large</span>
              </p>
              <p className="text-gray-400 text-xs">
                IRDAI License No: [123456]
              </p>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-bold mb-3 text-white text-lg">Company</h4>
              <ul className="space-y-1.5 text-yellow-600 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Solutions Links */}
            <div>
              <h4 className="font-bold mb-3 text-white text-lg">Solutions</h4>
              <ul className="space-y-1.5 text-yellow-600 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Insights Links */}
            <div>
              <h4 className="font-bold mb-3 text-white text=lg">Insights</h4>
              <ul className="space-y-1.5 text-yellow-600 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="font-bold mb-3 text-white text-lg">Support</h4>
              <ul className="space-y-1.5 text-yellow-600 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className=" pt-5 text-center pb-0 text-blue-400 text-xs">
            <p>© 2025 Vestigo. All rights reserved.</p>
          </div>
        </div>  
      </section>
    </div>
  );
}