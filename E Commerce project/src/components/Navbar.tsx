import React, { useState } from 'react';
import { ShoppingCart, User, Search, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { AuthModal } from './auth/AuthModal';
import { CartDrawer } from './cart/CartDrawer';

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { items } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-indigo-600">ShopHub</a>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Hello, {user.name}</span>
                  <button
                    onClick={logout}
                    className="p-2 rounded-full hover:bg-gray-100"
                    title="Logout"
                  >
                    <LogOut className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <User className="h-6 w-6 text-gray-600" />
                </button>
              )}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}