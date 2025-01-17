import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { PriceFilter } from './PriceFilter';
import { SlidersHorizontal } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  isMobile?: boolean;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  isMobile = false
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = React.useState(!isMobile);

  const toggleFilters = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {isMobile && (
        <button
          onClick={toggleFilters}
          className="flex items-center space-x-2 w-full mb-4 text-gray-600"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      )}
      
      <div className={`space-y-6 ${isMobile && !isOpen ? 'hidden' : 'block'}`}>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        
        <div className="border-t pt-6">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={onPriceChange}
          />
        </div>
      </div>
    </div>
  );
}