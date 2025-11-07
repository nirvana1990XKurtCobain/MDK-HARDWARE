"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-lg text-foreground-secondary mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak ada. Silakan kembali ke halaman utama atau jelajahi produk kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Kembali ke Beranda
            </Link>
            <Link href="/products" className="btn-secondary">
              Jelajahi Produk
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
