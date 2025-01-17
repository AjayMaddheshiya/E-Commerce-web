import React from 'react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Price Range</h3>
      <div className="space-y-2">
        <div className="flex gap-4">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-600">Min</label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => onPriceChange(Number(e.target.value), maxPrice)}
              className="w-full px-3 py-2 border rounded-md"
              min={0}
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-600">Max</label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-md"
              min={minPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}