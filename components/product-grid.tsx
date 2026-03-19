import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="group">
          <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.sale && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                Sale
              </div>
            )}
          </div>
          <h3 className="font-medium mb-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">{product.category}</p>
            <p className="font-semibold">{formatPrice(product.price)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
