
import React from 'react';

const AdminReports: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 animate-fadeIn pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm">
        <a className="text-[#974e67] font-medium hover:text-primary hover:underline" href="#">Home</a>
        <span className="text-[#974e67]/50">/</span>
        <span className="text-[#1b0e12] font-medium">Advanced Reports</span>
      </nav>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 items-start md:items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-text-main text-3xl md:text-4xl font-black tracking-tight">Advanced Analytics</h1>
          <p className="text-text-muted text-base font-normal">Strategic insights for Fashion & Beauty performance.</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md transition-all">
          <span className="material-symbols-outlined text-lg">download</span>
          <span>Export Full Report</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", val: "$1.2M", trend: "+8.5%", icon: "payments" },
          { label: "Avg Order (Combo)", val: "$125.00", trend: "+12%", icon: "shopping_bag" },
          { label: "Cross-Sell Rate", val: "24%", trend: "+3.2%", icon: "compare_arrows" },
          { label: "Cosmetic Re-purchase", val: "45%", trend: "High Loyalty", icon: "favorite" }
        ].map((s, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#f3e7eb] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-lg">{s.icon}</span>
            </div>
            <p className="text-text-main text-3xl font-bold tracking-tight mt-1">{s.val}</p>
            <div className={`flex items-center gap-1 text-xs font-bold w-fit px-2 py-0.5 rounded-full mt-1 ${s.trend.includes('+') ? 'text-green-600 bg-green-50' : 'text-primary bg-primary/10'}`}>
              {s.trend.includes('+') && <span className="material-symbols-outlined text-sm">trending_up</span>}
              <span>{s.trend} {s.trend.includes('+') ? 'vs last mo' : ''}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart: Fashion vs Beauty Trends */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-[#f3e7eb] shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-lg font-bold text-text-main">Revenue Trends</h3>
              <p className="text-sm text-gray-500">Fashion vs. Cosmetic Sales performance</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <span className="size-3 rounded-full bg-fashion-dark"></span>
                <span className="text-gray-600">Fashion</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-gray-600">Beauty</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full flex items-end justify-between gap-2 px-2 pb-4 border-b border-gray-100 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-gray-50"></div>)}
            </div>
            <div className="w-full flex justify-around items-end h-full z-10 gap-4">
              {[40, 55, 45, 65, 70, 60, 80, 85].map((h, i) => (
                <div key={i} className="flex gap-1 h-full items-end group w-10">
                  <div className="w-1/2 bg-fashion-dark rounded-t-sm transition-all group-hover:bg-primary/50" style={{ height: `${h}%` }}></div>
                  <div className="w-1/2 bg-primary rounded-t-sm transition-all group-hover:bg-fashion-dark/50" style={{ height: `${h * 0.7}%` }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-4 px-4 font-black uppercase tracking-widest">
            <span>Sep W1</span><span>Sep W2</span><span>Sep W3</span><span>Sep W4</span>
            <span>Oct W1</span><span>Oct W2</span><span>Oct W3</span><span>Oct W4</span>
          </div>
        </div>

        {/* VIP Segmentation Widget */}
        <div className="bg-white p-8 rounded-xl border border-[#f3e7eb] shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-text-main mb-1">VIP Contribution</h3>
          <p className="text-sm text-gray-500 mb-10">Revenue Share by Segment</p>
          <div className="flex-1 flex flex-col justify-center items-center relative">
            <div className="relative size-48">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-text-main">60%</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">VIP Sales</span>
              </div>
            </div>
            <div className="w-full mt-10 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-primary"></div>
                  <span className="text-gray-600 font-bold">VIP Members</span>
                </div>
                <span className="font-black text-text-main">$720k</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-gray-200"></div>
                  <span className="text-gray-600 font-bold">Standard Users</span>
                </div>
                <span className="font-black text-text-main">$480k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Combo Performance Table */}
      <div className="bg-white rounded-xl border border-[#f3e7eb] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#f3e7eb] flex justify-between items-center bg-[#fcf8f9]">
          <div>
            <h3 className="text-lg font-bold text-text-main">Top Performing Bundles</h3>
            <p className="text-sm text-gray-500">Highest AOV & Conversion Combinations</p>
          </div>
          <button className="text-primary text-sm font-bold hover:underline">View Comprehensive List</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#fcf8f9]">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Combo</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Category Mix</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">AOV</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Sold</th>
                <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Conv. Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3e7eb]">
              {[
                { name: "Summer Dress + Nude Lip", id: "#BDL-209", mix: "Fashion & Beauty", aov: "$145.00", sold: 432, conv: "8.4%", colors: ["#D2B48C", "#e8306e"] },
                { name: "Blazer + Night Serum", id: "#BDL-401", mix: "Fashion & Beauty", aov: "$210.00", sold: 215, conv: "6.2%", colors: ["#1b0e12", "#f3e7eb"] },
                { name: "Full Skincare Routine", id: "#BDL-105", mix: "Beauty Only", aov: "$85.00", sold: 890, conv: "12.5%", colors: ["#f3e7eb", "#974e67"] }
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-[#fcfbf9] transition-colors">
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3 overflow-hidden">
                        {row.colors.map((c, ci) => (
                          <div key={ci} className="size-10 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: c }}></div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">{row.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{row.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${row.mix === 'Beauty Only' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}>
                      {row.mix}
                    </span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-right font-black text-text-main">{row.aov}</td>
                  <td className="px-6 py-6 whitespace-nowrap text-right text-gray-500 font-bold">{row.sold}</td>
                  <td className="px-6 py-6 whitespace-nowrap text-right">
                    <span className="text-green-600 font-black">{row.conv}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="mt-12 text-center text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] pb-6">
        © 2025 L'Elégance Intelligence Unit. v2.4.0
      </footer>
    </div>
  );
};

export default AdminReports;
