"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { ArrowRight } from "lucide-react"

export default function CartSummary() {
  const { cart, getTotalPrice } = useCart()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000000 ? 0 : 50000
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + shipping + tax

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card-base sticky top-24"
    >
      <h2 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>

      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between text-sm">
          <span className="text-foreground-secondary">Subtotal ({cart.length} item)</span>
          <span className="font-semibold">Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-foreground-secondary">Pengiriman</span>
          <span className="font-semibold">
            {shipping === 0 ? <span className="text-success">Gratis</span> : `Rp ${shipping.toLocaleString("id-ID")}`}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-foreground-secondary">Pajak (10%)</span>
          <span className="font-semibold">Rp {tax.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="font-semibold">Total</span>
        <span className="text-2xl font-bold gradient-text">Rp {total.toLocaleString("id-ID")}</span>
      </div>

      {subtotal < 1000000 && (
        <p className="text-xs text-foreground-secondary mb-4 p-3 bg-background rounded-lg">
          Belanja Rp {(1000000 - subtotal).toLocaleString("id-ID")} lagi untuk gratis ongkir
        </p>
      )}

      <Link href="/checkout" className="btn-primary w-full flex items-center justify-center gap-2">
        Lanjut ke Checkout
        <ArrowRight size={20} />
      </Link>

      <Link href="/products" className="btn-secondary w-full flex items-center justify-center gap-2 mt-3">
        Lanjutkan Belanja
      </Link>
    </motion.div>
  )
}
