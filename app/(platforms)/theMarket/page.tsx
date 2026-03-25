"use client";

import { useState } from "react";
import Carousel from "@/components/carousel";
import { PageBanner } from "@/components/pagebanner";
import ProductGrid from "@/components/product-grid";
import ProductFilter from "@/components/product-filter";

interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  rating: number;
  inStock: boolean;
  searchQuery: string;
  sortBy: "price-asc" | "price-desc" | "newest" | "popular" | "rating";
}

// Mock data
const mockProducts = [
  {
    id: "1",
    name: "Premium Gaming Mouse",
    category: "Electronics",
    price: 79.99,
    image: null,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sale: true,
    new: false,
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    image: null,
    rating: 4.8,
    reviews: 256,
    inStock: true,
    sale: false,
    new: true,
  },
  {
    id: "3",
    name: "USB-C Hub",
    category: "Accessories",
    price: 49.99,
    image: null,
    rating: 4.2,
    reviews: 89,
    inStock: false,
    sale: false,
    new: false,
  },
];

const mockCarouselProducts = [
  {
    id: "carousel-1",
    name: "Summer Collection 2026",
    description: "Discover our latest summer essentials with up to 40% off",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop",
    price: 99.99,
  },
  {
    id: "carousel-2",
    name: "Tech Gadgets",
    description: "Explore cutting-edge technology at unbeatable prices",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=400&fit=crop",
    price: 199.99,
  },
];

const categories = [
  { id: "1", name: "Electronics", count: 24 },
  { id: "2", name: "Clothing", count: 18 },
  { id: "3", name: "Home & Garden", count: 15 },
  { id: "4", name: "Sports", count: 22 },
  { id: "5", name: "Toys", count: 10 },
];

export default function TheMarket() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [activeFilters, setActiveFilters] = useState<FilterOptions | null>(
    null,
  );

  const handleFilterChange = (filters: FilterOptions) => {
    setActiveFilters(filters);
    // Apply filters logic here
    let filtered = mockProducts;

    // Filter by search query
    if (filters.searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(filters.searchQuery.toLowerCase()),
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );

    // Filter by stock
    if (filters.inStock) {
      filtered = filtered.filter((p) => p.inStock);
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category.toLowerCase()),
      );
    }

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        // Assuming new items are marked with 'new: true'
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="mb-8 px-4 pt-6 max-w-7xl mx-auto">
        <Carousel products={mockCarouselProducts} />
      </section>

      {/* Page Banner */}
      <section className="mb-8 px-4 max-w-7xl mx-auto">
        <PageBanner
          title="The Market"
          subtitle="Your one-stop shop for all your needs - premium products at great prices"
          ctaText="Shop Collection"
          ctaHref="#products"
        />
      </section>

      {/* Products Section */}
      <section id="products" className="px-4 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1">
            <ProductFilter
              categories={categories}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Products{" "}
                {filteredProducts.length > 0 && `(${filteredProducts.length})`}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {activeFilters && "Filters applied"}
              </div>
            </div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400">
              On orders over $50. Fast delivery to your door.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold text-lg mb-2">Secure Checkout</h3>
            <p className="text-gray-600 dark:text-gray-400">
              100% encrypted transactions and customer protection.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">↩️</div>
            <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-600 dark:text-gray-400">
              30-day money-back guarantee on all items.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
