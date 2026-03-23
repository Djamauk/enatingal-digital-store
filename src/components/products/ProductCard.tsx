import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/mock-data";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group rounded-lg border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.bestseller && <Badge className="bg-primary text-primary-foreground text-xs">Bestseller</Badge>}
          {product.newArrival && <Badge className="bg-accent text-accent-foreground text-xs">New</Badge>}
          {product.originalPrice && (
            <Badge variant="destructive" className="text-xs">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm leading-tight hover:text-primary transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground">{product.author}</p>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-star text-star" : "text-muted-foreground/30"}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => addToCart(product)}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
