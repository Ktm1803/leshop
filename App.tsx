
import React, { useState, useEffect } from 'react';
import { Page, CartItem, User, AdminTab, Product } from './types';
import { PRODUCTS } from './constants';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import ProductDetailPage from './pages/ProductDetail';
import CartPage from './pages/Cart';
import AccountPage from './pages/Account';
import UserOrders from './pages/UserOrders';
import UserAddresses from './pages/UserAddresses';
import AddAddressPage from './pages/AddAddress';
import UserWishlist from './pages/UserWishlist';
import UserPaymentMethods from './pages/UserPaymentMethods';
import AddCardPage from './pages/AddCard';
import AddWalletPage from './pages/AddWallet';
import JournalPage from './pages/Journal';
import SalePage from './pages/Sale';
import BeautyPage from './pages/Beauty';
import FashionPage from './pages/Fashion';
import AdminPage from './pages/Admin';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AdminLoginPage from './pages/AdminLogin';
import { ContactPage, FAQPage, ShippingPage, SizeGuidePage, PrivacyPage } from './pages/SupportPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Khởi tạo ngày kết thúc sale mặc định là 2 ngày kể từ bây giờ
  const [saleTargetDate, setSaleTargetDate] = useState<string>(
    new Date(Date.now() + 172800000).toISOString()
  );

  const navigate = (page: Page) => {
    const accountRoutes = [
      Page.Account, 
      Page.Orders, 
      Page.Addresses, 
      Page.AddAddress, 
      Page.Wishlist, 
      Page.PaymentMethods,
      Page.AddCard,
      Page.AddWallet
    ];
    if (page === Page.Admin && !isAdminAuthenticated) {
      setCurrentPage(Page.AdminLogin);
    } else if (accountRoutes.includes(page) && !user) {
      setCurrentPage(Page.Login);
    } else {
      setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  };

  const handleAdminAuth = (success: boolean) => {
    if (success) {
      setIsAdminAuthenticated(true);
      setCurrentPage(Page.Admin);
    }
  };

  const handleUserLogin = (mockUser: User) => {
    setUser(mockUser);
    setCurrentPage(Page.Home);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage(Page.Home);
  };

  const handleUpdateUser = (updatedData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updatedData });
    }
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const addToCart = (product: any, size?: string, color?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const isAdminView = currentPage === Page.Admin;
  const isAuthView = currentPage === Page.Login || currentPage === Page.Register || currentPage === Page.AdminLogin;

  return (
    <div className={`min-h-screen flex flex-col ${isAdminView ? 'bg-background-light' : ''}`}>
      {!isAdminView && !isAuthView && <Navigation 
        user={user}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onNavigate={navigate}
        currentPage={currentPage}
      />}
      
      <main className="flex-grow">
        {currentPage === Page.Home && <HomePage products={products} onNavigate={navigate} onAddToCart={addToCart} />}
        {currentPage === Page.Category && <CategoryPage products={products} onNavigate={navigate} onAddToCart={addToCart} />}
        {currentPage === Page.ProductDetail && <ProductDetailPage onAddToCart={addToCart} onNavigate={navigate} />}
        {currentPage === Page.Cart && <CartPage user={user} cart={cart} setCart={setCart} onNavigate={navigate} onRemove={removeFromCart} onUpdateUser={handleUpdateUser} />}
        {currentPage === Page.Account && user && <AccountPage user={user} onNavigate={navigate} onLogout={handleLogout} />}
        {currentPage === Page.Orders && user && <UserOrders user={user} onNavigate={navigate} onLogout={handleLogout} />}
        {currentPage === Page.Addresses && user && <UserAddresses user={user} onNavigate={navigate} onLogout={handleLogout} />}
        {currentPage === Page.AddAddress && user && <AddAddressPage user={user} onNavigate={navigate} onUpdateUser={handleUpdateUser} />}
        {currentPage === Page.Wishlist && user && <UserWishlist user={user} onNavigate={navigate} onLogout={handleLogout} onAddToCart={addToCart} />}
        {currentPage === Page.PaymentMethods && user && <UserPaymentMethods user={user} onNavigate={navigate} onLogout={handleLogout} />}
        {currentPage === Page.AddCard && user && <AddCardPage user={user} onNavigate={navigate} />}
        {currentPage === Page.AddWallet && user && <AddWalletPage user={user} onNavigate={navigate} />}
        {currentPage === Page.Journal && <JournalPage onNavigate={navigate} />}
        {currentPage === Page.Sale && <SalePage products={products} targetDate={saleTargetDate} onNavigate={navigate} onAddToCart={addToCart} />}
        {currentPage === Page.Beauty && <BeautyPage products={products} onNavigate={navigate} onAddToCart={addToCart} />}
        {currentPage === Page.Fashion && <FashionPage products={products} onNavigate={navigate} onAddToCart={addToCart} />}
        {currentPage === Page.Admin && <AdminPage saleTargetDate={saleTargetDate} onUpdateSaleDate={setSaleTargetDate} onAddProduct={handleAddProduct} onNavigate={navigate} />}
        {currentPage === Page.Login && <LoginPage onNavigate={navigate} onLogin={handleUserLogin} />}
        {currentPage === Page.Register && <RegisterPage onNavigate={navigate} onRegister={handleUserLogin} />}
        {currentPage === Page.AdminLogin && <AdminLoginPage onNavigate={navigate} onAuth={handleAdminAuth} />}
        
        {/* Support Pages */}
        {currentPage === Page.Contact && <ContactPage />}
        {currentPage === Page.FAQ && <FAQPage />}
        {currentPage === Page.Shipping && <ShippingPage />}
        {currentPage === Page.SizeGuide && <SizeGuidePage />}
        {currentPage === Page.Privacy && <PrivacyPage />}
      </main>

      {!isAdminView && !isAuthView && <Footer onNavigate={navigate} />}
    </div>
  );
};

export default App;
