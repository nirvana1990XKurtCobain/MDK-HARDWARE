"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Share2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import products from "@/data/products.json";
import { useParams } from "next/navigation"; // ✅ Tambahkan ini

export default function ProductDetailPage() {
  const params = useParams(); // ✅ Ambil params dari Next.js hook
  const productId = Number(params.id); // ✅ Ambil id dari URL
  const product = products.products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="pt-24 pb-20 bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/products" className="btn-primary inline-block">
            Kembali ke Produk
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
    toast({
      title: "Berhasil",
      description: `${quantity} x ${product.name} ditambahkan ke keranjang`,
    });
    setQuantity(1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Disalin",
        description: "Link produk telah disalin ke clipboard",
      });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-8"
        >
          <ChevronLeft size={20} />
          Kembali ke Produk
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-full aspect-square bg-background-secondary rounded-xl overflow-hidden border border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-semibold mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-foreground-secondary mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-foreground-secondary text-sm mb-2">Harga</p>
              <p className="text-5xl font-bold gradient-text">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Stock */}
            <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
              <p className="text-sm text-foreground-secondary mb-1">
                Ketersediaan Stok
              </p>
              <p className="font-semibold">
                {product.stock > 0 ? (
                  <span className="text-success">{product.stock} unit tersedia</span>
                ) : (
                  <span className="text-error">Stok habis</span>
                )}
              </p>
            </div>

            {/* Specifications */}
            {typeof product.specs === "object" && (
              <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
                <h3 className="font-semibold mb-4">Spesifikasi</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-foreground-secondary capitalize">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-foreground-secondary">Jumlah</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-background-secondary transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-background-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} />
                Tambah ke Keranjang
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="px-6 py-3 bg-background-secondary hover:bg-border text-foreground rounded-lg font-semibold transition-all duration-300 border border-border flex items-center justify-center gap-2"
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShare}
                className="px-6 py-3 bg-background-secondary hover:bg-border text-foreground rounded-lg font-semibold transition-all duration-300 border border-border flex items-center justify-center gap-2"
              >
                <Share2 size={20} />
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Garansi Resmi</p>
                  <p className="text-sm text-foreground-secondary">
                    Semua produk bergaransi resmi dari manufacturer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Pengiriman Cepat</p>
                  <p className="text-sm text-foreground-secondary">
                    Gratis ongkir untuk pembelian di atas Rp 1.000.000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Support 24/7</p>
                  <p className="text-sm text-foreground-secondary">
                    Tim support siap membantu via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
