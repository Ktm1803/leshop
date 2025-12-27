
import React from 'react';

export const ContactPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeIn">
    <h1 className="text-4xl font-serif font-bold mb-8 text-center">Contact Us</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Get in Touch</h3>
        <p className="text-text-muted">Our concierge team is here to assist you with any questions regarding our collections or your orders.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span>concierge@lelegance.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">call</span>
            <span>+84 (0) 28 1234 5678</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span>District 1, Ho Chi Minh City, Vietnam</span>
          </div>
        </div>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full border-gray-200 rounded-lg p-3" placeholder="Full Name" />
        <input className="w-full border-gray-200 rounded-lg p-3" placeholder="Email" />
        <textarea className="w-full border-gray-200 rounded-lg p-3 h-32" placeholder="Message"></textarea>
        <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg">Send Message</button>
      </form>
    </div>
  </div>
);

export const FAQPage: React.FC = () => (
  <div className="max-w-3xl mx-auto px-6 py-20 animate-fadeIn">
    <h1 className="text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h1>
    <div className="space-y-6">
      {[
        { q: "How long does shipping take?", a: "Domestic orders typically arrive within 2-4 business days. International shipping takes 7-14 days." },
        { q: "What is your return policy?", a: "We offer a 30-day return policy for all unworn fashion items and unopened beauty products." },
        { q: "Are your products cruelty-free?", a: "Yes, 100% of our Beauty Lab products are cruelty-free and ethically sourced." },
        { q: "How do I track my order?", a: "Once your order is shipped, you will receive a tracking number via email and in your Account dashboard." }
      ].map((item, i) => (
        <details key={i} className="group border-b border-gray-100 pb-4">
          <summary className="flex justify-between items-center font-bold cursor-pointer list-none py-2 group-hover:text-primary transition-colors">
            <span>{item.q}</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
          </summary>
          <p className="text-text-muted mt-2 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
);

export const ShippingPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeIn prose prose-pink">
    <h1 className="text-4xl font-serif font-bold mb-8">Shipping & Returns</h1>
    <section className="mb-8">
      <h3 className="text-xl font-bold mb-4">Domestic Shipping (Vietnam)</h3>
      <p>Free standard shipping on all orders over $150. For orders under $150, a flat rate of $12 applies. Standard delivery time is 2-4 business days.</p>
    </section>
    <section className="mb-8">
      <h3 className="text-xl font-bold mb-4">Easy Returns</h3>
      <p>We want you to be completely satisfied with your purchase. If you're not, you can return any item within 30 days of receipt. Items must be in their original condition with all tags attached. Beauty products must be unopened and in original packaging.</p>
    </section>
  </div>
);

export const SizeGuidePage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeIn">
    <h1 className="text-4xl font-serif font-bold mb-8 text-center">Size Guide</h1>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-fashion-dark">
            <th className="py-4 font-bold">Size</th>
            <th className="py-4 font-bold">Bust (cm)</th>
            <th className="py-4 font-bold">Waist (cm)</th>
            <th className="py-4 font-bold">Hips (cm)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { s: 'XS', b: '80-84', w: '62-66', h: '88-92' },
            { s: 'S', b: '85-89', w: '67-71', h: '93-97' },
            { s: 'M', b: '90-94', w: '72-76', h: '98-102' },
            { s: 'L', b: '95-99', w: '77-81', h: '103-107' }
          ].map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="py-4 font-bold">{row.s}</td>
              <td className="py-4 text-text-muted">{row.b}</td>
              <td className="py-4 text-text-muted">{row.w}</td>
              <td className="py-4 text-text-muted">{row.h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="mt-8 text-sm text-center text-text-muted">Tip: Use our <strong>AI Fit Assistant</strong> on any product page for a personalized recommendation!</p>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeIn text-text-main">
    <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
    <div className="space-y-6 leading-relaxed">
      <p>At L'Elégance, your privacy is of the utmost importance. This policy outlines how we collect, use, and protect your personal information.</p>
      <h3 className="font-bold text-xl">Information Collection</h3>
      <p>We collect information you provide directly to us when you create an account, make a purchase, or contact our support team. This may include your name, email, shipping address, and payment information.</p>
      <h3 className="font-bold text-xl">Data Security</h3>
      <p>We implement industry-standard security measures to protect your data, including 256-bit SSL encryption for all transactions.</p>
    </div>
  </div>
);
