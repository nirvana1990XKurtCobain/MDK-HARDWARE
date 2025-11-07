"use client"

import { motion } from "framer-motion"
import { TrendingUp, Package, ShoppingBag, Users } from "lucide-react"

const stats = [
  { label: "Total Penjualan", value: "Rp 125.500.000", icon: TrendingUp, color: "from-accent to-accent-hover" },
  { label: "Produk Aktif", value: "24", icon: Package, color: "from-success to-success/80" },
  { label: "Pesanan Bulan Ini", value: "42", icon: ShoppingBag, color: "from-warning to-warning/80" },
  { label: "Total Pelanggan", value: "156", icon: Users, color: "from-blue-500 to-blue-600" },
]

export default function AdminAnalytics() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-base"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <p className="text-foreground-secondary text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="card-base"
      >
        <h2 className="text-2xl font-bold mb-6">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {[
            { action: "Pesanan baru dari Satria Aulya Ramadhan", time: "2 jam lalu" },
            { action: "Stok RTX 4090 diperbarui", time: "4 jam lalu" },
            { action: "Pesanan #MDK-12345 dikirim", time: "6 jam lalu" },
            { action: "Produk Gaming PC Pro ditambahkan", time: "1 hari lalu" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
              <p className="text-foreground-secondary">{activity.action}</p>
              <p className="text-sm text-foreground-secondary">{activity.time}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
