import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'react-router-dom';
import { FilterSidebar } from './filters/FilterSidebar';

export function ProductGrid() {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
      : true;

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    const matchesPrice = product.price >= minPrice && 
      (maxPrice === 0 || product.price <= maxPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <FilterSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={handlePriceChange}
          isMobile={window.innerWidth < 768}
        />
      </div>
      
      <div className="md:col-span-3">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}