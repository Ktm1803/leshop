
import React from 'react';
import { Page, User } from '../types';
import { BRAND_NAME, CATEGORIES, LogoIcon } from '../constants';

interface NavigationProps {
  user: User | null;
  cartCount: number;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navigation: React.FC<NavigationProps> = ({ user, cartCount, onNavigate, currentPage }) => {
  const getPageFromCat = (cat: string): Page => {
    switch (cat.toLowerCase()) {
      case 'fashion': return Page.Fashion;
      case 'beauty': return Page.Beauty;
      case 'sale': return Page.Sale;
      case 'journal': return Page.Journal;
      case 'new in': return Page.Category;
      default: return Page.Category;
    }
  };

  return (
    <div className="w-full bg-surface-light sticky top-0 z-50 border-b border-[#f3e7eb]">
      <div className="px-6 lg:px-40 flex justify-center py-2">
        <div className="w-full max-w-[1200px]">
          <header className="flex items-center justify-between whitespace-nowrap py-3">
            <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 text-text-main cursor-pointer group"
                onClick={() => onNavigate(Page.Home)}
              >
                <LogoIcon />
                <h2 className="text-text-main text-2xl font-bold font-serif leading-tight tracking-tight group-hover:text-primary transition-colors">{BRAND_NAME}</h2>
              </div>
              <div className="hidden lg:flex items-center gap-8 ml-4">
                {CATEGORIES.map(cat => {
                  const targetPage = getPageFromCat(cat);
                  const isActive = currentPage === targetPage;
                  
                  return (
                    <button 
                      key={cat}
                      onClick={() => onNavigate(targetPage)}
                      className={`text-sm leading-normal transition-all relative py-1 px-1 ${
                        isActive 
                          ? 'text-primary font-black scale-105' 
                          : 'text-text-main font-medium hover:text-primary opacity-70 hover:opacity-100'
                      }`}
                    >
                      {cat}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fadeIn"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
              <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-[#f3e7eb] bg-[#fcf8f9] hover:border-primary/30 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 overflow-hidden">
                  <div className="text-text-muted flex items-center justify-center pl-4 pr-2">
                    <span className="material-symbols-outlined !text-[20px]">search</span>
                  </div>
                  <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-text-main focus:ring-0 placeholder:text-text-muted/70 px-0 text-sm font-normal leading-normal" placeholder="Search..."/>
                </div>
              </label>
              <div className="flex gap-1">
                <button 
                  onClick={() => onNavigate(Page.Wishlist)}
                  className="flex items-center justify-center rounded-full size-10 hover:bg-[#fcf8f9] text-text-main transition-colors"
                  title="Wishlist"
                >
                  <span className={`material-symbols-outlined !text-[24px] ${currentPage === Page.Wishlist ? 'icon-filled text-primary' : ''}`}>favorite</span>
                </button>
                <button 
                  onClick={() => onNavigate(Page.Cart)}
                  className="flex items-center justify-center rounded-full size-10 hover:bg-[#fcf8f9] text-text-main transition-colors relative"
                  title="Shopping Cart"
                >
                  <span className={`material-symbols-outlined !text-[24px] ${currentPage === Page.Cart ? 'icon-filled text-primary' : ''}`}>shopping_bag</span>
                  {cartCount > 0 && (
                    <span className="absolute top-1 right-1 bg-primary text-white text-[10px] size-4 flex items-center justify-center rounded-full border border-white">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => onNavigate(user ? Page.Account : Page.Login)}
                  className="flex items-center justify-center rounded-full size-10 hover:bg-[#fcf8f9] text-text-main transition-colors overflow-hidden"
                  title="Profile"
                >
                  {user ? (
                    <img src={user.avatar} className={`size-full object-cover ${currentPage === Page.Account ? 'ring-2 ring-primary' : ''}`} alt={user.name} />
                  ) : (
                    <span className={`material-symbols-outlined !text-[24px] ${currentPage === Page.Login ? 'text-primary' : ''}`}>account_circle</span>
                  )}
                </button>
                <button 
                  onClick={() => onNavigate(Page.Admin)}
                  className="flex items-center justify-center rounded-full size-10 hover:bg-[#fcf8f9] text-text-main transition-colors"
                  title="Admin Dashboard"
                >
                  <span className={`material-symbols-outlined !text-[24px] ${currentPage === Page.Admin ? 'icon-filled text-primary' : ''}`}>settings</span>
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
