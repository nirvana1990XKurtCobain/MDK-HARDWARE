"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Contact form submitted:", formData)
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami. Kami akan merespons segera.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hubungi <span className="gradient-text">Kami</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Ada pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {[
            {
              icon: Phone,
              title: "Telepon",
              content: "+62 823-1864-6610",
              description: "Hubungi kami via WhatsApp",
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@mdkhardware.com",
              description: "Kirim email untuk pertanyaan umum",
            },
            {
              icon: MapPin,
              title: "Lokasi",
              content: "Bandung, Indonesia",
              description: "Kunjungi showroom kami",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-base text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg font-semibold gradient-text mb-2">{item.content}</p>
                <p className="text-foreground-secondary">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto card-base"
        >
          <h2 className="text-3xl font-bold mb-8">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subjek</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                placeholder="Subjek pesan"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                placeholder="Tulis pesan Anda di sini..."
                rows={6}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
