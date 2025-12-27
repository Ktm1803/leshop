
import React from 'react';
import { Page, Product } from '../types';

interface FashionProps {
  products: Product[];
  onNavigate: (page: Page) => void;
  onAddToCart: (p: any) => void;
}

const FashionPage: React.FC<FashionProps> = ({ products, onNavigate, onAddToCart }) => {
  const fashionProducts = products.filter(p => p.category === 'fashion');
  
  const fashionCats = [
    { name: 'Outerwear', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEP1bRzZWQ51hee3ARAlvAUWmDmofbNhr27spEXmBGOH-Gqf4eovKba18irKATbElpFaodgm1MPlBLQs6qvzaolcl_FyoXScjzhtbi1HAZtoZH1lQ1Dtclp15gn40cATORQx5rW24UyLQtZsZzC3Ycp3BPoNkWcdU9dxVo_lXGn5UAQFW1ckyh6n3bUfHhnSWufSC9u4_zgBvKvkmtg0P7JxYFrfeGzXGPdhi6txYoQmBA7PPLTkL0Sx6tQGIGlLfvgY4FzdbW78Tl' },
    { name: 'Dresses', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ku__zXFhsDqT7l5O4Al06rTjhxncn_9ao8gwecPeOqeV8khmLkN5lj8cSS_VfbPUP57RbjgN8-zLdySEzzaZ3qltHnCXQXElM3bbR8pcEh6Vai_7iR8VopTM87Jjt98Vg59yLUa0rdGphiua1QSNBIxJojQbUhTdqNQdV8y8H3pUpURqDFvOo3lkb-qg2V3v6gr_Jk8mejV8z7XdWCMPTkkRAeJtZbuNwoQg3NZvk_HUcHOkjey6pMGTYwttWfchBSHT_b_DPlex' },
    { name: 'Tops', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqbai-a2BzQ7H5b4MDsXndXAw_cYG_d2D09mme7Sjsk0v05Z_nN993kAgfkanJGgX8byY3Zl6tMSBe2yY1qnFVXNMDrm8Vqs6kTqabZI69vk98CgdUB7Jf4PzhtRuRMY4jx5Lq6rhhji0C9zYXNrw1fvWh3QaMfO6VP-Smtmthd3fMk6B9JXTqWrR-JRuQfyECfyJCxveWCywHqr9nJX2_UoI3DtafS5vnI7SjatlBIft4TI-jM9Tx53oiFH9kWBfl0E_Z0SN_Dh4D' },
    { name: 'Shoes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyyM4_NqryC3zFXlkVPVVTGjn0xP6tW13roh_M2mmBZWJKKzVcFfqJbULNaPID97NU07LZ0HaqLOFYMJEgxPzNodvC-UIabY-KKjEdL6fm8MUG9yf1PMACLBj4WFSVnNIpUwn3AGF21SxoyOb7ph4pmH4QOOWAoOuep2HS9KLDqsBba9YBpCpWjYdTB3Lr92Jiqv7KrNzb8wNd46c93Un-H6jAL74l7e55VTwL9fnmAleIufuw7UAV1vQlCcoHuqeisfACmKmVPzXx' }
  ];

  return (
    <main className="w-full bg-background-light animate-fadeIn">
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative h-[550px] w-full bg-cover bg-center group" style={{ backgroundImage: "linear-gradient(rgba(34, 16, 25, 0.4), rgba(34, 16, 25, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnYdSIRpZEsnK2OS2PJE1YDfVfxlLK2qguLDNObl1UmofudqZF5mG697NOfc6wn2vC6JdQLouYTQrmFQt2R2bDXNCV1z0ZNGDw7Q80Y40BZ3XIRJILWZBJ0tNlCC4aVS6GLLCzxWu7Uq-4EacstWQEAvA97GVgNThwEmo1IMiOrTbMhbjlXCGVk5cVvak1QsvxpOcCVYTIAzaT_-GnCTx6Vft-Wf5UESFUhsjbljLF1nnZMN-dywFgQs6IUUSSXzSETULzVzW5C2PN')" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/30 border border-primary text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">New Season</span>
            <h1 className="text-white text-5xl md:text-8xl font-black tracking-tight mb-6 font-serif italic">THE AUTUMN EDIT</h1>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed opacity-90">
                Discover elegance in every stitch. Chic, modern, and timeless styles curated for the sophisticated you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                  Shop Collection
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
                  View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-40 py-12 flex flex-col lg:flex-row gap-16">
         <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
            <h3 className="font-black text-xs uppercase tracking-[0.2em]">Filter By</h3>
            <div className="space-y-10">
               <div>
                  <h5 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-4">Color Story</h5>
                  <div className="flex flex-wrap gap-3">
                     {['#000', '#FFF', '#d4cbb8', '#8c2a38', '#2d3e50'].map(c => (
                        <button key={c} className="size-8 rounded-full border border-fashion-nude shadow-sm hover:scale-110 transition-transform" style={{ backgroundColor: c }}></button>
                     ))}
                  </div>
               </div>
            </div>
         </aside>

         <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {fashionProducts.map((p) => (
                  <div key={p.id} className="group flex flex-col gap-4">
                     <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-fashion-nude hover:shadow-2xl transition-all duration-700">
                        <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src={p.image} alt={p.name} />
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                          {p.tag && <span className="bg-primary text-white text-[8px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-widest">{p.tag}</span>}
                        </div>
                        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-gray-400 hover:text-primary opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                           <span className="material-symbols-outlined !text-[18px]">favorite</span>
                        </button>
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                           <button onClick={() => onAddToCart(p)} className="w-full bg-fashion-dark text-white font-black text-[10px] uppercase tracking-widest py-3 rounded-xl shadow-2xl active:scale-95">
                              Quick Add
                           </button>
                        </div>
                     </div>
                     <div className="space-y-1">
                        <h3 className="text-base font-bold font-serif group-hover:text-primary transition-colors">{p.name}</h3>
                        <div className="flex items-baseline gap-3">
                           <p className="text-sm font-black text-text-main">${p.price.toFixed(2)}</p>
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

export default FashionPage;
