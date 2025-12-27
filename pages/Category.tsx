
import React, { useState } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';

// Added products to interface to fix TypeScript error in App.tsx and updated onAddToCart signature
interface CategoryProps {
  products: Product[];
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any, size?: string, color?: string) => void;
}

const CategoryPage: React.FC<CategoryProps> = ({ products, onNavigate, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('fashion');

  return (
    <div className="bg-background-light text-fashion-black font-display">
      {/* Hero */}
      <section className="relative bg-[#f5f0eb] overflow-hidden">
        <div className="px-4 lg:px-40 py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary tracking-wide uppercase">New Collection 2025</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-fashion-black leading-[1.1] tracking-tight">
                Modern Elegance <br/> Meets <span className="text-primary">Clean Beauty.</span>
              </h1>
              <p className="text-secondary text-lg max-w-md leading-relaxed">
                Discover the perfect fusion of minimalist fashion and gentle, natural cosmetics designed for the modern lifestyle.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjWdUq8DSrvxvjJsnwA6uunvH_vRNZPe0DPvCdqRAap6kuCEK3_wKLeXCKdBQKHntWXAAH6jifTCIiy8BrlFGomyRE4QVS6K8oXd1lefUJy6UUGWKJGXXiVEkkLtBIB8toK9SKNgunEVFsHslTu8inRX8IZMVWMjefrC5pKiaIs22z4TSYy139nrGZSiWPpTu1awWeQXtbut6Z2QDZU0imts2xlbpYrtBw5pPT74vkmmIFw62CCmWogJtttde6LA94InWzP7WOlCee')` }}></div>
            </div>
          </div>
        </div>
      </section>

      <main className="px-4 lg:px-40 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-4 gap-4">
          <div className="flex gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {['Fashion Studio', 'Beauty Lab', 'Combos'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`relative pb-3 text-lg font-bold whitespace-nowrap group ${activeTab.includes(tab.toLowerCase().split(' ')[0]) ? 'text-fashion-black' : 'text-gray-500'}`}
              >
                {tab}
                {activeTab.includes(tab.toLowerCase().split(' ')[0]) && <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-primary rounded-t-full"></span>}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm font-semibold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Sort by: Newest
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <h4 className="font-bold text-fashion-black mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">checkroom</span>
                Fashion Attributes
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Size</p>
                  <div className="grid grid-cols-4 gap-2">
                    {['XS', 'S', 'M', 'L'].map(s => <button key={s} className={`h-8 border rounded text-sm ${s === 'M' ? 'bg-black text-white' : 'border-gray-200 hover:border-black'}`}>{s}</button>)}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Color</p>
                  <div className="flex gap-2">
                    {['#000', '#fff', '#D2B48C', '#e8306e'].map(c => <button key={c} className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: c }}></button>)}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Using products prop instead of static constant to fix inconsistencies after admin adds products */}
            {products.map(product => (
              <div key={product.id} className="group relative flex flex-col gap-3 cursor-pointer" onClick={() => onNavigate(Page.ProductDetail)}>
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                  <img src={product.image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                    className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white text-fashion-black shadow-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white"
                  >
                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-base font-semibold truncate">{product.name}</h3>
                  <p className="text-sm text-gray-500">Premium Collection</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm font-bold text-fashion-black">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
