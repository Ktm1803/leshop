
import React from 'react';
import { Page, User } from '../types';
import AccountSidebar from '../components/AccountSidebar';

interface AccountProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const AccountPage: React.FC<AccountProps> = ({ user, onNavigate, onLogout }) => {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-background-light">
      <AccountSidebar user={user} currentPage={Page.Account} onNavigate={onNavigate} onLogout={onLogout} />

      <main className="flex-1 flex flex-col h-full overflow-y-auto scroll-smooth animate-fadeIn">
        <div className="w-full h-[280px] relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF7mEZuGiNbGcPy07EJbQ_EVHYOldmPBnyEteEf5D8MKYnE_Y_DOOOFu2NMnEEJwNFUIYrQLl1Yw3CwwQbkkR5xYCFVPv1gRihPAd5hxdQDzbIRITuP7NVB6bkczwfefhUx0WdKg44hDbhuFfP-RXedNzW22cqIyQbT9iTTZlTbhsa9RzbI-ITREfRVfMGMI5AOPyJr5xXsIuj3vc-cFC1jU8eRb20MFUUS47_1C1O0KO0fEKGb_U2kw4iyo0nase8Rv-uKYF5PJYM')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
            <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-white px-3 py-1 rounded-full shadow-sm border border-primary/10 mb-4 inline-block">Member Dashboard</span>
            <h1 className="text-4xl md:text-5xl font-black text-fashion-black font-serif tracking-tight">Bonjour, {user.name.split(' ')[0]}</h1>
          </div>
        </div>

        <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full space-y-12">
          
          {/* Quick Overview Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-fashion-nude relative overflow-hidden group">
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-xl font-bold font-serif text-text-main">Contact & Delivery</h3>
                <button 
                  onClick={() => onNavigate(Page.Addresses)}
                  className="material-symbols-outlined text-gray-300 hover:text-primary transition-colors"
                >
                  edit
                </button>
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Phone Number</p>
                    <p className="font-bold text-sm text-text-main">{user.phone || 'No phone number saved'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Default Address</p>
                    <p className="font-bold text-sm text-text-main leading-relaxed">{user.address || 'No address saved'}</p>
                  </div>
                </div>
              </div>
              {!user.address && (
                <button 
                  onClick={() => onNavigate(Page.Addresses)}
                  className="mt-8 text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Setup Address <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              )}
              <div className="absolute -bottom-10 -right-10 size-40 bg-background-alt rounded-full group-hover:scale-125 transition-transform"></div>
            </div>

            <div className="bg-fashion-dark text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold font-serif mb-6">LUMIÈRE Rewards</h3>
                  <div className="flex items-center gap-6 mb-8">
                     <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined !text-4xl icon-filled">diamond</span>
                     </div>
                     <div>
                        <p className="text-2xl font-serif font-bold italic text-white">{user.tier}</p>
                        <div className="flex items-center gap-2">
                           <span className="text-primary font-black uppercase tracking-widest text-[10px]">{user.points} XP Points</span>
                           <span className="text-white/40 text-[10px]">•</span>
                           <button className="text-white/60 hover:text-white text-[10px] font-bold underline">Benefits</button>
                        </div>
                     </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 mb-3">
                     <div 
                        className="bg-primary h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(232,48,110,0.5)]" 
                        style={{ width: `${(user.points / user.maxPoints) * 100}%` }}
                     ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] text-gray-400 font-medium">Earn {user.maxPoints - user.points} more for Platinum</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">LVL UP</span>
                  </div>
               </div>
               <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-white/5 !text-9xl">stars</span>
               </div>
            </div>
          </section>

          {/* Recent Orders Sneak Peek */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-fashion-nude">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-serif">Recent Orders</h3>
                <button 
                  onClick={() => onNavigate(Page.Orders)}
                  className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                   All Orders <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
             </div>
             <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {[1, 2, 3].map(i => (
                  <div key={i} className="min-w-[140px] aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative group cursor-pointer">
                    <img src={`https://picsum.photos/seed/fashion${i}/300/400`} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Order" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                      <p className="text-[8px] text-white/70 font-bold uppercase tracking-widest">ORD-829{i}</p>
                      <p className="text-xs text-white font-bold">Shipped</p>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => onNavigate(Page.Orders)}
                  className="min-w-[140px] aspect-[3/4] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">receipt_long</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">History</span>
                </div>
             </div>
          </section>

          {/* Card Reminder */}
          <section className="bg-[#fff9f9] rounded-3xl p-8 shadow-sm border border-pink-100 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest mb-4">Stock Alert</span>
              <h3 className="text-2xl font-serif font-bold text-text-main mb-3">Restock your Radiance Serum?</h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">It's been 60 days since your last beauty haul. You might be running low on your favorite skincare essentials!</p>
              <div className="flex gap-4 mt-8">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Re-order Now</button>
                <button className="text-gray-400 hover:text-text-main text-sm font-bold transition-colors">Remind Me Later</button>
              </div>
            </div>
            <div className="w-full md:w-2/5 aspect-[16/10] bg-cover bg-center rounded-2xl shadow-2xl relative z-10" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgWC4LBMMTxKFsin3qaHNEWnAqCp2nZpEVpSVDd7IXzDIRMidCCJJ7p_sezNNnkELXyORos9uDIWCbOFInaGeJoL8Vvwi_63vtXTSs2dBJ_lgpIukJvFv-f4MbwAFiMmWhyzni8rbvZlHGHkMBXJC1HdRYdQ61zyth4Dc-Is1oJfhFiwS2JXgTC-Tev4fu354EzrPFQOpay05xLWutsdfGuC66OGcnN6pfyWL_QSOHw8gsFLa5fZ68x1Ue_brvoujXqJNGDVUoyic9')` }}></div>
            <div className="absolute top-0 right-0 size-80 bg-white/50 blur-3xl -rotate-45 translate-x-1/2 -translate-y-1/2"></div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
