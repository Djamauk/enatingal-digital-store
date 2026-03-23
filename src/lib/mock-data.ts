export interface Product {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "ebook" | "audiobook" | "digital";
  format: string[];
  coverImage: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "The Art of Digital Design",
    author: "Sarah Mitchell",
    description: "A comprehensive guide to modern digital design principles, covering everything from typography to color theory. This book will transform how you approach visual communication in the digital age.",
    price: 24.99,
    originalPrice: 34.99,
    category: "ebook",
    format: ["PDF", "EPUB"],
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    bestseller: true,
    newArrival: false,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Mindful Productivity",
    author: "James Chen",
    description: "Discover how mindfulness can revolutionize your productivity. Learn practical techniques to focus deeply, manage stress, and achieve more with less effort.",
    price: 19.99,
    category: "ebook",
    format: ["PDF", "EPUB"],
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop",
    rating: 4.6,
    reviewCount: 89,
    featured: true,
    bestseller: false,
    newArrival: true,
    createdAt: "2024-03-01",
  },
  {
    id: "3",
    title: "Stories from the Horizon",
    author: "Elena Rodriguez",
    description: "A captivating audiobook collection of short stories that explore the boundaries between reality and imagination. Narrated by award-winning voice actors.",
    price: 29.99,
    category: "audiobook",
    format: ["MP3", "M4B"],
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=560&fit=crop",
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    bestseller: true,
    newArrival: false,
    createdAt: "2023-11-20",
  },
  {
    id: "4",
    title: "Web Development Masterclass",
    author: "Alex Thompson",
    description: "Complete course materials and project files for mastering modern web development. Includes React, TypeScript, and full-stack best practices.",
    price: 49.99,
    originalPrice: 79.99,
    category: "digital",
    format: ["ZIP", "PDF"],
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop",
    rating: 4.7,
    reviewCount: 156,
    featured: false,
    bestseller: true,
    newArrival: false,
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    title: "The Midnight Library",
    author: "Nora Williams",
    description: "An enchanting audiobook about a library between life and death, where every book contains a different version of your life. A story about choices and possibilities.",
    price: 22.99,
    category: "audiobook",
    format: ["MP3", "M4B"],
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop",
    rating: 4.5,
    reviewCount: 67,
    featured: false,
    bestseller: false,
    newArrival: true,
    createdAt: "2024-03-15",
  },
  {
    id: "6",
    title: "Photography Essentials Pack",
    author: "David Park",
    description: "A complete digital toolkit for photographers: Lightroom presets, Photoshop actions, and a comprehensive editing guide. Transform your photos instantly.",
    price: 34.99,
    category: "digital",
    format: ["ZIP"],
    coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=560&fit=crop",
    rating: 4.4,
    reviewCount: 45,
    featured: false,
    bestseller: false,
    newArrival: true,
    createdAt: "2024-03-20",
  },
  {
    id: "7",
    title: "Financial Freedom Blueprint",
    author: "Maria Santos",
    description: "A step-by-step guide to achieving financial independence. Learn about investing, passive income, budgeting, and building wealth for the long term.",
    price: 16.99,
    category: "ebook",
    format: ["PDF", "EPUB"],
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=560&fit=crop",
    rating: 4.3,
    reviewCount: 112,
    featured: false,
    bestseller: true,
    newArrival: false,
    createdAt: "2023-09-05",
  },
  {
    id: "8",
    title: "Creative Writing Workshop",
    author: "Thomas Blake",
    description: "Unlock your creative potential with this comprehensive audiobook workshop. Features exercises, examples, and expert narration to guide your writing journey.",
    price: 27.99,
    originalPrice: 39.99,
    category: "audiobook",
    format: ["MP3"],
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=560&fit=crop",
    rating: 4.6,
    reviewCount: 78,
    featured: true,
    bestseller: false,
    newArrival: false,
    createdAt: "2024-01-28",
  },
];

export const reviews: Review[] = [
  { id: "r1", productId: "1", userName: "BookLover42", rating: 5, comment: "Absolutely transformative! This book changed how I approach design.", createdAt: "2024-02-15" },
  { id: "r2", productId: "1", userName: "DesignPro", rating: 4, comment: "Great content, very well organized. A must-read for designers.", createdAt: "2024-02-20" },
  { id: "r3", productId: "1", userName: "CreativeMinds", rating: 5, comment: "The best design book I've read in years. Highly recommend!", createdAt: "2024-03-01" },
  { id: "r4", productId: "3", userName: "AudioFan", rating: 5, comment: "The narration is incredible. Each story pulled me in completely.", createdAt: "2024-01-10" },
  { id: "r5", productId: "3", userName: "StorySeeker", rating: 5, comment: "Beautiful writing and amazing voice acting. Worth every penny.", createdAt: "2024-01-25" },
  { id: "r6", productId: "4", userName: "DevNewbie", rating: 4, comment: "Comprehensive and well-structured. Perfect for leveling up.", createdAt: "2024-03-05" },
];

export const categories = [
  { id: "ebook", name: "E-books", icon: "BookOpen", count: 3 },
  { id: "audiobook", name: "Audiobooks", icon: "Headphones", count: 3 },
  { id: "digital", name: "Digital Products", icon: "Package", count: 2 },
];

export const testimonials = [
  { id: "t1", name: "Jessica M.", text: "Enatingal has the best selection of digital books I've ever found. The quality is outstanding!", avatar: "JM" },
  { id: "t2", name: "Robert K.", text: "Fast downloads, great prices, and amazing customer service. My go-to digital store.", avatar: "RK" },
  { id: "t3", name: "Amara L.", text: "I love how easy it is to find and purchase audiobooks here. The experience is seamless.", avatar: "AL" },
];
