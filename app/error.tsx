"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4">Terjadi Kesalahan</h1>
          <p className="text-lg text-foreground-secondary mb-8 max-w-md mx-auto">
            Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi atau hubungi support kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => reset()} className="btn-primary">
              Coba Lagi
            </button>
            <Link href="/" className="btn-secondary">
              Kembali ke Beranda
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
