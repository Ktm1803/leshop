
import React from 'react';
import { Page } from '../types';

interface JournalProps {
  onNavigate: (page: Page) => void;
}

const JournalPage: React.FC<JournalProps> = ({ onNavigate }) => {
  const articles = [
    {
      category: "Lifestyle",
      title: "Sunday Rituals: Self-Care for the Busy Professional",
      desc: "How to reclaim your weekend and reset your mind for the week ahead through simple, mindful practices.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABIpernLwiDfYDk-pK0Y75W2llR5a93Ll1lMwc21-LmBDsr-pWWgj2uAfi6nCRss4E8xZW1O5FawNDnX_hkcTGMiKBstHrM69iRqFLRP3Z560AO_g5uZkv5_5TR1aTVi0nWkpaCeq3Yov0s0wUTkOYTM__YB67A0BWAJYxz4ECuG3Yu2ZP6d01zNCXjT2yeOFAtSgaBfsQb6NN_rExCgAzcqxy6tpvlKy4-Il_cuwUK5d0uNmz2aeO5IVeIHV1OLOrFk4T_8Wg8W4C",
      readTime: "4 min read"
    },
    {
      category: "Fashion",
      title: "Sole Mates: The Ultimate Fall Shoe Guide",
      desc: "From chunky loafers to sleek boots, we’ve curated the essential footwear to carry you through the season in style.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVS5fmBoeSClL2VJo89V3BnjkuVamw2PTJepR6oCEZPcxsuwQq9gZcO43apCe6fVKCNUnXcpfYirTnPHU2lTyl_EfE1pGv1HLm17hQnfFMa1LaUUsARRu8HTrKRuRWVWxMrcwi-GYgjK5EeREJpQB9PLi4J1IuwQvKKWTyBzIFcCgGs5s196Bdf7eFHaR-QfFdFUv_x5oK6vXCTKoQXRnKZ7G92GaAzzbU24T7ozsWIFwBYENsuzib3KEVr7aNE2ZwWxiGxaB7KJfE",
      readTime: "5 min read",
      shopLook: true
    },
    {
      category: "Beauty Lab",
      title: "The Science of Serums: What You Actually Need",
      desc: "Decoding the ingredients list. Hyaluronic acid, Retinol, Vitamin C - which one is right for your skin type?",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEQth1r5sh3YSLEy7RVeUouz32YeRUoFWiVejpaBOPF0Mo-ltks0JwHIdl0OPta5sov_9Ehc6kRFS_0UfS8HgdaqkrtJmuZ3HbPN2GZCfni68o5iL4t1hKP4j0uzmU_kOJFQdKmOPEVWLc9LWPr37SZT_QahwmPobEQtkAz-We4EqHM9ND4lM1Dh3FCP048FI6mnQjiC8XwoZ7rWS2qj1Jc6uvyIxTxyY9NVTFYHX9KgFX3j43w6oFmb97cfGDCOKU3JhrWceN66lh",
      readTime: "7 min read"
    }
  ];

  return (
    <main className="w-full flex flex-col items-center bg-background-light animate-fadeIn">
      {/* Hero Section */}
      <section className="w-full max-w-[1400px] px-6 lg:px-40 pt-8 pb-4">
        <div className="relative w-full overflow-hidden rounded-3xl bg-fashion-dark text-white min-h-[500px] md:min-h-[600px] flex items-end md:items-center group">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3KUDUPvcjG4HYMQB6WndOIfPzEfPP7OSWQNiNnvnzTbU2uQ_S1_GcFdiGAJ8i2QpPkwXPz-6DnCmJzN926Xq1pgSuQuXNzqn8agiXfUzqSa_o2QeG4Z2x9g-kuV_IKdEqmWLT7HgPqix8BiERofXXEcITkqYjEGeogVg-TwZsU3Okoyi8kA4tUxevc4h7mmttcsgy4tNwk9XxLTMzBR8zKsq9YdsbEtaLm1fca7gWxrwbCfv2wIAMojg-G5LIyC9qRWm55KNZvPWo')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-16 max-w-2xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-sm">Cover Story</span>
              <span className="text-neutral-300 text-sm font-medium tracking-wide">October 24, 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight italic font-serif">
              The Daily Edit: <br/>Defining Modern Elegance
            </h1>
            <p className="text-lg text-neutral-200 leading-relaxed font-medium">
              Discover the new codes of luxury and comfort for the fall season. We explore how fabrics and silhouettes are redefining the modern wardrobe.
            </p>
            <button className="flex items-center gap-3 bg-white text-fashion-dark px-8 py-4 rounded-full w-fit hover:bg-primary hover:text-white transition-all font-black text-xs uppercase tracking-widest mt-4 shadow-2xl">
              <span>Read Feature</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Editor's Pick */}
      <div className="w-full max-w-[1400px] px-6 lg:px-40 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black italic font-serif">Editor's Pick</h2>
          <button className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:underline">
            View All Picks <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-fashion-nude group hover:shadow-primary/10 transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-1/2 min-h-[400px] overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOnswlAl2KwkBsDTr1QfQE9wgqqiZZ9mrR_I3lAzzWQqb1HKlqlcPgQIMWjssuYNh7Z3QG27Q5AspitnAgPcUgrvHeAdDi3FkARL-yd_eXn0Lg8J0878b5Io2Agpm912KiSbdxxUnmGZMh5S2gTkQPoSoTLjjNneIbuAveL8Bgc7yBe_HsNwKyrG-P5M1iX_fvqqvkRtJc2hkTztwoqIVx2AOY6Ku88aszQeMiTYyVPz7Z8cqoot-oVQjBZJ9hA67Sc6TDpPLumGZ5" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt="Glow" />
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Beauty & Wellness</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black leading-tight font-serif">The 'No-Makeup' Revolution: A Guide to Inner Glow</h3>
              <p className="text-text-muted leading-relaxed text-lg font-medium">
                Less is more. We break down the step-by-step routine to achieving that effortless, radiant look that focuses on skin health rather than concealment.
              </p>
              <div className="flex items-center justify-between mt-4 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVwDglreEqLd4PvB41jdZjFVR1E1xf7WhATIZzrqjpBek4jewF2FSF5j9QzEUua205OGjoXEFCsK_zhW7QJZSiyz3nwESuwJTiI_hZJa5xCPykx55fgUEy3wCI5Fz5KVQ2tzDsVfoMR_HP8sUpdom1JxAkWfj45JFchEI6cag3yf2O9_xDTZ79uktJL5VUPMBiPpNzJjp-8gyGmcp0yTr2hmgQOQ734NAbOVbv56ngO9SrDuaDFSX9WUd8GQWM2ER255TDThplMZgO')" }}></div>
                  <div>
                    <p className="text-sm font-black">Elena Fisher</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Beauty Editor</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Stories Grid */}
      <section className="w-full max-w-[1400px] px-6 lg:px-40 pb-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-black italic font-serif">Latest Stories</h2>
          <div className="h-px bg-fashion-nude flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((art, i) => (
            <article key={i} className="group cursor-pointer flex flex-col gap-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${art.img}')` }}></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">{art.category}</div>
                {art.shopLook && (
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                      <span className="material-symbols-outlined !text-[16px]">shopping_bag</span> Shop Look
                    </button>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black font-serif leading-tight group-hover:text-primary transition-colors">{art.title}</h3>
                <p className="text-text-muted text-sm line-clamp-2 font-medium leading-relaxed">{art.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span>Oct 2025</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="border-2 border-fashion-nude text-fashion-dark px-10 py-4 rounded-xl hover:bg-fashion-dark hover:text-white transition-all font-black text-xs uppercase tracking-[0.2em] active:scale-95">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-primary/5 py-24 px-6 lg:px-40">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-black font-serif italic">Join the Inner Circle</h2>
          <p className="text-text-muted text-lg font-medium leading-relaxed">
            Get the latest trends, beauty secrets, and exclusive editorial content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <input className="flex-1 bg-white border border-fashion-nude rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium" placeholder="Your email address" type="email"/>
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">By subscribing you agree to our <button className="underline hover:text-primary">Privacy Policy</button>.</p>
        </div>
      </section>
    </main>
  );
};

export default JournalPage;
