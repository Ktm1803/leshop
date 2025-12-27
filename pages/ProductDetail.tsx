
import React, { useState } from 'react';
import { Page } from '../types';
import { getAIFitRecommendation, getAIShadeMatch } from '../services/geminiService';

interface ProductDetailProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any, size?: string, color?: string) => void;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ onNavigate, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('Beige');
  const [aiRec, setAiRec] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [userMeasurements, setUserMeasurements] = useState({ height: 170, weight: 58 });

  const product = {
    id: 'detail-silk-dress',
    name: 'Silk Midi Dress - Beige',
    price: 189.00,
    oldPrice: 245.00,
    category: 'fashion' as const,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd3xzxg5sJVZvqENLcUYZmL1nZQ6abHH9_2BH2wUshPWvjNgFXuG-5LZ_ZNjF7uCg-p3Y-XdKCtnALIy-My2Jln6rjwmiGQOjpWix17exsjLbxkHk7C-eJTxu8Zjfh4MIMmbkH6IMb-cF25n4LYcffx2mpo0x6-JAgMifS1XwLYdH9UMlxhLa6qfYDJ9CxIkRteUHIuGCOHK_r_DDvfQOhVGmX2dJzDIn0NQWX2uo5tgZVWhDkZanGD5yNGS2s5X-66WfWjDwycv-P'
  };

  const handleAiFit = async () => {
    setLoadingAI(true);
    const rec = await getAIFitRecommendation(userMeasurements.height, userMeasurements.weight, "Silk Midi Dress");
    setAiRec(rec);
    setLoadingAI(false);
  };

  return (
    <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
      <nav className="flex items-center text-sm mb-8 text-text-muted">
        <button onClick={() => onNavigate(Page.Home)} className="hover:text-primary">Home</button>
        <span className="mx-2">/</span>
        <button onClick={() => onNavigate(Page.Category)} className="hover:text-primary">Women</button>
        <span className="mx-2">/</span>
        <span className="text-text-main font-medium">Silk Midi Dress</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Gallery */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 aspect-[4/5] md:aspect-[16/10] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-text-main z-10">New Arrival</div>
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
               <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd2jwO2v8XNNwLLrN8waAPOEi0Iq0zLovVtNQHya7wetsI2RngUk01MVlui9QTGcvSL-Pj-SJhYtla5ulnNQO91eMbPH3iZQJaZLQpP9q1D9xq4hsX_muD_q5e366LcwkLh7SyOpIVuxVpAYiYEDm6YZXR_aWRs5R4MmPVolwtOaWEotRsrgrUtpYcpQo67wjkOxRVXyZUEhxemO7dtxFO72BgIm1IuDqmAvQBKWVCy-7XBUJVJr8Rrfm0LGW_1dijIvLZ6_yTZYRV" />
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
               <span className="material-symbols-outlined text-4xl text-gray-400">play_circle</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-24 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold leading-tight">{product.name}</h1>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-primary"><span className="material-symbols-outlined">favorite</span></button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined icon-filled">star</span>)}
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <span className="text-sm text-text-muted underline">4.8 (124 reviews)</span>
              </div>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-400 line-through">${product.oldPrice?.toFixed(2)}</span>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-primary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">AI Fit Assistant</h4>
                  {aiRec ? (
                    <div className="animate-fadeIn">
                      <p className="text-sm text-text-main mb-2">We recommend <span className="font-bold text-primary">{aiRec}</span></p>
                      <button onClick={() => setAiRec(null)} className="text-xs text-gray-500 underline">Reset recommendation</button>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-gray-600 mb-3">Get a precise size recommendation based on your measurements.</p>
                      <button 
                        disabled={loadingAI}
                        onClick={handleAiFit}
                        className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
                      >
                        {loadingAI ? "Analyzing..." : "Get Recommended Size"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Selections */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Size</label>
              <div className="grid grid-cols-4 gap-2">
                {['XS', 'S', 'M', 'L'].map(s => (
                  <button 
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`h-11 border rounded-lg text-sm font-medium transition-all ${selectedSize === s ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/10' : 'border-gray-200 hover:border-primary'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => onAddToCart(product, selectedSize, selectedColor)}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold h-12 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Add to Cart
            </button>

            <div className="border-t border-gray-200 pt-4 mt-2">
              <details className="group py-2 border-b border-gray-100" open>
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Description & Fit</span>
                  <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                </summary>
                <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                  Crafted from 100% sustainable mulberry silk, this midi dress features a fluid silhouette that drapes beautifully.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
