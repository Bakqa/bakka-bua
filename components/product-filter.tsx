"use client";

import { useState, useCallback } from "react";
import { Search, Filter, SortAsc } from "lucide-react";

interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  rating: number;
  inStock: boolean;
  searchQuery: string;
  sortBy: "price-asc" | "price-desc" | "newest" | "popular" | "rating";
}

interface FilterPanelProps {
  categories: Array<{ id: string; name: string; count: number }>;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function ProductFilter({
  categories,
  onFilterChange,
}: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 1000],
    categories: [],
    rating: 0,
    inStock: true,
    searchQuery: "",
    sortBy: "popular",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = useCallback(
    (key: keyof FilterOptions, value: any) => {
      const updated = { ...filters, [key]: value };
      setFilters(updated);
      onFilterChange(updated);
    },
    [filters, onFilterChange],
  );

  const toggleCategory = (categoryId: string) => {
    const updated = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];
    updateFilter("categories", updated);
  };

  const resetFilters = () => {
    const reset: FilterOptions = {
      priceRange: [0, 1000],
      categories: [],
      rating: 0,
      inStock: true,
      searchQuery: "",
      sortBy: "popular",
    };
    setFilters(reset);
    onFilterChange(reset);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-20">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter("searchQuery", e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
          <SortAsc size={18} />
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => updateFilter("sortBy", e.target.value as any)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            updateFilter("priceRange", [
              filters.priceRange[0],
              parseInt(e.target.value),
            ])
          }
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex justify-between items-center text-sm font-semibold mb-2"
        >
          <span className="flex items-center gap-2">
            <Filter size={18} />
            Categories
          </span>
          <span
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
        {isExpanded && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                  className="rounded accent-blue-500"
                />
                <span className="text-sm">{cat.name}</span>
                <span className="text-xs text-gray-500">({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">
          Minimum Rating
        </label>
        <select
          value={filters.rating}
          onChange={(e) => updateFilter("rating", parseInt(e.target.value))}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value={0}>All Ratings</option>
          <option value={1}>★ 1+</option>
          <option value={2}>★★ 2+</option>
          <option value={3}>★★★ 3+</option>
          <option value={4}>★★★★ 4+</option>
          <option value={5}>★★★★★ 5</option>
        </select>
      </div>

      {/* In Stock Toggle */}
      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => updateFilter("inStock", e.target.checked)}
            className="rounded accent-blue-500"
          />
          <span className="text-sm font-medium">In Stock Only</span>
        </label>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        Reset Filters
      </button>
    </div>
  );
}
