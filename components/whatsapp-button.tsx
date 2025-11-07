"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [showChat, setShowChat] = useState(false)
  const phoneNumber = "6282318646610"
  const defaultMessage = "Halo, saya ingin menanyakan produk dari MDK HARDWARE. Apakah masih tersedia?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setShowChat(false)
  }

  return (
    <>
      {/* Chat Popup */}
      {showChat && (
        <div className="fixed bottom-24 right-6 bg-background-secondary border border-border rounded-xl p-4 w-80 shadow-lg z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">MDK HARDWARE</h3>
            <button onClick={() => setShowChat(false)} className="p-1 hover:bg-border rounded-lg transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-foreground-secondary mb-4">Halo! Ada yang bisa kami bantu hari ini?</p>
          <button onClick={handleWhatsAppClick} className="w-full btn-primary text-sm">
            Chat via WhatsApp
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent hover:bg-accent-hover text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </>
  )
}
