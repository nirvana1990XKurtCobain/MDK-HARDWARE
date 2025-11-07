"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "transfer",
  })

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Keranjang Kosong</h1>
            <p className="text-foreground-secondary mb-8">Tidak ada produk untuk di-checkout</p>
            <Link href="/products" className="btn-primary">
              Kembali ke Produk
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-success" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Pesanan Berhasil!</h1>
            <p className="text-foreground-secondary mb-8">
              Terima kasih telah berbelanja di MDK HARDWARE. Pesanan Anda telah dikonfirmasi dan akan segera diproses.
            </p>
            <div className="bg-background-secondary border border-border rounded-lg p-6 mb-8 text-left">
              <p className="text-sm text-foreground-secondary mb-2">Nomor Pesanan</p>
              <p className="font-mono font-bold text-lg mb-4">MDK-{Date.now().toString().slice(-8)}</p>
              <p className="text-sm text-foreground-secondary mb-2">Total Pembayaran</p>
              <p className="text-2xl font-bold gradient-text">Rp {getTotalPrice().toLocaleString("id-ID")}</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-foreground-secondary">
                Kami akan mengirimkan detail pesanan ke email Anda. Hubungi kami via WhatsApp untuk bantuan lebih
                lanjut.
              </p>
              <Link href="/" className="btn-primary w-full block">
                Kembali ke Beranda
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000000 ? 0 : 50000
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Error",
        description: "Harap isi semua field yang diperlukan",
        type: "error",
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Log order details (in real app, send to backend)
      console.log("Order submitted:", {
        ...formData,
        items: cart,
        total,
        timestamp: new Date().toISOString(),
      })

      toast({
        title: "Pesanan Dikonfirmasi",
        description: "Pesanan Anda telah berhasil diproses",
      })

      clearCart()
      setOrderComplete(true)
      setIsProcessing(false)
    }, 2000)
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
          <Link href="/cart" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-4">
            <ArrowLeft size={20} />
            Kembali ke Keranjang
          </Link>
          <h1 className="text-5xl font-bold">
            Checkout <span className="gradient-text">Pesanan</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            {/* Shipping Information */}
            <div className="card-base">
              <h2 className="text-2xl font-bold mb-6">Informasi Pengiriman</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="+62 8xx-xxxx-xxxx"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Alamat</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jalan, nomor rumah, RT/RW"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Kota</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="Kota"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Kode Pos</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="card-base">
              <h2 className="text-2xl font-bold mb-6">Metode Pembayaran</h2>
              <div className="space-y-3">
                {[
                  { value: "transfer", label: "Transfer Bank" },
                  { value: "ewallet", label: "E-Wallet (GCash, Dana, OVO)" },
                  { value: "cod", label: "Bayar di Tempat (COD)" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-background-secondary transition-colors"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="font-semibold">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="card-base">
              <h2 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm pb-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-foreground-secondary">x{item.quantity}</p>
                    </div>
                    <p className="font-semibold">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isProcessing}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Memproses..." : "Konfirmasi Pesanan"}
            </motion.button>
          </motion.form>

          {/* Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card-base sticky top-24 h-fit"
          >
            <h2 className="text-2xl font-bold mb-6">Total Pembayaran</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-sm">
                <span className="text-foreground-secondary">Subtotal</span>
                <span className="font-semibold">Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground-secondary">Pengiriman</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-success">Gratis</span>
                  ) : (
                    `Rp ${shipping.toLocaleString("id-ID")}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground-secondary">Pajak (10%)</span>
                <span className="font-semibold">Rp {tax.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold gradient-text">Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
