
import React from 'react';
import { Page, User } from '../types';
import AccountSidebar from '../components/AccountSidebar';

interface UserAddressesProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const UserAddresses: React.FC<UserAddressesProps> = ({ user, onNavigate, onLogout }) => {
  const addresses = [
    {
      id: 1,
      type: 'Home',
      isDefault: true,
      name: user.name,
      phone: user.phone || '(+1) 555-0123-4567',
      addressLine: user.address || '123 Fashion Avenue, Suite 4B\nDistrict 1, Ho Chi Minh City\nVietnam',
      icon: 'home'
    },
    {
      id: 2,
      type: 'Office',
      isDefault: false,
      name: `${user.name} (Work)`,
      phone: '(+1) 555-9876-5432',
      addressLine: '45 Business Park, Tower A\nCau Giay District, Hanoi\nVietnam',
      icon: 'domain'
    }
  ];

  return (
    <div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-background-light">
      <AccountSidebar user={user} currentPage={Page.Addresses} onNavigate={onNavigate} onLogout={onLogout} />

      <main className="flex-1 flex flex-col h-full overflow-y-auto scroll-smooth animate-fadeIn">
        <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <header className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-fashion-black mb-2 font-serif">My Addresses</h2>
              <p className="text-gray-500">Manage your shipping and billing locations for a seamless checkout.</p>
            </div>
            <button 
              onClick={() => onNavigate(Page.AddAddress)}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl shadow-primary/20 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">add</span>
              Add New Address
            </button>
          </header>

          <div className="flex gap-6 border-b border-gray-100 mb-8">
             <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm">All Addresses</button>
             <button className="pb-3 text-gray-400 hover:text-text-main font-bold text-sm transition-colors">Shipping</button>
             <button className="pb-3 text-gray-400 hover:text-text-main font-bold text-sm transition-colors">Billing</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addresses.map((addr) => (
              <div key={addr.id} className={`group relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${addr.isDefault ? 'border-primary/20 shadow-sm' : 'border-gray-100 hover:border-primary/30'}`}>
                <div className="absolute top-6 right-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-background-alt p-3 rounded-xl border border-fashion-nude text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">{addr.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg text-text-main">{addr.type}</span>
                      {addr.isDefault && (
                        <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-primary/20">Default</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Shipping & Billing</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-gray-300 text-[20px] mt-0.5">person</span>
                    <span className="text-sm font-bold text-text-main">{addr.name}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-gray-300 text-[20px] mt-0.5">call</span>
                    <span className="text-sm text-gray-500 font-medium">{addr.phone}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-gray-300 text-[20px] mt-0.5">location_on</span>
                    <span className="text-sm text-gray-600 font-medium leading-relaxed whitespace-pre-line">
                      {addr.addressLine}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  {addr.isDefault ? (
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      Default Address
                    </div>
                  ) : (
                    <button className="text-sm font-bold text-gray-400 hover:text-primary transition-colors">Set as Default</button>
                  )}
                </div>
              </div>
            ))}

            <button 
              onClick={() => onNavigate(Page.AddAddress)}
              className="flex flex-col items-center justify-center rounded-2xl p-8 border-2 border-dashed border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group min-h-[320px]"
            >
              <div className="size-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-primary text-4xl">add_location_alt</span>
              </div>
              <span className="text-xl font-bold text-text-main mb-2">Add New Address</span>
              <p className="text-sm text-gray-400 text-center max-w-[220px]">Save another destination for your curated hauls.</p>
            </button>
          </div>

          {/* Location Overview Section */}
          <div className="mt-16 pt-10 border-t border-gray-100">
             <h3 className="text-2xl font-bold font-serif text-text-main mb-6">Location Overview</h3>
             <div className="w-full h-80 rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5VTXZiYsxfBzcyLTqaoVEIReRKlIiTcCBL9849zAI5hXRGbmhTkRG67N_tkYooRq6SXCBlbqKwT1dgnlM2LZtUbmW39J3XUw_aJQ7FLkwQznK_lxvvatbuRTAaEx1u2E97SaEaX9i0EhAln6JFO-YwOe0Tti7c3JzxERiOzE4BRbxhlvDYD1oGLUI_WkZooAm1rgug6MdmewBqr6VEYBjaF6r-61_YL3lYcxaLaI510N6WgYlTmHvQiyIBSZOa3Yyu_3RWcGN868Y')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl flex items-center gap-5 shadow-2xl max-w-sm border border-white/50">
                    <div className="p-3 bg-primary rounded-xl text-white animate-bounce shadow-lg shadow-primary/40">
                      <span className="material-symbols-outlined text-[32px]">location_on</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Current Home</p>
                      <p className="text-sm font-bold text-text-main line-clamp-1">{user.address || 'District 1, Ho Chi Minh City'}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/40 transition-all">Satellite View</button>
                    <button className="bg-white text-text-main px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">Get Directions</button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserAddresses;
