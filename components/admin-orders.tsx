"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, CheckCircle, Clock, Truck } from "lucide-react"

const mockOrders = [
  {
    id: "MDK-001",
    customer: "Budi Santoso",
    total: 15999000,
    status: "pending",
    date: "2024-10-20",
    items: 3,
  },
  {
    id: "MDK-002",
    customer: "Siti Nurhaliza",
    total: 8999000,
    status: "processing",
    date: "2024-10-19",
    items: 1,
  },
  {
    id: "MDK-003",
    customer: "Ahmad Wijaya",
    total: 24999000,
    status: "shipped",
    date: "2024-10-18",
    items: 2,
  },
  {
    id: "MDK-004",
    customer: "Rina Kusuma",
    total: 5999000,
    status: "delivered",
    date: "2024-10-17",
    items: 1,
  },
]

const statusConfig = {
  pending: { label: "Menunggu", icon: Clock, color: "text-warning" },
  processing: { label: "Diproses", icon: Clock, color: "text-blue-500" },
  shipped: { label: "Dikirim", icon: Truck, color: "text-accent" },
  delivered: { label: "Terkirim", icon: CheckCircle, color: "text-success" },
}

export default function AdminOrders() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card-base overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold">No. Pesanan</th>
              <th className="text-left py-4 px-4 font-semibold">Pelanggan</th>
              <th className="text-left py-4 px-4 font-semibold">Total</th>
              <th className="text-left py-4 px-4 font-semibold">Status</th>
              <th className="text-left py-4 px-4 font-semibold">Tanggal</th>
              <th className="text-left py-4 px-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => {
              const statusInfo = statusConfig[order.status as keyof typeof statusConfig]
              const StatusIcon = statusInfo.icon
              return (
                <tr key={order.id} className="border-b border-border hover:bg-background-secondary transition-colors">
                  <td className="py-4 px-4 font-semibold">{order.id}</td>
                  <td className="py-4 px-4">{order.customer}</td>
                  <td className="py-4 px-4 font-semibold">Rp {order.total.toLocaleString("id-ID")}</td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center gap-2 ${statusInfo.color}`}>
                      <StatusIcon size={18} />
                      <span className="font-semibold">{statusInfo.label}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-foreground-secondary">{order.date}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => setSelectedOrder(order.id)}
                      className="p-2 hover:bg-background rounded-lg transition-colors text-accent"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </motion.div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="card-base max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6">Detail Pesanan</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-foreground-secondary text-sm">No. Pesanan</p>
                <p className="font-semibold">{selectedOrder}</p>
              </div>
              <div>
                <p className="text-foreground-secondary text-sm">Pelanggan</p>
                <p className="font-semibold">{mockOrders.find((o) => o.id === selectedOrder)?.customer}</p>
              </div>
              <div>
                <p className="text-foreground-secondary text-sm">Total</p>
                <p className="text-2xl font-bold gradient-text">
                  Rp {mockOrders.find((o) => o.id === selectedOrder)?.total.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
            <button onClick={() => setSelectedOrder(null)} className="btn-secondary w-full">
              Tutup
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
