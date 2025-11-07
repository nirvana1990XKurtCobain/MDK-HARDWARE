"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  specs: string | Record<string, string>
  stock: number
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Berhasil",
      description: `${product.name} ditambahkan ke keranjang`,
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Dihapus dari wishlist" : "Ditambahkan ke wishlist",
      description: product.name,
    })
  }

  return (
    <motion.div whileHover={{ y: -8 }} className="card-base group overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-background">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Stock Badge */}
        {product.stock < 5 && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-warning text-white text-xs font-semibold rounded-full">
            Stok Terbatas
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <p className="text-xs text-accent font-semibold mb-2">{product.category}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        {typeof product.specs === "string" && (
          <p className="text-sm text-foreground-secondary mb-3 line-clamp-2">{product.specs}</p>
        )}

        {/* Price and Button */}
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-border">
          <span className="text-lg font-bold gradient-text">Rp {product.price.toLocaleString("id-ID")}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="p-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
