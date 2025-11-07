# MDK HARDWARE - E-Commerce Platform

Platform e-commerce modern untuk MDK HARDWARE, distributor teknologi terpercaya di Indonesia.

## Fitur Utama

### Frontend
- **Homepage Interaktif**: Hero section dengan animasi parallax dan floating components
- **Katalog Produk**: Listing produk dengan filter kategori, harga, dan search
- **Detail Produk**: Halaman detail dengan zoom gambar, spesifikasi, dan review
- **Shopping Cart**: Keranjang belanja dengan local storage persistence
- **Checkout**: Proses checkout lengkap dengan form pengiriman
- **Dark/Light Mode**: Toggle tema dengan next-themes
- **Responsive Design**: Fully responsive untuk semua ukuran layar

### Backend
- **API Routes**: Next.js API routes untuk produk, checkout, dan order
- **Payment Simulation**: Simulasi pembayaran Midtrans
- **Admin Dashboard**: Dashboard untuk kelola produk dan pesanan
- **Order Management**: Tracking pesanan dengan status updates

### Customer Service
- **WhatsApp Integration**: Floating WhatsApp button dengan chat popup
- **Contact Form**: Form kontak untuk pertanyaan pelanggan
- **Email Notifications**: Simulasi notifikasi email

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **State Management**: React Hooks + localStorage
- **Forms**: React Hook Form
- **Database**: JSON (dapat diganti dengan database real)

## Struktur Project

\`\`\`
mdk-hardware/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── admin/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       ├── checkout/
│       ├── products/
│       └── orders/
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── product-card.tsx
│   ├── admin-dashboard.tsx
│   └── ...
├── hooks/
│   ├── use-cart.ts
│   └── use-toast.ts
├── data/
│   └── products.json
└── public/
    └── images/
\`\`\`

## Instalasi & Setup

### 1. Clone Repository
\`\`\`bash
git clone <repository-url>
cd mdk-hardware
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment Variables
Buat file `.env.local`:
\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Fitur Utama

### 1. Homepage
- Hero section dengan animasi mouse-tracking
- Floating component animations
- Featured products showcase
- Why Choose Us section

### 2. Product Catalog
- Filter by category
- Price range filter
- Search functionality
- Sort options (newest, price)
- Product cards dengan hover effects

### 3. Product Detail
- Image zoom functionality
- Detailed specifications
- Stock availability
- Quantity selector
- Add to cart & wishlist
- Share functionality

### 4. Shopping Cart
- View all items
- Update quantities
- Remove items
- Cart summary dengan shipping calculation
- Proceed to checkout

### 5. Checkout
- Customer information form
- Shipping address
- Payment method selection
- Order summary
- Order confirmation

### 6. Admin Dashboard
- Product management (CRUD)
- Order tracking
- Analytics & statistics
- Recent activity log

### 7. Customer Service
- WhatsApp integration
- Contact form
- About page
- FAQ section

## Customization

### Mengubah Warna Brand
Edit `app/globals.css`:
\`\`\`css
--color-accent: #0099ff; /* Ubah warna accent */
--color-background: #0a0a0a; /* Ubah warna background */
\`\`\`

### Menambah Produk
Edit `data/products.json` dan tambahkan produk baru ke array `products`.

### Mengubah Informasi Kontak
Edit `components/whatsapp-button.tsx` dan `components/footer.tsx`.

## Deployment

### Deploy ke Vercel
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy ke Platform Lain
\`\`\`bash
npm run build
npm start
\`\`\`

## Performance Optimization

- Image lazy loading
- Code splitting
- CSS minification
- JavaScript minification
- Caching strategies

## SEO

- Meta tags dinamis
- Open Graph tags
- Sitemap.xml
- Robots.txt
- Canonical URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Lisensi

Proprietary - MDK HARDWARE

## Support

Untuk bantuan, hubungi:
- WhatsApp: +62 823-1864-6610
- Email: info@mdkhardware.com
