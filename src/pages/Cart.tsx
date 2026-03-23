import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center space-y-4">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/40" />
        <h1 className="font-display text-2xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground">Discover our collection of digital products</p>
        <Button asChild><Link to="/products">Browse Products</Link></Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 p-4 border rounded-lg">
              <img src={item.product.coverImage} alt={item.product.title} className="w-20 h-28 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.product.id}`} className="font-semibold hover:text-primary transition-colors">
                  {item.product.title}
                </Link>
                <p className="text-sm text-muted-foreground">{item.product.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.product.format.join(", ")}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    <Button variant="ghost" size="icon" className="text-destructive h-8 w-8" onClick={() => removeFromCart(item.product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive">Clear Cart</Button>
        </div>

        <div className="border rounded-lg p-6 space-y-4 h-fit lg:sticky lg:top-24">
          <h2 className="font-semibold text-lg">Order Summary</h2>
          <Separator />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>$0.00</span></div>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Promo code" />
            <Button variant="outline">Apply</Button>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span><span>${totalPrice.toFixed(2)}</span>
          </div>
          <Button className="w-full" size="lg" asChild>
            <Link to="/checkout">Checkout <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
