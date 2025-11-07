"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import products from "@/data/products.json"

export default function AdminProducts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const filteredProducts = products.products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-4 items-center justify-between"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-secondary" size={20} />
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
          }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Produk
        </button>
      </motion.div>

      {/* Add/Edit Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-base"
        >
          <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit Produk" : "Tambah Produk Baru"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama Produk"
              className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
            />
            <input
              type="number"
              placeholder="Harga"
              className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
            />
            <input
              type="number"
              placeholder="Stok"
              className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
            />
            <select className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent">
              <option>Pilih Kategori</option>
              {products.categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="Deskripsi Produk"
            className="w-full mt-4 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
            rows={4}
          />
          <div className="flex gap-4 mt-6">
            <button className="btn-primary flex-1">Simpan Produk</button>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
              }}
              className="btn-secondary flex-1"
            >
              Batal
            </button>
          </div>
        </motion.div>
      )}

      {/* Products Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="card-base overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold">Produk</th>
              <th className="text-left py-4 px-4 font-semibold">Kategori</th>
              <th className="text-left py-4 px-4 font-semibold">Harga</th>
              <th className="text-left py-4 px-4 font-semibold">Stok</th>
              <th className="text-left py-4 px-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-border hover:bg-background-secondary transition-colors">
                <td className="py-4 px-4">
                  <p className="font-semibold">{product.name}</p>
                </td>
                <td className="py-4 px-4 text-foreground-secondary">{product.category}</td>
                <td className="py-4 px-4 font-semibold">Rp {product.price.toLocaleString("id-ID")}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.stock > 5
                        ? "bg-success/10 text-success"
                        : product.stock > 0
                          ? "bg-warning/10 text-warning"
                          : "bg-error/10 text-error"
                    }`}
                  >
                    {product.stock} unit
                  </span>
                </td>
                <td className="py-4 px-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(product.id)
                      setShowForm(true)
                    }}
                    className="p-2 hover:bg-background rounded-lg transition-colors text-accent"
                  >
                    <Edit size={18} />
                  </button>
                  <button className="p-2 hover:bg-background rounded-lg transition-colors text-error">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
