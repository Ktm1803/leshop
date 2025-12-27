
import React, { useState } from 'react';
import { Page, CartItem, PaymentMethod, User } from '../types';

interface CartProps {
  user: User | null;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onNavigate: (page: Page) => void;
  onRemove: (id: string, size?: string) => void;
  onUpdateUser: (data: Partial<User>) => void;
}

const CartPage: React.FC<CartProps> = ({ user, cart, onNavigate, onRemove, setCart, onUpdateUser }) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'payment' | 'processing' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.None);
  const [loginAlert, setLoginAlert] = useState(false);
  
  // Shipping form state
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
    saveToProfile: true
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 150 ? 0 : 12;
  const total = subtotal + tax + shipping;

  const updateQty = (id: string, size: string | undefined, delta: number) => {
    setCart(prev => prev.map(item => 
      (item.id === id && item.selectedSize === size) 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  const handleCheckout = () => {
    if (!user) {
      setLoginAlert(true);
      setTimeout(() => onNavigate(Page.Login), 1500);
      return;
    }

    if (checkoutStep === 'cart') {
      setCheckoutStep('shipping');
    } else if (checkoutStep === 'shipping') {
      if (!shippingInfo.phone || !shippingInfo.address) {
        alert("Please provide phone number and delivery address.");
        return;
      }
      if (shippingInfo.saveToProfile) {
        onUpdateUser({ phone: shippingInfo.phone, address: shippingInfo.address });
      }
      setCheckoutStep('payment');
    } else if (paymentMethod !== PaymentMethod.None) {
      setCheckoutStep('processing');
      // Simulate API call
      setTimeout(() => {
        setCheckoutStep('success');
        setCart([]); // Clear cart on success
      }, 2500);
    }
  };

  if (checkoutStep === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center animate-fadeIn">
        <div className="size-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
          <span className="material-symbols-outlined !text-5xl font-bold">check_circle</span>
        </div>
        <h2 className="text-4xl font-serif font-bold text-text-main mb-4">Order Confirmed</h2>
        <p className="text-text-muted max-w-md mb-8">
          Thank you for your purchase, {user?.name}! Your order #LEG-82931 is being prepared and will be shipped to: <br/>
          <span className="font-bold text-text-main mt-2 block">{shippingInfo.address}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => onNavigate(Page.Home)}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-primary-hover transition-all"
          >
            Continue Shopping
          </button>
          <button 
            onClick={() => onNavigate(Page.Account)}
            className="border border-[#f3e7eb] text-text-main px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all"
          >
            View Order Status
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && checkoutStep === 'cart') {
    return (
      <div className="flex flex-col items-center justify-center py-40 animate-fadeIn">
        <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">shopping_cart</span>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button onClick={() => onNavigate(Page.Category)} className="bg-primary text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105">Start Shopping</button>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 max-w-7xl py-12 animate-fadeIn relative">
      {loginAlert && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-fashion-dark text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-primary/30 animate-bounce">
          <span className="material-symbols-outlined text-primary">lock</span>
          <p className="font-bold">Authentication required. Redirecting to login...</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* STEP 1: CART ITEMS */}
          {checkoutStep === 'cart' && (
            <>
              <div className="flex items-baseline justify-between border-b border-[#f3e7eb] pb-4">
                <h2 className="text-3xl font-bold">Shopping Bag</h2>
                <span className="text-primary font-medium tracking-widest uppercase text-xs">{cart.length} Items</span>
              </div>

              <div className="flex flex-col gap-6">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex flex-col sm:flex-row gap-6 p-4 rounded-xl bg-background-alt border border-transparent hover:border-[#f3e7eb] transition-all">
                    <div className="shrink-0 size-32 rounded-lg bg-gray-100 overflow-hidden shadow-sm">
                      <img src={item.image} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-black uppercase bg-white px-2 py-0.5 rounded border border-gray-100 text-gray-400 tracking-widest">{item.category}</span>
                          <h3 className="text-lg font-bold mt-1.5 text-text-main">{item.name}</h3>
                          <p className="text-text-muted text-xs font-medium mt-1">Size: {item.selectedSize || 'N/A'} • Color: {item.selectedColor || 'Default'}</p>
                        </div>
                        <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-gray-300 hover:text-primary p-1 rounded-full transition-colors">
                          <span className="material-symbols-outlined">close</span>
                        </button>
                      </div>
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                          <button onClick={() => updateQty(item.id, item.selectedSize, -1)} className="px-3 py-1.5 hover:bg-gray-50 text-text-muted transition-colors">-</button>
                          <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, item.selectedSize, 1)} className="px-3 py-1.5 hover:bg-gray-50 text-text-muted transition-colors">+</button>
                        </div>
                        <p className="text-lg font-black text-text-main">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 2: SHIPPING INFO */}
          {checkoutStep === 'shipping' && (
            <div className="flex flex-col gap-8 animate-slideIn">
              <div className="flex items-center gap-4">
                <button onClick={() => setCheckoutStep('cart')} className="p-2 hover:bg-gray-100 rounded-full text-text-muted">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-3xl font-bold">Shipping Details</h2>
              </div>

              <div className="bg-white p-8 rounded-xl border border-[#f3e7eb] shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Full Name</label>
                    <input 
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-primary focus:border-primary font-medium" 
                      placeholder="Enter recipient name" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Phone Number</label>
                    <input 
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-primary focus:border-primary font-medium" 
                      placeholder="+84 000 000 000" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Delivery Address</label>
                  <textarea 
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                    className="w-full bg-gray-50 border-gray-200 rounded-lg p-4 focus:ring-primary focus:border-primary font-medium min-h-[100px]" 
                    placeholder="Enter street name, building number, city..."
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={shippingInfo.saveToProfile}
                    onChange={(e) => setShippingInfo({...shippingInfo, saveToProfile: e.target.checked})}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-text-main transition-colors">Save these details to my profile for future purchases</span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT */}
          {checkoutStep === 'payment' && (
            <div className="flex flex-col gap-8 animate-slideIn">
              <div className="flex items-center gap-4">
                <button onClick={() => setCheckoutStep('shipping')} className="p-2 hover:bg-gray-100 rounded-full text-text-muted">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-3xl font-bold">Secure Payment</h2>
              </div>

              {/* Payment Methods Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setPaymentMethod(PaymentMethod.Card)}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all ${paymentMethod === PaymentMethod.Card ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-[#f3e7eb] hover:border-primary/30'}`}
                >
                  <span className="material-symbols-outlined text-text-muted">credit_card</span>
                  <div className="text-left">
                    <p className="font-bold text-sm">Debit or Credit Card</p>
                    <p className="text-[10px] text-gray-400 uppercase font-black">Visa, Mastercard, Amex</p>
                  </div>
                </button>
                <button 
                  onClick={() => setPaymentMethod(PaymentMethod.PayPal)}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all ${paymentMethod === PaymentMethod.PayPal ? 'border-[#0070ba] bg-[#0070ba]/5 ring-1 ring-[#0070ba]/20' : 'border-[#f3e7eb] hover:border-[#0070ba]/30'}`}
                >
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-6" />
                  <div className="text-left">
                    <p className="font-bold text-sm">PayPal</p>
                    <p className="text-[10px] text-gray-400 uppercase font-black">Fast & Secure</p>
                  </div>
                </button>
              </div>

              {/* Card Form */}
              {paymentMethod === PaymentMethod.Card && (
                <div className="bg-white p-6 rounded-xl border border-[#f3e7eb] shadow-sm space-y-4 animate-slideIn">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Card Number</label>
                    <div className="relative">
                      <input className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg pl-12 focus:ring-primary focus:border-primary font-medium" placeholder="0000 0000 0000 0000" type="text" />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">payments</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Expiry Date</label>
                      <input className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-primary focus:border-primary font-medium" placeholder="MM/YY" type="text" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">CVV</label>
                      <input className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-primary focus:border-primary font-medium" placeholder="***" type="password" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 mb-1.5 tracking-widest">Name on Card</label>
                    <input className="w-full h-12 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-primary focus:border-primary font-medium" placeholder="Full name" type="text" />
                  </div>
                </div>
              )}

              {/* PayPal Button Simulation */}
              {paymentMethod === PaymentMethod.PayPal && (
                <div className="bg-[#fcfcff] p-10 rounded-xl border-2 border-dashed border-[#0070ba]/30 flex flex-col items-center justify-center animate-slideIn">
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="mb-4" />
                  <p className="text-sm text-center text-gray-600 mb-6">You will be redirected to PayPal to complete your purchase securely.</p>
                  <button onClick={handleCheckout} className="bg-[#ffc439] hover:bg-[#f4b620] text-[#111] font-black h-12 w-full max-w-xs rounded-lg flex items-center justify-center gap-2 shadow-md transition-all">
                    <span className="italic font-serif font-bold text-xl">PayPal</span> Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar: Totals & Summary */}
        <div className="lg:col-span-4 h-fit sticky top-24">
          <div className="bg-white rounded-xl p-8 border border-[#f3e7eb] shadow-sm">
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Summary</h3>
            <div className="space-y-4 pb-8 border-b border-[#f3e7eb]">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Estimated Tax (8%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="font-bold text-green-600">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            <div className="flex justify-between items-end pt-6 mb-10">
              <span className="text-sm font-black uppercase tracking-widest text-text-main">Total</span>
              <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
            </div>
            
            <button 
              disabled={checkoutStep === 'processing' || (checkoutStep === 'payment' && paymentMethod === PaymentMethod.None)}
              onClick={handleCheckout} 
              className="w-full bg-primary hover:bg-primary-hover disabled:bg-gray-300 text-white font-black py-4 rounded-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              {checkoutStep === 'processing' ? (
                <>
                  <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying Transaction...
                </>
              ) : checkoutStep === 'shipping' ? (
                <>
                  Continue to Payment
                  <span className="material-symbols-outlined">payments</span>
                </>
              ) : checkoutStep === 'payment' ? (
                <>
                  <span className="material-symbols-outlined">lock</span>
                  Pay Securely Now
                </>
              ) : (
                <>
                  Proceed to Checkout
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>

            {checkoutStep === 'payment' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                 <p className="text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Shipping To</p>
                 <p className="text-xs font-bold text-text-main truncate">{shippingInfo.address}</p>
                 <button onClick={() => setCheckoutStep('shipping')} className="text-[10px] text-primary font-bold mt-1 underline">Change Address</button>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-4">
               <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  PCI DSS Compliance
               </div>
               <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">security</span>
                  256-bit SSL Encryption
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
