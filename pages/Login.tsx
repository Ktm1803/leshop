
import React from 'react';
import { Page, User } from '../types';

interface LoginProps {
  onNavigate: (page: Page) => void;
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onNavigate, onLogin }) => {
  const MOCK_USER: User = {
    name: "Sophia Nguyen",
    tier: "Gold Member",
    points: 450,
    maxPoints: 600,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxlvGiylNkndNrACE0hmBVsB7jfRsTTFYk9CAPYBdPFBzEgU8kNUdxnYnU9jlh-eDtc9SRqGlDzXppPRwj_dqY5A7rDT0aI4PXTsxSiSBVkAn8Uv3BoUK-Z7Vq9tYFArohmKZpDkbeJBxJjew9LdGF8fm99oUYDLYG3deTIoG6flFmCCjnHvEPDNHJ9oeTkE1bhWgAkAO2zv6mOpo0jG5dS2g41C-tYs0t1AyDPvEYbOWdG6Yt4AyfXJnii0DGCwiLI72Pp8UrnGms"
  };

  const handleSocialLogin = () => {
    onLogin(MOCK_USER);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181113] dark:text-white overflow-x-hidden flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#f4f0f2] bg-white/95 dark:bg-[#181113]/95 backdrop-blur px-6 py-3 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button onClick={() => onNavigate(Page.Home)} className="flex items-center gap-3 text-[#181113] dark:text-white transition-opacity hover:opacity-80">
            <div className="flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>styler</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">L'Elégance Luxe</h2>
          </button>
          <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-8">
              <button onClick={() => onNavigate(Page.Category)} className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-white">Shop</button>
              <button onClick={() => onNavigate(Page.Category)} className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-white">Collections</button>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => onNavigate(Page.Register)}
                className="flex h-10 items-center justify-center rounded-lg bg-[#f4f0f2] px-4 text-sm font-bold text-[#181113] transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Register
              </button>
            </div>
          </nav>
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content: Split Screen Layout */}
      <main className="flex flex-1 flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Left Column: Visual/Hero Image */}
        <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-end p-12 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBsM1-twqZwIqiH013ESd1LaeTd-h8hXfiBZxM74dIqR3NHrpHCTkQpKlscBsQjc3Zhn02cm9-U391dVZI07aIHNn9gIBbW4oxhByPxh7bwwUiNoo7YAC9XFgRUDjzU2Sw_7fmxbWSJYBVErW2XqWqCmTc3ba0iHOpyLmJ4CQdcWZli0dpifXcTl_iagBL68GoGMmWM-2aDCpDnTa7z6xSKSF5dzjvV_cJbx7nugLj5dRnm4WIqqgiFO70RCsvU3mRhm54APNuy8zF')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 max-w-lg">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/30">
              New Collection 2025
            </div>
            <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
              Thanh lịch – Hiện đại
            </h1>
            <p className="text-lg font-normal text-white/90">
              Discover a curated lifestyle where beauty meets confidence. Join our community today.
            </p>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="flex w-full flex-col items-center justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-20 dark:bg-background-dark">
          <div className="w-full max-w-[420px]">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#181113] dark:text-white">Welcome Back</h1>
              <p className="text-base text-gray-500 dark:text-gray-400">Please enter your details or use social login to continue to checkout.</p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onLogin(MOCK_USER); }}>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#181113] dark:text-gray-200" htmlFor="email">Email or Username</label>
                <div className="relative">
                  <input className="form-input block h-12 w-full rounded-lg border-gray-200 bg-background-light px-4 text-base text-[#181113] placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white" id="email" placeholder="example@email.com" required type="email"/>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">mail</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#181113] dark:text-gray-200" htmlFor="password">Password</label>
                </div>
                <div className="relative">
                  <input className="form-input block h-12 w-full rounded-lg border-gray-200 bg-background-light px-4 text-base text-[#181113] placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white" id="password" placeholder="••••••••" required type="password"/>
                </div>
              </div>
              <button type="submit" className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md">
                Log In
              </button>
            </form>
            <div className="relative my-8 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <span className="relative bg-white px-4 text-xs font-medium uppercase text-gray-400 dark:bg-background-dark">Or log in with</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={handleSocialLogin} className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <img alt="Google" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnvnwWp5RTB5XptGw915KCNK822gqGpl6gj4vaP8Wl1GsbhjTAYzAc0wpt8VR3L5cXOb-17XrJ5ZnWHsMFw8hnGgtb2ALatjIHdzQIEJwdazGaf37O81y75p4NHJAzjJe0cxfO7AmJcbhvL2iKScM0X8mUtaPFP-3HfsbeyLrflXuXOk-UTthhSZiFPLHKhD8XNOWLZBVHgfmlEMh9NZGxx7lDK2HFphG59lw8ye4wpzmeKCjrHIfRq72jFlG_Av76X1X_BAbzz2j"/>
                Google
              </button>
              <button onClick={handleSocialLogin} className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <img alt="Facebook" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZUBvfuYUyywxejWhhlPTMWjuFfN5gjdlnz9yWcAU8KVa-8Kn4hYe8H7pm9HYz3zevPrIBjE7zCQFKdhqfcqK3NxeYazSvKEauNW4c7YajW4EnwFq848PdRjX67MoFiCDXWSM5Hw9bW3_RzCUqNi0C6bs6hT3SGPaL7L_njCTD48mzc0PYAq5ha0zvw5k6YNrL4bjNrE7dEwciaqk_g0If9G2qK6-Vsk8FaM0q6ERG7g0OZ3mnCwcz-aU3Y1eCTv-Foy7zFjREktKE"/>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
