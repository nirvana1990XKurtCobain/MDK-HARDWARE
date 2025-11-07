"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import CartSummary from "@/components/cart-summary"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag size={64} className="text-foreground-secondary mb-4 opacity-50" />
            <h1 className="text-4xl font-bold mb-4">Keranjang Kosong</h1>
            <p className="text-foreground-secondary mb-8">Mulai berbelanja dan tambahkan produk ke keranjang Anda</p>
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Lanjutkan Belanja
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/products" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-4">
            <ArrowLeft size={20} />
            Kembali ke Produk
          </Link>
          <h1 className="text-5xl font-bold">
            Keranjang <span className="gradient-text">Belanja</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="card-base flex gap-6"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-background">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <Link href={`/products/${item.id}`} className="font-semibold hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-lg font-bold gradient-text mt-2">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-background-secondary transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-background-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-sm text-foreground-secondary mb-2">Subtotal</p>
                  <p className="text-lg font-bold">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-error/10 text-error rounded-lg transition-colors flex-shrink-0"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <CartSummary />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
