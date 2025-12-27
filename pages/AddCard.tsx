
import React, { useState } from 'react';
import { Page, User } from '../types';

interface AddCardProps {
  user: User;
  onNavigate: (page: Page) => void;
}

const AddCard: React.FC<AddCardProps> = ({ user, onNavigate }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: user.name || '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    saveCard: true,
    isDefault: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    onNavigate(Page.PaymentMethods);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) {
      setFormData({ ...formData, cardNumber: formatted });
    }
  };

  return (
    <main className="flex-grow w-full flex justify-center py-10 px-4 md:px-10 lg:px-40 bg-background-light min-h-[calc(100vh-80px)] animate-fadeIn">
      <div className="flex flex-col w-full max-w-[1200px]">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 px-1 text-sm mb-6">
          <button onClick={() => onNavigate(Page.Account)} className="text-text-muted hover:text-primary font-medium transition-colors">My Account</button>
          <span className="text-text-muted">/</span>
          <button onClick={() => onNavigate(Page.PaymentMethods)} className="text-text-muted hover:text-primary font-medium transition-colors">Payment Methods</button>
          <span className="text-text-muted">/</span>
          <span className="text-text-main font-bold">Add Card</span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-10 border-b border-gray-200 pb-6">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-neutral-dark font-serif">Add New Payment Method</h1>
            <p className="text-neutral-soft text-base font-normal">Securely link your credit or debit card for faster, elegant checkouts.</p>
          </div>
          <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-sm icon-filled">lock</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Encrypted & Secure</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Card Number */}
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Card Number</span>
                <div className="relative flex w-full items-center rounded-xl bg-white border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
                  <input 
                    required
                    className="w-full bg-transparent border-none p-4 pl-4 pr-12 text-lg font-bold text-neutral-dark placeholder:text-gray-300 focus:ring-0" 
                    placeholder="0000 0000 0000 0000" 
                    type="text"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                  />
                  <div className="absolute right-4 text-gray-300">
                    <span className="material-symbols-outlined">credit_card</span>
                  </div>
                </div>
              </label>

              {/* Cardholder Name */}
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Cardholder Name</span>
                <div className="relative flex w-full items-center rounded-xl bg-white border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
                  <input 
                    required
                    className="w-full bg-transparent border-none p-4 text-base font-medium text-neutral-dark placeholder:text-gray-300 focus:ring-0 uppercase tracking-widest" 
                    placeholder="Enter name exactly as on card" 
                    type="text"
                    value={formData.cardHolder}
                    onChange={(e) => setFormData({...formData, cardHolder: e.target.value.toUpperCase()})}
                  />
                </div>
              </label>

              {/* Expiry & CVV Row */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">Expiration Date</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <select 
                        required
                        className="w-full appearance-none rounded-xl bg-white border border-gray-200 p-4 text-sm font-bold text-neutral-dark focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm cursor-pointer"
                        value={formData.expiryMonth}
                        onChange={(e) => setFormData({...formData, expiryMonth: e.target.value})}
                      >
                        <option disabled value="">Month</option>
                        {Array.from({length: 12}, (_, i) => (i + 1).toString().padStart(2, '0')).map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </div>
                    </div>
                    <div className="relative">
                      <select 
                        required
                        className="w-full appearance-none rounded-xl bg-white border border-gray-200 p-4 text-sm font-bold text-neutral-dark focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm cursor-pointer"
                        value={formData.expiryYear}
                        onChange={(e) => setFormData({...formData, expiryYear: e.target.value})}
                      >
                        <option disabled value="">Year</option>
                        {Array.from({length: 10}, (_, i) => (new Date().getFullYear() + i).toString()).map(y => (
                          <option key={y} value={y.slice(-2)}>{y}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">CVV / CVC</span>
                    <div className="group relative flex items-center cursor-help">
                      <span className="material-symbols-outlined text-gray-300 text-[18px]">help</span>
                      <div className="invisible group-hover:visible absolute bottom-full right-0 mb-2 w-48 p-3 bg-fashion-dark text-white text-[10px] rounded-lg shadow-xl z-10 text-center leading-relaxed">
                        3 or 4-digit security code found on the back or front of your card.
                      </div>
                    </div>
                  </div>
                  <div className="relative flex w-full items-center rounded-xl bg-white border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
                    <input 
                      required
                      className="w-full bg-transparent border-none p-4 text-base font-bold text-neutral-dark placeholder:text-gray-300 focus:ring-0 tracking-[0.5em]" 
                      maxLength={4} 
                      placeholder="•••" 
                      type="password"
                      value={formData.cvv}
                      onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '')})}
                    />
                    <div className="absolute right-4 text-primary opacity-30">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="mt-4 flex flex-col gap-4">
                <label className="flex items-start gap-4 p-5 border border-[#f3e7eb] rounded-2xl bg-white cursor-pointer hover:border-primary/30 transition-all group">
                  <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox"
                      checked={formData.saveCard}
                      onChange={(e) => setFormData({...formData, saveCard: e.target.checked})}
                      className="peer size-5 cursor-pointer appearance-none rounded border border-gray-300 text-primary focus:ring-primary checked:bg-primary checked:border-primary transition-all"
                    />
                    <span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-base pointer-events-none inset-0 m-auto">check</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-neutral-dark group-hover:text-primary transition-colors">Save for future purchases</span>
                    <span className="text-xs text-neutral-soft font-medium leading-relaxed">Securely save this card for a faster checkout experience next time.</span>
                  </div>
                </label>
                <label className="flex items-start gap-4 p-5 border border-[#f3e7eb] rounded-2xl bg-white cursor-pointer hover:border-primary/30 transition-all group">
                  <div className="relative flex items-center mt-0.5">
                    <input 
                      type="checkbox"
                      checked={formData.isDefault}
                      onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                      className="peer size-5 cursor-pointer appearance-none rounded border border-gray-300 text-primary focus:ring-primary checked:bg-primary checked:border-primary transition-all"
                    />
                    <span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-base pointer-events-none inset-0 m-auto">check</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-neutral-dark group-hover:text-primary transition-colors">Set as default payment method</span>
                  </div>
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse sm:flex-row items-center gap-4 mt-8">
                <button 
                  type="button"
                  onClick={() => onNavigate(Page.PaymentMethods)}
                  className="w-full sm:w-auto h-14 px-10 rounded-xl border border-gray-200 text-neutral-dark font-bold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 w-full bg-primary hover:bg-primary-hover text-white font-black uppercase tracking-widest text-xs h-14 rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined !text-[20px]">add_card</span>
                  Add Card
                </button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-10 mt-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Secure Payments via</span>
               <div className="flex gap-6">
                 <div className="h-6 w-10 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC361UCSUCl0wntp_-PmpyNB8lATzX0rnyauud-0ciPkpy2prHYfxBu0_2g8PN3dmOTfX8OMgtkZViR7IlcbkozfKsPDuMQ1fRLp7NYzTDGO2HrSSOTyRK0OnGz6AXh7Atx5kq_EziqBQDljErn4EH-atZFjVp5GQixz6aYFKwhoBAunPaSgwXo-vxub0sKvv2S3kb7gFujX0pHkXWRjd8KwAadE5eIBCHcmvR7MsnXNQvVy982s-4vqFp1EmvLTPgjiI_oEUSobxRe')" }}></div>
                 <div className="h-6 w-10 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4PDLvzeuOZU-EAANCBnS3aDBod4Hil0Gxl-ZfXDKWW9P_LjtZ1kmy9IO_jk0aiuxkFXHsjSiOuDwiW_66P0L_fkUjYtqRndYUfzq9sBJtnqs6wtttwX_AguWNVAORHi6qli6AfVHqkW5RsL9r83jcVodG5MtjjQX8FyIP_gVkO9Bc6GskvbTApvFZgFSMOrJNX3G4Jntx9g31IBV9TtrJ1HtZT4euNJlIcM3zreCaWB2A1PjRUuC9PtQSc9hzfOK1jUE3lYGgMrZR')" }}></div>
               </div>
            </div>
          </div>

          {/* Right Column: Card Preview */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end lg:sticky lg:top-32">
            <div className="w-full max-w-[420px] aspect-[1.586] rounded-3xl relative overflow-hidden shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] duration-700 group cursor-default">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-fashion-dark via-[#2d1b22] to-fashion-dark"></div>
              {/* Decorative Shapes */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              
              {/* Card Content */}
              <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 text-white z-10">
                <div className="flex justify-between items-start">
                  {/* Chip */}
                  <div className="w-14 h-10 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-400 border border-yellow-500/30 flex items-center justify-center overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 border border-black/10 rounded opacity-50"></div>
                    <span className="material-symbols-outlined text-black/20 text-3xl">memory</span>
                  </div>
                  <span className="font-serif font-black italic tracking-widest opacity-60 text-lg uppercase">L'Elégance</span>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Card Number</p>
                    <p className="font-mono text-xl sm:text-2xl tracking-[0.2em] text-white drop-shadow-lg">
                      {formData.cardNumber || '0000 0000 0000 0000'}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-1.5">
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Cardholder</p>
                      <p className="font-bold tracking-[0.1em] uppercase text-xs sm:text-sm text-white truncate max-w-[180px]">
                        {formData.cardHolder || 'Luxe Member'}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-1.5">
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Expires</p>
                      <p className="font-mono text-sm sm:text-base tracking-widest text-white">
                        {formData.expiryMonth || 'MM'}/{formData.expiryYear || 'YY'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Visual Helper Text */}
            <div className="mt-8 p-6 bg-white border border-[#f3e7eb] rounded-3xl max-w-[420px] w-full shadow-sm">
              <div className="flex gap-5">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 shadow-inner">
                  <span className="material-symbols-outlined !text-[28px] icon-filled">shield</span>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark font-serif">Zero Fraud Liability</h4>
                  <p className="text-xs text-neutral-soft font-medium mt-1 leading-relaxed">Shop with absolute confidence. You are protected from unauthorized charges made with your account information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddCard;
