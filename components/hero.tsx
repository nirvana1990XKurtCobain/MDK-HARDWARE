"use client"

import Link from "next/link"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, Cpu, Network, Monitor } from "lucide-react"

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateA = useTransform(mouseX, [0, 1], [-4, 4])
  const rotateB = useTransform(mouseY, [0, 1], [4, -4])
  const rotateC = useTransform(mouseX, [0, 1], [3, -3])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Teknologi Premium untuk <br />
              <span className="gradient-text">Performa Maksimal</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Dapatkan PC rakitan berkualitas tinggi, hardware terbaik, dan solusi networking profesional
              dengan harga kompetitif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary inline-flex items-center gap-2">
                Jelajahi Produk <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <div className="relative h-[430px] hidden lg:block">

            {/* PC READY */}
            <motion.div
              style={{ rotateZ: rotateA }}
              className="floating-card -top-10 right-10"
            >
              <Monitor className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold">PC READY</h3>
              <p className="text-sm opacity-70">Build System</p>
            </motion.div>

            {/* HARDWARE PC */}
            <motion.div
              style={{ rotateZ: rotateB }}
              className="floating-card bottom-10 -left-6"
            >
              <Cpu className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold">HARDWARE PC</h3>
              <p className="text-sm opacity-70">Component</p>
            </motion.div>

            {/* HARDWARE JARINGAN */}
            <motion.div
              style={{ rotateZ: rotateC }}
              className="floating-card top-24 right-1/3"
            >
              <Network className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-bold">HARDWARE JARINGAN</h3>
              <p className="text-sm opacity-70">Networking</p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
