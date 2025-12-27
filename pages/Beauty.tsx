
import React from 'react';
import { Page, Product } from '../types';

interface BeautyProps {
  products: Product[];
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any) => void;
}

const BeautyPage: React.FC<BeautyProps> = ({ products, onNavigate, onAddToCart }) => {
  const beautyProducts = products.filter(p => p.category === 'beauty');

  const beautyCategories = [
    { name: 'Skincare', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiF_8_5BG6pRS6KlyN1vjNXn1yR3QTZ5BtA5VGUwLEpx72RSM1fO-VnMZWspLHMyQKgmtiSKCHPYfxPA90XcbccKfbawdP0NnLczpXv5Ps_DOgmJHgYBeXjt-SIQBEgibOUPDFjr9cjS4VfTY-1WsyuqQGq1npSMQjXMVpRdNUVtsEp0vKdfyxeOAR7aw9PS_MyIhqfaUUBTTklrK3wsGtg7orI6y8gmNGdh5FRp_mnf8ucqgOndeDh8cRMIjaMuYHiMsvh4x04La8' },
    { name: 'Makeup', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKB4KxFpAb7fqqpyRqDzipBjJcZvqSSfXwo5nGoidKIrCu2OIjF9iEJqJqYvtAmY9vwJzwm-EXXxSquJ8kuR5eHS6uUcRvdS6a0axNkt3M4_f0FyygkTX6IjCCPqAsV-jK7XoqOs7RiG7E5qFgAdGEOdJU_Ebeofhck6IwjE6Y5g3DbwrJrS1qTtTwqCeAFg220uOQpRUZg7jBPHxLo5J12L9VeEuGmz3-DSOjU3xrk8gax96eNfzZO9ZIpGALy7RefcCrpO1O4WBM' }
  ];

  return (
    <main className="w-full bg-background-light animate-fadeIn">
      {/* Hero */}
      <section className="w-full px-6 lg:px-40 py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-3xl min-h-[480px] bg-cover bg-center flex flex-col justify-center items-start px-8 md:px-20 group" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAB4_ER9Bjg5divPtU9OuHPNFVolLgMXb8R1zxfI3JOtnM8OwHPSTccJlGkUOB8SLqZA9_MNZ-D7sDw1qlgYgnW2dhcH8X3t1IbZMEaix0rauflPAMC027Npmcj2s4Oy5LGnLptpI2N1GocgppHcUq47NMuhtB5i58xpiN69sOXn3vxlrG0UR698v9vqBEyECyS-IUJDMjs3Sfg6UcR6_0jOPJJD4fej3eh96VfC4mq3NAvI-K3uRFqtB-XhKeACMf8DsgXdFMfyu2B')" }}>
             <div className="max-w-xl space-y-6">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-white/30">New Season Edit</span>
                <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight font-serif italic">
                    Unlock Your <br/> <span className="text-primary">Natural Radiance</span>
                </h1>
                <p className="text-lg text-gray-100 font-medium max-w-sm leading-relaxed opacity-90">
                    Discover the best in skincare and makeup with our curated collection of clean, effective, and luxurious beauty essentials.
                </p>
                <div className="pt-4">
                  <button className="bg-primary hover:bg-primary-hover text-white font-black text-xs uppercase tracking-widest py-4 px-10 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95">
                      Explore The Lab
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-40 py-12 flex flex-col lg:flex-row gap-16">
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          <div className="flex items-center justify-between">
            <h4 className="font-black text-xs uppercase tracking-[0.2em]">Refine By</h4>
          </div>
          
          <div className="space-y-10">
             <div>
                <h5 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-4">Skin Type</h5>
                <div className="flex flex-col gap-3">
                  {['Oily', 'Dry', 'Sensitive', 'Normal'].map(t => (
                    <label key={t} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="rounded border-fashion-nude text-primary focus:ring-primary/20" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">{t}</span>
                    </label>
                  ))}
                </div>
             </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beautyProducts.map((p) => (
              <div key={p.id} className="group flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white border border-fashion-nude hover:shadow-2xl transition-all duration-500">
                  <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src={p.image} alt={p.name} />
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-gray-400 hover:text-primary opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                    <span className="material-symbols-outlined !text-[18px]">favorite</span>
                  </button>
                  <button onClick={() => onAddToCart(p)} className="absolute bottom-4 left-4 right-4 bg-fashion-dark text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-2xl active:scale-95">
                      Add to Cart
                  </button>
                </div>
                <div className="space-y-1 px-1">
                  <h3 className="text-base font-bold font-serif line-clamp-1 group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black text-primary">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeautyPage;
