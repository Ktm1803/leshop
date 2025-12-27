
import React from 'react';
import { Page, User } from '../types';
import AccountSidebar from '../components/AccountSidebar';

interface UserWishlistProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  onAddToCart: (p: any) => void;
}

const UserWishlist: React.FC<UserWishlistProps> = ({ user, onNavigate, onLogout, onAddToCart }) => {
  const wishlistItems = [
    {
      id: 'w1',
      name: 'Velvet Evening Gown',
      brand: 'Zara',
      price: 129.00,
      status: 'In Stock',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1rxIDwZhWIkPZdZokULB1C5bcGckwtQ_T09oi-x2hYvwiO9tBaLBRB3Mtm-0ugd__64Uk67dF2ZYX-_j5LgnHo-8wOMK68HZb9DO679QZOUbl4HQid3OJaogliOo3CVvFzfkYEco8dZgQZbgmEMzvmdHbBgp8YRxvclTjm4-SiWBzFvzs0dz6gfW21XztND7Iy630N3mxcS2VbY_6Ft8zLPhIjxILhHuLUg_8HTHCOW3ifl2-n3vSj6NT3gyeQkYNCN4Vbrqjp6Ex'
    },
    {
      id: 'w2',
      name: 'Watermelon Glow Serum',
      brand: 'Glow Recipe',
      price: 45.00,
      status: 'Low Stock',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWvbC3wpVhrCOfJkJznxUpHQ3vSNSpubRcRKrJlhCO5xCC13KfSuR1fnXZPlMSd4ODyAKlLp5_uRLz-Lu6N-ktPAGFMq0HUHgZgBrKk2ZtXo9YXV686CxLtoiWJjXhrqLrUgynGwmU5lJz3BigBzVuilp4WkBm7oTl_j4ExT6XMybabf_uCCJ6jQwOQe5cAUaDJ2eGp2vBLUHO6bz6x1CPNIqaHgsj_QNjRqP9eR9uaqeGTkRCEYh336aByLsHRIizBCv4MkdZlBv'
    },
    {
      id: 'w3',
      name: 'Classic Trench Coat',
      brand: 'Burberry',
      price: 1850.00,
      oldPrice: 2200.00,
      status: 'In Stock',
      discount: '-20%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvEoKiXjF8_RbSYVurvVrYn94oJ5zMhOunyqZpGmWnscuDOdrmmqU7kVv30ROTzyMgJm-lp6a54Sr2s6CIbhq6ZgzyOp9rb3umQxn2oyjxknrKtTQH3DvnNZF7b0dhH4THdueHtsIFR_uO0NJKEOeIi-YzN2fWmgZ4uwSc0JClj0Llh3ujtUBM41OPZLT7BGTsyOTM3EzyS5te43BnniN1laVMqPYTRwdTi8HN5fxvfh7e8AFwDOOXSRE7Y8fbCnMI8_YzhAY4WY5d'
    },
    {
      id: 'w4',
      name: 'Matte Lipstick - Ruby Woo',
      brand: 'Mac',
      price: 22.00,
      status: 'Out of Stock',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMWdsL9sojMdSOEq2HPbiTB5hnSGmudDnkcpK7GIZwr-6kFnh7haFDtBSVbFkrWdX111-cH9xu2vkvIB1Nu_q6n8UxowBkKxHZKlD2rqYy80uJvPBji58eUw7Ccr4pmN-rogumnS4YnFJPXeijObxYlGc9X20Zl05crUp6DFfCDjigfiEcqoOI5Y_Qp8gIvE9F8QjQVWuJEhfrmHz6S79QKuGckvjA5CtaYQmDbLmbmCscO4IOXT2egR3bVplKWVuCx7z59ItvmZB5'
    }
  ];

  return (
    <div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-background-light">
      <AccountSidebar user={user} currentPage={Page.Wishlist} onNavigate={onNavigate} onLogout={onLogout} />

      <main className="flex-1 flex flex-col h-full overflow-y-auto scroll-smooth animate-fadeIn">
        <div className="p-8 lg:p-12 max-w-6xl mx-auto w-full">
          <header className="mb-10 space-y-4">
            <h1 className="text-4xl font-black tracking-tight text-text-main font-serif">My Wishlist</h1>
            <p className="text-text-muted font-medium">Your curated collection <span className="text-primary font-bold">({wishlistItems.length} Items)</span></p>
          </header>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button className="h-10 px-6 rounded-full bg-text-main text-white text-sm font-bold shadow-lg shadow-black/10 hover:scale-105 transition-transform">All Items</button>
            <button className="h-10 px-6 rounded-full bg-white border border-gray-100 text-text-main text-sm font-bold hover:border-primary hover:text-primary transition-all">Clothing</button>
            <button className="h-10 px-6 rounded-full bg-white border border-gray-100 text-text-main text-sm font-bold hover:border-primary hover:text-primary transition-all">Skincare</button>
            <button className="h-10 px-6 rounded-full bg-white border border-gray-100 text-text-main text-sm font-bold hover:border-primary hover:text-primary transition-all">Accessories</button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-fashion-nude hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${item.status === 'Out of Stock' ? 'opacity-75' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                  {item.discount && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase tracking-widest">{item.discount}</span>
                    </div>
                  )}
                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  
                  {/* Overlay Actions */}
                  <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-text-main hover:bg-primary hover:text-white transition-all shadow-sm z-10">
                    <span className="material-symbols-outlined text-[20px] block">close</span>
                  </button>
                  
                  <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-white text-text-main py-2.5 rounded-xl text-sm font-bold shadow-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span> Quick View
                    </button>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2 flex justify-between items-start">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{item.brand}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      item.status === 'In Stock' ? 'text-green-600 bg-green-50' : 
                      item.status === 'Low Stock' ? 'text-orange-600 bg-orange-50' : 
                      'text-gray-500 bg-gray-100'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-text-main line-clamp-1 mb-2 font-serif">{item.name}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-lg font-black ${item.oldPrice ? 'text-primary' : 'text-text-main'}`}>${item.price.toFixed(2)}</span>
                    {item.oldPrice && <span className="text-sm text-gray-400 line-through">${item.oldPrice.toFixed(2)}</span>}
                  </div>

                  <button 
                    disabled={item.status === 'Out of Stock'}
                    onClick={() => onAddToCart(item)}
                    className={`mt-auto w-full py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10 ${
                      item.status === 'Out of Stock' 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-primary text-white hover:bg-primary-hover active:scale-95'
                    }`}
                  >
                    {item.status === 'Out of Stock' ? (
                      <>
                        <span className="material-symbols-outlined text-[18px]">notifications_active</span> Notify Me
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}

            {/* Marketing Spot */}
            <div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[350px] flex items-center justify-center group shadow-xl">
              <div className="absolute inset-0 bg-fashion-dark">
                <img className="size-full object-cover opacity-50 transition-transform duration-[2000ms] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBQ0PCBuOWfHLUQ2BWnFIGOBVRoiqVbAvEQEgSuTQUuO0W2epK3FTxAKjJFMML_1UPywpCw0PwTWNvcdZGDWfcRNYhmZZPELRqoGR1SIMvMCQXKxdE0_NIS8iN62-yKe1nKlmcm75iGSktKpCHX7pPapHA9PJhX2IzZl0fuCuE9EwnGmfPZ0_wM-MzoutDHN9_kHLAjiTRPgQTfLh8qkY7NZQiaOaPxUDpHdh5Dsjn-_JIeiD_LaX2-0u-900oCQZywUVILIKD5kK" alt="Promo" />
              </div>
              <div className="relative z-10 text-center p-10 max-w-md">
                <div className="bg-white/10 backdrop-blur-md size-16 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 border border-white/20">
                  <span className="material-symbols-outlined text-3xl animate-pulse">auto_awesome</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3 font-serif">Complete Your Look</h3>
                <p className="text-white/80 mb-8 font-medium">Based on your wishlist, we think you'll love our new Summer Editorial collection.</p>
                <button 
                  onClick={() => onNavigate(Page.Category)}
                  className="px-8 py-3 bg-white text-fashion-dark font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>

          {/* Bulk Action Bar (Floating) */}
          <div className="fixed bottom-10 left-1/2 lg:left-[calc(50%+160px)] -translate-x-1/2 z-40 bg-fashion-dark/95 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-10 max-w-[90vw] border border-white/10 animate-slideIn">
            <div className="flex items-center gap-3 border-r border-white/20 pr-10">
              <input type="checkbox" className="size-5 rounded border-white/20 bg-transparent text-primary focus:ring-primary" />
              <span className="text-xs font-black uppercase tracking-widest">Select All</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-[10px] text-white/50 font-black uppercase tracking-widest hidden sm:inline">0 items selected</span>
              <button className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors disabled:opacity-30">Add to Bag</button>
              <button className="text-xs font-black uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors disabled:opacity-30">Remove</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserWishlist;
