"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "AMD BattleField",
    category: "PC Rakitan",
    price: "Rp 15.999.000",
    image: "/amd pc.jpg",
    specs: "Putih Garang Dengan Ryzen 7 9700X, RX 9070 16GB, 32GB DDR5, dan SSD 1TB Gen4, Dibungkus Casing Cube Quitoz White plus Galatek 360 ARGB",
  },
  {
    id: 2,
    name: "AMD Kill Em All",
    category: "PC Rakitan",
    price: "Rp 24.999.000",
    image: "/AMD 2.jpg",
    specs: "Ryzen 5 9600X, RTX 5070 12GB GDDR7, DDR5 32GB, dan SSD 1TB Gen4, berpadu dengan PSU 750W Gold, PRIME H-[Y] V2.0 Black Case, serta 360 ARGB Liquid Cooler dan kipas 12CM ARGB.",
  },
  {
    id: 3,
    name: "RTX 5090 Gigabyte",
    category: "Hardware PC",
    price: "Rp 8.999.000",
    image: "/5090.png",
    specs: "GDDR6X • 12GB Memory",
  },
  {
    id: 4,
    name: "Reyee 24 Port Gigabit L2 Managed POE Switch",
    category: "Networking",
    price: "Rp 6.999.000",
    image: "/switch rg.jpg",
    specs: "24 Port • Gigabit Ethernet",
  },
  {
    id: 5,
    name: "Intel Core i9 11900K 8 Core 16 Threads Rocket Lake - LGA1200",
    category: "Hardware PC",
    price: "Rp 9.150.000",
    image: "/intelcore.webp",
    specs: "No. of Cores 8 No. of Threads 16 Processor Base Frequency 3.50 GHz Max Turbo Frequency 5.30 GHz",
  },
  {
    id: 6,
    name: "Motherboard MB ASUS TUF H470 PRO GAMING WIFI WI-FI",
    category: "Hardware PC",
    price: "Rp 3.180.000",
    image: "/mobo asus.webp",
    specs: "Motherboard gaming ATX Intel® H470 (LGA1200) dengan dukungan M.2, WiFi 6, HDMI, DisplayPort, USB 3.2 Gen2, SATA 6Gbps, Thunderbolt™ 3, dan pencahayaan RGB Aura Sync.",
  },
  {
    id: 7,
    name: "Back To School Combo",
    category: "PC Rakitan",
    price: "Rp 8.290.000",
    image: "/back.jpg",
    specs: "PC rakitan dengan AMD Ryzen 5 5500, RTX 3050 6GB, RAM DDR4 16GB, dan SSD 256GB NVMe. Ditenagai PSU 550W 80+, memakai motherboard A520M, casing Cube Gaming Bluey Black, serta monitor Retina Pro F24V10H dan kipas 12CM Rainbow FAN.",
  },
  {
    id: 8,
    name: "TP-LINK TL-WA801N 300Mbps Wireless N Access Point",
    category: "Networking",
    price: "Rp325.500",
    image: "/tplink.webp",
    specs: "TP-Link TL-WA801N adalah access point 300Mbps dengan teknologi MIMO 2×2, mendukung mode AP, Client, Extender, Multi-SSID, dan PoE pasif. Dilengkapi WPS, keamanan WPA/WPA2, serta kompatibel dengan Windows, Linux, dan Mac OS..",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Produk <span className="gradient-text">Unggulan</span>
            </h2>
            <p className="text-foreground-secondary text-lg">Pilihan terbaik dari koleksi kami</p>
          </div>
          <Link href="/products" className="hidden md:flex btn-primary items-center gap-2">
            Lihat Semua
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="card-base group cursor-pointer overflow-hidden"
            >
              <div className="relative h-52 mb-4 overflow-hidden rounded-xl bg-background">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-accent font-semibold mb-2">{product.category}</p>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-sm text-foreground-secondary mb-3">{product.specs}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold gradient-text">{product.price}</span>
                <button className="p-2 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-lg transition-all duration-300">
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            Lihat Semua Produk
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
