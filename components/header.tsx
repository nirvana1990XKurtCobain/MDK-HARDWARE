"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { getTotalItems } = useCart()
  const cartItems = getTotalItems()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/products", label: "Produk" },
    { href: "/about", label: "Tentang" },
    { href: "/contact", label: "Kontak" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* 🧠 Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-mdk.png"
            alt="Logo MDK Hardware"
            width={42}
            height={42}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-xl hidden sm:inline tracking-wide">
            MDK HARDWARE
          </span>
        </Link>

        {/* 🌐 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground-secondary hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 🛒 Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 hover:bg-background-secondary rounded-lg transition-colors duration-300"
          >
            <ShoppingCart size={20} />
            {cartItems > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-background-secondary rounded-lg transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-background-secondary rounded-lg transition-colors duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background-secondary border-t border-border">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-secondary hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
