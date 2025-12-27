
import React from 'react';
import { Page, User } from '../types';

interface RegisterProps {
  onNavigate: (page: Page) => void;
  // Added onRegister to match App.tsx requirements
  onRegister: (user: User) => void;
}

const RegisterPage: React.FC<RegisterProps> = ({ onNavigate, onRegister }) => {
  // Mock user data for successful registration
  const MOCK_USER: User = {
    name: "New Member",
    tier: "Silver Member",
    points: 0,
    maxPoints: 100,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlvGiylNkndNrACE0hmBVsB7jfRsTTFYk9CAPYBdPFBzEgU8kNUdxnYnU9jlh-eDtc9SRqGlDzXppPRwj_dqY5A7rDT0aI4PXTsxSiSBVkAn8Uv3BoUK-Z7Vq9tYFArohmKZpDkbeJBxJjew9LdGF8fm99oUYDLYG3deTIoG6flFmCCjnHvEPDNHJ9oeTkE1bhWgAkAO2zv6mOpo0jG5dS2g41C-tYs0t1AyDPvEYbOWdG6Yt4AyfXJnii0DGCwiLI72Pp8UrnGms"
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-fashion-black dark:text-gray-100 min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f4f0f2] dark:border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => onNavigate(Page.Home)} className="flex items-center gap-4 cursor-pointer">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">diamond</span>
              </div>
              <h2 className="text-fashion-black dark:text-white text-xl font-bold tracking-tight">LUMIÈRE</h2>
            </button>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => onNavigate(Page.Category)} className="text-sm font-medium hover:text-primary transition-colors">Shop</button>
              <button onClick={() => onNavigate(Page.Category)} className="text-sm font-medium hover:text-primary transition-colors">Collections</button>
              <button className="text-sm font-medium hover:text-primary transition-colors">Editorial</button>
              <button className="text-sm font-medium hover:text-primary transition-colors">About</button>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden lg:flex items-center bg-background-light dark:bg-white/5 rounded-full px-4 h-10 w-64 border border-transparent focus-within:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 text-fashion-black dark:text-white placeholder-gray-400" placeholder="Search products..."/>
              </div>
              <button onClick={() => onNavigate(Page.Cart)} className="p-2 hover:bg-background-light dark:hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </button>
              <button onClick={() => onNavigate(Page.Login)} className="p-2 hover:bg-background-light dark:hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[24px]">person</span>
              </button>
              <button className="md:hidden p-2 hover:bg-background-light dark:hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col lg:flex-row w-full h-full min-h-[calc(100vh-80px)]">
        {/* Left Side: Editorial Image */}
        <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-[2000ms]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxXEIe9tG0P3pXiWEti1vVIHtZkdFB2vedK1tBSKcOAEvrWdjUSYZ1kzkCgz274kaAhN-kuFdNVGECn0v-AAjyhN4i85bQ2L8olFKe1MWMhklKxZcIUBcKlIl1scJubiBqO6nZx94fuE1hYF1ZRjtR07Hm7ylvBdDW6nD4G2AJ8CojN7T4lEKx_47a85nkUhBrCyGcZQjTLMBPQX5bOyMgLADRL6Ls5z5xpfJC2mU_EJHewharsEkcrhSTkjcmNFi9f6HFqBrQCM1v')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
            <blockquote className="text-white max-w-md">
              <p className="font-serif text-3xl italic mb-4 leading-relaxed">"Elegance is the only beauty that never fades."</p>
              <cite className="not-italic text-sm font-medium tracking-widest uppercase opacity-80">— Audrey Hepburn</cite>
            </blockquote>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-20 bg-white dark:bg-[#1a1a1a]">
          <div className="w-full max-w-lg space-y-8">
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-fashion-black dark:text-white tracking-tight font-serif">Join Our Community</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Create an account to discover your signature style today.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                <img alt="Google" className="w-5 h-5 group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcPFlqPRuYMAf4ntWBN5E8F9lD8DTjf1rTP--HayXD52AR-oLSx72tacPmaNlTqm0P1uFPhXxHUjABvF0S5prdAUrmVUDVEsvqrQ-grM88Iqfcbw9hGvk3SdhwDoxRRyxv6v6F1QsDOdpwt-et9OAWsQ9a0UbLCN-1fMlYuw1Ck0L_Y9jJAAxhcVtGodOEWvRz96sPrExSpOypTZl-X4uNDW1fcY75c0fRZflzJzWOQY2TTAzzRyL7KN27fG7MAvGPHITgle5-ObRx"/>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                <img alt="Facebook" className="w-5 h-5 group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUTEd5SMiAQYnRR_3kpp36k3gTVJJBx9lMydZs9qycCBXXe6rZK5DQjFUxiGZOLBhONal9mVnWaFkmk6eYL4Ph-vSk8kg8TqFVisKoDIH5HSQzrqdaUdkxtkg_5gnUOqR9nc62iWGa_s_FP-LY1wyviyNK_bwG-s-vwVlnTmsThf6ODEBdm2wkmS-isywDDyBWUr2XKK7my9ydGPO5v1GDmlV68R1F2OXgk748mSMa9FNpWEbi9jEiJkFB715J9EbUPR57zKmOHoOy"/>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Facebook</span>
              </button>
            </div>
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium uppercase tracking-wider">Or register with email</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            {/* Fix: Call onRegister with mock user instead of onNavigate */}
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onRegister(MOCK_USER); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="firstName">First Name</label>
                  <input className="block w-full h-12 px-4 rounded-lg bg-background-light dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 focus:bg-white dark:focus:bg-black transition-colors text-fashion-black dark:text-white placeholder-gray-400" id="firstName" placeholder="Jane" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="lastName">Last Name</label>
                  <input className="block w-full h-12 px-4 rounded-lg bg-background-light dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 focus:bg-white dark:focus:bg-black transition-colors text-fashion-black dark:text-white placeholder-gray-400" id="lastName" placeholder="Doe" type="text"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <input className="block w-full h-12 pl-10 pr-4 rounded-lg bg-background-light dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 focus:bg-white dark:focus:bg-black transition-colors text-fashion-black dark:text-white placeholder-gray-400" id="email" placeholder="jane.doe@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input className="block w-full h-12 pl-10 pr-4 rounded-lg bg-background-light dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 focus:bg-white dark:focus:bg-black transition-colors text-fashion-black dark:text-white placeholder-gray-400" id="password" placeholder="••••••••" type="password"/>
                </div>
                <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters long.</p>
              </div>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-white/5" type="checkbox"/>
                  <span className="text-sm text-gray-600 dark:text-gray-400 leading-tight group-hover:text-fashion-black dark:group-hover:text-gray-200 transition-colors">
                    I agree to the <button type="button" className="text-primary hover:underline underline-offset-2">Terms of Service</button> and <button type="button" className="text-primary hover:underline underline-offset-2">Privacy Policy</button>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-white/5" type="checkbox"/>
                  <span className="text-sm text-gray-600 dark:text-gray-400 leading-tight group-hover:text-fashion-black dark:group-hover:text-gray-200 transition-colors">
                    Subscribe to our newsletter for lifestyle updates and exclusive offers.
                  </span>
                </label>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/30 transform active:scale-[0.99]">
                Create Account
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </form>
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account? 
                <button onClick={() => onNavigate(Page.Login)} className="ml-1 text-primary font-semibold hover:underline underline-offset-4">Log in</button>
              </p>
            </div>
            <div className="pt-8 border-t border-gray-100 dark:border-white/5">
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-2" title="Secure Payment">
                  <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                  <span className="text-xs font-medium uppercase tracking-wide">Secure Data</span>
                </div>
                <div className="flex items-center gap-2" title="Authentic Products">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="text-xs font-medium uppercase tracking-wide">100% Authentic</span>
                </div>
                <div className="flex items-center gap-2" title="Support">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  <span className="text-xs font-medium uppercase tracking-wide">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
