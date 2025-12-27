
import React, { useState } from 'react';
import { Page, User } from '../types';

interface AddWalletProps {
  user: User;
  onNavigate: (page: Page) => void;
}

const AddWallet: React.FC<AddWalletProps> = ({ user, onNavigate }) => {
  const [network, setNetwork] = useState('erc20');
  const [address, setAddress] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate verification flow
    onNavigate(Page.PaymentMethods);
  };

  return (
    <main className="flex-grow flex flex-col items-center py-10 px-4 sm:px-6 bg-background-light min-h-[calc(100vh-80px)] animate-fadeIn">
      <div className="w-full max-w-[960px] flex flex-col gap-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex px-1">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button onClick={() => onNavigate(Page.Account)} className="inline-flex items-center text-sm font-medium text-text-muted hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px] mr-2">home</span>
                Account
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-text-muted text-[16px]">chevron_right</span>
                <button onClick={() => onNavigate(Page.PaymentMethods)} className="ml-1 text-sm font-medium text-text-muted hover:text-primary md:ml-2 transition-colors">Payment Methods</button>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-text-muted text-[16px]">chevron_right</span>
                <span className="ml-1 text-sm font-bold text-text-main md:ml-2">Link Wallet</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-black text-text-main font-serif tracking-tight mb-2">Link Payment Wallet</h1>
            <p className="text-text-muted text-lg leading-relaxed font-medium">
              Securely link your cryptocurrency wallet for seamless and instant checkouts. We support major networks for your convenience.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border-subtle shadow-sm text-[10px] font-black uppercase tracking-widest text-green-600">
            <span className="material-symbols-outlined text-[18px] icon-filled">verified_user</span>
            <span>Secure Connection</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white rounded-3xl shadow-xl border border-border-subtle overflow-hidden">
          {/* Progress Stepper */}
          <div className="flex items-center justify-between px-8 py-6 bg-background-alt border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-black shadow-lg shadow-primary/20">1</div>
              <span className="text-sm font-bold text-text-main">Enter Details</span>
            </div>
            <div className="flex-1 h-px bg-gray-200 mx-6"></div>
            <div className="flex items-center gap-3 opacity-40 grayscale">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 text-sm font-bold">2</div>
              <span className="text-sm font-bold text-text-main">Verify Ownership</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Network Selection */}
            <div className="space-y-4">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Select Network</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'erc20', name: 'Ethereum', sub: 'ERC20', icon: 'token' },
                  { id: 'trc20', name: 'Tron', sub: 'TRC20', icon: 'change_history' },
                  { id: 'bep20', name: 'BNB Chain', sub: 'BEP20', icon: 'hexagon' }
                ].map((item) => (
                  <label key={item.id} className="cursor-pointer group relative">
                    <input 
                      className="peer sr-only" 
                      name="network" 
                      type="radio" 
                      value={item.id}
                      checked={network === item.id}
                      onChange={(e) => setNetwork(e.target.value)}
                    />
                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-border-subtle bg-white hover:border-primary/30 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                      <div className="size-12 mb-4 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 peer-checked:text-primary transition-colors group-hover:scale-110">
                        <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                      </div>
                      <span className="font-bold text-sm text-text-main">{item.name}</span>
                      <span className="text-[10px] font-black text-text-muted mt-1 uppercase tracking-widest">{item.sub}</span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                      <span className="material-symbols-outlined text-[20px] icon-filled">check_circle</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Wallet Address Input */}
            <div className="space-y-4">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]" htmlFor="wallet-address">Public Wallet Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <input 
                  required
                  className="block w-full pl-12 pr-12 py-5 rounded-2xl bg-background-alt border border-border-subtle text-text-main placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-sm font-bold font-mono" 
                  id="wallet-address" 
                  placeholder="Paste your wallet address (e.g. 0x... or T...)" 
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-primary transition-colors" title="Scan QR Code">
                  <span className="material-symbols-outlined">qr_code_scanner</span>
                </button>
              </div>
              <p className="text-[10px] text-orange-500 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Ensure the address matches the {network.toUpperCase()} network to avoid asset loss.
              </p>
            </div>

            {/* Wallet Nickname */}
            <div className="space-y-4">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]" htmlFor="wallet-name">Wallet Label (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <span className="material-symbols-outlined">label</span>
                </div>
                <input 
                  className="block w-full pl-12 pr-4 py-5 rounded-2xl bg-background-alt border border-border-subtle text-text-main placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-sm font-bold" 
                  id="wallet-name" 
                  placeholder="e.g. My Ledger Shopping Wallet" 
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>
            </div>

            {/* Security Disclaimer */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-5 items-start">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shadow-inner">
                <span className="material-symbols-outlined !text-[24px] icon-filled">shield_lock</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-900 mb-1">Privacy & Security Compliance</h4>
                <p className="text-xs text-blue-700/80 leading-relaxed font-medium">
                  We only request your <strong>public</strong> address for payment verification and tracking. L'Elégance will <strong>never</strong> ask for your private keys, recovery phrase, or password.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-end">
              <button 
                type="button"
                onClick={() => onNavigate(Page.PaymentMethods)}
                className="px-10 py-4 rounded-xl border border-border-subtle text-text-main font-bold hover:bg-gray-50 transition-all active:scale-95 w-full sm:w-auto"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-12 py-4 rounded-xl bg-fashion-dark text-white font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
              >
                <span>Verify & Add Wallet</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Help Text */}
        <div className="text-center pb-12">
          <p className="text-xs text-text-muted font-bold uppercase tracking-widest">
            Need help? <button className="text-primary hover:underline underline-offset-4 decoration-primary/30 transition-all">View our Wallet Integration Guide</button> or contact VIP support.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AddWallet;
