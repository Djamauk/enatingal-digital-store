# Enatingal — Digital Bookstore & Products

## Overview

A professional, Shopify-style e-commerce store for selling e-books, audiobooks, and digital products, powered by Stripe payments.

## Pages & Layout

### Global Layout

- Clean top navbar with logo ("Enatingal"), search bar, category links, cart icon with badge, and account menu
- Footer with links, newsletter signup, and social media icons
- Shopify-inspired clean design: white background, clear typography, grid-based product layouts

### 1. Homepage

- Hero banner with featured products and CTA
- Featured categories section (E-books, Audiobooks, Digital Products)
- Bestsellers / New Arrivals carousel
- Testimonials section

### 2. Product Catalog Page

- Grid of product cards (cover image, title, author, price, rating)
- Sidebar filters: category, format, price range, rating
- Search bar with instant results
- Sort by: price, popularity, newest, rating

### 3. Product Detail Page

- Large cover image, title, author, description, price
- Format selector (PDF, EPUB, MP3, etc.)
- "Add to Cart" and "Buy Now" buttons
- Customer reviews & ratings section with ability to submit reviews
- Related products section

### 4. Shopping Cart

- List of items with quantities, individual and total prices
- Remove items, update quantities
- Promo code input
- Proceed to checkout button

### 5. Checkout (Stripe Integration)

- Guest checkout or sign-in option
- Email for delivery of digital products
- Stripe payment form (card payments)
- Order summary sidebar

### 6. Auth Pages

- Sign up / Sign in pages
- Password reset flow
- Account page with order history and digital library (download links)

### 7. Admin Dashboard (protected)

- Product management: add/edit/delete products with images, descriptions, pricing
- Order management: view orders, status
- Review moderation
- Basic analytics: revenue, top products

## Backend ( Supabase)

- **Database tables**: products, orders, order_items, reviews, profiles, user_roles
- **Auth**: Supabase auth with email signup + guest checkout
- **Storage**: Supabase storage for product images and digital files
- **Edge Functions**: Stripe checkout session creation, webhook handler for payment confirmation, secure download link generation
- **Stripe**: One-time payments for digital products

## Key Interactions

- Add to cart → animated cart badge update
- Checkout → Stripe hosted checkout → redirect back with confirmation
- After purchase → digital download links available in order confirmation and account library
- Reviews → star rating + text, displayed on product pages