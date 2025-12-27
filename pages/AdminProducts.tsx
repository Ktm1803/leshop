
import React, { useState } from 'react';
import { Product } from '../types';

interface AdminProductsProps {
  onAddProduct: (p: Product) => void;
}

const AdminProducts: React.FC<AdminProductsProps> = ({ onAddProduct }) => {
  const [productType, setProductType] = useState<'fashion' | 'beauty'>('fashion');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sku, setSku] = useState('');
  const [desc, setDesc] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!name || !price) {
      alert("Please enter at least a name and price.");
      return;
    }

    setIsSaving(true);
    
    const newProduct: Product = {
      id: `p-${Date.now()}`,
      name,
      price: parseFloat(price),
      category: productType,
      image: productType === 'fashion' 
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6B0TRMgqcZH-Sp-f3xEaCVWJ4HCrRPhWS1Xp8VWTLFUgVaNCj2Rjdi1r0ipSi895VMVmo36Qw0ehlX4ORWi28uhoGSjuIlUzRXEs-jHlE6PxAA6kKbP8L3gQjJo0Pr5p84iU3x933x2e3lhAm01WSyw4cNJIIi5GqT8WIhcu8tib73hkAN_yqTMeV38Y2jXq3rS4EA2vnMvS5r7Nt3N7t5zqBQ3zSTAvEu_5e5u8geh-6TldFQCcnCnXPeNdqaG9MOd52eWn7RbqG'
        : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgWC4LBMMTxKFsin3qaHNEWnAqCp2nZpEVpSVDd7IXzDIRMidCCJJ7p_sezNNnkELXyORos9uDIWCbOFInaGeJoL8Vvwi_63vtXTSs2dBJ_lgpIukJvFv-f4MbwAFiMmWhyzni8rbvZlHGHkMBXJC1HdRYdQ61zyth4Dc-Is1oJfhFiwS2JXgTC-Tev4fu354EzrPFQOpay05xLWutsdfGuC66OGcnN6pfyWL_QSOHw8gsFLa5fZ68x1Ue_brvoujXqJNGDVUoyic9',
      tag: 'New',
      description: desc
    };

    // Simulate network delay
    setTimeout(() => {
      onAddProduct(newProduct);
      setIsSaving(false);
      setName('');
      setPrice('');
      setSku('');
      setDesc('');
      alert("Product added successfully to storefront!");
    }, 800);
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
      <nav aria-label="Breadcrumb" className="flex mb-6">
        <ol className="flex items-center space-x-2">
          <li><button className="text-gray-400 hover:text-primary text-sm font-medium">Home</button></li>
          <li><span className="text-gray-300">/</span></li>
          <li><button className="text-gray-400 hover:text-primary text-sm font-medium">Products</button></li>
          <li><span className="text-gray-300">/</span></li>
          <li aria-current="page" className="text-primary text-sm font-medium">New Entry</li>
        </ol>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-brand-dark">New Product Entry</h1>
          <p className="mt-1 text-sm text-gray-500">Add new fashion or beauty products to the catalog.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm">Cancel</button>
          <button 
            disabled={isSaving}
            onClick={handleSave}
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-opacity-90 shadow-sm flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isSaving ? 'sync' : 'save'}
            </span>
            {isSaving ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setProductType('fashion')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${productType === 'fashion' ? 'bg-[#fcf8f9] text-primary shadow-sm ring-1 ring-primary/10' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <span className="material-symbols-outlined text-[20px]">checkroom</span>
                Fashion
              </button>
              <button 
                onClick={() => setProductType('beauty')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${productType === 'beauty' ? 'bg-[#fcf8f9] text-primary shadow-sm ring-1 ring-primary/10' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <span className="material-symbols-outlined text-[20px]">spa</span>
                Beauty
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-brand-dark mb-4">Product Essentials</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name</label>
                <input 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-300 bg-gray-50 text-brand-dark focus:border-primary focus:ring-primary/20 sm:text-sm" 
                  placeholder="e.g., Silk Summer Dress" 
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">SKU</label>
                  <input 
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="w-full rounded-lg border-gray-300 bg-gray-50 text-brand-dark focus:border-primary focus:ring-primary/20 sm:text-sm" 
                    placeholder="S-001-A" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Price</label>
                  <input 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-lg border-gray-300 bg-gray-50 text-brand-dark focus:border-primary focus:ring-primary/20 sm:text-sm" 
                    placeholder="0.00" 
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                <textarea 
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-brand-dark focus:ring-primary/20 sm:text-sm" 
                  placeholder="Tell customers about the materials, fit, or benefits..." 
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 opacity-60">
             <p className="text-sm italic text-gray-400">Additional advanced settings (Media, Variants, Publication) are pre-configured for this demo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
