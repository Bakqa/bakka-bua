"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  name: string;
  count: number;
}

const categories: Category[] = [
  { id: "1", name: "Electronics", count: 24 },
  { id: "2", name: "Clothing", count: 18 },
  { id: "3", name: "Books", count: 32 },
  { id: "4", name: "Home & Garden", count: 15 },
  { id: "5", name: "Sports", count: 22 },
  { id: "6", name: "Toys", count: 10 },
];

export default function CategorySidebar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <aside className="sticky left-0 top-[60px] w-[40%] h-[calc(100vh-60px-80px)] bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-2 py-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="text-sm font-medium opacity-75">
                    ({category.count})
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
