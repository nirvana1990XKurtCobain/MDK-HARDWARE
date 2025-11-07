"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface Category {
  id: string
  name: string
}

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    sort: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Sort */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card-base"
      >
        <button
          onClick={() => toggleSection("sort")}
          className="w-full flex justify-between items-center font-semibold mb-4"
        >
          Urutkan
          <ChevronDown size={20} className={`transition-transform ${expandedSections.sort ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.sort && (
          <div className="space-y-2">
            {[
              { value: "newest", label: "Terbaru" },
              { value: "price-low", label: "Harga Terendah" },
              { value: "price-high", label: "Harga Tertinggi" },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  checked={sortBy === option.value}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </motion.div>

      {/* Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="card-base"
      >
        <button
          onClick={() => toggleSection("category")}
          className="w-full flex justify-between items-center font-semibold mb-4"
        >
          Kategori
          <ChevronDown size={20} className={`transition-transform ${expandedSections.category ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === "all"}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 accent-accent"
              />
              <span className="text-sm">Semua Kategori</span>
            </label>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-sm">{category.name}</span>
              </label>
            ))}
          </div>
        )}
      </motion.div>

      {/* Price Range */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="card-base"
      >
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex justify-between items-center font-semibold mb-4"
        >
          Harga
          <ChevronDown size={20} className={`transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-foreground-secondary mb-2 block">
                Min: Rp {priceRange[0].toLocaleString("id-ID")}
              </label>
              <input
                type="range"
                min="0"
                max="30000000"
                step="1000000"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                className="w-full accent-accent"
              />
            </div>
            <div>
              <label className="text-sm text-foreground-secondary mb-2 block">
                Max: Rp {priceRange[1].toLocaleString("id-ID")}
              </label>
              <input
                type="range"
                min="0"
                max="30000000"
                step="1000000"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-accent"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
