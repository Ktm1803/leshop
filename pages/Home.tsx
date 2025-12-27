
import React from 'react';
import { Page, Product } from '../types';

interface HomeProps {
  products: Product[];
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any) => void;
}

const HomePage: React.FC<HomeProps> = ({ products, onNavigate, onAddToCart }) => {
  // Only show first 4 dynamic products on home
  const trendingProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full bg-background-alt px-6 lg:px-40 py-8 lg:py-16">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="@container">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex flex-col gap-6 flex-1 text-center lg:text-left items-center lg:items-start z-10">
                <div className="flex flex-col gap-3">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">New Collection</span>
                  <h1 className="text-text-main text-5xl lg:text-7xl font-serif font-medium leading-[1.1]">
                    Summer Elegance
                  </h1>
                  <p className="text-text-main/80 text-lg font-light leading-relaxed max-w-lg mt-2">
                    Discover the perfect blend of modern fashion and timeless beauty. A curated selection for the modern muse.
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <button 
                    onClick={() => onNavigate(Page.Fashion)}
                    className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Shop Fashion
                  </button>
                  <button 
                    onClick={() => onNavigate(Page.Beauty)}
                    className="flex items-center justify-center rounded-full h-12 px-8 bg-white border border-[#e5e5e5] text-text-main text-sm font-bold tracking-wide hover:bg-gray-50 transition-all"
                  >
                    Shop Beauty
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-[55%] relative">
                <div className="aspect-[4/5] lg:aspect-square w-full rounded-xl overflow-hidden shadow-2xl relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO-9msqwHLN3D5VpNDZEXq78EkqI41q3_mTTeobmEUocY4pTSMUQdqPsCNlDgEozqSFAKbtj0TSzYs0SzEPfKZa9dN9XJXLScQtSX_zNqCRVYMAZO4M_Qwb0EHVmgyFurjyenWqG9Gkjmk-G0mEGZj7t0xTE_RkynNF3F9R-nuCo0GdFn7Cwiz0LNQRLVwi-mPaq89ykiz2CIszpy5DgKSGqGn5XHCuWc-C_Z2HmrcsMjPmW2SomK6bn1zSx--D0Bo319zhrWeGlb7')` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Mặc đẹp - Makeup chuẩn */}
      <div className="w-full max-w-[1200px] px-6 lg:px-40 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-text-muted uppercase tracking-[0.2em] text-xs font-bold mb-3">Lifestyle & Inspiration</span>
          <h2 className="text-text-main text-4xl lg:text-5xl font-serif font-medium mb-4">Mặc đẹp – Makeup chuẩn</h2>
          <p className="text-text-main/60 max-w-xl">Curated combinations to elevate your daily style. Because true elegance comes from harmony.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The City Chic Edit", desc: "Blazer Set + Matte Red Lip", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEQgfxlnCSbqHqHlwTCzxy_wAQjfKGropUTiJKThhvwPNOrMfla7_rOttHFrK1Gn5sKW5Raca12HFBDUcewqOtxpjv-sSKDdSS9vtMyalipQ3GS2Grjhrt5jJnhR7CwUu2T1T0K-QyLERFp20aUc6SwVhjEgfkWp0hNOZ_fQVkjGFmDt6YdxTUuzPT9iJiBIzax04W3WkAtq_i8XrjXFDxT8buoMw4bBQT7R5T95dlyxge3g64Bq2rM6wDlNGS6c97xbDy-Crhzg2", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsOTWp91l5YsRD3RVW1cE3q0SS9yg-Fxk0I7AWfUygr33sWRUY47N2P0HJdWHJjn0_g1oO74xa88DHfUneRlLs1ITgySsAWDF49cTLFiqrbSOuWsv8JwDnWohVSld_vxnpyUij7qoI2tE8oeJfvsWGndVB-YZ-91vdIJa-PgRqWtTexWvEJUHVW8IepY4QwslG_o-Cmg2p2UFoei6iJkoy7rrFw5LNfs0-47TFOEjh334U9qYL7QZ3TiXvojFxTJi-En1Rz3kRmHuO" },
            { title: "Date Night Glam", desc: "Silk Dress + Shimmer Eye", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR08G8lTmz303bGo3LA92IH2W6NboZtq-OKP6ECQIUBSvUnZY03vlo40W3IZ4ADOTtSUGLmSpLLKyqB6qOw5d7coAUosjZ93ehN3PxeHYE4tcp5cfSfly52tgRP1iUR5KqRyVdvwhXvEn6RlmcbhvGVO3EgdcOTc-XBaG4VlM0jIkolLvZagdfyKPr0vvuqNSxV7zNIAhWT0g9hkZXkbWLd2ezwknAVRqpYimtsBrw9dEfjtbGghB53BbpYxbvhEI4WFBZswKVMlIv", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaMHgeVjJO6CdyYrGNmlGn-khmoZZdhd1nG5QD6w99AGQfn0QT-GFbZ1VNJJStlzJ5eN3DrReFgFNap1RWYs6XAV70lblCapjQaMADOkpMzwS5QbEpfANio6ET8nj4L66UNY0k3Vbbn3lTKSO69eyuJfRtugcEu9YSfvzrXfO0NvpunXSs-QLL_SOmBq2QikoSSGDJeiqq9X7ek7SjnTo6vyJHoCZAEeIlkr2Mm9dZ4bIHOS_6vNWeKBrU5pGFK_wXRLAONWViJapJ" },
            { title: "Weekend Casual", desc: "Linen Shirt + Nude Gloss", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdrDA9cdK0Ies1rUCCpPTtZfHm-JqX4_ZfJ5okJRPg1t1-DfQ5z5NBHQL3FFK7EKqRj41wOAThXk9ICFQnMbFLaACB9ym6jyuyx930--g_XHwA_GD0NYJyUXj5vC1W20Qj1-srH0p9a6LLinf8212NVkOf-hdCMqMwrOvR2dqeSXdxlA0K5rc1JNKol6oZimYk5zT_n5BzWs42tKcDA6VMAJKpYiCVPVv9161qiEtQElII4L5aUC457qL5olLi4oSJJFPYFnHlEBhW", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfciSyDgQCfGU8hBhhP8wZsOhuwAG2MIn3rXYreciSl-H09pno_grRkF9EuFci8eyf1HoSfZin2S-QZZI27kDHKhyvtUh4SJEqM0zbx9Tx_qceCwkSfKmL_G_QEKyjdUJRSp0lN4kA9Jh5HHe0nrkCuXBO97VUyp6QXtDgAW6CVWdJ1t9JwceHaP-k0dJ4aMpiEmpIMlcWbYUFhoUVEpu5DNIze79uDIoiveAxY74iMjuBrCRHo7fipEe5DHZSB6kwn-WC94Uae_aD" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => onNavigate(Page.ProductDetail)}>
              <div className="overflow-hidden rounded-xl mb-4 relative aspect-[3/4]">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }}></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${item.thumb}')` }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-text-main text-xl font-serif font-medium mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="w-full max-w-[1200px] px-6 lg:px-40 py-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-text-main text-3xl font-serif font-medium">Trending Now</h2>
          <button onClick={() => onNavigate(Page.Category)} className="text-sm font-medium border-b border-text-main pb-0.5 hover:text-primary hover:border-primary transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map(product => (
            <div key={product.id} className="group flex flex-col gap-3 cursor-pointer" onClick={() => onNavigate(Page.ProductDetail)}>
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${product.image}')` }}></div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                  className="absolute bottom-3 right-3 bg-white text-text-main hover:bg-primary hover:text-white p-2 rounded-full shadow-md transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                >
                  <span className="material-symbols-outlined !text-[20px]">add_shopping_cart</span>
                </button>
                {product.tag && <span className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm ${product.tag === 'Hot' ? 'bg-primary text-white' : 'bg-white/90'}`}>{product.tag}</span>}
              </div>
              <div>
                <h4 className="text-text-main font-medium leading-tight group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-text-muted text-sm mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
