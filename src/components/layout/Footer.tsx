import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <span className="font-display text-xl font-bold text-primary">Enatingal</span>
          <p className="text-sm text-muted-foreground">
            Your destination for premium e-books, audiobooks, and digital products.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Shop</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/products?category=ebook" className="hover:text-primary transition-colors">E-books</Link>
            <Link to="/products?category=audiobook" className="hover:text-primary transition-colors">Audiobooks</Link>
            <Link to="/products?category=digital" className="hover:text-primary transition-colors">Digital Products</Link>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Account</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/auth" className="hover:text-primary transition-colors">Sign In</Link>
            <Link to="/account" className="hover:text-primary transition-colors">My Account</Link>
            <Link to="/cart" className="hover:text-primary transition-colors">Cart</Link>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Get updates on new releases and deals.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" className="bg-background" />
            <Button size="icon" className="shrink-0">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Enatingal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
