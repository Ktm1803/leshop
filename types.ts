
export enum Page {
  Home = 'home',
  Category = 'category',
  ProductDetail = 'product-detail',
  Cart = 'cart',
  Account = 'account',
  Orders = 'orders',
  Addresses = 'addresses',
  AddAddress = 'add-address',
  Wishlist = 'wishlist',
  PaymentMethods = 'payment-methods',
  AddCard = 'add-card',
  AddWallet = 'add-wallet',
  Journal = 'journal',
  Sale = 'sale',
  Beauty = 'beauty',
  Fashion = 'fashion',
  Admin = 'admin',
  AdminLogin = 'admin-login',
  Login = 'login',
  Register = 'register',
  Contact = 'contact',
  Shipping = 'shipping',
  SizeGuide = 'size-guide',
  FAQ = 'faq',
  Privacy = 'privacy'
}

export enum AdminTab {
  Dashboard = 'dashboard',
  Orders = 'orders',
  Products = 'products',
  Marketing = 'marketing',
  Reports = 'reports'
}

export enum PaymentMethod {
  None = 'none',
  Card = 'card',
  PayPal = 'paypal'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: 'fashion' | 'beauty';
  image: string;
  tag?: string;
  description?: string;
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface User {
  name: string;
  tier: string;
  points: number;
  maxPoints: number;
  avatar: string;
  address?: string;
  phone?: string;
}

export interface SaleConfig {
  targetDate: string;
}
