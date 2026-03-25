import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
  productId: string;
  productName: string;
  onAddToCart?: (productId: string) => void;
}

export default function AddCart({
  productId,
  productName,
  onAddToCart,
}: AddToCartProps) {
  return (
    <button
      onClick={() => onAddToCart?.(productId)}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
    >
      <ShoppingCart size={18} />
      Add to Cart
    </button>
  );
}
