
import React, { useState } from 'react';
import { Page, User } from '../types';
import AccountSidebar from '../components/AccountSidebar';

interface UserOrdersProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const UserOrders: React.FC<UserOrdersProps> = ({ user, onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('All Orders');

  const orders = [
    {
      id: 'ORD-249-1102',
      date: 'October 24, 2023',
      amount: 145.00,
      status: 'Processing',
      expected: 'Oct 28',
      progress: 40,
      items: [
        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE4uSZAvBFO_dEiX4qa7ufzwrtD2JdEcY5hTF4L_NxQfdHaOBFPHicpFsQftbHgkNQXm91tIfkrAsKKLh-4rfeUllkQlwUT5j0BftjH-R0p4i3U_cv-E-9QCk5u715n5m1RuZRqgC-3QzKHVLXCaQgSM85OiWxKcDJs7qnA9NKUvWvdkEo7pG02e8z1Y76nvmbx1IHLJuO9Win9AEZ5FB43rTaJsl5C422_RycY2UfN7fAq7QTmNbNwEftCS_EvmzOnmRhTGUbW3HU', qty: 1 },
        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPoCUTXDk16pllYG0bdhec5a3VTt7PCxLSJIVd0jDagnknhGeLqlWF2h1UlJfEeb5MRkLGwdtK4SHaRM-XwVexFC5dYIuHv5_tFKuuZcZWY_vWmO80AZ4ce74L9aDvJFCf4ZrFfDSDJ3-lC-htuWDmgJh9FJg9MmkYom4mZ_yf2pZkKPmLnnS6JpVxITHZim0epkMe5adLvsk7FtDJ5I42wX79n0qSj9834OwR_NFCTcuZmnRAlJXjKQqXP-OP1z5pZsWg2CcGVSxF', qty: 1 }
      ]
    },
    {
      id: 'ORD-248-0092',
      date: 'September 12, 2023',
      amount: 320.50,
      status: 'Delivered',
      deliveredOn: 'Sep 15',
      items: [
        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAiyvjV_U0sbXSsj1H_cthZ-mRrKEWPA7nqwlhvytGk5XkUcfuHQ6_IpTYKDUKGPq_tNjCeD-W05Sq25mhj4xhWL0B-bkVxUCxDuZvZXxjF6q1qv2oEs8oQx43_R_PfmyS4QKGqIyzR9MZf9k7AVcEcF6AkgNnBfNUcPXySq6eXVZGU1Zyx6GQEezVdFsN0F4T090pth4RqGqDsdSJfeJdpIktE1Ui4eeYug_-LWYkDUNbl3vBj6Q29P3cFut2TsIIlbMy4CTjgu2x', qty: 1 },
        { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYSyKz2y8VotnCPOTMIlZ5DVd_jfFTndMLf87epwJAexDcgnHH-CIDQeCKlT_aMoxOTZv88vani0vqDobsTviYapWVnDUZygDYzzraUfto3tGzAdBX-nAebvPpY0Pxs0iZtUqPpyCHuAwgET1E0AXM01lfabfbEY3000xme8tDWIaapntSVjkqkYjw4P-7GjsZlR0D0p9urX34PhJwr1AAyJGNqFT3P1C5pnNa2ROY64SNqs5uFyVzQmE07b1jgyJXOI9znfSR7AP_', qty: 2 }
      ],
      extra: 1
    }
  ];

  return (
    <div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-background-light">
      <AccountSidebar user={user} currentPage={Page.Orders} onNavigate={onNavigate} onLogout={onLogout} />

      <main className="flex-1 flex flex-col h-full overflow-y-auto scroll-smooth animate-fadeIn">
        <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <header className="mb-10">
            <h2 className="text-4xl font-black tracking-tight text-fashion-black mb-2 font-serif">My Orders</h2>
            <p className="text-gray-500">View and track your past fashion & beauty hauls.</p>
          </header>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-fashion-nude p-2 mb-8 flex flex-wrap gap-2">
            {['All Orders', 'Processing', 'Shipped', 'Delivered', 'Returns'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab}
                {tab === 'Processing' && <span className="ml-2 text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">2</span>}
              </button>
            ))}
            <div className="flex-grow"></div>
            <div className="relative w-full sm:w-64 mt-2 sm:mt-0">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-[18px]">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400" placeholder="Search Order ID" />
            </div>
          </div>

          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-fashion-nude overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-background-alt px-6 py-4 border-b border-fashion-nude flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Placed</p>
                      <p className="text-sm font-bold">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Total</p>
                      <p className="text-sm font-bold">${order.amount.toFixed(2)}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Order #</p>
                      <p className="text-sm font-bold text-primary hover:underline cursor-pointer">{order.id}</p>
                    </div>
                  </div>
                  <button className="text-sm font-bold text-primary hover:underline underline-offset-4">View Invoice</button>
                </div>

                <div className="p-6 flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-2 mb-2">
                      {order.status === 'Delivered' && <span className="material-symbols-outlined text-green-500 icon-filled text-[20px]">check_circle</span>}
                      <h4 className="text-xl font-bold font-serif">{order.status}</h4>
                    </div>
                    <p className="text-sm text-gray-500">
                      {order.status === 'Processing' ? `Expected arrival: ${order.expected}` : `Delivered on ${order.deliveredOn}`}
                    </p>
                    {order.status === 'Processing' && (
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${order.progress}%` }}></div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex gap-4 overflow-x-auto pb-2">
                    {order.items.map((item, i) => (
                      <div key={i} className="relative group cursor-pointer shrink-0">
                        <div className="size-24 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                          <img src={item.img} className="size-full object-cover transition-transform group-hover:scale-110" alt="Product" />
                        </div>
                        <span className="absolute -top-2 -right-2 bg-fashion-dark text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">x{item.qty}</span>
                      </div>
                    ))}
                    {order.extra && (
                       <div className="size-24 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 bg-gray-50">
                          +{order.extra} more
                       </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      {order.status === 'Processing' ? 'Track Order' : 'Buy Again'}
                    </button>
                    <button className="bg-white border border-gray-200 text-fashion-black hover:bg-gray-50 px-6 py-2.5 rounded-lg text-sm font-bold transition-all">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-12 gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-fashion-nude hover:bg-fashion-nude disabled:opacity-30">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg hover:bg-fashion-nude font-bold">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-fashion-nude hover:bg-fashion-nude">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserOrders;
