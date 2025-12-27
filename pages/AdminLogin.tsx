
import React, { useState } from 'react';
import { Page } from '../types';
import { AdminIcon } from '../constants';

interface AdminLoginProps {
  onNavigate: (page: Page) => void;
  onAuth: (success: boolean) => void;
}

const AdminLoginPage: React.FC<AdminLoginProps> = ({ onNavigate, onAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Updated admin credentials as requested
    if (username === 'admin' && password === 'Ngocthanh@1') {
      onAuth(true);
    } else {
      setError('Invalid administrative credentials. Access denied.');
    }
  };

  return (
    <div className="min-h-screen bg-surface-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#211116] rounded-2xl border border-primary/20 p-8 shadow-2xl relative overflow-hidden">
        {/* Aesthetic Background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 bg-primary/10 p-4 rounded-full border border-primary/30">
            <span className="material-symbols-outlined text-primary text-4xl">admin_panel_settings</span>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">System Administration</h1>
          <p className="text-gray-400 text-sm mb-8 text-center">Authorized personnel only. Please verify your identity to access the management portal.</p>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Username</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-xl">person</span>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                  placeholder="Admin identifier"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Access Key</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-xl">vpn_key</span>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex items-center gap-3 text-red-400 text-sm animate-shake">
                <span className="material-symbols-outlined text-lg">error</span>
                <p>{error}</p>
              </div>
            )}

            <button 
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Verify & Enter
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </form>

          <button 
            onClick={() => onNavigate(Page.Home)}
            className="mt-8 text-gray-500 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Return to Storefront
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
        L'Elégance Secure Core v2.4.0
      </p>
    </div>
  );
};

export default AdminLoginPage;
