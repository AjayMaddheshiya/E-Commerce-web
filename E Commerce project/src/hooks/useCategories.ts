import { useMemo } from 'react';
import { useProducts } from './useProducts';

export function useCategories() {
  const { products } = useProducts();
  
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return Array.from(uniqueCategories).sort();
  }, [products]);

  return categories;
}