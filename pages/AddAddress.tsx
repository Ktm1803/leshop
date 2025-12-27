
import React, { useState } from 'react';
import { Page, User } from '../types';

interface AddAddressProps {
  user: User;
  onNavigate: (page: Page) => void;
  onUpdateUser: (data: Partial<User>) => void;
}

const AddAddress: React.FC<AddAddressProps> = ({ user, onNavigate, onUpdateUser }) => {
  const [formData, setFormData] = useState({
    fullName: user.name || '',
    phone: user.phone || '',
    country: 'VN',
    street: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    isDefaultShipping: true,
    isDefaultBilling: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const fullAddress = `${formData.street}${formData.apt ? ', ' + formData.apt : ''}\n${formData.city}, ${formData.state} ${formData.zip}\n${formData.country}`;
    
    if (formData.isDefaultShipping) {
      onUpdateUser({ 
        address: fullAddress,
        phone: formData.phone 
      });
    }
    
    // Return to addresses list
    onNavigate(Page.Addresses);
  };

  return (
    <main className="flex-1 w-full flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 bg-background-light min-h-[calc(100vh-80px)] animate-fadeIn">
      <div className="w-full max-w-[960px] flex flex-col gap-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 px-1 text-sm">
          <button onClick={() => onNavigate(Page.Account)} className="text-text-muted hover:text-primary font-medium transition-colors">My Account</button>
          <span className="text-text-muted">/</span>
          <button onClick={() => onNavigate(Page.Addresses)} className="text-text-muted hover:text-primary font-medium transition-colors">Addresses</button>
          <span className="text-text-muted">/</span>
          <span className="text-text-main font-bold">New Address</span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col gap-2 pb-4 border-b border-[#f3e7eb]">
          <h1 className="text-text-main tracking-tight text-3xl sm:text-[32px] font-black font-serif">Add New Address</h1>
          <p className="text-text-muted text-sm sm:text-base">Where should we send your next style upgrade?</p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-[#f3e7eb]">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            
            {/* Section: Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-text-main text-lg font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">person</span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 flex-1">
                  <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">Full Name</span>
                  <input 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                    placeholder="e.g. Jane Doe" 
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 flex-1">
                  <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</span>
                  <input 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                    placeholder="e.g. +84 000 000 000" 
                    type="tel"
                  />
                </label>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#f3e7eb] to-transparent w-full"></div>

            {/* Section: Delivery Address */}
            <div className="flex flex-col gap-6">
              <h3 className="text-text-main text-lg font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">location_on</span>
                Delivery Address
              </h3>
              <div className="flex flex-col gap-6">
                {/* Country */}
                <label className="flex flex-col gap-2 w-full md:w-1/2">
                  <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">Country / Region</span>
                  <div className="relative">
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 pr-10 text-text-main text-sm font-medium appearance-none cursor-pointer transition-all"
                    >
                      <option value="VN">Vietnam</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="JP">Japan</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xl">expand_more</span>
                  </div>
                </label>

                {/* Street Address */}
                <div className="grid grid-cols-1 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">Street Address</span>
                    <input 
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({...formData, street: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                      placeholder="e.g. 123 Fashion Ave" 
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400 text-gray-300">Apt, Suite, Unit (Optional)</span>
                    <input 
                      value={formData.apt}
                      onChange={(e) => setFormData({...formData, apt: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                      placeholder="e.g. Apt 4B" 
                      type="text"
                    />
                  </label>
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">City</span>
                    <input 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                      placeholder="e.g. Ho Chi Minh City" 
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">State / Province</span>
                    <input 
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                      placeholder="e.g. District 1" 
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-main text-xs font-black uppercase tracking-widest text-gray-400">Zip / Postal Code</span>
                    <input 
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({...formData, zip: e.target.value})}
                      className="w-full rounded-xl border border-[#f3e7eb] bg-[#fcf8f9] focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 px-4 placeholder:text-text-muted/50 text-text-main text-sm font-medium transition-all" 
                      placeholder="e.g. 70000" 
                      type="text"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#f3e7eb] to-transparent w-full"></div>

            {/* Section: Preferences */}
            <div className="flex flex-col gap-4">
              <label className="inline-flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={formData.isDefaultShipping}
                  onChange={(e) => setFormData({...formData, isDefaultShipping: e.target.checked})}
                  className="size-5 rounded border-[#f3e7eb] text-primary focus:ring-primary cursor-pointer transition-colors"
                />
                <span className="text-text-main text-sm font-bold group-hover:text-primary transition-colors">Make this my default shipping address</span>
              </label>
              <label className="inline-flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={formData.isDefaultBilling}
                  onChange={(e) => setFormData({...formData, isDefaultBilling: e.target.checked})}
                  className="size-5 rounded border-[#f3e7eb] text-primary focus:ring-primary cursor-pointer transition-colors"
                />
                <span className="text-text-main text-sm font-bold group-hover:text-primary transition-colors">Make this my default billing address</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => onNavigate(Page.Addresses)}
                className="flex-1 sm:flex-none h-14 px-10 rounded-xl border border-[#f3e7eb] text-text-main font-bold hover:bg-gray-50 transition-all active:scale-95" 
                type="button"
              >
                Cancel
              </button>
              <button 
                className="flex-1 sm:flex-none h-14 px-12 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary-hover shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95" 
                type="submit"
              >
                Save Address
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer Spacer */}
      <div className="h-20"></div>
    </main>
  );
};

export default AddAddress;
