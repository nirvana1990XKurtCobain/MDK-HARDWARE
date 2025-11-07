"use client"

import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function ToastProvider() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`card-base flex items-start gap-4 max-w-sm ${
              toast.type === "error"
                ? "border-error/50 bg-error/5"
                : toast.type === "success"
                  ? "border-success/50 bg-success/5"
                  : "border-accent/50 bg-accent/5"
            }`}
          >
            <div className="flex-1">
              <p className="font-semibold">{toast.title}</p>
              {toast.description && <p className="text-sm text-foreground-secondary mt-1">{toast.description}</p>}
            </div>
            <button className="p-1 hover:bg-background rounded transition-colors flex-shrink-0">
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
