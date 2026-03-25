import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Heart, ShoppingCart, Star, Badge } from "lucide-react";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          No products found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image Container */}
          <Link
            href={`/products/${product.id}`}
            className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-110 duration-500"
            />
            {/* Badges */}
            <div className="absolute top-2 left-2 right-2 flex gap-2 flex-wrap">
              {product.sale && (
                <Badge className="bg-red-500 text-white text-xs font-bold px-2 py-1">
                  Sale
                </Badge>
              )}
              {product.inStock === false && (
                <Badge className="bg-gray-500 text-white text-xs font-bold px-2 py-1">
                  Out of Stock
                </Badge>
              )}
              {product.new && (
                <Badge className="bg-emerald-500 text-white text-xs font-bold px-2 py-1">
                  New
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
              <Heart
                size={18}
                className="text-gray-600 dark:text-gray-300 hover:text-red-500"
              />
            </button>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition">
                Quick View
              </button>
            </div>
          </Link>

          {/* Product Info */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            {/* Title & Category */}
            <div className="mb-3">
              <Link href={`/products/${product.id}`} className="group/title">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover/title:text-blue-500 transition line-clamp-2 mb-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {product.category}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.floor(product.rating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({product.reviews || 0})
              </span>
            </div>

            {/* Price & Button */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col">
                <p className="font-bold text-gray-900 dark:text-white">
                  {formatPrice(
                    product.sale ? product.price * 0.8 : product.price,
                  )}
                </p>
                {product.sale && (
                  <p className="text-xs text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>
              <button
                className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors disabled:opacity-50"
                disabled={product.inStock === false}
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
