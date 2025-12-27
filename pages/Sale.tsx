
import React, { useState, useEffect } from 'react';
import { Page, Product } from '../types';

interface SaleProps {
  products: Product[];
  targetDate: string; // ISO string from Admin
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any, size?: string, color?: string) => void;
}

const SalePage: React.FC<SaleProps> = ({ products, targetDate, onNavigate, onAddToCart }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        mins: minutes.toString().padStart(2, '0'),
        secs: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const saleItems = [
    {
      id: 's1',
      name: 'Midnight Velvet Evening Gown',
      brand: 'Velvet & Co',
      price: 126.00,
      oldPrice: 180.00,
      discount: '-30%',
      category: 'Dresses',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClf-xu6Ye_bhFn8oXBkC4gylOZFDC4R4NibCGlVhMuu-Au9gnfU0WkPwhvufIUwCp---GfxqLzptS04X1eCWvW-tTquGRvQaNKDEkW6ZEBsMOV52-x6NOOszLEMpg_Ex2TghfnuX6DIF4o5BC0uHpyURpcwZYK93hArevnquZoYg3oVMzD2vOtvXZr3VVyKNy2i6ytH96gbG6biV1oNkb4vNEIQHK0JFZrinkIZ15A8GVQ0_TwL6fKhdnh7CImJmYieyLPBX4LnUN2'
    },
    {
      id: 's2',
      name: 'Radiance Glow Serum',
      brand: 'Beauty Lab',
      price: 44.00,
      oldPrice: 55.00,
      discount: '-20%',
      category: 'Skincare',
      tag: 'Best Seller',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXflTFnA8m-sjLmnz7AltL6cP270R6AzhPXDsF9T5rdbNecac-ZPLM-TsFvmlAS8zF3TjczMu3GdSELbI-eWPUDZDobON9-x1VXHuYFSEYiFmCvvrr36Q4uM7-l-hdNzkmoZY4ct4Lj6cxXhjDwLC-8nFSI_RnzGGSWyWG6MbnEGmXBfQe7dZubyM8JRFDUFUg1OfdqfatMcJI4jpd0KvRLfg-IecJ70FMNjjlGoCyAJd-rZmZ7_XehiJeHVmDemrU3kkifQKOas09'
    }
  ];

  return (
    <main className="w-full bg-background-light animate-fadeIn">
      {/* Hero Section */}
      <div className="relative w-full bg-fashion-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center opacity-40 animate-slowZoom" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjTN6rhMPj3zazOtpgs2PDhQ0990yKLmZiFEosUJmpzoehtlnBhgoLy0SKDuZeiMrha5Zfm0BAq2ZgqOwncxqOszM-TkWRzOeeUxRcgrNWhgjzwvdJr9KShPZmY61H0TDvg1w615OpxMkPzyj-rR5Xd7ZrwGGbaiJvWk5QjfUz-wGlrazEN9FO-JzlPVPj8aCpKh5GJnYz9_MRwoOlyjg1bqAmbfvDtfM5_lqEeaCVPLhRE8l-zJF4e24qhVKgx4WD2V9zwVaWqt5z')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-40 py-24 lg:py-40 flex flex-col justify-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 w-fit shadow-2xl">
            End of Season
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight mb-6 font-serif">
            Summer Glow<br/><span className="text-primary italic">Sale</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-medium mb-12 leading-relaxed opacity-90">
            Up to 50% Off Beauty & Fashion. Discover our curated selection of elegant essentials at unmissable prices.
          </p>
          <div className="flex flex-wrap gap-6">
            <button onClick={() => onNavigate(Page.Fashion)} className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20 flex items-center gap-3">
              Shop Fashion
              <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Countdown Timer Bar (DYNAMIC) */}
      <div className="w-full bg-white border-b border-fashion-nude shadow-xl relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined animate-pulse font-black">timer</span>
            <span className="font-black text-[10px] uppercase tracking-[0.2em]">Limited Time Offer:</span>
          </div>
          <div className="flex gap-8 text-center">
            {[ 
              {v: timeLeft.days, l: 'Days'}, 
              {v: timeLeft.hours, l: 'Hrs'}, 
              {v: timeLeft.mins, l: 'Mins'}, 
              {v: timeLeft.secs, l: 'Secs'} 
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-2xl font-black ${t.l === 'Secs' ? 'text-primary' : 'text-fashion-dark'}`}>{t.v}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.l}</span>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
            Free shipping on orders over $150
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-40 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-black tracking-tight font-serif italic">Sale Collection</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {saleItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden border border-fashion-nude hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded shadow-sm">{item.discount}</span>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" alt={item.name} />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <button onClick={() => onAddToCart(item)} className="w-full bg-white text-fashion-dark py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{item.brand}</p>
                <h3 className="text-lg font-bold font-serif mb-4 line-clamp-1 group-hover:text-primary transition-colors">{item.name}</h3>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through font-bold">${item.oldPrice.toFixed(2)}</span>
                    <span className="text-xl font-black text-primary">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SalePage;
