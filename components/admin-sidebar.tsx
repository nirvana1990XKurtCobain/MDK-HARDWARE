"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { LayoutDashboard, Package, ShoppingBag, LogOut } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isOpen: boolean
}

export default function AdminSidebar({ activeTab, onTabChange, isOpen }: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Produk", icon: Package },
    { id: "orders", label: "Pesanan", icon: ShoppingBag },
  ]

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-background-secondary border-r border-border p-6 flex flex-col"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center text-white text-sm font-bold">
          MDK
        </div>
        <span>Admin</span>
      </Link>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-accent text-white"
                  : "text-foreground-secondary hover:bg-background transition-colors"
              }`}
            >
              <Icon size={20} />
              <span className="font-semibold">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Logout */}
      <Link
        href="/"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground-secondary hover:bg-background transition-colors"
      >
        <LogOut size={20} />
        <span className="font-semibold">Keluar</span>
      </Link>
    </motion.div>
  )
}
