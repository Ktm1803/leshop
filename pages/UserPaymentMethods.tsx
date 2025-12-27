
import React from 'react';
import { Page, User } from '../types';
import AccountSidebar from '../components/AccountSidebar';

interface UserPaymentMethodsProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const UserPaymentMethods: React.FC<UserPaymentMethodsProps> = ({ user, onNavigate, onLogout }) => {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-background-light">
      <AccountSidebar user={user} currentPage={Page.PaymentMethods} onNavigate={onNavigate} onLogout={onLogout} />

      <main className="flex-1 flex flex-col h-full overflow-y-auto scroll-smooth animate-fadeIn">
        <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <header className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-text-main font-serif mb-2">Payment Methods</h1>
            <p className="text-text-muted font-medium leading-relaxed">Manage your saved cards and digital wallets for a faster, secure checkout experience.</p>
          </header>

          {/* Secure Badge */}
          <div className="mb-10 flex items-start gap-5 rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
            <div className="rounded-xl bg-green-100 p-3 text-green-600 shadow-inner">
              <span className="material-symbols-outlined text-[28px] icon-filled">verified_user</span>
            </div>
            <div>
              <h4 className="font-bold text-green-900 mb-1">Encrypted Secure Payments</h4>
              <p className="text-sm text-green-700 leading-relaxed opacity-80 font-medium">Your payment information is tokenized and stored on secure vault servers. L'Elégance never stores your full card numbers.</p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Default */}
            <div className="group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-fashion-dark to-[#3a2b2f] p-8 text-white shadow-2xl transition-all hover:-translate-y-1 hover:shadow-primary/10 ring-1 ring-white/5">
              <div className="absolute right-0 top-0 h-48 w-48 -translate-y-16 translate-x-16 rounded-full bg-primary/10 blur-3xl transition-transform group-hover:scale-125"></div>
              
              <div className="mb-10 flex items-start justify-between relative z-10">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Primary
                </span>
                <span className="font-bold italic text-3xl tracking-tighter text-white/90">VISA</span>
              </div>

              <div className="mb-10 flex items-center gap-6 relative z-10">
                <div className="flex gap-1.5 text-white/30">
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                </div>
                <div className="flex gap-1.5 text-white/30">
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                </div>
                <div className="flex gap-1.5 text-white/30">
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                </div>
                <span className="font-mono text-2xl tracking-widest font-bold">4242</span>
              </div>

              <div className="flex items-end justify-between relative z-10">
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-1">Card Holder</p>
                  <p className="font-bold tracking-widest text-sm uppercase">{user.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-1">Expires</p>
                  <p className="font-bold text-sm">09/26</p>
                </div>
              </div>

              {/* Actions Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-fashion-dark/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 z-20">
                <div className="flex gap-4">
                  <button className="size-12 rounded-full bg-white text-fashion-dark hover:bg-primary hover:text-white transition-all hover:scale-110 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">edit</span>
                  </button>
                  <button className="size-12 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white transition-all hover:scale-110 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Add New Card */}
            <button 
              onClick={() => onNavigate(Page.AddCard)}
              className="group flex min-h-[250px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-fashion-nude bg-white p-8 text-center transition-all hover:border-primary/50 hover:bg-primary/5 shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-background-alt group-hover:bg-white transition-all text-primary shadow-inner border border-fashion-nude group-hover:scale-110 group-hover:rotate-3">
                <span className="material-symbols-outlined text-[36px] font-bold">add</span>
              </div>
              <h3 className="font-black uppercase tracking-widest text-xs text-text-main group-hover:text-primary mb-2">Add New Card</h3>
              <p className="text-sm text-gray-400 font-medium">Link a Credit or Debit card</p>
            </button>
          </div>

          {/* Wallets */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-text-main font-serif">Digital Wallets & Crypto</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-fashion-nude group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5">
                  <div className="size-14 rounded-xl bg-[#003087]/5 flex items-center justify-center text-[#003087] group-hover:bg-[#003087]/10 transition-colors">
                    <span className="text-2xl font-black italic font-serif">P</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main">PayPal</h3>
                    <p className="text-sm text-gray-400 font-medium">sophia.n@example.com</p>
                  </div>
                </div>
                <button className="px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100">Unlink</button>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-fashion-nude group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5">
                  <div className="size-14 rounded-xl bg-[#26A17B]/5 flex items-center justify-center text-[#26A17B] group-hover:bg-[#26A17B]/10 transition-colors">
                    <span className="material-symbols-outlined text-[32px] icon-filled">currency_bitcoin</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main">USDT (Tether)</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-400 font-mono tracking-tighter">0x71C...39aB</p>
                      <span className="bg-green-50 text-[10px] font-black px-1.5 py-0.5 rounded text-green-600 uppercase tracking-widest border border-green-100">ERC20</span>
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20">Manage</button>
              </div>

              <button 
                onClick={() => onNavigate(Page.AddWallet)}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 p-4 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:bg-gray-50 hover:text-text-main hover:border-primary/50 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                Link New Wallet
              </button>
            </div>
          </div>

          {/* Help */}
          <div className="rounded-3xl bg-background-alt border border-fashion-nude p-8 shadow-inner">
            <h3 className="mb-6 text-xl font-bold font-serif text-text-main">Common Questions</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-primary uppercase tracking-widest">When will I be charged?</h4>
                <p className="text-sm leading-relaxed text-gray-500 font-medium">Charges occur only when your order status changes to "Shipped". For pre-orders, a temporary authorization hold may be placed on your account.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-primary uppercase tracking-widest">Safe Data storage?</h4>
                <p className="text-sm leading-relaxed text-gray-500 font-medium">Absolutely. We use 256-bit SSL encryption. We never store CVV codes and all personal data is strictly protected under international financial security standards.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserPaymentMethods;
