"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminSidebar from "@/components/admin-sidebar"
import AdminProducts from "@/components/admin-products"
import AdminOrders from "@/components/admin-orders"
import AdminAnalytics from "@/components/admin-analytics"

type AdminTab = "dashboard" | "products" | "orders"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "products" && "Kelola Produk"}
              {activeTab === "orders" && "Pesanan"}
            </h1>
            <p className="text-foreground-secondary">Kelola toko online MDK HARDWARE Anda</p>
          </motion.div>

          {/* Content */}
          {activeTab === "dashboard" && <AdminAnalytics />}
          {activeTab === "products" && <AdminProducts />}
          {activeTab === "orders" && <AdminOrders />}
        </div>
      </div>
    </div>
  )
}
