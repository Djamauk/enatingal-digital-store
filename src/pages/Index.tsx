import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Headphones, Package, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/products/ProductCard";
import { products, testimonials } from "@/lib/mock-data";

const Index = () => {
  const featured = products.filter((p) => p.featured);
  const bestsellers = products.filter((p) => p.bestseller);

  const categoryCards = [
    { icon: BookOpen, title: "E-books", desc: "PDF & EPUB formats", link: "/products?category=ebook", color: "bg-primary/10 text-primary" },
    { icon: Headphones, title: "Audiobooks", desc: "MP3 & M4B formats", link: "/products?category=audiobook", color: "bg-accent/10 text-accent-foreground" },
    { icon: Package, title: "Digital Products", desc: "Templates & tools", link: "/products?category=digital", color: "bg-secondary text-secondary-foreground" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
        <div className="container text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Discover Your Next <span className="text-primary">Digital Read</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore our curated collection of e-books, audiobooks, and digital products. Instant delivery, premium quality.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/products">Browse Collection <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products?filter=bestseller">Bestsellers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryCards.map((cat) => (
            <Link key={cat.title} to={cat.link}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`p-3 rounded-lg ${cat.color}`}>
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold">Bestsellers</h2>
            <Button variant="ghost" asChild>
              <Link to="/products?filter=bestseller">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <h2 className="font-display text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="relative">
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {t.avatar}
                  </div>
                  <span className="font-medium text-sm">{t.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
