
import React from 'react';
import { Page, User } from '../types';

interface AccountSidebarProps {
  user: User;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({ user, currentPage, onNavigate, onLogout }) => {
  const menuItems = [
    { id: Page.Account, label: 'Dashboard', icon: 'dashboard' },
    { id: Page.Orders, label: 'My Orders', icon: 'shopping_bag' },
    { id: Page.Addresses, label: 'Addresses', icon: 'location_on' },
    { id: Page.Wishlist, label: 'Wishlist', icon: 'favorite' },
    { id: Page.PaymentMethods, label: 'Payment Methods', icon: 'credit_card' },
  ];

  return (
    <aside className="w-80 h-full hidden lg:flex flex-col border-r border-gray-200 bg-white overflow-y-auto shrink-0">
      <div className="p-6 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-background-alt border border-fashion-nude">
            <img src={user.avatar} className="size-12 rounded-full ring-2 ring-primary/20" alt={user.name} />
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-text-main">{user.name}</h1>
              <p className="text-primary text-[10px] font-bold uppercase tracking-wider">{user.tier}</p>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-1.5 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-500" 
                  style={{ width: `${(user.points / user.maxPoints) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id 
                    ? 'bg-primary/10 text-primary font-bold shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${currentPage === item.id ? 'icon-filled' : ''}`}>
                  {item.icon}
                </span>
                <p className="text-sm">{item.label}</p>
              </button>
            ))}
            
            <div className="h-px bg-gray-100 my-4"></div>
            
            <button 
              onClick={onLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <p className="text-sm font-medium">Logout</p>
            </button>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default AccountSidebar;
