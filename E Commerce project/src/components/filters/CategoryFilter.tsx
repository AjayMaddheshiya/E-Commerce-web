import React from 'react';
import { useCategories } from '../../hooks/useCategories';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = useCategories();

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`w-full text-left px-3 py-2 rounded-md ${
            selectedCategory === '' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-md ${
              selectedCategory === category ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}