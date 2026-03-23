import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/products/ProductCard";
import { products, reviews } from "@/lib/mock-data";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedFormat, setSelectedFormat] = useState("");

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <p className="text-lg text-muted-foreground">Product not found</p>
        <Button variant="link" asChild><Link to="/products">Back to Products</Link></Button>
      </div>
    );
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link to="/products"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Products</Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="relative">
          <img src={product.coverImage} alt={product.title} className="w-full max-w-md mx-auto rounded-lg shadow-lg aspect-[3/4] object-cover" />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.bestseller && <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>}
            {product.newArrival && <Badge className="bg-accent text-accent-foreground">New</Badge>}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
            <h1 className="font-display text-3xl font-bold">{product.title}</h1>
            <p className="text-muted-foreground mt-1">by {product.author}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-star text-star" : "text-muted-foreground/30"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {product.format.length > 1 && (
            <div>
              <label className="text-sm font-medium mb-2 block">Format</label>
              <Select value={selectedFormat || product.format[0]} onValueChange={setSelectedFormat}>
                <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {product.format.map((f) => (
                    <SelectItem key={f} value={f}>{f}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex gap-3">
            <Button size="lg" className="flex-1" onClick={() => addToCart(product)}>
              <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
            </Button>
            <Button size="lg" variant="secondary" className="flex-1">
              <Zap className="h-4 w-4 mr-2" /> Buy Now
            </Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {product.format.map((f) => (
              <Badge key={f} variant="secondary">{f}</Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Reviews */}
      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold mb-6">Customer Reviews</h2>
        {productReviews.length > 0 ? (
          <div className="space-y-4">
            {productReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{review.userName}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-star text-star" : "text-muted-foreground/30"}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.createdAt}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
        )}

        <div className="mt-8 p-6 border rounded-lg space-y-4">
          <h3 className="font-semibold">Write a Review</h3>
          <Textarea placeholder="Share your thoughts about this product..." />
          <Button>Submit Review</Button>
        </div>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
