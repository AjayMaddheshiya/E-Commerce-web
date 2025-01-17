import React from 'react';
import { ProductCard } from '../ProductCard';
import { useProducts } from '../../hooks/useProducts';

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const { products } = useProducts();
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!query) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 py-8">
          No products found matching "{query}"
        </p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}