
import React, { useState } from 'react';

interface AdminMarketingProps {
  saleTargetDate: string;
  onUpdateSaleDate: (date: string) => void;
}

const AdminMarketing: React.FC<AdminMarketingProps> = ({ saleTargetDate, onUpdateSaleDate }) => {
  const [activeSaleTab, setActiveSaleTab] = useState<'fashion' | 'beauty'>('fashion');
  const [tempDate, setTempDate] = useState(saleTargetDate.slice(0, 16)); // Format for datetime-local input

  const handleSaveSaleDate = () => {
    onUpdateSaleDate(new Date(tempDate).toISOString());
    alert("Global Sale Countdown updated!");
  };

  const stats = [
    { label: "Active Combos", val: "12", trend: "+2%", icon: "add_link" },
    { label: "Live Flash Sales", val: "2", trend: "0 ending soon", icon: "bolt" },
    { label: "Points Redeemed", val: "45,200", trend: "+12%", icon: "stars" },
    { label: "Conversion Rate", val: "3.8%", trend: "+0.5%", icon: "ads_click" },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fadeIn pb-20">
      <nav className="flex items-center gap-2 text-sm">
        <a className="text-[#974e67] font-medium hover:text-primary hover:underline" href="#">Home</a>
        <span className="text-[#974e67]/50">/</span>
        <span className="text-[#1b0e12] font-medium">Marketing Operations</span>
      </nav>

      {/* Sale Countdown Settings */}
      <div className="bg-white rounded-xl border border-primary/20 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <span className="material-symbols-outlined !text-3xl">timer</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1b0e12]">Global Sale Countdown</h2>
            <p className="text-sm text-gray-500 font-medium">Set the 'Limited Time Offer' target for the Sale page.</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <input 
            type="datetime-local" 
            value={tempDate}
            onChange={(e) => setTempDate(e.target.value)}
            className="rounded-lg border-[#f3e7eb] focus:ring-primary focus:border-primary text-sm font-bold p-2.5"
          />
          <button 
            onClick={handleSaveSaleDate}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
          >
            Update Timer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-1 p-5 rounded-xl bg-white border border-[#f3e7eb] shadow-sm">
            <p className="text-[#1b0e12] text-sm font-medium">{s.label}</p>
            <div className="flex items-end gap-2">
              <p className="text-[#1b0e12] text-2xl font-bold">{s.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Combo Creator */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[#1b0e12] text-xl font-bold">Dynamic Combo Creator</h2>
        </div>
        <div className="bg-white rounded-xl border border-[#f3e7eb] p-8 shadow-sm">
          <p className="text-sm text-gray-400 italic">Advanced marketing tools are currently in simulation mode.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminMarketing;
