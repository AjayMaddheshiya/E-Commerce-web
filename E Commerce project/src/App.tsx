import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { CheckoutGuard } from './components/checkout/CheckoutGuard';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                  <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
                    <p className="mt-2 text-gray-600">Discover our handpicked selection of premium products.</p>
                  </header>
                  <ProductGrid />
                </main>
              } />
              <Route path="/checkout" element={
                <CheckoutGuard>
                  <CheckoutPage />
                </CheckoutGuard>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}