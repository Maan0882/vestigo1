// app/blogs/page.tsx
import React from "react";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Search,
  Newspaper,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

export default function BlogsPage() {
  const categories = ["All", "Risk Management", "Corporate News", "Industry Insights", "Sustainability"];
  
  const posts = [
    {
      id: 1,
      date: "Dec 28, 2025",
      readTime: "6 min read",
      category: "Risk Management",
      title: "Navigating Cyber Volatility in the 2026 Financial Landscape",
      desc: "As digital frontiers expand, we analyze the shifting paradigms of cyber liability for global banking institutions.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      date: "Dec 15, 2025",
      readTime: "4 min read",
      category: "Sustainability",
      title: "Green Insurance: De-risking the Hydrogen Energy Transition",
      desc: "How specialized risk assessment is unlocking billion-dollar investments in sustainable fuel technologies.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      date: "Nov 30, 2025",
      readTime: "5 min read",
      category: "Industry Insights",
      title: "The Future of Logistics: Protecting Over-Dimensional Cargo",
      desc: "A deep dive into the engineering-led insurance frameworks required for high-value infrastructure projects.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-vestigo-blue pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vestigo-lime text-xs font-black uppercase tracking-widest mb-8">
            <Newspaper size={14} />
            Vestigo Insights Center
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Knowledge for a <br/>
            <span className="text-vestigo-lime">Resilient World</span>
          </h1>
          
          <div className="max-w-2xl mx-auto relative mt-12">
            <input 
              type="text" 
              placeholder="Search insights, whitepapers, and reports..." 
              className="w-full bg-white/5 border border-white/20 rounded-full py-5 px-8 text-white placeholder:text-blue-100/30 focus:outline-none focus:border-vestigo-lime transition-all"
            />
            <button className="absolute right-3 top-3 bg-vestigo-lime text-vestigo-blue p-2.5 rounded-full hover:scale-105 transition-transform">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Categories & Featured */}
      <section className="py-12 px-6 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button key={cat} className="px-6 py-2 rounded-full text-sm font-black border border-gray-200 hover:border-vestigo-lime hover:text-vestigo-lime transition-all text-vestigo-blue uppercase tracking-widest">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 hover:border-vestigo-lime hover:bg-white hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-vestigo-blue text-vestigo-lime px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col grow">
                <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-vestigo-lime"/> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-vestigo-lime"/> {post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-black text-vestigo-blue mb-4 leading-tight group-hover:text-vestigo-lime transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 font-medium leading-relaxed mb-8 grow">
                  {post.desc}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-vestigo-lime mt-auto group/btn">
                  Read Analysis <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-vestigo-blue rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-vestigo-lime/5 -skew-x-12 translate-x-20" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                  Risk Alerts <br/> to Your Inbox.
                </h2>
                <p className="text-blue-100/60 text-lg font-medium">
                  Stay ahead of global market shifts with our monthly summary of industrial risk diagnostics and insurance updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="grow bg-white/10 border border-white/20 rounded-full py-5 px-8 text-white focus:outline-none focus:border-vestigo-lime transition-all"
                />
                <button className="bg-vestigo-lime text-vestigo-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}