
import React, { useState } from 'react';
import { Page, AdminTab, Product } from '../types';
import { AdminIcon } from '../constants';
import AdminProducts from './AdminProducts';
import AdminOrders from './AdminOrders';
import AdminMarketing from './AdminMarketing';
import AdminReports from './AdminReports';

interface AdminProps {
  onNavigate: (page: Page) => void;
  onAddProduct: (p: Product) => void;
  saleTargetDate: string;
  onUpdateSaleDate: (date: string) => void;
}

const AdminPage: React.FC<AdminProps> = ({ onNavigate, onAddProduct, saleTargetDate, onUpdateSaleDate }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>(AdminTab.Dashboard);

  const stats = [
    { label: "Total Revenue", val: "$125,430", trend: "+12.5%", icon: "payments" },
    { label: "Orders Today", val: "142", trend: "+5.2%", icon: "shopping_cart" },
    { label: "Active Customers", val: "1,205", trend: "+3.1%", icon: "person_add" },
    { label: "Net Profit", val: "$45,200", trend: "+8.4%", icon: "trending_up" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#e7d0d7] flex flex-col p-6 gap-8 z-20">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate(Page.Home)}
        >
          <AdminIcon />
          <div>
            <h1 className="text-base font-bold uppercase tracking-tight">L'Allure Admin</h1>
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider">Fashion & Beauty</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { id: AdminTab.Dashboard, label: "Dashboard", icon: "dashboard" },
            { id: AdminTab.Orders, label: "Order Management", icon: "shopping_bag" },
            { id: AdminTab.Products, label: "Products Catalog", icon: "checkroom" },
            { id: AdminTab.Marketing, label: "Marketing Hub", icon: "campaign" },
            { id: AdminTab.Reports, label: "Analytics Reports", icon: "bar_chart" },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${activeTab === item.id ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <span className={`material-symbols-outlined ${activeTab === item.id ? 'icon-filled' : ''}`}>{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-[#f3e7eb]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdgScBMjKmbau524K-do1qOWZmCYVFJx7ig_Vru9nOsGOOGaSe_-LbL_qaCOd1Dt7vB-SXfgtl3ximhuP9d7LYRrOCdYfLGTMK18tcHHjW0J2PMaWLBDuoTlg41QwODSRrcWJrzuboTLPXqWfUJwj9yb--px3SYZmHaq3ETts0zwi8nr2h9jhrzmENGeR5U2Yk1v5Heb7ayS4Uy5UpjyYzhTpCbPDAMursutDfzLB2hFlGZ9nvXS7SwZMwfOpunsL1nNZjMGhv4b0M")' }}></div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-[#1b0e12] text-sm font-bold truncate">Sarah Jenkins</p>
              <p className="text-primary text-[10px] font-bold uppercase">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-y-auto p-8 gap-8 bg-[#fcf8f9]">
        {activeTab === AdminTab.Dashboard && (
          <>
            <header className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Dashboard Overview</h2>
                <p className="text-text-muted text-sm mt-1">Strategic insights for Fashion & Beauty performance.</p>
              </div>
              <button className="bg-primary text-white p-2.5 rounded-lg shadow-md hover:bg-primary-hover transition-colors">
                <span className="material-symbols-outlined">download</span>
              </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.label} className="bg-white p-5 rounded-xl border border-[#e7d0d7] shadow-sm">
                  <div className="flex justify-between mb-4">
                    <div className="bg-fashion-dark p-2 rounded-lg text-white"><span className="material-symbols-outlined">{s.icon}</span></div>
                    <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">{s.trend}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{s.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{s.val}</h3>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl border border-[#e7d0d7] p-6 shadow-sm">
                <h3 className="font-bold mb-6">Revenue Analytics</h3>
                <div className="h-64 flex items-end justify-around gap-4 px-2">
                   {[40, 55, 45, 65, 70, 60, 80, 85].map((h, i) => (
                      <div key={i} className="flex gap-1 items-end w-full">
                         <div className="bg-fashion-dark w-1/2 rounded-t" style={{ height: `${h}%` }}></div>
                         <div className="bg-primary w-1/2 rounded-t" style={{ height: `${h * 0.7}%` }}></div>
                      </div>
                   ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-4 px-4 uppercase font-bold">
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#e7d0d7] p-5 shadow-sm flex flex-col">
                <h3 className="text-base font-bold flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">warning</span>
                  Cosmetic Alerts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 bg-orange-50">
                    <div className="size-10 bg-gray-200 rounded"></div>
                    <div className="flex-1"><p className="text-sm font-bold">Matte Lipstick</p><p className="text-[10px] text-orange-600">Low Stock: 5 left</p></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === AdminTab.Products && (
          <AdminProducts onAddProduct={onAddProduct} />
        )}

        {activeTab === AdminTab.Marketing && (
          <AdminMarketing saleTargetDate={saleTargetDate} onUpdateSaleDate={onUpdateSaleDate} />
        )}

        {activeTab === AdminTab.Orders && ( <AdminOrders /> )}
        {activeTab === AdminTab.Reports && ( <AdminReports /> )}
      </main>
    </div>
  );
};

export default AdminPage;
