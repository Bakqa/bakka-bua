"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface CarouselProps {
  products: Product[];
  autoPlayInterval?: number;
}

export default function Carousel({
  products,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (products.length || 1));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [products.length, autoPlayInterval, isHovered]);

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + (products.length || 1)) % (products.length || 1),
    );
  const next = () => setCurrent((prev) => (prev + 1) % (products.length || 1));

  if (!products.length) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-xl">No featured products available</p>
        </div>
      </div>
    );
  }

  const product = products[current];

  return (
    <div
      className="relative w-full h-96 rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className="transform transition-all duration-500 translate-y-0">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm font-semibold">
            Featured
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 line-clamp-2">
            {product.name}
          </h2>
          <p className="text-lg text-gray-200 mb-6 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-emerald-400">
              ${product.price.toFixed(2)}
            </div>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <Play size={18} />
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all ${
              idx === current
                ? "bg-white w-8 h-2 rounded-full"
                : "bg-white/50 w-2 h-2 rounded-full hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
        {current + 1} / {products.length}
      </div>
    </div>
  );
}
