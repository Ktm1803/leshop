
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#1b0e12] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => onNavigate(Page.Home)}
            >
              <span className="material-symbols-outlined text-primary">local_mall</span>
              <h2 className="text-2xl font-serif font-bold">L'Elégance</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating your lifestyle through curated fashion and beauty essentials. Modern, elegant, and trusted.
            </p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-white transition-colors text-sm">FB</button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">IG</button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">TW</button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate(Page.Category)} className="hover:text-primary transition-colors">New Arrivals</button></li>
              <li><button onClick={() => onNavigate(Page.Fashion)} className="hover:text-primary transition-colors">Fashion</button></li>
              <li><button onClick={() => onNavigate(Page.Beauty)} className="hover:text-primary transition-colors">Beauty</button></li>
              <li><button onClick={() => onNavigate(Page.Sale)} className="hover:text-primary transition-colors">Sale</button></li>
              <li><button onClick={() => onNavigate(Page.Journal)} className="hover:text-primary transition-colors">Journal</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><button onClick={() => onNavigate(Page.Contact)} className="hover:text-primary transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate(Page.Shipping)} className="hover:text-primary transition-colors">Shipping & Returns</button></li>
              <li><button onClick={() => onNavigate(Page.SizeGuide)} className="hover:text-primary transition-colors">Size Guide</button></li>
              <li><button onClick={() => onNavigate(Page.FAQ)} className="hover:text-primary transition-colors">FAQ</button></li>
              <li><button onClick={() => onNavigate(Page.Privacy)} className="hover:text-primary transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Stay in the Know</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and style updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input className="bg-white/10 border-none rounded-lg text-sm px-4 py-2.5 w-full text-white placeholder:text-gray-500 focus:ring-1 focus:ring-primary" placeholder="Your email" type="email"/>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 rounded-lg flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2025 L'Elégance Store. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="h-6 w-10 bg-white/10 rounded"></div>
            <div className="h-6 w-10 bg-white/10 rounded"></div>
            <div className="h-6 w-10 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
