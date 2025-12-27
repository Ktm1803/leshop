
import React from 'react';

const AdminOrders: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn pb-10">
      {/* Breadcrumbs */}
      <nav className="flex gap-2 text-sm">
        <a className="text-[#974e67] font-medium hover:underline" href="#">Home</a>
        <span className="text-[#d1d1d1]">/</span>
        <span className="text-[#1b0e12] font-medium">Order Management</span>
      </nav>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#1b0e12] text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Orders</h1>
          <p className="text-[#974e67] text-base font-normal">Manage fulfillment across Fashion & Beauty inventories.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-[#e7d0d7] px-4 py-2 rounded-lg text-sm font-bold text-[#1b0e12] hover:bg-gray-50 shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Export CSV
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-hover shadow-md shadow-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Order
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[#f3e7eb] shadow-sm flex flex-col gap-1">
          <p className="text-[#6b6b6b] text-sm font-medium">Total Orders</p>
          <div className="flex items-end justify-between">
            <p className="text-[#1b0e12] text-2xl font-bold">1,248</p>
            <span className="text-[#078859] text-xs font-bold bg-[#e6f4ed] px-2 py-1 rounded-full">+12%</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-[#f3e7eb] shadow-sm flex flex-col gap-1">
          <p className="text-[#6b6b6b] text-sm font-medium">Pending Processing</p>
          <div className="flex items-end justify-between">
            <p className="text-[#1b0e12] text-2xl font-bold">86</p>
            <span className="text-[#e75608] text-xs font-bold bg-[#fff0e6] px-2 py-1 rounded-full">Requires Action</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-[#f3e7eb] shadow-sm flex flex-col gap-1">
          <p className="text-[#6b6b6b] text-sm font-medium">Beauty Warranties</p>
          <div className="flex items-end justify-between">
            <p className="text-[#1b0e12] text-2xl font-bold">42</p>
            <span className="text-[#974e67] text-xs font-bold bg-[#fceef3] px-2 py-1 rounded-full">Cosmetics</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-[#f3e7eb] shadow-sm flex flex-col gap-1">
          <p className="text-[#6b6b6b] text-sm font-medium">Returns</p>
          <div className="flex items-end justify-between">
            <p className="text-[#1b0e12] text-2xl font-bold">12</p>
            <span className="text-[#1b0e12] text-xs font-bold bg-[#f3e7eb] px-2 py-1 rounded-full">-2%</span>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-2 rounded-xl border border-[#f3e7eb] shadow-sm flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-1 px-2 no-scrollbar">
          <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold text-sm whitespace-nowrap">All Orders</button>
          <button className="px-4 py-2 rounded-lg hover:bg-gray-50 text-[#6b6b6b] font-medium text-sm whitespace-nowrap transition-colors">Fashion</button>
          <button className="px-4 py-2 rounded-lg hover:bg-gray-50 text-[#6b6b6b] font-medium text-sm whitespace-nowrap transition-colors">Beauty</button>
          <button className="px-4 py-2 rounded-lg hover:bg-gray-50 text-[#6b6b6b] font-medium text-sm whitespace-nowrap transition-colors">Mixed Cart</button>
        </div>
        <div className="flex gap-3 px-2 flex-wrap sm:flex-nowrap">
          <div className="relative w-full sm:w-auto">
            <select className="appearance-none h-10 pl-3 pr-8 rounded-lg border border-[#e5e7eb] bg-white text-sm text-[#1b0e12] font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary w-full sm:w-40">
              <option>Status: All</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-2.5 text-gray-500 pointer-events-none text-[20px]">expand_more</span>
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="appearance-none h-10 pl-3 pr-8 rounded-lg border border-[#e5e7eb] bg-white text-sm text-[#1b0e12] font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary w-full sm:w-48">
              <option>Warehouse: All</option>
              <option>Main (Fashion)</option>
              <option>Climate Store (Beauty)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-2.5 text-gray-500 pointer-events-none text-[20px]">expand_more</span>
          </div>
          <button className="h-10 px-4 rounded-lg border border-[#e5e7eb] hover:bg-gray-50 text-[#1b0e12] font-medium text-sm flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            More
          </button>
        </div>
      </div>

      {/* Main Order Table */}
      <div className="bg-white border border-[#f3e7eb] rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fcf8f9] border-b border-[#f3e7eb]">
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Order ID</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Date</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Customer</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Type</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Payment</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">Status</th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#6b6b6b] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3e7eb]">
              {/* Row 1: Mixed Order (High Priority) */}
              <tr className="group hover:bg-[#fafaf9] transition-colors border-l-4 border-orange-500">
                <td className="py-4 px-6 align-top">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-[#1b0e12]">#ORD-7392</p>
                    <span className="material-symbols-outlined text-orange-500 text-[18px]" title="Needs Attention">warning</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-[#1b0e12] align-top">Oct 24, 2023<br /><span className="text-[#974e67] text-xs">10:42 AM</span></td>
                <td className="py-4 px-6 align-top">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByHw4nEgz1p0qM_1RsV7TgC5RIXaXSufUubY6zUU6fqUg1SoXwCKLxdxDaPHy3XzMb-Y-V3jpzdCk07JYQHhI96QH7fftazrKcDeEGNJixNPkcdDF42kXcbdZjGMuBvSsrwGcp-hwx_NHc0eD-8gD4X1-6JBVv5r_la7pP5W5QCQJ4wwIWdDZrxJxiWgqbuo7BOe0Xy1kXJqjs4FJZ1JBy6Xy1laEVgjDPIWSUTsrXb1MbzqrrWREoNMLhm19ZOY7mrFNloOih1mTr")' }}></div>
                    <div>
                      <p className="text-sm font-medium text-[#1b0e12]">Elena Gilbert</p>
                      <p className="text-xs text-[#6b6b6b]">elena@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                    <span className="material-symbols-outlined text-[14px]">layers</span>
                    Mixed Cart
                  </span>
                </td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#e6f4ed] text-[#078859]">
                    Paid
                  </span>
                </td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                    Processing
                  </span>
                </td>
                <td className="py-4 px-6 align-top text-right">
                  <button className="text-[#6b6b6b] hover:text-[#1b0e12] p-1 rounded transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                </td>
              </tr>
              {/* Sub-row for Mixed Order Details */}
              <tr className="bg-[#fcfcfc] shadow-inner">
                <td className="px-6 py-4" colSpan={7}>
                  <div className="flex flex-col gap-3 pl-8 border-l-2 border-primary/30">
                    <p className="text-xs font-bold uppercase text-[#974e67] tracking-wider mb-1">Split Fulfillment Required</p>
                    {/* Sub-Shipment 1: Fashion */}
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#e5e7eb] gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-stone-100 rounded text-stone-600">
                          <span className="material-symbols-outlined text-[20px]">checkroom</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#1b0e12]">Package A: Fashion Items (2)</span>
                          <span className="text-xs text-[#6b6b6b]">Location: Main Warehouse</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-600 font-medium">Ready to Pack</span>
                        <button className="text-xs font-bold text-[#1b0e12] hover:underline px-3 py-1.5 border border-[#e5e7eb] rounded bg-white hover:bg-gray-50 transition-all">Print Label</button>
                      </div>
                    </div>
                    {/* Sub-Shipment 2: Beauty */}
                    <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#e5e7eb] gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-50 rounded text-pink-600">
                          <span className="material-symbols-outlined text-[20px]">spa</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#1b0e12]">Package B: Beauty Items (3)</span>
                          <span className="text-xs text-[#6b6b6b]">Location: Climate Controlled Store</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-600 font-medium">Checking Stock</span>
                        <button className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 border border-primary/30 rounded bg-white transition-colors">
                          <span className="material-symbols-outlined text-[14px]">card_membership</span>
                          Warranty Card
                        </button>
                        <button className="text-xs font-bold text-[#1b0e12] hover:underline px-3 py-1.5 border border-[#e5e7eb] rounded bg-white hover:bg-gray-50 transition-all">Print Label</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* Row 2: Beauty Order */}
              <tr className="group hover:bg-[#fafaf9] transition-colors">
                <td className="py-4 px-6 align-middle">
                  <p className="font-bold text-[#1b0e12]">#ORD-7391</p>
                </td>
                <td className="py-4 px-6 text-sm text-[#1b0e12] align-middle">Oct 23, 2023</td>
                <td className="py-4 px-6 align-middle">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGShp8UmdegCfC9LJSycy-2EmC0Wy1FZcDRNOOYQj8Zc62aD4zDUX29SGxPg2l4atSHEh2Uk_hugT3EdKtdF1Wjbh-Q8tK066IJwNUg0OUmfiIQ-ihgjpwaNlhhNegqDxWejjZsnDKeN7O5vKzKmJyW3VyC27zn-ECVNIkRSziuArM2JB0Ut7U4a1s46TgEEhVdBdA6uN5ISxgyG6tOkFo-X1tOCwB_NqwPtQCFvnEFWqNk4RW2klnISVu2Ii2AUAHpR5U92pwb5Bk")' }}></div>
                    <div>
                      <p className="text-sm font-medium text-[#1b0e12]">Michael Chen</p>
                      <p className="text-xs text-[#6b6b6b]">michael.c@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-800 border border-pink-200">
                    <span className="material-symbols-outlined text-[14px]">spa</span>
                    Beauty
                  </span>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#e6f4ed] text-[#078859]">
                    Paid
                  </span>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    Shipped
                  </span>
                </td>
                <td className="py-4 px-6 align-middle text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-primary/5 px-2 py-1.5 border border-primary/30 rounded bg-white transition-colors" title="Print Warranty">
                      <span className="material-symbols-outlined text-[16px]">card_membership</span>
                    </button>
                    <button className="text-[#1b0e12] hover:bg-gray-100 p-1.5 rounded border border-transparent hover:border-gray-200 transition-colors" title="Print Invoice">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3: Fashion Order */}
              <tr className="group hover:bg-[#fafaf9] transition-colors">
                <td className="py-4 px-6 align-middle">
                  <p className="font-bold text-[#1b0e12]">#ORD-7390</p>
                </td>
                <td className="py-4 px-6 text-sm text-[#1b0e12] align-middle">Oct 23, 2023</td>
                <td className="py-4 px-6 align-middle">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">JS</div>
                    <div>
                      <p className="text-sm font-medium text-[#1b0e12]">Jessica Smith</p>
                      <p className="text-xs text-[#6b6b6b]">jess.smith@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                    <span className="material-symbols-outlined text-[14px]">checkroom</span>
                    Fashion
                  </span>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#fcf8f9] text-[#974e67] border border-[#f3e7eb]">
                    Pending
                  </span>
                </td>
                <td className="py-4 px-6 align-middle">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                    Hold
                  </span>
                </td>
                <td className="py-4 px-6 align-middle text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-[#1b0e12] hover:bg-gray-100 p-1.5 rounded border border-transparent hover:border-gray-200 transition-colors" title="Print Invoice">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#f3e7eb] bg-white flex items-center justify-between">
          <span className="text-sm text-[#6b6b6b]">Showing 1-4 of 1,248 orders</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-[#e5e7eb] hover:bg-gray-50 text-sm font-medium text-[#1b0e12] disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded bg-primary text-white text-sm font-medium hover:bg-primary-hover">1</button>
            <button className="px-3 py-1 rounded border border-[#e5e7eb] hover:bg-gray-50 text-sm font-medium text-[#1b0e12]">2</button>
            <button className="px-3 py-1 rounded border border-[#e5e7eb] hover:bg-gray-50 text-sm font-medium text-[#1b0e12]">3</button>
            <button className="px-3 py-1 rounded border border-[#e5e7eb] hover:bg-gray-50 text-sm font-medium text-[#1b0e12]">Next</button>
          </div>
        </div>
      </div>
      <footer className="mt-12 text-center text-[#974e67] text-sm pb-6">
        © 2025 L'Allure Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminOrders;
